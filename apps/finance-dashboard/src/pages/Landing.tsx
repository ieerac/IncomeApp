import { GlassCard } from "../components/ui/GlassCard";
import { Button } from "../components/ui/Button";
import { Link } from 'react-router-dom';

export default function Landing() {
    return (
        <div className="bg-[#0A0E12] text-white relative min-h-screen overflow-hidden flex flex-col font-sans">
            {/* Background Gradient Orbs */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand/30 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/30 rounded-full blur-[120px] pointer-events-none" />

            {/* Navigation */}
            <nav className="w-full relative z-10 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
                <div className="flex items-center gap-2">
                    {/* Logo Placeholder */}
                    <div className="w-8 h-8 rounded bg-brand flex items-center justify-center font-bold text-black">
                        M
                    </div>
                    <span className="text-xl font-bold tracking-tight">MoneyTracked</span>
                </div>
                <div className="flex items-center gap-4 hidden sm:flex">
                    <Link to="/login">
                        <Button variant="glass" size="sm">Sign In</Button>
                    </Link>
                    <Link to="/signup">
                        <Button variant="primary" size="sm">Get Started</Button>
                    </Link>
                </div>
            </nav>

            {/* Hero Section */}
            <main className="flex-1 relative z-10 flex flex-col items-center justify-center px-4 py-20 text-center max-w-5xl mx-auto w-full">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border-white/5 text-sm text-brand mb-8 md:mb-12">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
                    </span>
                    Next-Gen Financial Tracker
                </div>

                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
                    Master your finances with <br className="hidden md:block" />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand to-cyan-200">
                        collaborative precision.
                    </span>
                </h1>

                <p className="text-lg md:text-xl text-text-secondary max-w-2xl mb-10 leading-relaxed">
                    Track expenses, manage group budgets, and visualize your wealth in real-time with our beautiful, security-first fintech platform.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-20">
                    <Link to="/signup" className="w-full sm:w-auto">
                        <Button size="lg" className="w-full">Start for free</Button>
                    </Link>
                    <Link to="/login" className="w-full sm:w-auto">
                        <Button variant="secondary" size="lg" className="w-full">Sign In</Button>
                    </Link>
                </div>

                {/* Feature Cards Showcase */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left">
                    <GlassCard hoverEffect>
                        <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-brand">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" /><path d="M3 5v14a2 2 0 0 0 2 2h16v-5" /><path d="M18 12a2 2 0 0 0 0 4h4v-4Z" /></svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Smart Wallets</h3>
                        <p className="text-text-secondary text-sm leading-relaxed">Instantly sync your accounts and track every penny with automated categorization.</p>
                    </GlassCard>

                    <GlassCard hoverEffect>
                        <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-brand">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Group Budgets</h3>
                        <p className="text-text-secondary text-sm leading-relaxed">Collaborate with roommates, partners, or friends on shared expenses seamlessly.</p>
                    </GlassCard>

                    <GlassCard hoverEffect>
                        <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-brand">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" /></svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Deep Analytics</h3>
                        <p className="text-text-secondary text-sm leading-relaxed">Understand your spending habits with gorgeous, interactive charts and insights.</p>
                    </GlassCard>
                </div>
            </main>
        </div>
    );
}
