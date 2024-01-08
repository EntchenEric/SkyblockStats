import { Container, SimpleGrid } from '@mantine/core';
import { useState, useEffect } from 'react';

interface PetDataInterface {
  active: boolean;
  candyUsed: number;
  exp: number;
  heldItem: string;
  skin: string | null;
  tier: 'COMMON' | 'UNCOMMON' | 'RARE' | 'EPIC' | 'LEGENDARY' | 'MYTHIC';
  type: string;
  uniqueId: string;
  uuid: string | null;
}

export function PlayerPets({ profileData, uuid }: { profileData: any; uuid: string }) {
  const [petData, setPetData] = useState<Array<PetDataInterface>>(
    profileData.members[uuid.replaceAll('-', '')].pets_data.pets
  );

  const petDatas = petData.map((pet) => {
    return <Container mt={15}>{pet.type}</Container>;
  });

  return (
    <>
      {petData == undefined ? (
        <div>loading</div>
      ) : (
        <SimpleGrid cols={{ base: 1, sm: 4, lg: 7 }}>{petDatas}</SimpleGrid>
      )}
    </>
  );
}
