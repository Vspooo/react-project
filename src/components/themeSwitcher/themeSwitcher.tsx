"use client"
import { useEffect, useState } from 'react';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

const ThemeSwitcher = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
        if (savedTheme) {
            setTheme(savedTheme);
            document.body.classList.add(savedTheme + '-theme');
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        document.body.classList.remove(theme + '-theme');
        document.body.classList.add(newTheme + '-theme');
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <button onClick={toggleTheme}>
            <LightbulbIcon className={"bulbIcon"}></LightbulbIcon>
        </button>
    );
};

export default ThemeSwitcher;
