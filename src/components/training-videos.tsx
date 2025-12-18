import { ArrowLeft, Play, CheckCircle, Clock, Star, Download, Languages } from 'lucide-react';
import { motion } from 'motion/react';
import type { Screen } from '../App';

interface TrainingVideosProps {
  onNavigate: (screen: Screen) => void;
}

interface Video {
  id: number;
  title: string;
  duration: string;
  completed: boolean;
  thumbnail: string;
  language: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  views: number;
}

export function TrainingVideos({ onNavigate }: TrainingVideosProps) {
  const videos: Video[] = [
    {
      id: 1,
      title: 'Introduction to Quality Control',
      duration: '5:30',
      completed: true,
      thumbnail: '#C7B8EA',
      language: 'Hindi',
      difficulty: 'Beginner',
      views: 245
    },
    {
      id: 2,
      title: 'How to Check Edge Sealing',
      duration: '8:15',
      completed: true,
      thumbnail: '#4FA6A7',
      language: 'Hindi',
      difficulty: 'Beginner',
      views: 198
    },
    {
      id: 3,
      title: 'Identifying Contamination',
      duration: '6:45',
      completed: false,
      thumbnail: '#FFB300',
      language: 'Hindi',
      difficulty: 'Intermediate',
      views: 156
    },
    {
      id: 4,
      title: 'Measuring Pad Dimensions',
      duration: '7:20',
      completed: false,
      thumbnail: '#9B88C9',
      language: 'Hindi',
      difficulty: 'Beginner',
      views: 187
    },
    {
      id: 5,
      title: 'Wing Alignment Standards',
      duration: '5:50',
      completed: false,
      thumbnail: '#4FA6A7',
      language: 'Hindi',
      difficulty: 'Intermediate',
      views: 134
    },
    {
      id: 6,
      title: 'Using the Scanning App',
      duration: '10:00',
      completed: true,
      thumbnail: '#E53935',
      language: 'Hindi',
      difficulty: 'Beginner',
      views: 267
    },
    {
      id: 7,
      title: 'Common Defects & Solutions',
      duration: '12:30',
      completed: false,
      thumbnail: '#4CAF50',
      language: 'Hindi',
      difficulty: 'Advanced',
      views: 92
    },

  ];

  const completedCount = videos.filter(v => v.completed).length;
  const progress = (completedCount / videos.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5F3FA] to-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#C7B8EA] via-[#B5A3D8] to-[#9B88C9] px-6 py-6 rounded-b-[35px] shadow-xl">
        <div className="flex items-center gap-3 mb-6">
          <button 
            onClick={() => onNavigate('home')}
            className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <div className="flex-1">
            <h2 className="text-white text-xl">Training Videos</h2>
            <p className="text-white/90 text-sm">Learn quality control skills</p>
          </div>
        </div>

        {/* Progress Card */}
        <div className="bg-white/15 backdrop-blur-md rounded-[25px] p-5">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-white/90 text-sm mb-1">Your Progress can be seen here</p>
              <p className="text-white text-2xl">{completedCount}/{videos.length} Videos</p>
            </div>
            <div className="w-16 h-16 relative">
              <svg className="w-16 h-16 -rotate-90">
                <circle
                  cx="32"
                  cy="32"
                  r="28"
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth="6"
                  fill="none"
                />
                <circle
                  cx="32"
                  cy="32"
                  r="28"
                  stroke="white"
                  strokeWidth="6"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray="176"
                  strokeDashoffset={176 - (176 * progress) / 100}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-xs">{Math.round(progress)}%</span>
              </div>
            </div>
          </div>
          <div className="h-2 bg-white/20 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-white rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>
      </div>

      {/* Filter Tags */}
      <div className="px-6 py-4 flex gap-2 overflow-x-auto no-scrollbar">
        <button className="px-4 py-2 bg-[#4FA6A7] text-white rounded-full text-sm whitespace-nowrap shadow-md">
          All Videos
        </button>
        <button className="px-4 py-2 bg-white border border-[#E8E0F5] text-[#666666] rounded-full text-sm whitespace-nowrap">
          Beginner
        </button>
        <button className="px-4 py-2 bg-white border border-[#E8E0F5] text-[#666666] rounded-full text-sm whitespace-nowrap">
          Intermediate
        </button>
        <button className="px-4 py-2 bg-white border border-[#E8E0F5] text-[#666666] rounded-full text-sm whitespace-nowrap">
          Advanced
        </button>
      </div>

      {/* Video List */}
      <div className="px-6 pb-6 space-y-4">
        {videos.map((video, idx) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white rounded-[25px] shadow-lg overflow-hidden border border-[#E8E0F5]"
          >
            <div className="flex gap-4 p-4">
              {/* Thumbnail */}
              <div 
                className="w-28 h-28 rounded-[18px] flex-shrink-0 flex items-center justify-center relative overflow-hidden"
                style={{ backgroundColor: video.thumbnail }}
              >
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                  <Play className="w-6 h-6 text-[#4FA6A7] ml-1" />
                </div>
                {video.completed && (
                  <div className="absolute top-2 right-2 w-7 h-7 bg-[#4CAF50] rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>

              {/* Video Info */}
              <div className="flex-1 min-w-0">
                <h4 className="text-[#333333] mb-2 line-clamp-2">{video.title}</h4>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className={`px-3 py-1 rounded-full text-xs ${
                    video.difficulty === 'Beginner' ? 'bg-[#E8F8E8] text-[#4CAF50]' :
                    video.difficulty === 'Intermediate' ? 'bg-[#FFF8E8] text-[#FFB300]' :
                    'bg-[#FFE8E8] text-[#E53935]'
                  }`}>
                    {video.difficulty}
                  </span>
                  <div className="flex items-center gap-1 text-[#666666] text-xs">
                    <Languages className="w-3 h-3" />
                    <span>{video.language}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#666666] text-xs">
                    <Clock className="w-4 h-4" />
                    <span>{video.duration}</span>
                  </div>
                  <div className="flex items-center gap-1 text-[#666666] text-xs">
                    <Star className="w-4 h-4 text-[#FFB300] fill-[#FFB300]" />
                    <span>{video.views} views</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Download Resources */}
      <div className="px-6 pb-8">
        <div className="bg-gradient-to-r from-[#4FA6A7] to-[#3D8B8C] rounded-[25px] p-5 flex items-center gap-4 shadow-xl">
          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
            <Download className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <p className="text-white mb-1">Download Training Manual</p>
            <p className="text-white/80 text-xs">Available in Hindi & English</p>
          </div>
          <button className="px-4 py-2 bg-white text-[#4FA6A7] rounded-full text-sm active:scale-95 transition-transform">
            Download
          </button>
        </div>
      </div>
    </div>
  );
}
