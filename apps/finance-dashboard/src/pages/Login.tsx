import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSignIn, useGoogleSignIn } from '../hooks/useAuth';

const Login = () => {
  const { signIn } = useSignIn();
  const { signInWithGoogle } = useGoogleSignIn();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGoogleSignIn = async () => {
    setError(null);
    setIsGoogleLoading(true);
    try {
      await signInWithGoogle();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Google sign in failed. Please try again.');
    } finally {
      setIsGoogleLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      await signIn(email, password, rememberMe);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Sign in failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-[#0A0E12] font-display text-white min-h-screen flex flex-col relative overflow-x-hidden transition-colors duration-300">
      {/* Background Gradient Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="layout-container flex h-full grow flex-col relative z-10 justify-center items-center p-4">
        {/* Login Card */}
        <div className="w-full max-w-[480px] glass-panel border border-[#00C2FF]/20 backdrop-blur-md">
          <div className="p-8 sm:p-10 flex flex-col gap-6">
            {/* Header / Logo */}
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-2">
                <span className="material-symbols-outlined text-[#00C2FF] text-3xl">insights</span>
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-white">Welcome Back</h1>
              <p className="text-[#94A3B8] text-sm font-normal">Please enter your details to sign in to MoneyTracked.</p>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-500/10 border border-red-500/30 text-red-500 px-4 py-3 rounded-xl text-sm">
                {error}
              </div>
            )}

            {/* Form */}
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              {/* Email Input */}
              <div className="flex flex-col gap-2">
                <label className="text-white text-sm font-medium ml-1">Email Address</label>
                <input
                  className="glass-input flex w-full rounded-xl h-12 px-5 text-base font-normal transition-shadow"
                  placeholder="name@company.com"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isLoading}
                />
              </div>

              {/* Password Input */}
              <div className="flex flex-col gap-2">
                <label className="text-white text-sm font-medium ml-1">Password</label>
                <div className="relative flex w-full items-center">
                  <input
                    className="glass-input flex w-full rounded-xl h-12 pl-5 pr-12 text-base font-normal transition-shadow"
                    placeholder="Enter your password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    disabled={isLoading}
                  />
                  <button
                    className="absolute right-4 text-[#64748B] hover:text-[#00C2FF] transition-colors flex items-center justify-center"
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: '20px' }}
                    >
                      {showPassword ? 'visibility_off' : 'visibility'}
                    </span>
                  </button>
                </div>
              </div>

              {/* Controls: Remember Me & Forgot Password */}
              <div className="flex flex-wrap items-center justify-between gap-3 mt-1">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    className="h-5 w-5 rounded border-white/20 bg-transparent text-[#00C2FF] checked:bg-[#00C2FF] checked:border-[#00C2FF] focus:ring-0 focus:ring-offset-0 transition-colors cursor-pointer"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    disabled={isLoading}
                  />
                  <span className="text-[#94A3B8] text-sm font-normal group-hover:text-white transition-colors">Remember for 30 days</span>
                </label>
                <a className="text-sm font-medium text-[#94A3B8] hover:text-[#00C2FF] transition-colors" href="#">Forgot password?</a>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="mt-2 w-full h-12 bg-[#00C2FF] hover:bg-[#00A3E0] text-black text-base font-bold rounded-xl transition-all shadow-lg shadow-[#00C2FF]/20 hover:shadow-[#00C2FF]/40 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <span className="material-symbols-outlined animate-spin text-xl">progress_activity</span>
                    Signing in...
                  </>
                ) : (
                  'Sign In'
                )}
              </button>

              {/* Divider */}
              <div className="flex items-center gap-4 mt-1">
                <div className="flex-1 h-px bg-white/10"></div>
                <span className="text-[#64748B] text-xs font-medium uppercase tracking-wider">or continue with</span>
                <div className="flex-1 h-px bg-white/10"></div>
              </div>

              {/* Google Sign In Button */}
              <button
                type="button"
                onClick={handleGoogleSignIn}
                disabled={isLoading || isGoogleLoading}
                className="w-full h-12 bg-white/5 border border-white/10 hover:bg-white/10 text-white text-base font-medium rounded-xl transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isGoogleLoading ? (
                  <>
                    <span className="material-symbols-outlined animate-spin text-xl">progress_activity</span>
                    Connecting...
                  </>
                ) : (
                  <>
                    <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                    </svg>
                    Sign in with Google
                  </>
                )}
              </button>

            </form>

            {/* Footer */}
            <div className="text-center">
              <p className="text-[#94A3B8] text-sm">
                Don't have an account?
                <Link className="text-[#00C2FF] font-medium hover:underline ml-1" to="/signup">Sign up</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
