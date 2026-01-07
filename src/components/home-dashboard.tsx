interface StatCardProps {
  title: string;
  value: string | number;
  subtitle: string;
  icon: React.ReactNode;
  bg: string;
  border: string;
  iconBg: string;
  textColor: string;
}

export function StatCard({
  title,
  value,
  subtitle,
  icon,
  bg,
  border,
  iconBg,
  textColor
}: StatCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
      className={`${bg} ${border} rounded-[20px] p-5 shadow-md`}
    >
      <div className={`w-10 h-10 ${iconBg} rounded-xl flex items-center justify-center mb-3`}>
        {icon}
      </div>
      <p className="text-[#666666] text-xs mb-1">{title}</p>
      <p className="text-[#333333] text-2xl mb-1">{value}</p>
      <p className={`${textColor} text-xs`}>{subtitle}</p>
    </motion.div>
  );
}

const recentChecks = [
  { id: 2847, score: 94, time: '2 mins ago', passed: true },
  { id: 2846, score: 91, time: '8 mins ago', passed: true },
  { id: 2845, score: 67, time: '15 mins ago', passed: false }
];
