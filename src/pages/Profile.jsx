import React from 'react';
import { Button } from '../components/ui/Button';
import { Award, Calendar, ChevronRight, Settings, User } from 'lucide-react';

export default function Profile({ level, xp, joinDate = "Oct 2023" }) {
    // Mock achievements
    const achievements = [
        { id: 1, name: "First Step", icon: "🦶", date: "2023-10-12" },
        { id: 2, name: "Hydrated", icon: "💧", date: "2023-10-15" },
        { id: 3, name: "Early Bird", icon: "🌅", date: "2023-10-20" },
    ];

    return (
        <div className="min-h-full bg-slate-50 px-6 pt-8 pb-4">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Profile</h1>

            {/* Profile Card */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 mb-6 flex flex-col items-center">
                <div className="w-24 h-24 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full flex items-center justify-center text-4xl mb-4 border-4 border-white shadow-md relative group">
                    🧑‍💻
                    <div className="absolute bottom-0 right-0 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm border border-slate-100 cursor-pointer hover:bg-slate-50">
                        <Settings size={14} className="text-gray-500" />
                    </div>
                </div>
                <h2 className="text-xl font-bold text-gray-800">Exercise Hero</h2>
                <p className="text-gray-400 text-sm font-medium mb-4">Joined {joinDate}</p>

                <div className="flex w-full gap-4">
                    <div className="flex-1 bg-slate-50 rounded-2xl p-3 text-center">
                        <span className="block text-gray-400 text-xs font-bold uppercase tracking-wider">Level</span>
                        <span className="text-2xl font-black text-gray-800">{level}</span>
                    </div>
                    <div className="flex-1 bg-slate-50 rounded-2xl p-3 text-center">
                        <span className="block text-gray-400 text-xs font-bold uppercase tracking-wider">Total XP</span>
                        <span className="text-2xl font-black text-gray-800">{xp + (level * 100)}</span>
                    </div>
                </div>
            </div>

            {/* Achievements */}
            <div className="mb-6">
                <div className="flex justify-between items-center mb-3">
                    <h3 className="text-lg font-bold text-gray-700">Achievements</h3>
                    <Button variant="ghost" size="sm" className="text-magic-blue">View All</Button>
                </div>
                <div className="bg-white p-4 rounded-3xl shadow-sm border border-slate-100 space-y-4">
                    {achievements.map(achievement => (
                        <div key={achievement.id} className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-sky-50 rounded-2xl flex items-center justify-center text-xl">
                                {achievement.icon}
                            </div>
                            <div className="flex-1">
                                <h4 className="font-bold text-gray-800">{achievement.name}</h4>
                                <p className="text-gray-400 text-xs">Unlocked on {achievement.date}</p>
                            </div>
                            <Award size={20} className="text-yellow-400" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Settings Links */}
            <div className="space-y-2">
                {['Account Settings', 'Notifications', 'Help & Support'].map((item) => (
                    <button key={item} className="w-full bg-white p-4 rounded-2xl border border-slate-100 flex items-center justify-between text-gray-600 font-medium hover:bg-slate-50 transition-colors">
                        <span className="flex items-center gap-3">
                            {item === 'Account Settings' && <User size={18} />}
                            {item === 'Notifications' && <Calendar size={18} />} // using Calendar as placeholder
                            {item === 'Help & Support' && <Award size={18} />} // using Award as placeholder
                            {item}
                        </span>
                        <ChevronRight size={18} className="text-gray-300" />
                    </button>
                ))}
            </div>
        </div>
    );
}
