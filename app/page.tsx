"use client"
import { PlayerCardGrid } from '@/components/PlayerCardGrid/PlayerCardGrid';
import { Welcome } from '../components/Welcome/Welcome';
import { PlayerCard } from '@/components/PlayerCard/PlayerCard';
export default function HomePage() {
  const players = [
    {
      name: "Elwood24",
      badge: "Developer",
    },
    {
      name: "EntchenEric",
      badge: "Developer",
    }
  ]
  return (
    <>
      <Welcome />
      <PlayerCardGrid players={players}/>
    </>
  );
}
