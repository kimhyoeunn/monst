import React from 'react';
import { Home, ListTodo, ShoppingBag, User } from 'lucide-react';

export default function AppLayout({ children, activeTab, onTabChange }) {
    const navItems = [
        { id: 'home', icon: Home, label: 'Home' },
        { id: 'quests', icon: ListTodo, label: 'Quests' },
        { id: 'shop', icon: ShoppingBag, label: 'Shop' },
        { id: 'profile', icon: User, label: 'Profile' },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white max-w-md mx-auto relative shadow-2xl overflow-hidden flex flex-col">
            {/* Main Content Area */}
            <main className="flex-1 overflow-y-auto pb-24 scrollbar-hide">
                {children}
            </main>

            {/* Bottom Navigation */}
            <nav className="absolute bottom-6 left-4 right-4 bg-white/90 backdrop-blur-md border border-white/50 rounded-3xl shadow-xl h-20 flex items-center justify-around px-2 z-50">
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => onTabChange(item.id)}
                        className={`flex flex-col items-center justify-center w-16 h-16 rounded-2xl transition-all duration-300 ${activeTab === item.id
                                ? 'bg-magic-blue/10 text-magic-blue -translate-y-2 shadow-lg shadow-magic-blue/20'
                                : 'text-gray-400 hover:text-gray-600'
                            }`}
                    >
                        <item.icon
                            size={24}
                            strokeWidth={activeTab === item.id ? 3 : 2}
                            className={`transition-transform duration-300 ${activeTab === item.id ? 'scale-110' : ''}`}
                        />
                        <span className={`text-[10px] font-bold mt-1 transition-opacity duration-300 ${activeTab === item.id ? 'opacity-100' : 'opacity-0 hidden'}`}>
                            {item.label}
                        </span>
                    </button>
                ))}
            </nav>
        </div>
    );
}
