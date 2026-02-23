import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useSession, useSignOut } from '../hooks/useAuth';

export default function Sidebar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { data: session } = useSession();
  const { signOut } = useSignOut();

  const handleLogout = async () => {
    await signOut();
  };

  // Get user initials for avatar fallback
  const userInitials = session?.user?.name
    ?.split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase() || 'U';

  return (
    <aside className="hidden md:flex flex-col w-64 h-full bg-gradient-to-b from-[#0f1f28] to-[#0a171f] border-r border-[#1ba098]/20 flex-shrink-0">
      <div className="p-6">
        {/* Logo */}
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-gradient-to-br from-[#00d4ff] to-[#0088cc] p-2.5 rounded-lg shadow-lg shadow-cyan-500/30">
            <span className="material-symbols-outlined text-white" style={{ fontSize: '24px' }}>lock</span>
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-tight text-white">Vaultly</h1>
            <p className="text-[11px] text-gray-400 font-medium">Secure Finance</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-2">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `flex items-center gap-4 px-4 py-3 rounded-lg transition-all ${isActive ? 'bg-gradient-to-r from-cyan-500/20 to-cyan-500/10 text-cyan-400 border border-cyan-500/30' : 'text-gray-400 hover:text-gray-200 hover:bg-white/5'}`
            }
          >
            <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>dashboard</span>
            <span className="font-medium text-sm">Dashboard</span>
          </NavLink>

          <NavLink
            to="/groups"
            className={({ isActive }) =>
              `flex items-center gap-4 px-4 py-3 rounded-lg transition-all group ${isActive ? 'bg-gradient-to-r from-cyan-500/20 to-cyan-500/10 text-cyan-400 border border-cyan-500/30' : 'text-gray-400 hover:text-gray-200 hover:bg-white/5'}`
            }
          >
            <span className="material-symbols-outlined text-lg">group</span>
            <span className="font-medium text-sm">Groups</span>
          </NavLink>

          <NavLink
            to="/transaction"
            className={({ isActive }) =>
              `flex items-center gap-4 px-4 py-3 rounded-lg transition-all group ${isActive ? 'bg-gradient-to-r from-cyan-500/20 to-cyan-500/10 text-cyan-400 border border-cyan-500/30' : 'text-gray-400 hover:text-gray-200 hover:bg-white/5'}`
            }
          >
            <span className="material-symbols-outlined text-lg">credit_card</span>
            <span className="font-medium text-sm">Transactions</span>
          </NavLink>

          <NavLink
            to="/reports"
            className={({ isActive }) =>
              `flex items-center gap-4 px-4 py-3 rounded-lg transition-all group ${isActive ? 'bg-gradient-to-r from-cyan-500/20 to-cyan-500/10 text-cyan-400 border border-cyan-500/30' : 'text-gray-400 hover:text-gray-200 hover:bg-white/5'}`
            }
          >
            <span className="material-symbols-outlined text-lg">analytics</span>
            <span className="font-medium text-sm">Analytics</span>
          </NavLink>

          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `flex items-center gap-4 px-4 py-3 rounded-lg transition-all group ${isActive ? 'bg-gradient-to-r from-cyan-500/20 to-cyan-500/10 text-cyan-400 border border-cyan-500/30' : 'text-gray-400 hover:text-gray-200 hover:bg-white/5'}`
            }
          >
            <span className="material-symbols-outlined text-lg">settings</span>
            <span className="font-medium text-sm">Settings</span>
          </NavLink>
        </nav>
      </div>
      <div className="mt-auto p-6 border-t border-[#1ba098]/20">
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full flex items-center gap-3 p-3 rounded-lg bg-[#1a2a32] hover:bg-[#1f3a44] cursor-pointer transition-colors border border-[#2a4a54] focus:outline-none"
          >
            {session?.user?.image ? (
              <div
                className="w-10 h-10 rounded-full bg-cover bg-center"
                style={{ backgroundImage: `url("${session.user.image}")` }}
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm">
                {userInitials}
              </div>
            )}
            <div className="flex flex-col items-start flex-1">
              <p className="text-sm font-semibold text-white">{session?.user?.name || 'User'}</p>
              <p className="text-xs text-gray-400 truncate max-w-[120px]">{session?.user?.email || ''}</p>
            </div>
            <span className={`material-symbols-outlined text-gray-400 text-lg transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}>expand_more</span>
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute bottom-full left-0 w-full mb-2 bg-[#1a2a32] border border-[#2a4a54] rounded-lg shadow-xl overflow-hidden animate-in fade-in slide-in-from-bottom-2 z-50">
              <div className="py-1">
                <NavLink
                  to="/account"
                  onClick={() => setIsDropdownOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-[#2a3a42] hover:text-cyan-300 transition-colors"
                >
                  <span className="material-symbols-outlined text-lg">person</span>
                  <span className="text-sm">View Account</span>
                </NavLink>
                <div className="h-px bg-[#2a4a54]/50 my-1"></div>
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-400/10 transition-colors"
                >
                  <span className="material-symbols-outlined text-lg">logout</span>
                  <span className="text-sm">Log Out</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
