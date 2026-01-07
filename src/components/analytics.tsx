import { ArrowLeft, TrendingUp, BarChart3, PieChart, Calendar, Award } from 'lucide-react';
import { motion } from 'motion/react';
import { BarChart, Bar, LineChart, Line, PieChart as RePieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import type { Screen } from '../App';

interface AnalyticsProps {
  onNavigate: (screen: Screen) => void;
}

export function Analytics({ onNavigate }: AnalyticsProps) {
  const weeklyData = [
    { day: 'Mon', passed: 285, failed: 35, total: 320 },
    { day: 'Tue', passed: 295, failed: 28, total: 323 },
    { day: 'Wed', passed: 278, failed: 42, total: 320 },
    { day: 'Thu', passed: 302, failed: 18, total: 320 },
    { day: 'Fri', passed: 290, failed: 30, total: 320 },
    { day: 'Sat', passed: 310, failed: 15, total: 325 },
    { day: 'Sun', passed: 288, failed: 27, total: 335 }
  ];

  const defectTypes = [
    { name: 'Edge Seal', value: 35, color: '#E53935' },
    { name: 'Symmetry', value: 25, color: '#FFB300' },
    { name: 'Contamination', value: 20, color: '#FF6F00' },
    { name: 'Size', value: 15, color: '#9B88C9' },
    { name: 'Other', value: 5, color: '#666666' }
  ];

  const inspectorPerformance = [
    { name: 'Priya Sharma', batches: 45, passRate: 92, score: 4.8 },
    { name: 'Meera Devi', batches: 38, passRate: 89, score: 4.5 },
    { name: 'Anjali Verma', batches: 42, passRate: 94, score: 4.9 },
    { name: 'Sunita Bai', batches: 35, passRate: 87, score: 4.3 }
  ];

  const monthlyTrend = [
    { month: 'Jul', rate: 85 },
    { month: 'Aug', rate: 87 },
    { month: 'Sep', rate: 89 },
    { month: 'Oct', rate: 88 },
    { month: 'Nov', rate: 90 },
    { month: 'Dec', rate: 92 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5F3FA] to-white pb-6">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#FFB300] via-[#FF9800] to-[#F57C00] px-6 py-6 rounded-b-[35px] shadow-xl mb-6">
        <div className="flex items-center gap-3 mb-6">
          <button 
            onClick={() => onNavigate('home')}
            className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <div className="flex-1">
            <h2 className="text-white text-xl">Analytics Dashboard</h2>
            <p className="text-white/90 text-sm">Khandwa Village Production</p>
          </div>
          <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
            <Calendar className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white/15 backdrop-blur-md rounded-[18px] p-3 text-center">
            <p className="text-white/80 text-xs mb-1">Avg Pass Rate</p>
            <p className="text-white text-2xl">90.6%</p>
            <p className="text-white/90 text-xs">+2.3%</p>
          </div>
          <div className="bg-white/15 backdrop-blur-md rounded-[18px] p-3 text-center">
            <p className="text-white/80 text-xs mb-1">Total Pads</p>
            <p className="text-white text-2xl">2.2K</p>
            <p className="text-white/90 text-xs">This week</p>
          </div>
          <div className="bg-white/15 backdrop-blur-md rounded-[18px] p-3 text-center">
            <p className="text-white/80 text-xs mb-1">Efficiency</p>
            <p className="text-white text-2xl">94%</p>
            <p className="text-white/90 text-xs">+5.1%</p>
          </div>
        </div>
      </div>

      {/* Weekly Production Chart */}
      <div className="px-6 mb-6">
        <div className="bg-white rounded-[25px] shadow-xl p-5 border border-[#E8E0F5]">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[#333333]">Weekly Production</h3>
            <div className="flex items-center gap-1 text-[#4CAF50] text-sm">
              <TrendingUp className="w-4 h-4" />
              <span>+8.5%</span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E8E0F5" />
              <XAxis dataKey="day" tick={{ fill: '#666666', fontSize: 12 }} />
              <YAxis tick={{ fill: '#666666', fontSize: 12 }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #E8E0F5',
                  borderRadius: '12px',
                  fontSize: '12px'
                }}
              />
              <Bar dataKey="passed" fill="#4CAF50" radius={[8, 8, 0, 0]} />
              <Bar dataKey="failed" fill="#E53935" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <div className="flex items-center justify-center gap-6 mt-3">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#4CAF50] rounded"></div>
              <span className="text-xs text-[#666666]">Passed</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#E53935] rounded"></div>
              <span className="text-xs text-[#666666]">Failed</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quality Trend */}
      <div className="px-6 mb-6">
        <div className="bg-white rounded-[25px] shadow-xl p-5 border border-[#E8E0F5]">
          <h3 className="text-[#333333] mb-4">6-Month Quality Trend</h3>
          <ResponsiveContainer width="100%" height={180}>
            <LineChart data={monthlyTrend}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E8E0F5" />
              <XAxis dataKey="month" tick={{ fill: '#666666', fontSize: 12 }} />
              <YAxis domain={[80, 95]} tick={{ fill: '#666666', fontSize: 12 }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #E8E0F5',
                  borderRadius: '12px',
                  fontSize: '12px'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="rate" 
                stroke="#4FA6A7" 
                strokeWidth={3}
                dot={{ fill: '#4FA6A7', r: 5 }}
                activeDot={{ r: 7 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Defect Analysis */}
      <div className="px-6 mb-6">
        <div className="bg-white rounded-[25px] shadow-xl p-5 border border-[#E8E0F5]">
          <h3 className="text-[#333333] mb-4">Defect Distribution</h3>
          <div className="flex items-center justify-center mb-4">
            <ResponsiveContainer width="100%" height={200}>
              <RePieChart>
                <Pie
                  data={defectTypes}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {defectTypes.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </RePieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-2">
            {defectTypes.map((defect, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: defect.color }}
                  ></div>
                  <span className="text-sm text-[#666666]">{defect.name}</span>
                </div>
                <span className="text-sm text-[#333333]">{defect.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Inspector Performance */}
      <div className="px-6 mb-6">
        <div className="bg-white rounded-[25px] shadow-xl p-5 border border-[#E8E0F5]">
          <h3 className="text-[#333333] mb-4">Inspector Performance</h3>
          <div className="space-y-3">
            {inspectorPerformance.map((inspector, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#F5F3FA] rounded-[18px] p-4"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#C7B8EA] to-[#9B88C9] rounded-full flex items-center justify-center">
                      <span className="text-white">{inspector.name.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="text-[#333333] text-sm">{inspector.name}</p>
                      <p className="text-[#666666] text-xs">{inspector.batches} batches</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 mb-1">
                      <Award className="w-4 h-4 text-[#FFB300]" />
                      <span className="text-[#333333]">{inspector.score}</span>
                    </div>
                    <p className="text-[#4CAF50] text-xs">{inspector.passRate}% pass</p>
                  </div>
                </div>
                <div className="h-2 bg-white rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-[#4FA6A7] to-[#4CAF50] rounded-full"
                    style={{ width: `${inspector.passRate}%` }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Insights */}
      <div className="px-6">
        <div className="bg-gradient-to-br from-[#E8F8E8] to-white rounded-[25px] p-5 border-2 border-[#4CAF50]/30">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-[#4CAF50] rounded-xl flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="text-[#333333] mb-2">Key Insights</h4>
              <ul className="space-y-2">
                <li className="text-sm text-[#666666] flex items-start gap-2">
                  <span className="text-[#4CAF50] mt-1">•</span>
                  <span>Quality has improved by 7% this month</span>
                </li>
                <li className="text-sm text-[#666666] flex items-start gap-2">
                  <span className="text-[#4CAF50] mt-1">•</span>
                  <span>Edge seal defects decreased by 15%</span>
                </li>
                <li className="text-sm text-[#666666] flex items-start gap-2">
                  <span className="text-[#4CAF50] mt-1">•</span>
                  <span>Weekend production shows highest quality</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
