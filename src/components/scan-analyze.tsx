import { useState, useEffect } from 'react';
import { X, Zap, ZapOff, Home, ScanLine, BarChart3, Camera, Grid3x3, Info, Maximize2 } from 'lucide-react';
import { motion } from 'motion/react';
import type { Screen } from '../App';

interface ScanAnalyzeProps {
  onNavigate: (screen: Screen) => void;
  onScanComplete: (score: number) => void;
}

interface CheckItem {
  label: string;
  status: 'pending' | 'checking' | 'complete';
  detail: string;
}

export function ScanAnalyze({ onNavigate, onScanComplete }: ScanAnalyzeProps) {
  const [isScanning, setIsScanning] = useState(false);
  const [flashOn, setFlashOn] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showGrid, setShowGrid] = useState(true);

  const [showScanChoice, setShowScanChoice] = useState(false);
  const [finalScore, setFinalScore] = useState<number | null>(null);

  const [checks, setChecks] = useState<CheckItem[]>([
    { label: 'Edge Seal', status: 'pending', detail: 'Checking seal integrity' },
    { label: 'Symmetry', status: 'pending', detail: 'Analyzing alignment' },
    { label: 'Contamination', status: 'pending', detail: 'Scanning for defects' },
    { label: 'Size Accuracy', status: 'pending', detail: 'Measuring dimensions' },
  ]);

  useEffect(() => {
    if (isScanning) {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              const score = Math.floor(Math.random() * 20) + 80;
              setFinalScore(score);
              setShowScanChoice(true);
              setIsScanning(false);
            }, 500);
            return 100;
          }
          return prev + 2;
        });
      }, 100);

      return () => clearInterval(interval);
    }
  }, [isScanning]);

  useEffect(() => {
    if (isScanning) {
      const checkIndex = Math.floor(progress / 25);
      setChecks(prev =>
        prev.map((check, idx) => {
          if (idx < checkIndex) return { ...check, status: 'complete' };
          if (idx === checkIndex) return { ...check, status: 'checking' };
          return check;
        })
      );
    }
  }, [progress, isScanning]);

  const handleScan = () => {
    setChecks(checks.map(c => ({ ...c, status: 'pending' })));
    setProgress(0);
    setIsScanning(true);
  };

  const handleNewScan = () => {
    if (finalScore !== null) {
      onScanComplete(finalScore);
      setShowScanChoice(false);
    }
  };

  const handleUpdateScan = () => {
    if (finalScore !== null) {
      onScanComplete(finalScore);
      setShowScanChoice(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-gradient-to-b from-[#F5F3FA] to-white flex flex-col"
    >
      {/* Header */}
      <div className="bg-gradient-to-br from-[#4FA6A7] via-[#5AB5B6] to-[#4FA6A7] px-6 py-6 rounded-b-[35px] shadow-xl">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-white text-xl">Quality Scan</h2>
            <p className="text-white/80 text-sm">AI-Powered Inspection</p>
          </div>
          <button
            onClick={() => onNavigate('home')}
            className="w-11 h-11 bg-white/20 rounded-2xl flex items-center justify-center"
          >
            <X className="text-white" />
          </button>
        </div>
      </div>

      {/* Camera */}
      <div className="flex-1 px-6 py-6">
        <div className="relative bg-black rounded-[35px] h-[520px] overflow-hidden border-4 border-[#E8E0F5]">
          {showGrid && (
            <div className="absolute inset-0 opacity-20">
              <svg className="w-full h-full">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M40 0L0 0 0 40" stroke="white" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
          )}

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[260px] h-[420px] border-4 border-dashed border-white/50 rounded-[40px] flex items-center justify-center">
              {!isScanning && (
                <div className="text-center text-white/80">
                  <Maximize2 className="mx-auto mb-2" />
                  Align Pad Here for Scanning
                </div>
              )}
            </div>
          </div>

          {isScanning && (
            <div className="absolute bottom-6 left-6 right-6 bg-black/70 rounded-3xl p-4 text-white">
              <div className="flex justify-between mb-3">
                <span>Analyzing...</span>
                <span>{progress}%</span>
              </div>

              {checks.map((check, i) => (
                <div key={i} className="flex items-center gap-3 mb-2">
                  <div className={`w-3 h-3 rounded-full ${
                    check.status === 'complete' ? 'bg-green-400' :
                    check.status === 'checking' ? 'bg-yellow-400' : 'bg-gray-400'
                  }`} />
                  <span className="text-sm">{check.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {!isScanning && (
        <div className="px-6 pb-6">
          <button
            onClick={handleScan}
            className="w-full bg-gradient-to-r from-[#4FA6A7] to-[#3D8B8C] text-white py-6 rounded-[28px] flex items-center justify-center gap-2"
          >
            <ScanLine />
            Start Scanning
          </button>
        </div>
      )}

      {/* Scan Choice Modal */}
      {showScanChoice && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-[28px] p-6 w-[90%] max-w-sm">
            <h3 className="text-lg font-semibold mb-2">Scan Completed ✅</h3>
            <p className="text-sm text-gray-600 mb-5">
              Save this scan as a new sample or update an existing one?
            </p>

            <div className="flex flex-col gap-4">
              <button
                onClick={handleNewScan}
                className="py-4 rounded-2xl bg-gradient-to-r from-[#4FA6A7] to-[#3D8B8C] text-white"
              >
                ➕ Save as New Sample
              </button>

              <button
                onClick={handleUpdateScan}
                className="py-4 rounded-2xl border border-[#4FA6A7] text-[#4FA6A7]"
              >
                🔄 Update Existing Sample
              </button>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}
