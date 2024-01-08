import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { theme } from '../theme';
import {Header} from '../components/Header/Header';

const getRandomFunnyDescription = () => {
  const descriptions = [
    "You are a bit smelly rn ngl :/",
    "I think you should go outside and touch some grass",
    "You should probably get some sleep",
    "I love Femboys",
    "You look cute today",
    "Maybe you should get a life",
    "Lowballing 10 Coins! /visit me",
  ]

  return descriptions[Math.floor(Math.random() * descriptions.length)];
};

export const metadata = {
  title: 'Skyblock Stats',
  description: getRandomFunnyDescription(),
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <Header />
          {children}
          </MantineProvider>
      </body>
    </html>
  );
}
