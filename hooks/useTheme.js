import { useState, useEffect } from 'react';

export const useTheme = () => {
    // State untuk menyimpan theme saat ini
    const [theme, setTheme] = useState('light');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        // Cek apakah ada theme yang tersimpan di localStorage
        const savedTheme = localStorage.getItem('theme');

        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.classList.toggle('dark', savedTheme === 'dark');
        } else {
            // Jika tidak ada theme tersimpan, cek preferensi sistem
            const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            const initialTheme = systemPrefersDark ? 'dark' : 'light';
            setTheme(initialTheme);
            document.documentElement.classList.toggle('dark', initialTheme === 'dark');
            localStorage.setItem('theme', initialTheme);
        }

        // Listen untuk perubahan preferensi sistem
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e) => {
            // Hanya update jika user belum set manual preference
            const savedTheme = localStorage.getItem('theme');
            if (!savedTheme) {
                const newTheme = e.matches ? 'dark' : 'light';
                setTheme(newTheme);
                document.documentElement.classList.toggle('dark', newTheme === 'dark');
            }
        };

        mediaQuery.addEventListener('change', handleChange);

        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    // Function untuk toggle theme
    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
        localStorage.setItem('theme', newTheme);
    };

    // Function untuk set theme secara langsung
    const setThemeMode = (newTheme) => {
        setTheme(newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
        localStorage.setItem('theme', newTheme);
    };

    return {
        theme,
        toggleTheme,
        setThemeMode,
        isDark: theme === 'dark',
        isLight: theme === 'light',
        mounted // Untuk mencegah hydration mismatch di SSR
    };
};