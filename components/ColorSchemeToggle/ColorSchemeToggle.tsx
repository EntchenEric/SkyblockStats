'use client';

import { useEffect, useState } from 'react';
import { Button, Group, MantineColorScheme, useMantineColorScheme } from '@mantine/core';
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
    console.log('Page Rendered !!');
    const cookiesAllowed = getCookie('cookiesAllowed');
    if (cookiesAllowed === undefined) {
      const storedTheme = getCookie('theme');
      if (storedTheme != undefined) {
        const colorScheme = getColorSchemeByType(storedTheme.toString());
        if (colorScheme != undefined) {
          setTheme(colorScheme);
        }
        setColorScheme(theme.colorScheme as MantineColorScheme);
      }
      console.log(getNextColorSchemeFromType('light'));
      console.log(getNextColorSchemeFromType('dark'));
    }
  }, []);

  const toggleTheme = (th: string) => {
    console.log('Current Theme ' + theme.colorScheme);
    console.log('Theme Changed to ' + th);
    const nextTheme = getNextColorSchemeFromType(th);
    setColorScheme(nextTheme.colorScheme as MantineColorScheme);
    setTheme(nextTheme);
    setCookie('theme', nextTheme.colorScheme, {
      maxAge: 60 * 60 * 24 * 365.25, //Stored 1 year
      path: '/',
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
