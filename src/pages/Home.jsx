import React, { useState } from 'react';
import { Button } from '../components/ui/Button';
import { Coins, Sparkles, Zap } from 'lucide-react';
import { DragonEgg, DragonChild, DragonAdult } from '../components/MonsterAssets';

export default function Home({ coins, setCoins, level, xp, setXp }) {
    const [isNurturing, setIsNurturing] = useState(false);

    const handleNurture = () => {
        setIsNurturing(true);
        setXp(prev => prev + 10);
        setTimeout(() => setIsNurturing(false), 500);
    };

    const progress = (xp % 100);

    // 3-Stage Dragon Growth System
    const getMonsterStage = (level) => {
        if (level <= 4) return { name: "Mystic Dragon Egg", Component: DragonEgg, color: "from-amber-100 to-orange-100" };
        if (level <= 9) return { name: "Baby Dragon", Component: DragonChild, color: "from-green-100 to-emerald-100" };
        return { name: "Elder Dragon", Component: DragonAdult, color: "from-red-100 to-rose-100" };
    };

    const stage = getMonsterStage(level);
    const MonsterComponent = stage.Component;

    return (
        <div className="relative h-full flex flex-col items-center px-6 pt-8 bg-gradient-to-b from-cyan-50 to-blue-100 min-h-full">
            {/* Header Stats */}
            <div className="w-full flex justify-between items-center mb-8 z-10">
                <div className="flex flex-col">
                    <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Level {level}</span>
                    <div className="w-32 h-3 bg-gray-200 rounded-full mt-1 overflow-hidden border border-white/50">
                        <div
                            className="h-full bg-gradient-to-r from-magic-blue to-magic-green transition-all duration-500"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur px-4 py-2 rounded-full shadow-sm border border-white/50">
                    <Coins className="text-yellow-400 fill-yellow-400" size={20} />
                    <span className="font-bold text-lg text-gray-700">{coins}</span>
                </div>
            </div>

            {/* Main Character Display */}
            <div className="flex-1 flex flex-col items-center justify-center -mt-10 relative w-full">
                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-magic-blue/20 blur-3xl rounded-full" />

                {/* Growth Stage Name */}
                <div className="mb-6 bg-white/60 backdrop-blur-sm px-4 py-1 rounded-full border border-white/40">
                    <span className="text-magic-blue font-bold tracking-wider text-sm uppercase">{stage.name}</span>
                </div>

                {/* Floating Animation */}
                <div className={`relative transition-transform duration-300 ${isNurturing ? 'scale-110' : 'animate-[float_6s_ease-in-out_infinite]'}`}>
                    <div className={`w-60 h-72 bg-gradient-to-br ${stage.color} rounded-[50px] shadow-2xl border-4 border-white flex items-center justify-center relative overflow-hidden group`}>
                        <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent opacity-50" />

                        {/* SVG Character */}
                        <div className="w-48 h-48 drop-shadow-lg filter transition-transform group-hover:scale-110 duration-300">
                            <MonsterComponent className="w-full h-full" />
                        </div>

                        {/* Sparkles Overlay */}
                        <Sparkles className="absolute top-10 right-10 text-white/80 w-6 h-6 animate-pulse" />
                    </div>
                </div>

                {/* Action Area */}
                <div className="mt-12 w-full max-w-xs space-y-4 text-center z-10">
                    <p className="text-gray-500 font-medium text-sm animate-pulse">
                        {level < 3 ? "The egg is humming softly..." : "Your monster is waiting for love!"}
                    </p>
                    <Button
                        onClick={handleNurture}
                        variant="primary"
                        size="lg"
                        className="w-full flex items-center gap-2 text-xl shadow-lg shadow-magic-blue/30 hover:shadow-magic-blue/50"
                    >
                        <Zap size={24} className="fill-current" />
                        Nurture
                    </Button>
                </div>
            </div>
        </div>
    );
}
