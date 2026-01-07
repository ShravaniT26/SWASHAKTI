import { ArrowLeft, FileText, Download, Calendar, TrendingUp, TrendingDown, Filter, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import type { Screen } from '../App';

interface ReportsProps {
  onNavigate: (screen: Screen) => void;
}

interface BatchReport {
  batchId: string;
  date: string;
  time: string;
  totalPads: number;
  passed: number;
  failed: number;
  passRate: number;
  inspector: string;
  trend: 'up' | 'down' | 'stable';
}

export function Reports({ onNavigate }: ReportsProps) {
  const reports: BatchReport[] = [
    {
      batchId: 'SW-2847',
      date: '12 Dec 2024',
      time: '10:30 AM',
      totalPads: 50,
      passed: 48,
      failed: 2,
      passRate: 96,
      inspector: 'Priya Sharma',
      trend: 'up'
    },
    {
      batchId: 'SW-2846',
      date: '12 Dec 2024',
      time: '11:15 AM',
      totalPads: 50,
      passed: 45,
      failed: 5,
      passRate: 90,
      inspector: 'Meera Devi',
      trend: 'stable'
    },
    {
      batchId: 'SW-2845',
      date: '12 Dec 2024',
      time: '10:00 AM',
      totalPads: 50,
      passed: 42,
      failed: 8,
      passRate: 84,
      inspector: 'Priya Sharma',
      trend: 'down'
    },
    {
      batchId: 'SW-2844',
      date: '11 Dec 2024',
      time: '04:45 PM',
      totalPads: 50,
      passed: 47,
      failed: 3,
      passRate: 94,
      inspector: 'Anjali Verma',
      trend: 'up'
    },
    {
      batchId: 'SW-2843',
      date: '11 Dec 2024',
      time: '03:30 PM',
      totalPads: 50,
      passed: 46,
      failed: 4,
      passRate: 92,
      inspector: 'Meera Devi',
      trend: 'up'
    },
    {
      batchId: 'SW-2842',
      date: '11 Dec 2024',
      time: '02:15 PM',
      totalPads: 50,
      passed: 44,
      failed: 6,
      passRate: 88,
      inspector: 'Priya Sharma',
      trend: 'down'
    }
  ];

  const todayStats = {
    totalBatches: 3,
    totalPads: 150,
    passed: 135,
    failed: 15,
    avgPassRate: 90
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5F3FA] to-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#4FA6A7] via-[#5AB5B6] to-[#4FA6A7] px-6 py-6 rounded-b-[35px] shadow-xl">
        <div className="flex items-center gap-3 mb-6">
          <button 
            onClick={() => onNavigate('home')}
            className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <div className="flex-1">
            <h2 className="text-white text-xl">Batch Reports</h2>
            <p className="text-white/90 text-sm">Khandwa Village, Madhya Pradesh</p>
          </div>
          <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
            <Filter className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Today's Summary */}
        <div className="bg-white/15 backdrop-blur-md rounded-[25px] p-5">
          <p className="text-white/90 text-sm mb-3">Today's Summary</p>
          <div className="grid grid-cols-3 gap-3">
            <div>
              <p className="text-white/80 text-xs mb-1">Batches</p>
              <p className="text-white text-2xl">{todayStats.totalBatches}</p>
            </div>
            <div>
              <p className="text-white/80 text-xs mb-1">Total Pads</p>
              <p className="text-white text-2xl">{todayStats.totalPads}</p>
            </div>
            <div>
              <p className="text-white/80 text-xs mb-1">Pass Rate</p>
              <p className="text-white text-2xl">{todayStats.avgPassRate}%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="px-6 py-4">
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white rounded-[20px] p-4 shadow-md border border-[#E8E0F5]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[#666666] text-sm">Passed</span>
              <div className="w-8 h-8 bg-[#E8F8E8] rounded-xl flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-[#4CAF50]" />
              </div>
            </div>
            <p className="text-[#333333] text-2xl">{todayStats.passed}</p>
            <p className="text-[#4CAF50] text-xs">90% success rate</p>
          </div>
          <div className="bg-white rounded-[20px] p-4 shadow-md border border-[#E8E0F5]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[#666666] text-sm">Failed</span>
              <div className="w-8 h-8 bg-[#FFE8E8] rounded-xl flex items-center justify-center">
                <TrendingDown className="w-4 h-4 text-[#E53935]" />
              </div>
            </div>
            <p className="text-[#333333] text-2xl">{todayStats.failed}</p>
            <p className="text-[#E53935] text-xs">10% defect rate</p>
          </div>
        </div>
      </div>

      {/* Date Filter */}
      <div className="px-6 pb-4">
        <div className="bg-white rounded-[20px] p-4 shadow-md border border-[#E8E0F5] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-[#4FA6A7]" />
            <span className="text-[#333333]">Last 7 Days</span>
          </div>
          <ChevronRight className="w-5 h-5 text-[#666666]" />
        </div>
      </div>

      {/* Reports List */}
      <div className="px-6 pb-6">
        <h3 className="text-[#333333] mb-3 text-sm">Recent Batches</h3>
        <div className="space-y-3">
          {reports.map((report, idx) => (
            <motion.div
              key={report.batchId}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-[25px] shadow-lg p-5 border border-[#E8E0F5]"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h4 className="text-[#333333] mb-1">Batch {report.batchId}</h4>
                  <p className="text-[#666666] text-xs">{report.date} • {report.time}</p>
                </div>
                <div className="flex items-center gap-2">
                  {report.trend === 'up' && (
                    <div className="w-8 h-8 bg-[#E8F8E8] rounded-xl flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-[#4CAF50]" />
                    </div>
                  )}
                  {report.trend === 'down' && (
                    <div className="w-8 h-8 bg-[#FFE8E8] rounded-xl flex items-center justify-center">
                      <TrendingDown className="w-4 h-4 text-[#E53935]" />
                    </div>
                  )}
                  <button className="w-8 h-8 bg-[#F5F3FA] rounded-xl flex items-center justify-center">
                    <Download className="w-4 h-4 text-[#4FA6A7]" />
                  </button>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 mb-3">
                <div className="bg-[#F5F3FA] rounded-[15px] p-3 text-center">
                  <p className="text-[#666666] text-xs mb-1">Total</p>
                  <p className="text-[#333333] text-lg">{report.totalPads}</p>
                </div>
                <div className="bg-[#E8F8E8] rounded-[15px] p-3 text-center">
                  <p className="text-[#666666] text-xs mb-1">Passed</p>
                  <p className="text-[#4CAF50] text-lg">{report.passed}</p>
                </div>
                <div className="bg-[#FFE8E8] rounded-[15px] p-3 text-center">
                  <p className="text-[#666666] text-xs mb-1">Failed</p>
                  <p className="text-[#E53935] text-lg">{report.failed}</p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-3">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-[#666666]">Pass Rate</span>
                  <span className="text-[#333333]">{report.passRate}%</span>
                </div>
                <div className="h-2 bg-[#F5F3FA] rounded-full overflow-hidden">
                  <div 
                    className="h-full rounded-full"
                    style={{ 
                      width: `${report.passRate}%`,
                      backgroundColor: report.passRate >= 90 ? '#4CAF50' : report.passRate >= 80 ? '#FFB300' : '#E53935'
                    }}
                  />
                </div>
              </div>

              {/* Inspector */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-gradient-to-br from-[#C7B8EA] to-[#9B88C9] rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">{report.inspector.charAt(0)}</span>
                  </div>
                  <span className="text-[#666666] text-xs">{report.inspector}</span>
                </div>
                <button className="text-[#4FA6A7] text-xs flex items-center gap-1">
                  View Details
                  <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Export Button */}
      <div className="px-6 pb-8">
        <button className="w-full bg-gradient-to-r from-[#4FA6A7] to-[#3D8B8C] text-white py-5 rounded-[25px] shadow-xl flex items-center justify-center gap-3 active:scale-95 transition-transform">
          <FileText className="w-5 h-5" />
          <span>Export Monthly Report</span>
        </button>
      </div>
    </div>
  );
}
