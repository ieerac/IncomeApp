import { useSession } from '../hooks/useAuth';
import DashboardLayout from '../layouts/DashboardLayout';
import { useState } from 'react';

export default function Account() {
  const { data: session } = useSession();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: session?.user?.name || '',
    email: session?.user?.email || '',
  });

  const userInitials = session?.user?.name
    ?.split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase() || 'U';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    // TODO: Implement API call to update user profile
    setIsEditing(false);
  };

  return (
    <DashboardLayout>
      <div className="flex-1 overflow-y-auto bg-gradient-to-b from-[#0f1f28] to-[#0a171f]">
        <div className="max-w-4xl mx-auto p-8">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-white mb-2">Account Settings</h1>
            <p className="text-gray-400">Manage your account information and preferences</p>
          </div>

          {/* Profile Section */}
          <div className="bg-[#1a2a32] border border-[#2a4a54] rounded-xl p-8 mb-8">
            <div className="flex items-start justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-1">Profile Information</h2>
                <p className="text-gray-400 text-sm">Update your personal details</p>
              </div>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
              >
                {isEditing ? 'Cancel' : 'Edit'}
              </button>
            </div>

            {/* Avatar Section */}
            <div className="flex items-center gap-6 mb-8 pb-8 border-b border-[#2a4a54]">
              {session?.user?.image ? (
                <div
                  className="w-24 h-24 rounded-full bg-cover bg-center border-2 border-cyan-500/30"
                  style={{ backgroundImage: `url("${session.user.image}")` }}
                />
              ) : (
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-4xl border-2 border-cyan-500/30">
                  {userInitials}
                </div>
              )}
              <div>
                <p className="text-white font-semibold mb-2">{session?.user?.name || 'User'}</p>
                <p className="text-gray-400 text-sm mb-4">{session?.user?.email || ''}</p>
                <button className="px-4 py-2 bg-white/5 border border-cyan-500/30 text-cyan-300 rounded-lg text-sm hover:bg-white/10 transition-colors">
                  Change Avatar
                </button>
              </div>
            </div>

            {/* Form Section */}
            <div className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#0f1f28] border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30"
                  />
                ) : (
                  <p className="text-white text-lg font-medium">{formData.name || 'Not set'}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                {isEditing ? (
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#0f1f28] border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30"
                  />
                ) : (
                  <p className="text-white text-lg font-medium">{formData.email || 'Not set'}</p>
                )}
              </div>

              {/* User ID */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">User ID</label>
                <p className="text-gray-500 text-sm font-mono">{session?.user?.id || 'N/A'}</p>
              </div>

              {/* Account Created */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Account Created</label>
                <p className="text-gray-400 text-sm">
                  {new Date().toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>

              {/* Save Button */}
              {isEditing && (
                <div className="flex gap-4 pt-4">
                  <button
                    onClick={handleSave}
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
                  >
                    Save Changes
                  </button>
                  <button
                    onClick={() => setIsEditing(false)}
                    className="flex-1 px-6 py-3 bg-white/5 border border-cyan-500/30 text-cyan-300 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Security Section */}
          <div className="bg-[#1a2a32] border border-[#2a4a54] rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-1">Security</h2>
            <p className="text-gray-400 text-sm mb-6">Manage your password and security settings</p>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-[#0f1f28] rounded-lg border border-[#2a4a54]">
                <div>
                  <p className="text-white font-medium mb-1">Password</p>
                  <p className="text-gray-400 text-sm">Last changed 3 months ago</p>
                </div>
                <button className="px-4 py-2 bg-white/5 border border-cyan-500/30 text-cyan-300 rounded-lg text-sm hover:bg-white/10 transition-colors">
                  Change Password
                </button>
              </div>

              <div className="flex items-center justify-between p-4 bg-[#0f1f28] rounded-lg border border-[#2a4a54]">
                <div>
                  <p className="text-white font-medium mb-1">Two-Factor Authentication</p>
                  <p className="text-gray-400 text-sm">Not enabled</p>
                </div>
                <button className="px-4 py-2 bg-white/5 border border-cyan-500/30 text-cyan-300 rounded-lg text-sm hover:bg-white/10 transition-colors">
                  Enable
                </button>
              </div>
            </div>
          </div>

          {/* Account Status */}
          <div className="bg-[#1a2a32] border border-[#2a4a54] rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-1">Account Status</h2>
            <p className="text-gray-400 text-sm mb-6">Your account information and status</p>

            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Account Status</span>
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/30 rounded-full">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="text-green-400 text-sm font-medium">Active</span>
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Email Verified</span>
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/30 rounded-full">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="text-green-400 text-sm font-medium">Verified</span>
                </span>
              </div>
            </div>

            <div className="pt-6 border-t border-[#2a4a54]">
              <button className="text-red-400 hover:text-red-300 transition-colors text-sm font-medium">
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
