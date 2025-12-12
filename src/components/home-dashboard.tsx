import { Box, CheckCircle, Clock, Play, FileText, Home, ScanLine, BarChart3, Leaf, TrendingUp, AlertCircle, Award, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Screen } from '../App';

interface HomeDashboardProps {
  onNavigate: (screen: Screen) => void;
  userName?: string;
}

export function HomeDashboard({ onNavigate, userName }: HomeDashboardProps) {
  const currentDate = new Date().toLocaleDateString('en-IN', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-gradient-to-b from-[#F5F3FA] to-white flex flex-col"
    >
      {/* Header */}
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, type: 'spring', stiffness: 100 }}
        className="bg-gradient-to-br from-[#8B7AB8] via-[#9B88C9] to-[#4FA6A7] px-6 py-8 rounded-b-[35px] shadow-lg"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <motion.div 
              layoutId="app-logo"
              className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-md"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Leaf className="w-7 h-7 text-[#4FA6A7]" />
            </motion.div>
            <div>
              <h1 className="text-white">SWASHAKTI</h1>
              <p className="text-white/90 text-sm">Quality Assurance System</p>
            </div>
          </div>
          <motion.div 
            className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Award className="w-5 h-5 text-white" />
          </motion.div>
        </div>
        {userName && (
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/90 text-sm mb-2"
          >
            Welcome back, {userName}!
          </motion.p>
        )}
        <p className="text-white/80 text-xs mt-2">{currentDate}</p>
      </motion.div>

      {/* Quick Stats Summary */}
      <div className="px-6 -mt-6 mb-4">
        <motion.div 
          initial={{ y: 50, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, type: 'spring' }}
          className="bg-white rounded-[25px] p-5 shadow-xl border border-[#E8E0F5]"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-[#333333]">Today's Performance</h3>
            <motion.div 
              className="flex items-center gap-1 text-[#4CAF50]"
              animate={{ y: [0, -2, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm">+12%</span>
            </motion.div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#666666] text-xs mb-1">Pass Rate</p>
              <motion.p 
                className="text-2xl text-[#4FA6A7]"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4, type: 'spring' }}
              >
                90.6%
              </motion.p>
            </div>
            <div className="w-20 h-20">
              <svg className="w-20 h-20 -rotate-90">
                <circle
                  cx="40"
                  cy="40"
                  r="35"
                  stroke="#F5F3FA"
                  strokeWidth="8"
                  fill="none"
                />
                <motion.circle
                  cx="40"
                  cy="40"
                  r="35"
                  stroke="#4FA6A7"
                  strokeWidth="8"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray="220"
                  initial={{ strokeDashoffset: 220 }}
                  animate={{ strokeDashoffset: 21 }}
                  transition={{ delay: 0.5, duration: 1.5, ease: 'easeOut' }}
                />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stats Cards */}
      <div className="px-6 mb-6">
        <h3 className="text-[#333333] mb-3 text-sm">Production Overview</h3>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-br from-[#E8F5F5] to-white rounded-[20px] p-5 shadow-md border border-[#D0EBEB]"
          >
            <motion.div 
              className="w-10 h-10 bg-[#4FA6A7] rounded-xl flex items-center justify-center mb-3 shadow-sm"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Box className="w-6 h-6 text-white" />
            </motion.div>
            <p className="text-[#666666] text-xs mb-1">Produced</p>
            <p className="text-[#333333] text-2xl mb-1">320</p>
            <p className="text-[#4FA6A7] text-xs">+45 from yesterday</p>
          </motion.div>

          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.35 }}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-br from-[#E8F8E8] to-white rounded-[20px] p-5 shadow-md border border-[#D0EBD0]"
          >
            <motion.div 
              className="w-10 h-10 bg-[#4CAF50] rounded-xl flex items-center justify-center mb-3 shadow-sm"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <CheckCircle className="w-6 h-6 text-white" />
            </motion.div>
            <p className="text-[#666666] text-xs mb-1">Passed</p>
            <p className="text-[#333333] text-2xl mb-1">290</p>
            <p className="text-[#4CAF50] text-xs">90.6% quality rate</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-br from-[#FFF8E8] to-white rounded-[20px] p-5 shadow-md border border-[#FFEBD0]"
          >
            <motion.div 
              className="w-10 h-10 bg-[#FFB300] rounded-xl flex items-center justify-center mb-3 shadow-sm"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Clock className="w-6 h-6 text-white" />
            </motion.div>
            <p className="text-[#666666] text-xs mb-1">Pending QC</p>
            <p className="text-[#333333] text-2xl mb-1">30</p>
            <p className="text-[#FFB300] text-xs">Needs inspection</p>
          </motion.div>

          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.45 }}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-br from-[#FFE8E8] to-white rounded-[20px] p-5 shadow-md border border-[#FFD0D0]"
          >
            <motion.div 
              className="w-10 h-10 bg-[#E53935] rounded-xl flex items-center justify-center mb-3 shadow-sm"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <AlertCircle className="w-6 h-6 text-white" />
            </motion.div>
            <p className="text-[#666666] text-xs mb-1">Rejected</p>
            <p className="text-[#333333] text-2xl mb-1">12</p>
            <p className="text-[#E53935] text-xs">3.75% defect rate</p>
          </motion.div>
        </div>
      </div>

      {/* Main CTA Button */}
      <div className="px-6 mb-4">
        <motion.button 
          layoutId="scan-button"
          onClick={() => onNavigate('scan')}
          className="w-full bg-gradient-to-r from-[#4FA6A7] to-[#3D8B8C] text-white py-6 rounded-[28px] shadow-2xl flex items-center justify-center gap-3 relative overflow-hidden"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div 
            className="absolute inset-0 bg-white/10"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
          ></motion.div>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ScanLine className="w-7 h-7 relative z-10" />
          </motion.div>
          <span className="text-xl relative z-10">Start Quality Check</span>
        </motion.button>
      </div>

      {/* Quick Actions */}
      <div className="px-6 mb-6">
        <h3 className="text-[#333333] mb-3 text-sm">Quick Actions</h3>
        <div className="grid grid-cols-2 gap-3">
          <motion.button 
            layoutId="training-card"
            onClick={() => onNavigate('training')}
            className="bg-white border border-[#E8E0F5] text-[#333333] py-4 px-4 rounded-[20px] flex flex-col items-center gap-2 shadow-sm"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <motion.div 
              className="w-12 h-12 bg-gradient-to-br from-[#C7B8EA] to-[#B5A3D8] rounded-xl flex items-center justify-center"
              whileHover={{ rotate: 5 }}
            >
              <Play className="w-6 h-6 text-white" />
            </motion.div>
            <span className="text-sm">Training</span>
          </motion.button>
          <motion.button 
            layoutId="reports-card"
            onClick={() => onNavigate('reports')}
            className="bg-white border border-[#E8E0F5] text-[#333333] py-4 px-4 rounded-[20px] flex flex-col items-center gap-2 shadow-sm"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.65 }}
          >
            <motion.div 
              className="w-12 h-12 bg-gradient-to-br from-[#4FA6A7] to-[#3D8B8C] rounded-xl flex items-center justify-center"
              whileHover={{ rotate: 5 }}
            >
              <FileText className="w-6 h-6 text-white" />
            </motion.div>
            <span className="text-sm">Reports</span>
          </motion.button>
          <motion.button 
            layoutId="analytics-card"
            onClick={() => onNavigate('analytics')}
            className="bg-white border border-[#E8E0F5] text-[#333333] py-4 px-4 rounded-[20px] flex flex-col items-center gap-2 shadow-sm"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <motion.div 
              className="w-12 h-12 bg-gradient-to-br from-[#FFB300] to-[#E59C00] rounded-xl flex items-center justify-center"
              whileHover={{ rotate: 5 }}
            >
              <BarChart3 className="w-6 h-6 text-white" />
            </motion.div>
            <span className="text-sm">Analytics</span>
          </motion.button>
          <motion.button 
            layoutId="team-card"
            onClick={() => onNavigate('team')}
            className="bg-white border border-[#E8E0F5] text-[#333333] py-4 px-4 rounded-[20px] flex flex-col items-center gap-2 shadow-sm"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.75 }}
          >
            <motion.div 
              className="w-12 h-12 bg-gradient-to-br from-[#9B88C9] to-[#8977B7] rounded-xl flex items-center justify-center"
              whileHover={{ rotate: 5 }}
            >
              <Users className="w-6 h-6 text-white" />
            </motion.div>
            <span className="text-sm">Team</span>
          </motion.button>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="px-6 mb-8">
        <h3 className="text-[#333333] mb-3 text-sm">Recent Quality Checks</h3>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white rounded-[20px] p-4 shadow-md border border-[#E8E0F5] space-y-3"
        >
          {[
            { id: 2847, score: 94, time: '2 mins ago', passed: true },
            { id: 2846, score: 91, time: '8 mins ago', passed: true },
            { id: 2845, score: 67, time: '15 mins ago', passed: false }
          ].map((item, idx) => (
            <motion.div 
              key={item.id}
              className="flex items-center gap-3"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.85 + idx * 0.1 }}
              whileHover={{ x: 5 }}
            >
              <div className={`w-10 h-10 ${item.passed ? 'bg-[#E8F8E8]' : 'bg-[#FFF8E8]'} rounded-xl flex items-center justify-center`}>
                {item.passed ? (
                  <CheckCircle className="w-5 h-5 text-[#4CAF50]" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-[#FFB300]" />
                )}
              </div>
              <div className="flex-1">
                <p className="text-[#333333] text-sm">Batch #{item.id} - {item.passed ? 'Passed' : 'Reworked'}</p>
                <p className="text-[#666666] text-xs">Score: {item.score}/100 • {item.time}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Navigation */}
      <div className="mt-auto bg-white border-t border-[#E8E0F5] shadow-lg">
        <div className="flex items-center justify-around py-4 px-6">
          <motion.button 
            className="flex flex-col items-center gap-1"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-[#4FA6A7] to-[#3D8B8C] rounded-2xl flex items-center justify-center shadow-md">
              <Home className="w-6 h-6 text-white" />
            </div>
            <span className="text-xs text-[#4FA6A7]">Home</span>
          </motion.button>
          <motion.button 
            onClick={() => onNavigate('scan')}
            className="flex flex-col items-center gap-1"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="w-12 h-12 bg-[#F5F3FA] rounded-2xl flex items-center justify-center">
              <ScanLine className="w-6 h-6 text-[#666666]" />
            </div>
            <span className="text-xs text-[#666666]">Scan</span>
          </motion.button>
          <motion.button 
            className="flex flex-col items-center gap-1"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="w-12 h-12 bg-[#F5F3FA] rounded-2xl flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-[#666666]" />
            </div>
            <span className="text-xs text-[#666666]">Reports</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}