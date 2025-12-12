import { CheckCircle, AlertTriangle, XCircle, Ruler, Scissors, ChevronRight, Home, ScanLine, BarChart3, Download, Share2, Calendar, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import type { Screen } from '../App';

interface QualityResultProps {
  score: number;
  onNavigate: (screen: Screen) => void;
}

interface DiagnosticItem {
  icon: 'check' | 'warning' | 'error';
  label: string;
  value: string;
  metric?: string;
}

export function QualityResult({ score, onNavigate }: QualityResultProps) {
  const isPassed = score >= 80;
  const isWarning = score >= 60 && score < 80;
  
  const statusColor = isPassed ? '#4CAF50' : isWarning ? '#FFB300' : '#E53935';
  const statusBg = isPassed ? '#E8F8E8' : isWarning ? '#FFF8E8' : '#FFE8E8';
  const statusText = isPassed ? 'PASSED' : isWarning ? 'WARNING' : 'FAILED';
  const StatusIcon = isPassed ? CheckCircle : isWarning ? AlertTriangle : XCircle;

  const currentTime = new Date().toLocaleTimeString('en-IN', { 
    hour: '2-digit', 
    minute: '2-digit'
  });
  const currentDate = new Date().toLocaleDateString('en-IN', { 
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });

  const batchNumber = `SW-${Math.floor(Math.random() * 9000) + 1000}`;

  const diagnostics: DiagnosticItem[] = [
    { icon: 'check', label: 'Size Accuracy', value: 'Within tolerance', metric: '280mm × 80mm' },
    { icon: 'check', label: 'Edge Sealing', value: 'Excellent seal', metric: '100% integrity' },
    { icon: 'check', label: 'Wing Alignment', value: 'Perfectly aligned', metric: '±0.5mm variance' },
    { icon: 'check', label: 'Surface Quality', value: 'No contamination', metric: 'Clean surface' },
    { icon: 'check', label: 'Absorbency Layer', value: 'Uniform distribution', metric: 'Core centered' },
    ...(score < 95 ? [{ 
      icon: 'warning' as const, 
      label: 'Minor Adjustment', 
      value: 'Trim 2mm from left', 
      metric: 'Non-critical'
    }] : []),
    ...(score < 70 ? [{ 
      icon: 'error' as const, 
      label: 'Defect Detected', 
      value: 'Seal incomplete', 
      metric: 'Requires rework'
    }] : [])
  ];

  const getGrade = (score: number) => {
    if (score >= 95) return 'A+';
    if (score >= 90) return 'A';
    if (score >= 85) return 'B+';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    return 'D';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5F3FA] to-white flex flex-col">
      {/* Header with Score Badge */}
      <div 
        className="px-6 pt-12 pb-36 rounded-b-[45px] shadow-xl relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${statusColor}15 0%, ${statusColor}30 100%)`
        }}
      >
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-32 h-32 rounded-full" style={{ background: statusColor }}></div>
          <div className="absolute bottom-10 left-10 w-24 h-24 rounded-full" style={{ background: statusColor }}></div>
        </div>

        {/* Header info */}
        <div className="relative z-10 mb-6">
          <div className="flex items-center justify-between mb-2">
            <div>
              <p className="text-[#666666] text-sm">Batch Number</p>
              <p className="text-[#333333]">{batchNumber}</p>
            </div>
            <button 
              onClick={() => onNavigate('home')}
              className="w-10 h-10 bg-white/50 backdrop-blur-sm rounded-2xl flex items-center justify-center"
            >
              <XCircle className="w-5 h-5 text-[#666666]" />
            </button>
          </div>
          <div className="flex items-center gap-4 text-xs text-[#666666]">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{currentDate}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{currentTime}</span>
            </div>
          </div>
        </div>

        {/* Score Badge */}
        <motion.div 
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', duration: 0.8 }}
          className="relative z-10 flex flex-col items-center"
        >
          <div className="relative">
            <div 
              className="w-48 h-48 rounded-full flex flex-col items-center justify-center shadow-2xl bg-white border-8 relative"
              style={{ borderColor: statusColor }}
            >
              {/* Animated ring */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{ 
                  background: `conic-gradient(${statusColor} ${score * 3.6}deg, transparent ${score * 3.6}deg)`
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
              />
              
              <div className="relative z-10 flex flex-col items-center">
                <div className="text-6xl mb-2" style={{ color: statusColor }}>
                  {score}
                </div>
                <div className="text-gray-500 text-sm mb-1">/ 100</div>
                <div 
                  className="px-4 py-1 rounded-full text-xs"
                  style={{ backgroundColor: statusBg, color: statusColor }}
                >
                  Grade: {getGrade(score)}
                </div>
              </div>
            </div>

            {/* Particle effects */}
            {isPassed && (
              <>
                <motion.div
                  className="absolute top-0 left-0 w-3 h-3 rounded-full bg-[#4CAF50]"
                  animate={{ 
                    y: [-10, -30],
                    opacity: [1, 0],
                    scale: [1, 0.5]
                  }}
                  transition={{ repeat: Infinity, duration: 2, delay: 0 }}
                />
                <motion.div
                  className="absolute top-10 right-0 w-2 h-2 rounded-full bg-[#4CAF50]"
                  animate={{ 
                    y: [-10, -30],
                    opacity: [1, 0],
                    scale: [1, 0.5]
                  }}
                  transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
                />
              </>
            )}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 px-8 py-3 rounded-full flex items-center gap-3 shadow-xl"
            style={{ backgroundColor: statusColor }}
          >
            <StatusIcon className="w-6 h-6 text-white" />
            <span className="text-white text-lg">{statusText}</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Quality Breakdown */}
      <div className="flex-1 px-6 -mt-24 pb-6">
        {/* Overall Assessment Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[30px] shadow-2xl p-6 mb-6 border border-[#E8E0F5]"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[#333333]">Quality Assessment</h3>
            <div className="flex gap-2">
              <button className="w-9 h-9 bg-[#F5F3FA] rounded-xl flex items-center justify-center">
                <Share2 className="w-4 h-4 text-[#4FA6A7]" />
              </button>
              <button className="w-9 h-9 bg-[#F5F3FA] rounded-xl flex items-center justify-center">
                <Download className="w-4 h-4 text-[#4FA6A7]" />
              </button>
            </div>
          </div>

          {/* Score breakdown bars */}
          <div className="space-y-3 mb-4">
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-[#666666]">Overall Quality</span>
                <span className="text-[#333333]">{score}%</span>
              </div>
              <div className="h-2 bg-[#F5F3FA] rounded-full overflow-hidden">
                <motion.div 
                  className="h-full rounded-full"
                  style={{ backgroundColor: statusColor }}
                  initial={{ width: 0 }}
                  animate={{ width: `${score}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-[#666666]">Structural Integrity</span>
                <span className="text-[#333333]">{Math.min(score + 3, 100)}%</span>
              </div>
              <div className="h-2 bg-[#F5F3FA] rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-[#4FA6A7] rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min(score + 3, 100)}%` }}
                  transition={{ duration: 1, delay: 0.7 }}
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-[#666666]">Visual Quality</span>
                <span className="text-[#333333]">{Math.max(score - 2, 0)}%</span>
              </div>
              <div className="h-2 bg-[#F5F3FA] rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-[#9B88C9] rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.max(score - 2, 0)}%` }}
                  transition={{ duration: 1, delay: 0.9 }}
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Diagnostic Report */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-[30px] shadow-xl p-6 mb-6 border border-[#E8E0F5]"
        >
          <h3 className="text-[#333333] mb-4">Detailed Analysis</h3>
          
          <div className="space-y-2">
            {diagnostics.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + idx * 0.1 }}
                className="bg-[#F5F3FA] rounded-[18px] p-4"
              >
                <div className="flex items-start gap-3">
                  {item.icon === 'check' && (
                    <div className="w-9 h-9 bg-gradient-to-br from-[#4CAF50] to-[#45A049] rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                  )}
                  {item.icon === 'warning' && (
                    <div className="w-9 h-9 bg-gradient-to-br from-[#FFB300] to-[#FF9800] rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                      <AlertTriangle className="w-5 h-5 text-white" />
                    </div>
                  )}
                  {item.icon === 'error' && (
                    <div className="w-9 h-9 bg-gradient-to-br from-[#E53935] to-[#D32F2F] rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                      <XCircle className="w-5 h-5 text-white" />
                    </div>
                  )}
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <span className="text-[#333333] text-sm">{item.label}</span>
                      <span className="text-[#4FA6A7] text-xs">{item.value}</span>
                    </div>
                    {item.metric && (
                      <p className="text-[#666666] text-xs">{item.metric}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Action Buttons */}
        <div className="space-y-3 mb-6">
          {isPassed ? (
            <>
              <motion.button 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                onClick={() => onNavigate('home')}
                className="w-full bg-gradient-to-r from-[#4CAF50] to-[#45A049] text-white py-6 rounded-[28px] shadow-2xl flex items-center justify-center gap-3 active:scale-95 transition-transform relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/10"></div>
                <CheckCircle className="w-6 h-6 relative z-10" />
                <span className="text-lg relative z-10">Approve & Pack</span>
              </motion.button>
              <motion.button 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="w-full bg-white border-2 border-[#E8E0F5] text-[#333333] py-5 rounded-[25px] flex items-center justify-center gap-3 active:scale-95 transition-transform shadow-md"
              >
                <Scissors className="w-5 h-5 text-[#4FA6A7]" />
                <span className="text-lg">Minor Rework</span>
              </motion.button>
            </>
          ) : (
            <>
              <motion.button 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="w-full bg-gradient-to-r from-[#FFB300] to-[#FF9800] text-white py-6 rounded-[28px] shadow-2xl flex items-center justify-center gap-3 active:scale-95 transition-transform"
              >
                <Scissors className="w-6 h-6" />
                <span className="text-lg">Send for Rework</span>
              </motion.button>
              <motion.button 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                onClick={() => onNavigate('home')}
                className="w-full bg-white border-2 border-[#E8E0F5] text-[#333333] py-5 rounded-[25px] flex items-center justify-center gap-3 active:scale-95 transition-transform shadow-md"
              >
                <Home className="w-5 h-5 text-[#4FA6A7]" />
                <span className="text-lg">Back to Home</span>
              </motion.button>
            </>
          )}
        </div>

        {/* Additional Options */}
        <div className="flex gap-3 mb-6">
          <button className="flex-1 text-[#4FA6A7] py-3 bg-[#F5F3FA] rounded-[20px] flex items-center justify-center gap-2 text-sm active:scale-95 transition-transform">
            <span>View Details</span>
            <ChevronRight className="w-4 h-4" />
          </button>
          <button 
            onClick={() => onNavigate('scan')}
            className="flex-1 text-[#4FA6A7] py-3 bg-[#F5F3FA] rounded-[20px] flex items-center justify-center gap-2 text-sm active:scale-95 transition-transform"
          >
            <ScanLine className="w-4 h-4" />
            <span>Scan Next</span>
          </button>
        </div>
      </div>

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
          <button 
            onClick={() => onNavigate('scan')}
            className="flex flex-col items-center gap-1"
          >
            <div className="w-12 h-12 bg-[#F5F3FA] rounded-2xl flex items-center justify-center">
              <ScanLine className="w-6 h-6 text-[#666666]" />
            </div>
            <span className="text-xs text-[#666666]">Scan</span>
          </button>
          <button className="flex flex-col items-center gap-1">
            <div className="w-12 h-12 bg-[#F5F3FA] rounded-2xl flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-[#666666]" />
            </div>
            <span className="text-xs text-[#666666]">Reports</span>
          </button>
        </div>
      </div>
    </div>
  );
}