import { ArrowLeft, Phone, Mail, Award, TrendingUp, Calendar, MapPin, Users as UsersIcon } from 'lucide-react';
import { motion } from 'motion/react';
import type { Screen } from '../App';

interface TeamProps {
  onNavigate: (screen: Screen) => void;
}

interface TeamMember {
  id: number;
  name: string;
  role: string;
  village: string;
  phone: string;
  email: string;
  batchesCompleted: number;
  passRate: number;
  rating: number;
  joinDate: string;
  status: 'active' | 'break' | 'offline';
  avatar: string;
}

export function Team({ onNavigate }: TeamProps) {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'Priya Sharma',
      role: 'Senior Quality Inspector',
      village: 'Khandwa Village',
      phone: '+91 98765 43210',
      email: 'priya.sharma@swashakti.in',
      batchesCompleted: 145,
      passRate: 92,
      rating: 4.8,
      joinDate: 'Jan 2024',
      status: 'active',
      avatar: '#C7B8EA'
    },
    {
      id: 2,
      name: 'Meera Devi',
      role: 'Quality Inspector',
      village: 'Khandwa Village',
      phone: '+91 98765 43211',
      email: 'meera.devi@swashakti.in',
      batchesCompleted: 128,
      passRate: 89,
      rating: 4.5,
      joinDate: 'Feb 2024',
      status: 'active',
      avatar: '#4FA6A7'
    },
    {
      id: 3,
      name: 'Anjali Verma',
      role: 'Senior Quality Inspector',
      village: 'Khandwa Village',
      phone: '+91 98765 43212',
      email: 'anjali.verma@swashakti.in',
      batchesCompleted: 152,
      passRate: 94,
      rating: 4.9,
      joinDate: 'Dec 2023',
      status: 'break',
      avatar: '#9B88C9'
    },
    {
      id: 4,
      name: 'Sunita Bai',
      role: 'Quality Inspector',
      village: 'Khandwa Village',
      phone: '+91 98765 43213',
      email: 'sunita.bai@swashakti.in',
      batchesCompleted: 115,
      passRate: 87,
      rating: 4.3,
      joinDate: 'Mar 2024',
      status: 'active',
      avatar: '#FFB300'
    },
    {
      id: 5,
      name: 'Rekha Patel',
      role: 'Quality Inspector',
      village: 'Khandwa Village',
      phone: '+91 98765 43214',
      email: 'rekha.patel@swashakti.in',
      batchesCompleted: 98,
      passRate: 90,
      rating: 4.6,
      joinDate: 'Apr 2024',
      status: 'offline',
      avatar: '#E53935'
    },
    {
      id: 6,
      name: 'Geeta Singh',
      role: 'Trainee Inspector',
      village: 'Khandwa Village',
      phone: '+91 98765 43215',
      email: 'geeta.singh@swashakti.in',
      batchesCompleted: 45,
      passRate: 85,
      rating: 4.2,
      joinDate: 'Nov 2024',
      status: 'active',
      avatar: '#4CAF50'
    }
  ];

  const activeMembers = teamMembers.filter(m => m.status === 'active').length;
  const avgPassRate = Math.round(teamMembers.reduce((acc, m) => acc + m.passRate, 0) / teamMembers.length);
  const totalBatches = teamMembers.reduce((acc, m) => acc + m.batchesCompleted, 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5F3FA] to-white pb-6">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#9B88C9] via-[#B5A3D8] to-[#C7B8EA] px-6 py-6 rounded-b-[35px] shadow-xl mb-6">
        <div className="flex items-center gap-3 mb-6">
          <button 
            onClick={() => onNavigate('home')}
            className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <div className="flex-1">
            <h2 className="text-white text-xl">Our Team</h2>
            <div className="flex items-center gap-2 mt-1">
              <MapPin className="w-4 h-4 text-white/90" />
              <p className="text-white/90 text-sm">Khandwa Village, MP</p>
            </div>
          </div>
          <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
            <UsersIcon className="w-5 h-5 text-white" />
          </div>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white/15 backdrop-blur-md rounded-[18px] p-3 text-center">
            <p className="text-white/80 text-xs mb-1">Active</p>
            <p className="text-white text-2xl">{activeMembers}</p>
            <p className="text-white/90 text-xs">Members</p>
          </div>
          <div className="bg-white/15 backdrop-blur-md rounded-[18px] p-3 text-center">
            <p className="text-white/80 text-xs mb-1">Avg Quality</p>
            <p className="text-white text-2xl">{avgPassRate}%</p>
            <p className="text-white/90 text-xs">Pass rate</p>
          </div>
          <div className="bg-white/15 backdrop-blur-md rounded-[18px] p-3 text-center">
            <p className="text-white/80 text-xs mb-1">Total</p>
            <p className="text-white text-2xl">{totalBatches}</p>
            <p className="text-white/90 text-xs">Batches</p>
          </div>
        </div>
      </div>

      {/* Status Filter */}
      <div className="px-6 pb-4 flex gap-2">
        <button className="px-4 py-2 bg-[#4FA6A7] text-white rounded-full text-sm shadow-md">
          All ({teamMembers.length})
        </button>
        <button className="px-4 py-2 bg-white border border-[#E8E0F5] text-[#666666] rounded-full text-sm">
          Active ({activeMembers})
        </button>
        <button className="px-4 py-2 bg-white border border-[#E8E0F5] text-[#666666] rounded-full text-sm">
          Senior (2)
        </button>
      </div>

      {/* Team Members */}
      <div className="px-6 space-y-4">
        {teamMembers.map((member, idx) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white rounded-[25px] shadow-xl p-5 border border-[#E8E0F5]"
          >
            {/* Header */}
            <div className="flex items-start gap-4 mb-4">
              <div className="relative">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-white text-xl"
                  style={{ backgroundColor: member.avatar }}
                >
                  {member.name.charAt(0)}
                </div>
                <div 
                  className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-white ${
                    member.status === 'active' ? 'bg-[#4CAF50]' :
                    member.status === 'break' ? 'bg-[#FFB300]' : 'bg-[#666666]'
                  }`}
                ></div>
              </div>

              <div className="flex-1 min-w-0">
                <h4 className="text-[#333333] mb-1">{member.name}</h4>
                <p className="text-[#666666] text-sm mb-2">{member.role}</p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Award className="w-4 h-4 text-[#FFB300]" />
                    <span className="text-sm text-[#333333]">{member.rating}</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-[#666666]">
                    <Calendar className="w-4 h-4" />
                    <span>{member.joinDate}</span>
                  </div>
                </div>
              </div>

              <div className="text-right">
                <div 
                  className={`px-3 py-1 rounded-full text-xs ${
                    member.status === 'active' ? 'bg-[#E8F8E8] text-[#4CAF50]' :
                    member.status === 'break' ? 'bg-[#FFF8E8] text-[#FFB300]' : 'bg-[#F5F3FA] text-[#666666]'
                  }`}
                >
                  {member.status.charAt(0).toUpperCase() + member.status.slice(1)}
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-[#F5F3FA] rounded-[15px] p-3">
                <p className="text-[#666666] text-xs mb-1">Batches Completed</p>
                <p className="text-[#333333] text-xl">{member.batchesCompleted}</p>
              </div>
              <div className="bg-[#E8F8E8] rounded-[15px] p-3">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-[#666666] text-xs">Pass Rate</p>
                  <TrendingUp className="w-4 h-4 text-[#4CAF50]" />
                </div>
                <p className="text-[#4CAF50] text-xl">{member.passRate}%</p>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-2">
              <div className="flex items-center gap-3 bg-[#F5F3FA] rounded-[15px] p-3">
                <div className="w-8 h-8 bg-white rounded-xl flex items-center justify-center">
                  <Phone className="w-4 h-4 text-[#4FA6A7]" />
                </div>
                <span className="text-sm text-[#666666]">{member.phone}</span>
              </div>
              <div className="flex items-center gap-3 bg-[#F5F3FA] rounded-[15px] p-3">
                <div className="w-8 h-8 bg-white rounded-xl flex items-center justify-center">
                  <Mail className="w-4 h-4 text-[#4FA6A7]" />
                </div>
                <span className="text-sm text-[#666666] truncate">{member.email}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Add Member Button */}
      <div className="px-6 mt-6">
        <button className="w-full bg-gradient-to-r from-[#9B88C9] to-[#8977B7] text-white py-5 rounded-[25px] shadow-xl flex items-center justify-center gap-3 active:scale-95 transition-transform">
          <UsersIcon className="w-5 h-5" />
          <span>Add New Team Member</span>
        </button>
      </div>
    </div>
  );
}
