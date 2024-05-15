// src/OnlineStatus.js
import React, { useState, useEffect } from 'react';
import './App.css'

const OnlineStatus = () => {
    const [isOnline, setIsOnline] = useState(navigator.onLine);

    const updateOnlineStatus = () => {
        setIsOnline(navigator.onLine);
    };

    useEffect(() => {
        window.addEventListener('online', updateOnlineStatus);
        window.addEventListener('offline', updateOnlineStatus);

        return () => {
            window.removeEventListener('online', updateOnlineStatus);
            window.removeEventListener('offline', updateOnlineStatus);
        };
    }, []);

    return (
        <div className={`status-container ${isOnline ? 'online' : 'offline'}`}>
            <h1>{isOnline ? 'You are online' : 'You are offline'}</h1>
        </div>
    );
};

export default OnlineStatus;
