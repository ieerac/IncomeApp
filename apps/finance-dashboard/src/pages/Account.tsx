import { useState, useRef, useEffect } from 'react';
import { useSession } from '../hooks/useAuth';
import { updateUser, changePassword } from '../lib/auth-client';
import DashboardLayout from '../layouts/DashboardLayout';
import clsx from 'clsx';

export default function Account() {
  const { data: session } = useSession();

  // Name Edit State
  const [isEditingName, setIsEditingName] = useState(false);
  const [name, setName] = useState('');
  const [isUpdatingName, setIsUpdatingName] = useState(false);

  // Phone State (Mocked for UI)
  const [phone] = useState('+62 812 3456 7890');

  // Password Edit State
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordSuccess, setPasswordSuccess] = useState('');
  const [isUpdatingPassword, setIsUpdatingPassword] = useState(false);

  // Avatar State
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isUploadingAvatar, setIsUploadingAvatar] = useState(false);

  useEffect(() => {
    if (session?.user?.name) {
      setName(session.user.name);
    }
  }, [session?.user?.name]);

  const userInitials = session?.user?.name
    ?.split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase() || 'U';

  const userEmail = session?.user?.email || '';

  // Handle Avatar Upload
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Convert to base64
    const reader = new FileReader();
    reader.onload = async (event) => {
      const base64String = event.target?.result as string;
      setIsUploadingAvatar(true);
      try {
        await updateUser({ image: base64String });
        // The session will automatically update provided better-auth is listening or refetching
      } catch (error) {
        console.error("Failed to update avatar:", error);
      } finally {
        setIsUploadingAvatar(false);
      }
    };
    reader.readAsDataURL(file);
  };

  // Handle Name Save
  const handleSaveName = async () => {
    if (name === session?.user?.name) {
      setIsEditingName(false);
      return;
    }

    setIsUpdatingName(true);
    try {
      await updateUser({ name });
      setIsEditingName(false);
    } catch (error) {
      console.error("Failed to update name:", error);
    } finally {
      setIsUpdatingName(false);
    }
  };

  // Handle Password Save
  const handleSavePassword = async () => {
    setPasswordError('');
    setPasswordSuccess('');

    if (newPassword !== confirmPassword) {
      setPasswordError("Passwords do not match.");
      return;
    }

    if (newPassword.length < 8) {
      setPasswordError("Password must be at least 8 characters.");
      return;
    }

    setIsUpdatingPassword(true);
    try {
      // @ts-ignore - better-auth types mismatch generic handle
      const res = await changePassword({
        currentPassword,
        newPassword,
        revokeOtherSessions: true
      });

      if (res?.error) {
        setPasswordError(res.error.message || "Failed to change password.");
      } else {
        setPasswordSuccess("Password updated successfully.");
        setIsChangingPassword(false);
        setCurrentPassword('');
        setNewPassword('');
        setConfirmPassword('');

        setTimeout(() => setPasswordSuccess(''), 3000);
      }
    } catch (error: any) {
      setPasswordError(error?.message || "Failed to update password.");
    } finally {
      setIsUpdatingPassword(false);
    }
  };

  return (
    <DashboardLayout>3
      <div className="flex-1 overflow-y-auto bg-[#0A0E12] font-display text-white transition-colors duration-300 relative">
        {/* Background Visuals */}
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#00C2FF]/10 rounded-full blur-[140px] pointer-events-none" />

        {/* Top Header */}
        <div className="w-full px-8 pt-10 pb-6 relative z-10">
          <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Profil Pengguna</h1>
          <p className="text-[#94A3B8] text-sm font-normal">Kelola informasi pribadi, preferensi, dan keamanan akun Anda.</p>
        </div>

        <div className="max-w-5xl mx-auto px-8 pb-12 w-full flex flex-col gap-6 relative z-10">

          {/* Profile Header Card */}
          <div className="glass-panel p-6 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6 border border-[#00C2FF]/20 relative overflow-hidden rounded-2xl shadow-lg">
            {/* Subtle Grid Background */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #FFF 1px, transparent 0)', backgroundSize: '24px 24px' }} />

            <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-center gap-6 w-full">
              {/* Avatar */}
              <div className="relative group shrink-0">
                {session?.user?.image ? (
                  <div className="w-[100px] h-[100px] rounded-full bg-cover bg-center border-[3px] border-[#0A0E12] shadow-xl ring-1 ring-[#00C2FF]/30 object-cover" style={{ backgroundImage: `url("${session.user.image}")` }} />
                ) : (
                  <div className="w-[100px] h-[100px] rounded-full bg-gradient-to-br from-[#00C2FF] to-blue-600 flex items-center justify-center text-white font-bold text-3xl border-[3px] border-[#0A0E12] shadow-xl ring-1 ring-[#00C2FF]/30">
                    {userInitials}
                  </div>
                )}

                {/* Loader Overlay */}
                {isUploadingAvatar && (
                  <div className="absolute inset-0 bg-black/60 rounded-full flex items-center justify-center backdrop-blur-sm z-20">
                    <span className="material-symbols-outlined animate-spin text-white">progress_activity</span>
                  </div>
                )}

                {/* Camera Button */}
                <button
                  onClick={() => fileInputRef.current?.click()}
                  disabled={isUploadingAvatar}
                  className="absolute bottom-0 right-0 w-[34px] h-[34px] bg-[#00C2FF] hover:bg-[#00A3E0] rounded-full flex items-center justify-center text-black shadow-lg shadow-[#00C2FF]/30 transition-transform hover:scale-105 z-10 disabled:opacity-50 ring-[3px] ring-[#0A0E12]"
                  title="Change Photo"
                >
                  <span className="material-symbols-outlined text-[18px]">photo_camera</span>
                </button>
                <input type="file" ref={fileInputRef} onChange={handleFileChange} hidden accept="image/*" />
              </div>

              {/* Info */}
              <div className="text-center sm:text-left flex-1">
                <h2 className="text-[28px] font-bold text-white tracking-tight leading-snug">{session?.user?.name || 'User'}</h2>
                <p className="text-[#00C2FF] font-medium text-[15px] mb-1">@{session?.user?.name?.toLowerCase().replace(/\s+/g, '_') || 'user'}_ID</p>
                <p className="text-[#64748B] text-[13px] font-normal mt-2">Bergabung sejak Maret 2023</p>
              </div>

              {/* Action Button */}
              <div className="relative z-10 shrink-0 self-center sm:self-start mt-4 sm:mt-0">
                <button className="px-5 py-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white text-sm font-medium transition-colors shadow-sm focus:ring-2 focus:ring-[#00C2FF]/50 focus:outline-none">
                  Lihat Profil Publik
                </button>
              </div>
            </div>
          </div>

          {/* Main Content Glass Card */}
          <div className="glass-panel border border-white/10 flex flex-col p-8 gap-10 rounded-2xl shadow-xl">

            {/* Top Grid: Personal Info & Preferences */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

              {/* Left Column: Informasi Pribadi */}
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-3 text-white mb-1">
                  <span className="material-symbols-outlined text-[#00C2FF] text-[22px]">person</span>
                  <h3 className="text-lg font-bold tracking-tight">Informasi Pribadi</h3>
                </div>

                <div className="flex flex-col gap-2.5">
                  <label className="text-[#94A3B8] text-[11px] font-semibold uppercase tracking-wider ml-1">Nama Lengkap</label>
                  <div className="relative flex items-center group">
                    <input
                      className={clsx(
                        "glass-input w-full h-[52px] rounded-xl pl-5 pr-14 text-[15px] text-white transition-all",
                        isEditingName ? "border-[#00C2FF] ring-2 ring-[#00C2FF]/20 bg-white/5 outline-none" : "border-white/5 bg-[#0F172A]/40"
                      )}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      readOnly={!isEditingName}
                    />
                    {isEditingName ? (
                      <div className="absolute right-3 flex items-center gap-1.5">
                        <button onClick={handleSaveName} disabled={isUpdatingName} className="w-8 h-8 flex items-center justify-center text-green-400 hover:bg-green-400/10 rounded-lg transition-colors">
                          <span className="material-symbols-outlined text-[18px]">{isUpdatingName ? 'progress_activity' : 'check_circle'}</span>
                        </button>
                        <button onClick={() => { setIsEditingName(false); setName(session?.user?.name || ''); }} disabled={isUpdatingName} className="w-8 h-8 flex items-center justify-center text-red-400 hover:bg-red-400/10 rounded-lg transition-colors">
                          <span className="material-symbols-outlined text-[18px]">cancel</span>
                        </button>
                      </div>
                    ) : (
                      <button onClick={() => setIsEditingName(true)} className="absolute right-3 w-8 h-8 flex items-center justify-center text-[#64748B] hover:text-[#00C2FF] transition-colors rounded-lg group-hover:bg-white/5">
                        <span className="material-symbols-outlined text-[20px]">edit</span>
                      </button>
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-2.5">
                  <label className="text-[#94A3B8] text-[11px] font-semibold uppercase tracking-wider ml-1">Email</label>
                  <div className="relative flex items-center">
                    <input
                      className="glass-input w-full h-[52px] rounded-xl pl-5 pr-14 text-[15px] text-white border-white/5 bg-[#0F172A]/40 opacity-60 cursor-not-allowed"
                      value={userEmail}
                      readOnly
                    />
                    <button className="absolute right-3 w-8 h-8 flex items-center justify-center text-[#64748B] transition-colors rounded-lg disabled:opacity-40" disabled>
                      <span className="material-symbols-outlined text-[20px]">edit</span>
                    </button>
                  </div>
                </div>

                <div className="flex flex-col gap-2.5">
                  <label className="text-[#94A3B8] text-[11px] font-semibold uppercase tracking-wider ml-1">Nomor Telepon</label>
                  <div className="relative flex items-center group">
                    <input
                      className="glass-input w-full h-[52px] rounded-xl pl-5 pr-14 text-[15px] text-white border-white/5 bg-[#0F172A]/40"
                      value={phone}
                      readOnly
                    />
                    <button className="absolute right-3 w-8 h-8 flex items-center justify-center text-[#64748B] hover:text-[#00C2FF] transition-colors rounded-lg group-hover:bg-white/5">
                      <span className="material-symbols-outlined text-[20px]">edit</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column: Preferensi */}
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-3 text-white mb-1">
                  <span className="material-symbols-outlined text-[#00C2FF] text-[22px]">tune</span>
                  <h3 className="text-lg font-bold tracking-tight">Preferensi</h3>
                </div>

                <div className="grid grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2.5">
                    <label className="text-[#94A3B8] text-[11px] font-semibold uppercase tracking-wider ml-1">Mata Uang</label>
                    <div className="relative">
                      <select className="glass-input w-full h-[52px] rounded-xl px-5 pr-10 text-[15px] text-white border-white/5 bg-[#0F172A]/40 appearance-none cursor-pointer focus:border-[#00C2FF] focus:outline-none focus:ring-1 focus:ring-[#00C2FF]/30 transition-all">
                        <option>IDR (Rp)</option>
                        <option>USD ($)</option>
                      </select>
                      <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-[#64748B] pointer-events-none text-[20px]">expand_more</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2.5">
                    <label className="text-[#94A3B8] text-[11px] font-semibold uppercase tracking-wider ml-1">Bahasa</label>
                    <div className="relative">
                      <select className="glass-input w-full h-[52px] rounded-xl px-5 pr-10 text-[15px] text-white border-white/5 bg-[#0F172A]/40 appearance-none cursor-pointer focus:border-[#00C2FF] focus:outline-none focus:ring-1 focus:ring-[#00C2FF]/30 transition-all">
                        <option>Bahasa Indonesia</option>
                        <option>English</option>
                      </select>
                      <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-[#64748B] pointer-events-none text-[20px]">expand_more</span>
                    </div>
                  </div>
                </div>

                <div className="mt-1 glass-panel border border-white/5 bg-[#0F172A]/40 rounded-xl p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    <div className="w-[36px] h-[36px] rounded-full bg-white flex items-center justify-center p-1.5 shadow-sm">
                      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" /></svg>
                    </div>
                    <div>
                      <p className="text-white text-[15px] font-medium leading-tight">Google Account</p>
                      <p className="text-[#64748B] text-xs mt-0.5">Terhubung</p>
                    </div>
                  </div>
                  <button className="px-4 py-2 rounded-lg border border-white/10 text-[#94A3B8] text-xs font-semibold hover:bg-white/5 hover:text-white transition-colors bg-[#0A0E12]">
                    Putuskan
                  </button>
                </div>

              </div>
            </div>

            {/* Divider */}
            <hr className="border-white/5" />

            {/* Bottom Section: Keamanan & Login */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3 text-white mb-1">
                <span className="material-symbols-outlined text-[#00C2FF] text-[22px]">security</span>
                <h3 className="text-lg font-bold tracking-tight">Keamanan & Login</h3>
              </div>

              {passwordSuccess && (
                <div className="bg-green-500/10 border border-green-500/30 text-green-400 text-sm p-3 rounded-xl mb-1 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">check_circle</span>
                  {passwordSuccess}
                </div>
              )}

              {passwordError && (
                <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm p-3 rounded-xl mb-1 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">error</span>
                  {passwordError}
                </div>
              )}

              {/* Password Row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 p-6 rounded-2xl border border-white/5 bg-[#0F172A]/40">
                <div className="flex-1">
                  <p className="text-white font-medium text-[15px] mb-1">Kata Sandi</p>
                  <p className="text-[#64748B] text-xs font-normal">Terakhir diubah 3 bulan yang lalu</p>
                </div>

                {!isChangingPassword ? (
                  <div className="flex items-center gap-8">
                    <span className="text-[#94A3B8] tracking-[0.2em] font-mono text-[18px] select-none">••••••••••</span>
                    <button
                      onClick={() => setIsChangingPassword(true)}
                      className="text-[#00C2FF] text-sm font-semibold hover:text-[#00A3E0] hover:underline whitespace-nowrap transition-colors"
                    >
                      Ubah Kata Sandi
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col gap-3.5 w-full sm:w-[320px]">
                    <input
                      type="password"
                      placeholder="Kata sandi saat ini"
                      className="glass-input h-11 w-full rounded-xl px-4 text-sm text-white focus:outline-none focus:ring-1 focus:ring-[#00C2FF]/50 border-white/10 bg-[#0A0E12]"
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                    />
                    <input
                      type="password"
                      placeholder="Kata sandi baru (min. 8 karakter)"
                      className="glass-input h-11 w-full rounded-xl px-4 text-sm text-white focus:outline-none focus:ring-1 focus:ring-[#00C2FF]/50 border-white/10 bg-[#0A0E12]"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                    <input
                      type="password"
                      placeholder="Konfirmasi kata sandi baru"
                      className="glass-input h-11 w-full rounded-xl px-4 text-sm text-white focus:outline-none focus:ring-1 focus:ring-[#00C2FF]/50 border-white/10 bg-[#0A0E12]"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <div className="flex gap-2 justify-end mt-2">
                      <button
                        onClick={() => {
                          setIsChangingPassword(false);
                          setPasswordError('');
                        }}
                        className="px-4 py-2 rounded-xl text-sm font-medium text-[#94A3B8] hover:bg-white/5 hover:text-white transition-colors"
                        disabled={isUpdatingPassword}
                      >
                        Batal
                      </button>
                      <button
                        onClick={handleSavePassword}
                        className="px-5 py-2 rounded-xl text-sm bg-[#00C2FF] text-black font-bold hover:bg-[#00A3E0] transition-colors flex items-center gap-2 shadow-lg shadow-[#00C2FF]/20 hover:shadow-[#00C2FF]/40"
                        disabled={isUpdatingPassword}
                      >
                        {isUpdatingPassword && <span className="material-symbols-outlined text-[16px] animate-spin">progress_activity</span>}
                        Simpan
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* 2FA Row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 p-6 rounded-2xl border border-white/5 bg-transparent">
                <div>
                  <p className="text-white font-medium text-[15px] mb-1">Autentikasi Dua Faktor (2FA)</p>
                  <p className="text-[#64748B] text-xs font-normal max-w-sm">Tambahkan lapisan keamanan ekstra dengan meminta kode verifikasi setiap kali Anda masuk.</p>
                </div>
                <div>
                  <button className="px-5 py-2.5 rounded-xl border border-white/10 bg-[#0F172A]/80 hover:bg-white/10 text-white text-sm font-medium transition-colors whitespace-nowrap shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00C2FF]/50">
                    Aktifkan 2FA
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </DashboardLayout>
  );
}
