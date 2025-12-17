import { useState } from 'react';
import { Fingerprint, Eye, EyeOff, User, Lock, Leaf, Shield } from 'lucide-react';
import { motion } from 'motion/react';

interface LoginProps {
  onLogin: (name: string) => void;
}

export function Login({ onLogin }: LoginProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isFingerprint, setIsFingerprint] = useState(false);

  const handleFingerprint = () => {
    setIsFingerprint(true);
    // Simulate fingerprint scan
    setTimeout(() => {
      onLogin('Priya Sharma');
    }, 2000);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username && password) {
      onLogin(username);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#C7B8EA] via-[#9B88C9] to-[#4FA6A7] flex flex-col">
      {/* Top Decorative Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute top-40 left-10 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>

      {/* Header */}
      <div className="pt-16 pb-8 px-6 text-center relative z-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', duration: 0.8 }}
          className="w-24 h-24 bg-white rounded-[30px] mx-auto mb-6 flex items-center justify-center shadow-2xl"
        >
          <Leaf className="w-14 h-14 text-[#4FA6A7]" />
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white text-3xl mb-2"
        >
          SWASHAKTI
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-white/90"
        >
          Quality Assurance System
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-3 flex items-center justify-center gap-2 text-white/80 text-sm"
        >
          <Shield className="w-4 h-4" />
          <span>Secure Login</span>
        </motion.div>
      </div>

      {/* Login Card */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex-1 bg-white rounded-t-[40px] px-6 pt-8 pb-6 relative"
      >
        <h2 className="text-[#333333] text-center mb-2">Welcome Back!</h2>
        <p className="text-[#666666] text-center mb-8 text-sm">Login to continue quality checking</p>

        {!isFingerprint ? (
          <>
            {/* Login Form */}
            <form onSubmit={handleLogin} className="space-y-5 mb-6">
              {/* Username Field */}
              <div>
                <label className="text-[#666666] text-sm mb-2 block">Employee ID or Name</label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2">
                    <User className="w-5 h-5 text-[#666666]" />
                  </div>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter your ID or name"
                    className="w-full bg-[#F5F3FA] border-2 border-[#E8E0F5] rounded-[20px] py-4 pl-12 pr-4 text-[#333333] placeholder:text-[#999999] focus:border-[#4FA6A7] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label className="text-[#666666] text-sm mb-2 block">Password</label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2">
                    <Lock className="w-5 h-5 text-[#666666]" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full bg-[#F5F3FA] border-2 border-[#E8E0F5] rounded-[20px] py-4 pl-12 pr-12 text-[#333333] placeholder:text-[#999999] focus:border-[#4FA6A7] focus:outline-none transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5 text-[#666666]" />
                    ) : (
                      <Eye className="w-5 h-5 text-[#666666]" />
                    )}
                  </button>
                </div>
              </div>

              {/* Forgot Password */}
              <div className="text-right">
                <button type="button" className="text-[#4FA6A7] text-sm">
                  Forgot Password click here?
                </button>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#4FA6A7] to-[#3D8B8C] text-white py-5 rounded-[25px] shadow-xl active:scale-95 transition-transform"
              >
                Login
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-1 h-px bg-[#E8E0F5]"></div>
              <span className="text-[#666666] text-sm">or</span>
              <div className="flex-1 h-px bg-[#E8E0F5]"></div>
            </div>

            {/* Fingerprint Button */}
            <button
              onClick={handleFingerprint}
              className="w-full bg-white border-2 border-[#E8E0F5] text-[#333333] py-5 rounded-[25px] shadow-md active:scale-95 transition-transform flex items-center justify-center gap-3"
            >
              <Fingerprint className="w-6 h-6 text-[#9B88C9]" />
              <span>Use Fingerprint for logging</span>
            </button>

            {/* Quick Login Profiles */}
            <div className="mt-8">
              <p className="text-[#666666] text-sm mb-4 text-center">Quick Login</p>
              <div className="grid grid-cols-3 gap-3">
                <button 
                  onClick={() => onLogin('Priya Sharma')}
                  className="bg-[#F5F3FA] rounded-[18px] p-3 text-center active:scale-95 transition-transform"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#C7B8EA] to-[#9B88C9] rounded-full mx-auto mb-2 flex items-center justify-center text-white text-lg">
                    P
                  </div>
                  <p className="text-xs text-[#333333] truncate">Priya</p>
                </button>
                <button 
                  onClick={() => onLogin('Meera Devi')}
                  className="bg-[#F5F3FA] rounded-[18px] p-3 text-center active:scale-95 transition-transform"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#4FA6A7] to-[#3D8B8C] rounded-full mx-auto mb-2 flex items-center justify-center text-white text-lg">
                    M
                  </div>
                  <p className="text-xs text-[#333333] truncate">Meera</p>
                </button>
                <button 
                  onClick={() => onLogin('Anjali Kumar')}
                  className="bg-[#F5F3FA] rounded-[18px] p-3 text-center active:scale-95 transition-transform"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#FFB300] to-[#FF9800] rounded-full mx-auto mb-2 flex items-center justify-center text-white text-lg">
                    A
                  </div>
                  <p className="text-xs text-[#333333] truncate">Anjali</p>
                </button>
              </div>
            </div>
          </>
        ) : (
          /* Fingerprint Scanning */
          <div className="flex flex-col items-center justify-center py-12">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', duration: 0.6 }}
              className="relative mb-8"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-32 h-32 bg-gradient-to-br from-[#9B88C9] to-[#C7B8EA] rounded-full flex items-center justify-center shadow-2xl"
              >
                <Fingerprint className="w-16 h-16 text-white" />
              </motion.div>
              
              {/* Scanning Animation Rings */}
              <motion.div
                animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute inset-0 border-4 border-[#9B88C9] rounded-full"
              ></motion.div>
              <motion.div
                animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
                className="absolute inset-0 border-4 border-[#9B88C9] rounded-full"
              ></motion.div>
            </motion.div>

            <h3 className="text-[#333333] mb-2">Scanning Fingerprint...</h3>
            <p className="text-[#666666] text-sm mb-8 text-center">
              Place your finger on the sensor
            </p>

            <div className="flex gap-2">
              <div className="w-2 h-2 bg-[#9B88C9] rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-[#9B88C9] rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-[#9B88C9] rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>

            <button
              onClick={() => setIsFingerprint(false)}
              className="mt-8 text-[#666666] text-sm"
            >
              Cancel
            </button>
          </div>
        )}

        {/* Footer */}
        <div className="mt-auto pt-8 text-center">
          <p className="text-[#999999] text-xs">
            Deccan JM road,Pune
          </p>
          <p className="text-[#999999] text-xs mt-1">
            Empowering Women • Ensuring Quality
          </p>
        </div>
      </motion.div>
    </div>
  );
}
// ensure the location verify
