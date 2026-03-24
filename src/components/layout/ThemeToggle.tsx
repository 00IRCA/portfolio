'use client';

import { useTheme } from 'next-themes';
import { useSyncExternalStore } from 'react';

function useIsMounted() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
}

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  if (!useIsMounted())
    return (
      <button aria-label={'Switch to light mode'} className="text-xl">
        {'☀️'}
      </button>
    );

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="text-xl"
    >
      {isDark ? '☀️' : '🌙'}
    </button>
  );
}
