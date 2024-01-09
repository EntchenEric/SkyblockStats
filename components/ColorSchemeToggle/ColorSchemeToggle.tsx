'use client';

import { useEffect, useState } from 'react';
import { Button, MantineColorScheme, useMantineColorScheme } from '@mantine/core';
import { getCookie, setCookie } from 'cookies-next';

const colorSchemes = [
  { colorScheme: 'light', icon: '☀' },
  { colorScheme: 'dark', icon: '🌙' },
];

function getColorSchemeByType(type: string) {
  return colorSchemes.find((scheme) => scheme.colorScheme === type);
}

function getNextColorSchemeFromType(type: string) {
  const currentIndex = colorSchemes.findIndex((scheme) => scheme.colorScheme === type);
  const nextIndex = (currentIndex + 1) % colorSchemes.length;
  return colorSchemes[nextIndex];
}

export function ColorSchemeToggle() {
  const { setColorScheme } = useMantineColorScheme();
  const [theme, setTheme] = useState(colorSchemes[1]);

  useEffect(() => {
    const storedTheme = getCookie('theme');
    if (storedTheme !== undefined) {
      const colorScheme = getColorSchemeByType(storedTheme.toString());
      if (colorScheme !== undefined) {
        setTheme(colorScheme);
        setColorScheme(colorScheme.colorScheme as MantineColorScheme);
      }
    }
  }, []);

  const toggleTheme = (th: string) => {
    const nextTheme = getNextColorSchemeFromType(th);
    setColorScheme(nextTheme.colorScheme as MantineColorScheme);
    setTheme(nextTheme);
    setCookie('theme', nextTheme.colorScheme, {
      maxAge: 60 * 60 * 24 * 365.25, // Stored for 1 year
    });
  };

  return (
    <Button
      color={theme.colorScheme === 'dark' ? 'red' : 'violet'}
      size="lg"
      onClick={() => toggleTheme(theme.colorScheme)}
    >
      {getNextColorSchemeFromType(theme.colorScheme).icon}
    </Button>
  );
}
