import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'glass';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
}

export function Button({
    children,
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    className = '',
    ...props
}: ButtonProps) {
    const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-full outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-bg-base';

    const variants = {
        primary: 'bg-brand text-black hover:bg-brand-hover focus:ring-brand',
        secondary: 'bg-white/10 text-white hover:bg-white/20 focus:ring-white/50 border border-white/10',
        glass: 'glass-panel text-white hover:bg-white/10 focus:ring-white/30',
    };

    const sizes = {
        sm: 'text-sm px-4 py-2',
        md: 'text-base px-6 py-3',
        lg: 'text-lg px-8 py-4',
    };

    const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`;

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
}
