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
              const randomScore = Math.floor(Math.random() * 20) + 80; // 80-99
              onScanComplete(randomScore);
            }, 500);
            return 100;
          }
          return prev + 2;
        });
      }, 100);

      return () => clearInterval(interval);
    }
  }, [isScanning, onScanComplete]);

  useEffect(() => {
    if (isScanning) {
      const checkIndex = Math.floor(progress / 25);
      setChecks(prev => prev.map((check, idx) => {
        if (idx < checkIndex) return { ...check, status: 'complete' };
        if (idx === checkIndex) return { ...check, status: 'checking' };
        return check;
      }));
    }
  }, [progress, isScanning]);

  const handleScan = () => {
    setIsScanning(true);
    setProgress(0);
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
            <h2 className="text-white text-xl mb-1">Quality Scan</h2>
            <p className="text-white/90 text-sm">AI-Powered Inspection</p>
          </div>
          <button 
            onClick={() => onNavigate('home')}
            className="w-11 h-11 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center active:scale-95 transition-transform"
          >
            <X className="w-6 h-6 text-white" />
          </button>
        </div>
        
        {/* Instructions */}
        <div className="bg-white/15 backdrop-blur-md rounded-[20px] p-4 flex items-start gap-3">
          <div className="w-8 h-8 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
            <Info className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-white text-sm mb-1">Scanning Instructions</p>
            <p className="text-white/80 text-xs">Place pad on grid sheet. Ensure proper lighting. Align within the outline and tap scan button.</p>
          </div>
        </div>
      </div>

      {/* Camera Controls Bar */}
      <div className="px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Camera className="w-5 h-5 text-[#4FA6A7]" />
          <span className="text-sm text-[#333333]">Camera Active</span>
          <div className="w-2 h-2 bg-[#4CAF50] rounded-full animate-pulse"></div>
        </div>
        <button 
          onClick={() => setShowGrid(!showGrid)}
          className={`px-4 py-2 rounded-full text-sm flex items-center gap-2 transition-all ${
            showGrid ? 'bg-[#4FA6A7] text-white' : 'bg-[#F5F3FA] text-[#666666]'
          }`}
        >
          <Grid3x3 className="w-4 h-4" />
          Grid
        </button>
      </div>

      {/* Camera Frame */}
      <div className="flex-1 px-6 pb-4">
        <div className="relative bg-gray-900 rounded-[35px] overflow-hidden h-[520px] shadow-2xl border-4 border-[#E8E0F5]">
          {/* Simulated camera feed with pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800"></div>
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.05) 10px, rgba(255,255,255,.05) 20px)'
          }}></div>
          
          {/* Grid overlay */}
          {showGrid && (
            <div className="absolute inset-0 opacity-20">
              <svg className="w-full h-full">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
          )}
          
          {/* Pad outline guide */}
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <motion.div 
              className="relative w-full max-w-[280px] h-[420px] border-4 border-dashed rounded-[45px]"
              style={{
                borderColor: isScanning ? '#4FA6A7' : 'rgba(255,255,255,0.5)'
              }}
              animate={isScanning ? { 
                borderColor: ['#4FA6A7', '#5AB5B6', '#4FA6A7'],
                scale: [1, 1.02, 1]
              } : {}}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {/* Corner markers */}
              <div className="absolute -top-1 -left-1 w-8 h-8 border-t-4 border-l-4 border-white rounded-tl-xl"></div>
              <div className="absolute -top-1 -right-1 w-8 h-8 border-t-4 border-r-4 border-white rounded-tr-xl"></div>
              <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-4 border-l-4 border-white rounded-bl-xl"></div>
              <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-4 border-r-4 border-white rounded-br-xl"></div>
              
              {/* Center alignment help */}
              {!isScanning && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center px-6">
                    <Maximize2 className="w-10 h-10 text-white/70 mx-auto mb-3" />
                    <p className="text-white/90 text-sm mb-1">Align Pad Here</p>
                    <p className="text-white/60 text-xs">Center the pad within outline</p>
                  </div>
                </div>
              )}
            </motion.div>
          </div>

          {/* Camera controls overlay */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
            <div className="bg-black/40 backdrop-blur-md rounded-2xl px-4 py-2 flex items-center gap-2">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-white text-sm">REC</span>
            </div>
            
            <button 
              onClick={() => setFlashOn(!flashOn)}
              className="w-12 h-12 bg-black/40 backdrop-blur-md rounded-2xl flex items-center justify-center active:scale-95 transition-transform"
            >
              {flashOn ? (
                <Zap className="w-6 h-6 text-yellow-300 fill-yellow-300" />
              ) : (
                <ZapOff className="w-6 h-6 text-white" />
              )}
            </button>
          </div>

          {/* Scanning indicators */}
          {isScanning && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute bottom-28 left-4 right-4"
            >
              <div className="bg-black/70 backdrop-blur-xl rounded-[25px] p-5 border border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-white">Analyzing Quality...</span>
                  <span className="text-[#4FA6A7]">{progress}%</span>
                </div>
                
                {checks.map((check, idx) => (
                  <motion.div 
                    key={idx} 
                    className="flex items-center gap-3 mb-3 last:mb-0"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.2 }}
                  >
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all ${
                      check.status === 'complete' ? 'bg-[#4CAF50]' :
                      check.status === 'checking' ? 'bg-[#FFB300]' : 'bg-white/20'
                    }`}>
                      {check.status === 'complete' && (
                        <motion.svg
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-5 h-5 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </motion.svg>
                      )}
                      {check.status === 'checking' && (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                          className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                        />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="text-white text-sm">{check.label}</p>
                      {check.status === 'checking' && (
                        <p className="text-white/60 text-xs">{check.detail}</p>
                      )}
                    </div>
                    {check.status === 'complete' && (
                      <span className="text-[#4CAF50] text-sm">✓ Done</span>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Progress circle */}
          {isScanning && (
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute bottom-4 left-1/2 -translate-x-1/2"
            >
              <div className="relative w-24 h-24 bg-black/40 backdrop-blur-md rounded-full p-2">
                <svg className="w-20 h-20 -rotate-90">
                  <circle
                    cx="40"
                    cy="40"
                    r="36"
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="8"
                    fill="none"
                  />
                  <motion.circle
                    cx="40"
                    cy="40"
                    r="36"
                    stroke="#4FA6A7"
                    strokeWidth="8"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: progress / 100 }}
                    style={{ 
                      strokeDasharray: '226',
                      strokeDashoffset: 0
                    }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white">{progress}%</span>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Scan Button */}
      {!isScanning && (
        <div className="px-6 pb-6">
          <button 
            onClick={handleScan}
            className="w-full bg-gradient-to-r from-[#4FA6A7] to-[#3D8B8C] text-white py-6 rounded-[28px] shadow-2xl active:scale-95 transition-transform flex items-center justify-center gap-3"
          >
            <ScanLine className="w-6 h-6" />
            <span className="text-lg">Start Scanning</span>
          </button>
        </div>
      )}

      {/* Bottom Navigation */}
      <div className="bg-white border-t border-[#E8E0F5] shadow-lg">
        <div className="flex items-center justify-around py-4 px-6">
          <button 
            onClick={() => onNavigate('home')}
            className="flex flex-col items-center gap-1"
          >
            <div className="w-12 h-12 bg-[#F5F3FA] rounded-2xl flex items-center justify-center">
              <Home className="w-6 h-6 text-[#666666]" />
            </div>
            <span className="text-xs text-[#666666]">Home</span>
          </button>
          <button className="flex flex-col items-center gap-1">
            <div className="w-12 h-12 bg-gradient-to-br from-[#4FA6A7] to-[#3D8B8C] rounded-2xl flex items-center justify-center shadow-md">
              <ScanLine className="w-6 h-6 text-white" />
            </div>
            <span className="text-xs text-[#4FA6A7]">Scan</span>
          </button>
          <button className="flex flex-col items-center gap-1">
            <div className="w-12 h-12 bg-[#F5F3FA] rounded-2xl flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-[#666666]" />
            </div>
            <span className="text-xs text-[#666666]">Reports</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}