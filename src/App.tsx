import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { Login } from './components/login';
import { HomeDashboard } from './components/home-dashboard';
import { ScanAnalyze } from './components/scan-analyze';
import { QualityResult } from './components/quality-result';
import { TrainingVideos } from './components/training-videos';
import { Reports } from './components/reports';
import { Analytics } from './components/analytics';
import { Team } from './components/team';

export type Screen = 'login' | 'home' | 'scan' | 'result' | 'training' | 'reports' | 'analytics' | 'team';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('login');
  const [qualityScore, setQualityScore] = useState<number | null>(null);
  const [userName, setUserName] = useState<string>('');

  const handleLogin = (name: string) => {
    setUserName(name);
    setCurrentScreen('home');
  };
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E8E0F5] via-[#F5F3FA] to-[#E0F5F5] flex items-center justify-center p-4">
      {/* Mobile Phone Frame */}
      <div className="relative w-full max-w-[430px] h-[932px] bg-[#1a1a1a] rounded-[60px] shadow-2xl p-3">
        {/* Phone Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150px] h-[30px] bg-[#1a1a1a] rounded-b-[20px] z-50"></div>
        
        {/* Screen */}
        <div className="w-full h-full bg-white rounded-[48px] overflow-hidden relative">
          {/* Status Bar */}
          <div className="absolute top-0 left-0 right-0 h-[44px] bg-transparent z-40 px-6 flex items-center justify-between">
            <span className="text-sm">9:41</span>
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/>
              </svg>
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"/>
                <rect x="9" y="6" width="6" height="10" fill="white" rx="1"/>
              </svg>
            </div>
          </div>

          {/* App Content with AnimatePresence for smooth transitions */}
          <div className="w-full h-full overflow-y-auto">
            <AnimatePresence mode="wait">
              {currentScreen === 'login' && (
                <Login key="login" onLogin={handleLogin} />
              )}
              {currentScreen === 'home' && (
                <HomeDashboard key="home" onNavigate={setCurrentScreen} userName={userName} />
              )}
              {currentScreen === 'scan' && (
                <ScanAnalyze 
                  key="scan"
                  onNavigate={setCurrentScreen}
                  onScanComplete={(score) => {
                    setQualityScore(score);
                    setCurrentScreen('result');
                  }}
                />
              )}
              {currentScreen === 'result' && (
                <QualityResult 
                  key="result"
                  score={qualityScore || 92}
                  onNavigate={setCurrentScreen}
                />
              )}
              {currentScreen === 'training' && (
                <TrainingVideos key="training" onNavigate={setCurrentScreen} />
              )}
              {currentScreen === 'reports' && (
                <Reports key="reports" onNavigate={setCurrentScreen} />
              )}
              {currentScreen === 'analytics' && (
                <Analytics key="analytics" onNavigate={setCurrentScreen} />
              )}
              {currentScreen === 'team' && (
                <Team key="team" onNavigate={setCurrentScreen} />
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Power Button */}
        <div className="absolute -right-[3px] top-[120px] w-[3px] h-[80px] bg-[#2a2a2a] rounded-r-md"></div>
        
        {/* Volume Buttons */}
        <div className="absolute -left-[4px] top-[120px] w-[3px] h-[50px] bg-[#2a2a2a] rounded-l-md"></div>
        <div className="absolute -left-[3px] top-[190px] w-[3px] h-[50px] bg-[#2a2a2a] rounded-l-md"></div>
      </div>
    </div>
  );
}
// screen fingerprint working...
