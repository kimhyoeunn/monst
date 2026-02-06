import React, { useState } from 'react';
import AppLayout from './layouts/AppLayout';
import Home from './pages/Home';
import Quests from './pages/Quests';
import Shop from './pages/Shop';
import Profile from './pages/Profile';

function App() {
    const [activeTab, setActiveTab] = useState('home');
    const [coins, setCoins] = useState(100);
    const [level, setLevel] = useState(1);
    const [xp, setXp] = useState(40);

    // Check level up logic
    if (xp >= 100) {
        setXp(xp - 100);
        setLevel(level + 1);
    }

    const renderContent = () => {
        switch (activeTab) {
            case 'home':
                return <Home coins={coins} setCoins={setCoins} level={level} xp={xp} setXp={setXp} />;
            case 'quests':
                return <Quests coins={coins} setCoins={setCoins} />;
            case 'shop':
                return <Shop coins={coins} setCoins={setCoins} />;
            case 'profile':
                return <Profile level={level} xp={xp} />;
            default:
                return <Home />;
        }
    };

    return (
        <AppLayout activeTab={activeTab} onTabChange={setActiveTab}>
            {renderContent()}
        </AppLayout>
    );
}

export default App;
