'use client';
import { PlayerCardGrid } from '@/components/PlayerCardGrid/PlayerCardGrid';
import { Welcome } from '../components/Welcome/Welcome';
import { SearchBar } from '../components/SearchBar/SearchBar';
import { Container } from '@mantine/core';
import Link from 'next/link';

export default function HomePage() {
  const players = [
    {
      name: 'elwood24',
      badge: 'Developer',
    },
    {
      name: 'EntchenEric',
      badge: 'Developer',
    },
  ];
  return (
    <>
      <Container size="lg">
        <Welcome />
      </Container>
      <Container mt={10} size="lg">
        <SearchBar />
      </Container>
      <Container mt={20} size="lg">
        <PlayerCardGrid players={players} />
      </Container>
    </>
  );
}
