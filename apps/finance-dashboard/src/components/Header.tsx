import RealTimeDate from "./RealTimeDate";

export default function Header() {
  return (
    <header className="flex-shrink-0 px-8 py-6 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-gradient-to-b from-[#0f1f28] to-[#0a171f] border-b border-[#1ba098]/20">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-white">Dashboard</h2>
        <p className="text-gray-400 mt-1 text-sm">Overview of your financial performance</p>
      </div>
      <div className="flex flex-col md:flex-row items-end md:items-center gap-4">
        {/* Real-Time Date */}
        <RealTimeDate />

        {/* Search */}
        <div className="hidden md:flex items-center bg-[#1a2a32] border border-[#2a4a54] rounded-lg px-4 py-2.5 w-64 focus-within:ring-2 focus-within:ring-cyan-500/30 transition-all">
          <span className="material-symbols-outlined text-gray-400 text-xl">search</span>
          <input
            className="bg-transparent border-none text-sm text-white placeholder-gray-500 focus:ring-0 w-full ml-2"
            placeholder="Search..."
            type="text"
          />
        </div>

        {/* Notification Bell */}
        <button className="p-2.5 rounded-lg bg-[#1a2a32] border border-[#2a4a54] text-gray-400 hover:text-cyan-300 hover:bg-[#2a3a42] transition-colors relative">
          <span className="material-symbols-outlined text-xl">notifications</span>
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
      </div>
    </header>
  );
}
