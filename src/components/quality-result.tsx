import {
  CheckCircle,
  AlertTriangle,
  XCircle,
  Ruler,
  Scissors,
  ChevronRight,
  Home,
  ScanLine,
  BarChart3,
  Download,
  Share2,
  Calendar,
  Clock,
} from 'lucide-react';
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

  /* 📞 HELPLINE CONFIG */
  const HELPLINE_NUMBER = '+911800123456'; // replace with real number

  const handleCallHelpline = () => {
    window.location.href = `tel:${HELPLINE_NUMBER}`;
  };

  const currentTime = new Date().toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
  });

  const currentDate = new Date().toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  const batchNumber = `SW-${Math.floor(Math.random() * 9000) + 1000}`;

  const diagnostics: DiagnosticItem[] = [
    { icon: 'check', label: 'Size Accuracy', value: 'Within tolerance', metric: '280mm × 80mm' },
    { icon: 'check', label: 'Edge Sealing', value: 'Excellent seal', metric: '100% integrity' },
    { icon: 'check', label: 'Wing Alignment', value: 'Perfectly aligned', metric: '±0.5mm variance' },
    { icon: 'check', label: 'Surface Quality', value: 'No contamination', metric: 'Clean surface' },
    ...(score < 95
      ? [{ icon: 'warning', label: 'Minor Adjustment', value: 'Trim 2mm from left', metric: 'Non-critical' }]
      : []),
    ...(score < 70
      ? [{ icon: 'error', label: 'Defect Detected', value: 'Seal incomplete', metric: 'Requires rework' }]
      : []),
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

      {/* HEADER */}
      <div className="px-6 pt-12 pb-36 rounded-b-[45px] shadow-xl relative">
        <div className="flex justify-between mb-4">
          <div>
            <p className="text-sm text-gray-500">Batch</p>
            <p>{batchNumber}</p>
          </div>
          <button onClick={() => onNavigate('home')}>
            <XCircle />
          </button>
        </div>

        <div className="text-center">
          <div
            className="w-44 h-44 mx-auto rounded-full border-8 flex flex-col items-center justify-center bg-white"
            style={{ borderColor: statusColor }}
          >
            <span className="text-6xl" style={{ color: statusColor }}>{score}</span>
            <span className="text-gray-500">/100</span>
            <span className="mt-2 px-3 py-1 rounded-full text-xs" style={{ background: statusBg }}>
              Grade: {getGrade(score)}
            </span>
          </div>

          <div className="mt-4 flex justify-center gap-2 items-center">
            <StatusIcon className="text-white" />
            <span className="text-lg font-semibold text-white">{statusText}</span>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="px-6 -mt-24 flex-1">

        {/* DIAGNOSTICS */}
        <div className="bg-white rounded-3xl shadow p-6 mb-6">
          <h3 className="mb-4">Detailed Analysis</h3>

          {diagnostics.map((item, i) => (
            <div key={i} className="bg-[#F5F3FA] rounded-xl p-4 mb-2 flex gap-3">
              {item.icon === 'check' && <CheckCircle className="text-green-500" />}
              {item.icon === 'warning' && <AlertTriangle className="text-yellow-500" />}
              {item.icon === 'error' && <XCircle className="text-red-500" />}
              <div>
                <p>{item.label}</p>
                <p className="text-sm text-gray-500">{item.metric}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ACTIONS */}
        {isPassed ? (
          <button
            onClick={() => onNavigate('home')}
            className="w-full bg-green-500 text-white py-5 rounded-2xl mb-3"
          >
            Approve & Pack
          </button>
        ) : (
          <>
            <button className="w-full bg-yellow-500 text-white py-5 rounded-2xl mb-3">
              Send for Rework
            </button>

            {/* 📞 CALL HELPLINE BUTTON */}
            <button
              onClick={handleCallHelpline}
              className="w-full bg-red-600 text-white py-5 rounded-2xl mb-3 flex items-center justify-center gap-2"
            >
              <AlertTriangle />
              Call Quality Helpline
            </button>
          </>
        )}

        <button
          onClick={() => onNavigate('scan')}
          className="w-full bg-[#F5F3FA] py-4 rounded-xl"
        >
          Scan Next
        </button>
      </div>

      {/* BOTTOM NAV */}
      <div className="bg-white border-t p-4 flex justify-around">
        <Home onClick={() => onNavigate('home')} />
        <ScanLine onClick={() => onNavigate('scan')} />
        <BarChart3 />
      </div>
    </div>
  );
}
