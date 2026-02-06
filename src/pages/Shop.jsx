import React from 'react';
import { Button } from '../components/ui/Button';
import { Coins, Search } from 'lucide-react';
import Payment from '../components/Payment';

export default function Shop({ coins, setCoins }) {
    const items = [
        { id: 1, name: 'Growth Potion', price: 50, color: 'bg-pink-100', img: '🧪' },
        { id: 2, name: 'Party Hat', price: 120, color: 'bg-purple-100', img: '🎉' },
        { id: 3, name: 'Crystal ball', price: 300, color: 'bg-blue-100', img: '🔮' },
        { id: 4, name: 'Forest Bed', price: 500, color: 'bg-green-100', img: '🛏️' },
        { id: 5, name: 'Golden Egg', price: 1000, color: 'bg-yellow-100', img: '🥚' },
        { id: 6, name: 'Magic Wand', price: 750, color: 'bg-indigo-100', img: '🪄' },
    ];

    const handleBuy = (price) => {
        if (coins >= price) {
            setCoins(prev => prev - price);
            alert("Item purchased! (Inventory feature coming soon)");
        } else {
            alert("Not enough coins! Do more quests! 💰");
        }
    };

    const handlePaymentSuccess = (details) => {
        setCoins(prev => prev + 1000);
        // Alert handled inside Payment component, but we could add more UI feedback here
    };

    return (
        <div className="min-h-full bg-slate-50 px-6 pt-8 pb-4">
            {/* Header */}
            <div className="flex justify-between items-end mb-6">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">Magic Shop</h1>
                    <p className="text-gray-500 font-medium">Treat your pet!</p>
                </div>
                <div className="bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-sm flex items-center gap-2">
                    <Coins size={16} className="text-yellow-500 fill-yellow-500" />
                    <span className="font-bold text-gray-700">{coins}</span>
                </div>
            </div>

            {/* Special Offer: Buy Coins */}
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-5 rounded-3xl shadow-lg relative overflow-hidden mb-8 text-white">
                <div className="relative z-10">
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="font-bold text-lg">Special Offer</h3>
                        <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-0.5 rounded-full">BEST VALUE</span>
                    </div>
                    <p className="text-indigo-100 text-sm mb-4">Get 1000 Coins instantly!</p>

                    {/* PayPal Button */}
                    <Payment amount="4.99" onSuccess={handlePaymentSuccess} />
                </div>

                {/* Background Decor */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                <Coins size={64} className="absolute top-1/2 -right-4 -translate-y-1/2 text-white/20 rotate-12" />
            </div>

            {/* Items Grid */}
            <h3 className="font-bold text-gray-800 mb-4 px-1">Daily Items</h3>
            <div className="grid grid-cols-2 gap-4 pb-20">
                {items.map(item => (
                    <div key={item.id} className="bg-white p-4 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center gap-3 group hover:border-magic-blue/30 transition-colors">
                        {/* Image Container */}
                        <div className={`w-24 h-24 ${item.color} rounded-2xl flex items-center justify-center text-4xl shadow-inner`}>
                            {item.img}
                        </div>

                        <div className="text-center w-full">
                            <h3 className="font-bold text-gray-700 text-sm mb-1">{item.name}</h3>
                            <div className="flex items-center justify-center gap-1 mb-3">
                                <Coins size={12} className="text-yellow-500 fill-yellow-500" />
                                <span className="text-xs font-bold text-gray-500">{item.price}</span>
                            </div>

                            <Button
                                variant={coins >= item.price ? 'primary' : 'secondary'}
                                size="sm"
                                className="w-full text-xs h-9"
                                onClick={() => handleBuy(item.price)}
                                disabled={coins < item.price}
                            >
                                {coins >= item.price ? 'Buy' : 'Need Coins'}
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
