import React from 'react';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    hoverEffect?: boolean;
}

export function GlassCard({ children, className = '', hoverEffect = false, ...props }: GlassCardProps) {
    const baseClasses = 'glass-panel p-6';
    const hoverClasses = hoverEffect ? 'hover:-translate-y-1 hover:shadow-cyan-500/10 transition-transform duration-300' : '';

    return (
        <div className={`${baseClasses} ${hoverClasses} ${className}`} {...props}>
            {children}
        </div>
    );
}
