import { Container, SimpleGrid } from '@mantine/core';
import { useState, useEffect } from 'react';
import { PetDataInterface } from '@/types/skyblockItem';

export function PlayerPets({ profileData, uuid }: { profileData: any; uuid: string }) {
  const [petData, setPetData] = useState(
    profileData.members[uuid.replaceAll('-', '')].pets_data.pets
  );
  const [pets, setPets] = useState<Array<PetDataInterface>>([]);
  useEffect(() => {
    petContent();
  }, []);

  const petContent = () => {
    const parsedPets: Array<PetDataInterface> = [];
    // const xpToLevelCom = {"1":0, "2":100, "3":210, "4":}
    for (const key in petData) {
      const pet = petData[key];
      const parsedPet: any = {
        active: pet.active,
        candyUsed: pet.candyUsed,
        exp: pet.exp,
        heldItem: pet.heldItem,
        tier: pet.tier,
      };
      switch (pet.type) {
        default:
          console.log(pet.type);
          parsedPet['name'] = 'Pet not found!';
          break;

        case 'GHOUL':
          parsedPet['name'] = `Ghoul`;
          parsedPets.push(parsedPet);
          break;

        case 'WITHER_SKELETON':
          parsedPet['name'] = `Wither Skeleton`;
          parsedPets.push(parsedPet);
          break;

        case 'TIGER':
          parsedPet['name'] = 'Tiger';
          parsedPets.push(parsedPet);
          break;

        case 'WOLF':
          parsedPet['name'] = 'Wolf';
          parsedPets.push(parsedPet);
          break;

        case 'MEGALODON':
          parsedPet['name'] = 'Megalodon';
          parsedPets.push(parsedPet);
          break;

        case 'MONKEY':
          parsedPet['name'] = 'Monkey';
          parsedPets.push(parsedPet);
          break;

        case 'MOOSHROOM_COW':
          parsedPet['name'] = 'Mooshroom Cow';
          parsedPets.push(parsedPet);
          break;

        case 'OCELOT':
          parsedPet['name'] = 'Ocelot';
          parsedPets.push(parsedPet);
          break;

        case 'PARROT':
          parsedPet['name'] = 'Parrot';
          parsedPets.push(parsedPet);
          break;

        case 'PHOENIX':
          parsedPet['name'] = 'Phoenix';
          parsedPets.push(parsedPet);
          break;

        case 'PIG':
          parsedPet['name'] = 'Pig';
          parsedPets.push(parsedPet);
          break;

        case 'RABBIT':
          parsedPet['name'] = 'Rabbit';
          parsedPets.push(parsedPet);
          break;

        case 'ROCK':
          parsedPet['name'] = 'Rock';
          parsedPets.push(parsedPet);
          break;

        case 'KUUDRA':
          parsedPet['name'] = 'Kuudra';
          parsedPets.push(parsedPet);
          break;

        case 'REINDEER':
          parsedPet['name'] = 'Reindeer';
          parsedPets.push(parsedPet);
          break;

        case 'SKELETON':
          parsedPet['name'] = 'Skeleton';
          parsedPets.push(parsedPet);
          break;

        case 'SILVERFISH':
          parsedPet['name'] = 'Silverfish';
          parsedPets.push(parsedPet);
          break;

        case 'SCATHA':
          parsedPet['name'] = 'Scatha';
          parsedPets.push(parsedPet);
          break;

        case 'SQUID':
          parsedPet['name'] = 'Squid';
          parsedPets.push(parsedPet);
          break;

        case 'SNAIL':
          parsedPet['name'] = 'Snail';
          parsedPets.push(parsedPet);
          break;

        case 'GRANDMA_WOLF':
          parsedPet['name'] = 'Grandma Wolf';
          parsedPets.push(parsedPet);
          break;

        case 'DOLPHIN':
          parsedPet['name'] = 'Dolphin';
          parsedPets.push(parsedPet);
          break;

        case 'ELEPHANT':
          parsedPet['name'] = 'Elephant';
          parsedPets.push(parsedPet);
          break;

        case 'BAL':
          parsedPet['name'] = 'Bal';
          parsedPets.push(parsedPet);
          break;

        case 'GRIFFIN':
          parsedPet['name'] = 'Griffin';
          parsedPets.push(parsedPet);
          break;

        case 'CHICKEN':
          parsedPet['name'] = 'Chicken';
          parsedPets.push(parsedPet);
          break;

        case 'BLAZE':
          parsedPet['name'] = 'Blaze';
          parsedPets.push(parsedPet);
          break;

        case 'BABY_YETI':
          parsedPet['name'] = 'Baby Yeti';
          parsedPets.push(parsedPet);
          break;

        case 'SKELETON_HORSE':
          parsedPet['name'] = 'Skeleton Horse';
          parsedPets.push(parsedPet);
          break;

        case 'BLUE_WHALE':
          parsedPet['name'] = 'Blue Whale';
          parsedPets.push(parsedPet);
          break;

        case 'GIRAFFE':
          parsedPet['name'] = 'Giraffe';
          parsedPets.push(parsedPet);
          break;

        case 'AMMONITE':
          parsedPet['name'] = 'Ammonite';
          parsedPets.push(parsedPet);
          break;

        case 'LION':
          parsedPet['name'] = 'Lion';
          parsedPets.push(parsedPet);
          break;

        case 'JELLYFISH':
          parsedPet['name'] = 'Jellyfish';
          parsedPets.push(parsedPet);
          break;

        case 'ARMADILLO':
          parsedPet['name'] = 'Armadillo';
          parsedPets.push(parsedPet);
          break;

        case 'ENDERMAN':
          parsedPet['name'] = 'Enderman';
          parsedPets.push(parsedPet);
          break;

        case 'FLYING_FISH':
          parsedPet['name'] = 'Flying Fish';
          parsedPets.push(parsedPet);
          break;

        case 'GUARDIAN':
          parsedPet['name'] = 'Guardian';
          parsedPets.push(parsedPet);
          break;

        case 'BLACK_CAT':
          parsedPet['name'] = 'Black Cat';
          parsedPets.push(parsedPet);
          break;

        case 'MITHRIL_GOLEM':
          parsedPet['name'] = 'Mithril Golem';
          parsedPets.push(parsedPet);
          break;

        case 'ENDERMITE':
          parsedPet['name'] = 'Endermite';
          parsedPets.push(parsedPet);
          break;

        case 'EERIE':
          parsedPet['name'] = 'Eerie';
          parsedPets.push(parsedPet);
          break;

        case 'TARANTULA':
          parsedPet['name'] = 'Tarantula';
          parsedPets.push(parsedPet);
          break;

        case 'PIGMAN':
          parsedPet['name'] = 'Pigman';
          parsedPets.push(parsedPet);
          break;

        case 'MAGMA_CUBE':
          parsedPet['name'] = 'Magma Cube';
          parsedPets.push(parsedPet);
          break;

        case 'SUBZERO_WISP':
          parsedPet['name'] = 'Subzero Wisp';
          parsedPet['tier'] = 'LEGENDARY';
          parsedPets.push(parsedPet);
          break;

        case 'GLACIAL_WISP':
          parsedPet['name'] = 'Glacial Wisp';
          parsedPet['tier'] = 'EPIC';
          parsedPets.push(parsedPet);
          break;

        case 'FROST_WISP':
          parsedPet['name'] = 'Frost Wisp';
          parsedPet['tier'] = 'RARE';
          parsedPets.push(parsedPet);
          break;

        case 'DROPLET_WISP':
          parsedPet['name'] = 'Droplet Wisp';
          parsedPet['tier'] = 'UNCOMMON';
          parsedPets.push(parsedPet);
          break;

        case 'SPIDER':
          parsedPet['name'] = 'Spider';
          parsedPets.push(parsedPet);
          break;

        case 'BAT':
          parsedPet['name'] = 'Bat';
          parsedPets.push(parsedPet);
          break;

        case 'TURTLE':
          parsedPet['name'] = 'Turtle';
          parsedPets.push(parsedPet);
          break;

        case 'ZOMBIE':
          parsedPet['name'] = 'Zombie';
          parsedPets.push(parsedPet);
          break;

        case 'HORSE':
          parsedPet['name'] = 'Horse';
          parsedPets.push(parsedPet);
          break;

        case 'HOUND':
          parsedPet['name'] = 'Hound';
          parsedPets.push(parsedPet);
          break;

        case 'SNOWMAN':
          parsedPet['name'] = 'Snowman';
          parsedPets.push(parsedPet);
          break;

        case 'GOLDEN_DRAGON':
          parsedPet['name'] = 'Golden Dragon';
          parsedPets.push(parsedPet);
          break;

        case 'RIFT_FERRET':
          parsedPet['name'] = 'Rift Ferret';
          parsedPets.push(parsedPet);
          break;

        case 'SPIRIT':
          parsedPet['name'] = 'Spirit';
          parsedPets.push(parsedPet);
          break;

        case 'SLUG':
          parsedPet['name'] = 'Slug';
          parsedPets.push(parsedPet);
          break;

        case 'JERRY':
          parsedPet['name'] = 'Jerry';
          parsedPets.push(parsedPet);
          break;

        case 'BEE':
          parsedPet['name'] = 'Bee';
          parsedPets.push(parsedPet);
          break;

        case 'RAT':
          parsedPet['name'] = 'Rat';
          parsedPets.push(parsedPet);
          break;

        case 'OWL':
          parsedPet['name'] = 'Owl';
          parsedPets.push(parsedPet);
          break;

        case 'GOLEM':
          parsedPet['name'] = 'Golem';
          parsedPets.push(parsedPet);
          break;

        case 'ENDER_DRAGON':
          parsedPet['name'] = 'Ender Dragon';
          parsedPets.push(parsedPet);
          break;

        case 'SHEEP':
          parsedPet['name'] = 'Sheep';
          parsedPets.push(parsedPet);
          break;
      }
    }
    setPets(parsedPets);
  };

  return (
    <>
      {petData == undefined ? (
        <div>Loading...</div>
      ) : (
        <SimpleGrid cols={{ base: 1, sm: 4, lg: 7 }}>
          {pets.map((pet) => (
            <div>{pet.name}</div>
          ))}
        </SimpleGrid>
      )}
    </>
  );
}
