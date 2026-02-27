import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="relative flex items-center justify-between w-14 h-7 p-1 rounded-full bg-slate-200 dark:bg-slate-800 transition-colors duration-500 overflow-hidden"
            aria-label="Toggle Theme"
        >
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 dark:from-violet-500/10 dark:to-fuchsia-500/10"
                initial={false}
                animate={{ opacity: theme === 'dark' ? 1 : 0 }}
            />

            <motion.div
                className="z-10 flex items-center justify-center w-5 h-5 rounded-full bg-white dark:bg-slate-300 shadow-sm"
                animate={{
                    x: theme === 'dark' ? 28 : 0,
                    rotate: theme === 'dark' ? 360 : 0
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
                {theme === 'dark' ? (
                    <Moon size={12} className="text-slate-900" />
                ) : (
                    <Sun size={12} className="text-amber-500" />
                )}
            </motion.div>

            <div className="flex-1 flex justify-around items-center px-1">
                <Sun size={10} className={`${theme === 'dark' ? 'opacity-0' : 'opacity-100'} text-slate-400 transition-opacity duration-300`} />
                <Moon size={10} className={`${theme === 'light' ? 'opacity-0' : 'opacity-100'} text-slate-400 transition-opacity duration-300`} />
            </div>
        </button>
    );
}
