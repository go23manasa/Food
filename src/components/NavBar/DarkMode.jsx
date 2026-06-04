import React, { useEffect, useState } from 'react'
import { MdDarkMode, MdLightMode } from 'react-icons/md'

const DarkMode = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') ||
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    }
    return 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      document.body.style.backgroundColor = '#111827';
    } else {
      root.classList.remove('dark');
      document.body.style.backgroundColor = '';
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}
      aria-label="Toggle dark mode"
      className="w-9 h-9 flex items-center justify-center rounded-full
        bg-gray-100 dark:bg-gray-700
        hover:bg-primary/20 dark:hover:bg-primary/30
        text-gray-600 dark:text-yellow-300
        transition-all duration-300 hover:scale-110"
    >
      {theme === 'dark'
        ? <MdLightMode className="text-xl" />
        : <MdDarkMode className="text-xl" />
      }
    </button>
  );
};

export default DarkMode;
