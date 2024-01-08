"use client"
import { Welcome } from '../components/Welcome/Welcome';
import { PlayerCard } from '@/components/PlayerCard/PlayerCard';
export default function HomePage() {
  return (
    <>
      <Welcome />
      <PlayerCard name="name" badge="badge" />
    </>
  );
}
