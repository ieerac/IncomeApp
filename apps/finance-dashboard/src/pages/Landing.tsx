
import { Link } from 'react-router-dom';

export default function Landing() {
    return (
        <div className="bg-[#0A0A0A] text-slate-300 relative min-h-screen overflow-x-hidden flex flex-col font-sans">
            {/* Background Glow */}
            <div className="absolute top-[-20%] left-[50%] -translate-x-1/2 w-[80%] h-[50%] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />

            {/* Navigation Header */}
            <header className="w-full relative z-20 border-b border-white/5 bg-[#0A0A0A]/50 backdrop-blur-md sticky top-0">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center font-bold text-white shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                            <span className="text-sm">V</span>
                        </div>
                        <span className="text-xl font-bold tracking-tight text-white">Vaultly</span>
                    </div>

                    <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
                        <a href="#features" className="hover:text-cyan-400 transition-colors">Features</a>
                        <a href="#pricing" className="hover:text-cyan-400 transition-colors">Pricing</a>
                        <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
                    </nav>

                    <div className="flex items-center gap-4">
                        <Link to="/login" className="hidden sm:block text-sm font-medium hover:text-white transition-colors">
                            Log in
                        </Link>
                        <Link to="/signup">
                            <button className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-sm font-semibold px-5 py-2 rounded-full transition-all shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                                Sign up free
                            </button>
                        </Link>
                    </div>
                </div>
            </header>

            <main className="flex-1 relative z-10 w-full">
                {/* Hero Section */}
                <section className="max-w-7xl mx-auto px-6 pt-20 pb-32 flex flex-col lg:flex-row items-center gap-16">
                    {/* Left Column (Text & CTA) */}
                    <div className="flex-1 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-medium text-cyan-400 mb-8">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                            </span>
                            V2.0 NOW LIVE
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 text-white leading-[1.1]">
                            Track Money Together,{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                                Effortlessly
                            </span>
                        </h1>

                        <p className="text-lg lg:text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed">
                            The smartest way to manage shared incomes, split bills, and crush group savings goals in real-time. No more awkward spreadsheets.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4 mb-8 justify-center lg:justify-start">
                            <Link to="/signup" className="w-full sm:w-auto">
                                <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-slate-900 font-semibold px-8 py-3.5 rounded-full hover:bg-slate-100 transition-colors">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#4285F4" /></svg>
                                    Get Started with Google
                                </button>
                            </Link>
                            <Link to="/signup" className="w-full sm:w-auto">
                                <button className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors">
                                    Sign Up with Email
                                </button>
                            </Link>
                        </div>

                        <div className="flex items-center gap-6 justify-center lg:justify-start text-sm text-slate-500">
                            <span className="flex items-center gap-1.5"><svg className="w-4 h-4 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Free forever plan</span>
                            <span className="flex items-center gap-1.5"><svg className="w-4 h-4 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>No credit card required</span>
                        </div>
                    </div>

                    {/* Right Column (CSS Dashboard Mockup) */}
                    <div className="flex-1 w-full max-w-lg lg:max-w-none relative perspective-1000">
                        {/* Decorative glow behind mockup */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[80%] bg-blue-500/20 rounded-full blur-[100px] pointer-events-none" />

                        <div className="relative z-10 w-full bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden transform rotate-y-[-5deg] rotate-x-[5deg] hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700">
                            {/* Mockup Header */}
                            <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/[0.02]">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                </div>
                                <div className="text-xs text-slate-500 font-medium">Dashboard Overview</div>
                            </div>

                            {/* Mockup Content */}
                            <div className="p-6">
                                <div className="flex justify-between items-end mb-8">
                                    <div>
                                        <div className="text-sm text-slate-400 mb-1">Total Group Balance</div>
                                        <div className="text-4xl font-bold text-white tracking-tight">$24,592.50</div>
                                    </div>
                                    <div className="text-emerald-400 text-sm font-medium flex items-center bg-emerald-400/10 px-2 py-1 rounded">
                                        <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                                        +12.5%
                                    </div>
                                </div>

                                {/* CSS Fake Chart */}
                                <div className="h-32 w-full flex items-end gap-2 mb-8 relative border-b border-white/5 pb-2">
                                    {[30, 45, 25, 60, 40, 75, 55, 90, 70, 100].map((height, i) => (
                                        <div key={i} className="flex-1 bg-gradient-to-t from-cyan-500/20 to-cyan-400/80 rounded-t-sm" style={{ height: `${height}%` }}></div>
                                    ))}
                                </div>

                                {/* Mockup Recent Activity */}
                                <div className="space-y-4">
                                    <div className="text-sm font-medium text-slate-300">Recent Activity</div>
                                    {[
                                        { name: "Netflix Subscription", amount: "-$15.99", time: "Today, 10:23 AM", color: "text-rose-400", icon: "N" },
                                        { name: "Sarah's Rent Transfer", amount: "+$850.00", time: "Yesterday", color: "text-emerald-400", icon: "S" },
                                        { name: "Grocery Split", amount: "-$42.50", time: "Yesterday", color: "text-rose-400", icon: "G" }
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-xs font-bold text-slate-300">{item.icon}</div>
                                                <div>
                                                    <div className="text-sm text-white font-medium">{item.name}</div>
                                                    <div className="text-xs text-slate-500">{item.time}</div>
                                                </div>
                                            </div>
                                            <div className={`text-sm font-medium ${item.color}`}>{item.amount}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section id="features" className="py-24 border-t border-white/5 bg-gradient-to-b from-transparent to-[#0A0A0A]">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Why Vaultly?</h2>
                            <p className="text-slate-400 max-w-2xl mx-auto">Seamlessly manage shared finances with features designed for modern living.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Feature 1 */}
                            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:bg-slate-900 transition-colors">
                                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-3">Multi-Access</h3>
                                <p className="text-slate-400 leading-relaxed">Invite partners or roommates to view and edit ledgers instantly, ensuring everyone is on the same page.</p>
                            </div>

                            {/* Feature 2 */}
                            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:bg-slate-900 transition-colors">
                                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-3">Real-Time Sync</h3>
                                <p className="text-slate-400 leading-relaxed">Changes reflect immediately across all connected devices, powered by our instant sync engine.</p>
                            </div>

                            {/* Feature 3 */}
                            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:bg-slate-900 transition-colors">
                                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-3">Smart Splits</h3>
                                <p className="text-slate-400 leading-relaxed">Automatically calculate who owes what based on percentage or fixed amounts with precision.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="border-t border-white/5 bg-[#050505] py-12">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center font-bold text-white text-xs">
                            V
                        </div>
                        <span className="text-lg font-bold text-white">Vaultly</span>
                    </div>

                    <div className="flex items-center gap-6 text-sm text-slate-500">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Contact Us</a>
                    </div>

                    <div className="flex items-center gap-4 text-slate-500">
                        <a href="#" className="hover:text-white transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                        </a>
                        <a href="#" className="hover:text-white transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                        </a>
                    </div>
                </div>
                <div className="text-center text-xs text-slate-600 mt-8">
                    &copy; 2026 Vaultly. All rights reserved.
                </div>
            </footer>
        </div>
    );
}

