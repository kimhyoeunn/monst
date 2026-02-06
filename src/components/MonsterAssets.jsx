import React from 'react';

export const DragonEgg = ({ className }) => (
    <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="drugonEggGradient" x1="100" y1="20" x2="100" y2="180" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#FDE68A" />
                <stop offset="100%" stopColor="#D97706" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
        </defs>

        {/* Main Egg Shape */}
        <path d="M100 20 C60 20 30 80 30 130 C30 170 60 190 100 190 C140 190 170 170 170 130 C170 80 140 20 100 20 Z" fill="url(#drugonEggGradient)" stroke="#B45309" strokeWidth="4" />

        {/* Scales Pattern */}
        <path d="M70 60 Q80 70 90 60" stroke="#B45309" strokeWidth="3" opacity="0.5" />
        <path d="M110 60 Q120 70 130 60" stroke="#B45309" strokeWidth="3" opacity="0.5" />
        <path d="M50 100 Q60 110 70 100" stroke="#B45309" strokeWidth="3" opacity="0.5" />
        <path d="M90 100 Q100 110 110 100" stroke="#B45309" strokeWidth="3" opacity="0.5" />
        <path d="M130 100 Q140 110 150 100" stroke="#B45309" strokeWidth="3" opacity="0.5" />
        <path d="M70 140 Q80 150 90 140" stroke="#B45309" strokeWidth="3" opacity="0.5" />
        <path d="M110 140 Q120 150 130 140" stroke="#B45309" strokeWidth="3" opacity="0.5" />

        {/* Shine */}
        <ellipse cx="80" cy="60" rx="15" ry="25" fill="white" opacity="0.4" transform="rotate(-20 80 60)" />

        {/* Cracks (Hidden for now, could animate later) */}
    </svg>
);

export const DragonChild = ({ className }) => (
    <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Tiny Wings */}
        <path d="M140 100 Q170 70 160 110 L140 120 Z" fill="#6EE7B7" stroke="#059669" strokeWidth="2" />

        {/* Body */}
        <ellipse cx="100" cy="130" rx="40" ry="45" fill="#34D399" />
        <circle cx="100" cy="90" r="35" fill="#34D399" />

        {/* Belly */}
        <ellipse cx="100" cy="135" rx="25" ry="30" fill="#A7F3D0" />

        {/* Eyes (Cute & Big) */}
        <circle cx="85" cy="85" r="10" fill="white" />
        <circle cx="115" cy="85" r="10" fill="white" />
        <circle cx="85" cy="85" r="5" fill="#1E293B" />
        <circle cx="115" cy="85" r="5" fill="#1E293B" />
        <circle cx="87" cy="83" r="2" fill="white" />
        <circle cx="117" cy="83" r="2" fill="white" />

        {/* Blush */}
        <ellipse cx="70" cy="100" rx="5" ry="3" fill="#F472B6" opacity="0.6" />
        <ellipse cx="130" cy="100" rx="5" ry="3" fill="#F472B6" opacity="0.6" />

        {/* Tiny Horns */}
        <path d="M80 60 L85 75 L75 75 Z" fill="#FDE68A" />
        <path d="M120 60 L125 75 L115 75 Z" fill="#FDE68A" />

        {/* Smile */}
        <path d="M95 95 Q100 100 105 95" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" />

        {/* Tail */}
        <path d="M130 150 Q160 160 150 130" stroke="#34D399" strokeWidth="15" strokeLinecap="round" />
    </svg>
);

export const DragonAdult = ({ className }) => (
    <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Large Wings */}
        <path d="M40 80 Q0 20 40 120 L70 110 Z" fill="#EF4444" stroke="#991B1B" strokeWidth="3" />
        <path d="M160 80 Q200 20 160 120 L130 110 Z" fill="#EF4444" stroke="#991B1B" strokeWidth="3" />

        {/* Body */}
        <path d="M70 170 L60 80 Q100 40 140 80 L130 170 Q100 190 70 170" fill="#F87171" stroke="#991B1B" strokeWidth="3" />

        {/* Belly Scales */}
        <path d="M85 170 L80 90 Q100 85 120 90 L115 170" fill="#FECACA" />
        <path d="M82 110 H118" stroke="#EF4444" strokeWidth="2" opacity="0.5" />
        <path d="M81 130 H119" stroke="#EF4444" strokeWidth="2" opacity="0.5" />
        <path d="M83 150 H117" stroke="#EF4444" strokeWidth="2" opacity="0.5" />

        {/* Head */}
        <ellipse cx="100" cy="70" rx="35" ry="30" fill="#F87171" stroke="#991B1B" strokeWidth="3" />

        {/* Eyes (Sharp) */}
        <path d="M80 65 L90 70 L80 75 Z" fill="#FEF08A" />
        <path d="M120 65 L110 70 L120 75 Z" fill="#FEF08A" />
        <circle cx="84" cy="70" r="2" fill="black" />
        <circle cx="116" cy="70" r="2" fill="black" />

        {/* Horns */}
        <path d="M80 20 L90 50 L70 50 Z" fill="#FDE68A" stroke="#B45309" strokeWidth="2" />
        <path d="M120 20 L130 50 L110 50 Z" fill="#FDE68A" stroke="#B45309" strokeWidth="2" />

        {/* Smoke/Fire Effect */}
        <path d="M100 85 Q90 95 100 100 Q110 95 100 85" fill="#1E293B" opacity="0.3" />
    </svg>
);
