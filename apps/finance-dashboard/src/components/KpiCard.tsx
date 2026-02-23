import clsx from 'clsx';

interface KpiCardProps {
  title: string;
  amount: string;
  trend: string;
  trendType: 'up' | 'down';
  trendValue: string;
  icon: string;
  type: 'income' | 'expense' | 'balance';
}

export default function KpiCard({ title, amount, trend, trendType, trendValue, icon, type }: KpiCardProps) {
  const isBalance = type === 'balance';
  const isIncome = type === 'income';

  // Base classes for standard cards
  const cardClasses = clsx(
    "p-6 rounded-xl border shadow-sm relative overflow-hidden group flex flex-col gap-1 z-10",
    {
      // Standard cards (Income/Expense)
      "bg-[#1a2a32] border-[#2a4a54] hover:border-cyan-500/40": !isBalance,
      // Net Balance Card
      "bg-gradient-to-br from-[#1a3a42] to-[#0f2a32] border-[#2a5a64] shadow-lg ring-1 ring-cyan-500/20": isBalance,
    }
  );

  const iconBgClass = isBalance
    ? "bg-cyan-500/20"
    : isIncome
      ? "bg-cyan-500/20"
      : "bg-red-500/20";

  const iconColorClass = isBalance
    ? "text-cyan-400"
    : isIncome
      ? "text-cyan-400"
      : "text-red-400";

  const trendBgClass = isBalance
    ? "bg-cyan-500/20 text-cyan-300"
    : isIncome
      ? "bg-green-500/20 text-green-400"
      : "bg-red-500/20 text-red-400";

  const trendArrow = trendType === "up" ? "trending_up" : "trending_down";

  return (
    <div className={cardClasses}>
      {/* Background decorations */}
      {!isBalance && (
        <div className="absolute right-0 top-0 p-6 opacity-20 group-hover:opacity-30 transition-opacity">
          <span
            className={`material-symbols-outlined text-6xl ${
              isIncome ? "text-cyan-500" : "text-red-500"
            }`}
          >
            {trendType === "up" ? "trending_up" : "trending_down"}
          </span>
        </div>
      )}
      {isBalance && (
        <>
          {/* Background gradient glow for Balance */}
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl -z-10"></div>
        </>
      )}

      <div className="flex flex-col gap-1 relative z-10">
        <div className="flex items-center gap-2 mb-2">
          <div className={`${iconBgClass} p-2 rounded-lg`}>
            <span className={`material-symbols-outlined text-xl ${iconColorClass}`}>
              {icon}
            </span>
          </div>
          <p className="text-gray-400 font-medium text-sm">{title}</p>
        </div>
        <h3 className="text-3xl font-bold tracking-tight text-white">{amount}</h3>
        <div className="flex items-center gap-2 mt-2">
          <span
            className={`${trendBgClass} text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1`}
          >
            <span className="material-symbols-outlined text-[12px] font-bold">
              {trendArrow}
            </span>
            {trendValue}
          </span>
          <span className="text-xs text-gray-500">{trend}</span>
        </div>
      </div>
    </div>
  );
}
