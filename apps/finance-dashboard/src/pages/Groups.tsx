import DashboardLayout from '../layouts/DashboardLayout';

export default function Groups() {
  return (
    <DashboardLayout>
      <div className="flex-1 overflow-y-auto bg-gradient-to-b from-[#0f1f28] to-[#0a171f]">
        <div className="max-w-7xl mx-auto p-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">Groups</h1>
            <p className="text-gray-400">Manage your shared financial groups</p>
          </div>

          {/* Groups Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Create New Group */}
            <div className="bg-[#1a2a32] border-2 border-dashed border-[#2a5a64] rounded-xl p-8 flex flex-col items-center justify-center hover:border-cyan-500/50 transition-colors cursor-pointer group">
              <div className="w-16 h-16 rounded-full bg-cyan-500/10 flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors">
                <span className="material-symbols-outlined text-3xl text-cyan-400">add</span>
              </div>
              <p className="text-white font-semibold text-lg">Create New Group</p>
              <p className="text-gray-400 text-sm mt-2">Start sharing expenses with friends</p>
            </div>

            {/* Example Group 1 */}
            <div className="bg-gradient-to-br from-[#1a3a42] to-[#1a2a32] border border-[#2a5a64] rounded-xl p-6 hover:border-cyan-500/40 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <p className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-xs font-semibold">
                  <span>Active</span>
                </p>
                <span className="material-symbols-outlined text-xl text-gray-400 cursor-pointer hover:text-cyan-300">more_vert</span>
              </div>
              <h3 className="text-white text-xl font-bold mb-2">Trip to Japan</h3>
              <p className="text-gray-400 text-sm mb-4">A memorable adventure</p>

              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-gray-400 text-sm">Budget Terpakain</p>
                  <p className="text-cyan-400 font-semibold text-sm">92%</p>
                </div>
                <div className="w-full bg-[#0f1f28] rounded-full h-2">
                  <div className="bg-gradient-to-r from-red-500 to-orange-500 h-2 w-[92%] rounded-full"></div>
                </div>
                <p className="text-gray-500 text-xs mt-2">Rp 46,000,000 / Rp 50,000,000</p>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 border-2 border-[#1a2a32] flex items-center justify-center text-white text-xs font-bold">A</div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-[#1a2a32] flex items-center justify-center text-white text-xs font-bold">B</div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-green-600 border-2 border-[#1a2a32] flex items-center justify-center text-white text-xs font-bold">+1</div>
                </div>
              </div>
            </div>

            {/* Example Group 2 */}
            <div className="bg-gradient-to-br from-[#2a3a32] to-[#1a2a22] border border-[#2a5a54] rounded-xl p-6 hover:border-cyan-500/40 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <p className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-xs font-semibold">
                  <span>Shared</span>
                </p>
                <span className="material-symbols-outlined text-xl text-gray-400 cursor-pointer hover:text-cyan-300">more_vert</span>
              </div>
              <h3 className="text-white text-xl font-bold mb-2">Apartment 4B</h3>
              <p className="text-gray-400 text-sm mb-4">Living room renovation</p>

              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-gray-400 text-sm">Budget Terpakain</p>
                  <p className="text-cyan-400 font-semibold text-sm">45%</p>
                </div>
                <div className="w-full bg-[#0f1f28] rounded-full h-2">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 w-[45%] rounded-full"></div>
                </div>
                <p className="text-gray-500 text-xs mt-2">Rp 4,500,000 / Rp 10,000,000</p>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-[#1a2a22] flex items-center justify-center text-white text-xs font-bold">C</div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 border-2 border-[#1a2a22] flex items-center justify-center text-white text-xs font-bold">D</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
