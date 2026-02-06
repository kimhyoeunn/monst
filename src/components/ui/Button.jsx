import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function Button({
    children,
    variant = 'primary',
    className,
    ...props
}) {
    const baseStyles = "relative inline-flex items-center justify-center font-bold transition-transform active:scale-95 disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
        primary: "bg-gradient-to-b from-magic-blue to-[#0bbce0] text-white shadow-[0_4px_0_#0aa5c5] hover:brightness-110 pb-1 rounded-pill",
        success: "bg-gradient-to-b from-magic-green to-[#0ed654] text-white shadow-[0_4px_0_#0cb848] hover:brightness-110 pb-1 rounded-pill",
        secondary: "bg-white text-text-primary border-2 border-slate-200 shadow-[0_2px_0_#e2e8f0] pb-0.5 rounded-2xl hover:bg-slate-50",
        plain: "bg-transparent text-text-secondary hover:text-text-primary shadow-none p-0",
    };

    const sizes = {
        sm: "text-sm px-4 py-2 h-10",
        md: "text-base px-6 py-3 h-12",
        lg: "text-lg px-8 py-4 h-14",
        icon: "h-12 w-12 p-0 rounded-full",
    };

    const defaultSize = props.size || 'md';

    return (
        <button
            className={twMerge(baseStyles, variants[variant], sizes[defaultSize], className)}
            {...props}
        >
            {children}
        </button>
    );
}
