import React from 'react';
import { Check, Coins, Droplets, Footprints, Moon } from 'lucide-react';
import { clsx } from 'clsx';

export default function Quests({ coins, setCoins }) {
    const [quests, setQuests] = React.useState([
        { id: 1, title: 'Drink Water', icon: Droplets, color: 'text-blue-500', bg: 'bg-blue-100', reward: 10, completed: false },
        { id: 2, title: 'Morning Run 30m', icon: Footprints, color: 'text-orange-500', bg: 'bg-orange-100', reward: 50, completed: false },
        { id: 3, title: 'Meditation', icon: Moon, color: 'text-purple-500', bg: 'bg-purple-100', reward: 20, completed: false },
    ]);

    const handleComplete = (id) => {
        setQuests(quests.map(q => {
            if (q.id === id && !q.completed) {
                setCoins(prev => prev + q.reward);
                return { ...q, completed: true };
            }
            return q;
        }));
    };

    const completedCount = quests.filter(q => q.completed).length;
    const totalCount = quests.length;
    const progressPercent = (completedCount / totalCount) * 100;

    return (
        <div className="px-6 pt-8 pb-4 min-h-full bg-slate-50">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Daily Quests</h1>
            <p className="text-gray-500 mb-6 font-medium">Complete tasks to grow your pet!</p>

            {/* Daily Progress */}
            <div className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100 mb-8">
                <div className="flex justify-between text-sm font-bold text-gray-600 mb-2">
                    <span>Today's Progress</span>
                    <span>{Math.round(progressPercent)}%</span>
                </div>
                <div className="h-4 bg-slate-100 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-gradient-to-r from-magic-green to-emerald-400 transition-all duration-700 ease-out"
                        style={{ width: `${progressPercent}%` }}
                    />
                </div>
            </div>

            {/* Quest List */}
            <div className="space-y-4">
                {quests.map(quest => (
                    <div
                        key={quest.id}
                        onClick={() => handleComplete(quest.id)}
                        className={clsx(
                            "group relative overflow-hidden bg-white p-4 rounded-2xl border-b-4 transition-all duration-200 cursor-pointer select-none",
                            quest.completed
                                ? "border-slate-200 opacity-60 grayscale-[0.5]"
                                : "border-slate-200 shadow-sm hover:-translate-y-1 hover:shadow-md hover:border-magic-blue/30"
                        )}
                    >
                        <div className="flex items-center gap-4">
                            {/* Icon Box */}
                            <div className={clsx("w-14 h-14 rounded-2xl flex items-center justify-center shrink-0", quest.bg)}>
                                <quest.icon size={28} className={quest.color} />
                            </div>

                            {/* Text Info */}
                            <div className="flex-1">
                                <h3 className={clsx("font-bold text-lg", quest.completed ? "text-gray-400 line-through" : "text-gray-800")}>
                                    {quest.title}
                                </h3>
                                <div className="flex items-center gap-1 mt-1">
                                    <div className="w-4 h-4 rounded-full bg-yellow-100 flex items-center justify-center border border-yellow-200">
                                        <Coins size={10} className="text-yellow-600 fill-yellow-600" />
                                    </div>
                                    <span className="text-xs font-bold text-yellow-600 pb-0.5">+{quest.reward}</span>
                                </div>
                            </div>

                            {/* Checkbox */}
                            <div className={clsx(
                                "w-8 h-8 rounded-xl border-2 flex items-center justify-center transition-colors",
                                quest.completed ? "bg-magic-green border-magic-green" : "border-slate-300 group-hover:border-magic-blue"
                            )}>
                                {quest.completed && <Check size={20} className="text-white stroke-[4]" />}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
