import { Container, SimpleGrid } from '@mantine/core';
import { useState, useEffect } from 'react';
import { PetDataInterface } from '@/types/skyblockItem';
import { format } from 'path';

export function PlayerPets({ profileData, uuid }: { profileData: any; uuid: string }) {
  const [petData, setPetData] = useState(
    profileData.members[uuid.replaceAll('-', '')].pets_data.pets
  );
  const [pets, setPets] = useState<Array<PetDataInterface>>([]);
  useEffect(() => {
    petContent();
  }, []);

  function formatPetData(string: string) {
    if (!string) return '';
    let formatted = string.replaceAll('_', ' ');
    formatted = formatted
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
      .join(' ');
    return formatted;
  }

  const petContent = () => {
    const parsedPets: Array<PetDataInterface> = [];
    // const xpToLevelCom = {"1":0, "2":100, "3":210, "4":}
    // console.log(petData);
    for (const key in petData) {
      const pet = petData[key];
      const parsedPet: any = {
        active: pet.active,
        candyUsed: pet.candyUsed,
        exp: pet.exp,
        tier: formatPetData(pet.tier),
        uuid: pet.uuid,
      };

      console.log(pet.heldItem);
      switch (pet.type) {
        default:
          parsedPet['name'] = 'Pet not found!';
          break;

        case 'GHOUL':
          parsedPet['name'] = `Ghoul`;
          parsedPet['skin'];
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

      switch (pet.heldItem) {
        default:
          parsedPet['heldItem'] = 'None';
          break;

        case 'DWARF_TURTLE_SHELMET':
          parsedPet['heldItem'] = 'Dwarf Turtle Shelmet';
          break;

        case 'MINOS_RELIC':
          parsedPet['heldItem'] = 'Minos Relic';
          break;

        case 'CROCHET_TIGER_PLUSHIE':
          parsedPet['heldItem'] = 'Crochet Tiger Plushie';
          break;

        case 'ANTIQUE_REMEDIES':
          parsedPet['heldItem'] = 'Antique Remedies';
          break;

        case 'WASHED_UP_SOUVENIR':
          parsedPet['heldItem'] = 'Washed-up Souvenir';
          break;

        case 'YELLOW_BANDANA':
          parsedPet['heldItem'] = 'Yellow Bandana';
          break;

        case 'GREEN_BANDANA':
          parsedPet['heldItem'] = 'Green Bandana';
          break;

        case 'QUICK_CLAW':
          parsedPet['heldItem'] = 'Quick Claw';
          break;

        case 'BEJEWELED COLLAR':
          parsedPet['heldItem'] = 'Bejeweled Collar';
          break;

        case 'TEXTBOOK':
          parsedPet['heldItem'] = 'Textbook';
          break;

        case 'SPOOKY_CUPCAKE':
          parsedPet['heldItem'] = 'Spooky Cupcake';
          break;

        case 'REAPER_GEM':
          parsedPet['heldItem'] = 'Reaper Gem';
          break;

        case 'LUCKY_CLOVER':
          parsedPet['heldItem'] = 'Lucky Clover';
          break;

        case 'SERRATED_CLAWS':
          parsedPet['heldItem'] = 'Serrated Claws';
          break;

        case 'SHARPENED_CLAWS':
          parsedPet['heldItem'] = 'Sharpened Claws';
          break;

        case 'REINFORCED_SCALES':
          parsedPet['heldItem'] = 'Reinforced Scales';
          break;

        case 'HARDENED_SCALES':
          parsedPet['heldItem'] = 'Hardened Scales';
          break;

        case 'GOLD_CLAWS':
          parsedPet['heldItem'] = 'Gold Claws';
          break;

        case 'IRON_CLAWS':
          parsedPet['heldItem'] = 'Iron Claws';
          break;

        case 'BIGGER_TEETH':
          parsedPet['heldItem'] = 'Bigger Teeth';
          break;

        case 'BIG_TEETH':
          parsedPet['heldItem'] = 'Big Teeth';
          break;

        case 'BUBBLEGUM':
          parsedPet['heldItem'] = 'Bubblegum';
          break;

        case 'EXP_SHARE':
          parsedPet['heldItem'] = 'Exp Share';
          break;

        case 'SADDLE':
          parsedPet['heldItem'] = 'Saddle';
          break;

        case 'FLYING_PIG':
          parsedPet['heldItem'] = 'Flying Pig';
          break;

        case 'FOUR_EYED_FISH':
          parsedPet['heldItem'] = 'Four Eyed Fish';
          break;

        case 'DEAD_CAT_FOOD':
          parsedPet['heldItem'] = 'Dead Cat Food';
          break;

        case 'UNCOMMON_PARTY_HAT':
          parsedPet['heldItem'] = 'Uncommon Party Hat';
          break;

        case 'PET_ITEM_MINING_SKILL_BOOST_COMMON':
          parsedPet['heldItem'] = '20% Mining Skill Boost';
          break;

        case 'PET_ITEM_MINING_SKILL_BOOST_RARE':
          parsedPet['heldItem'] = '40% Mining Skill Boost';
          break;

        case 'PET_ITEM_FARMING_SKILL_BOOST_COMMON':
          parsedPet['heldItem'] = '20% Farming Skill Boost';
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
            <div key={pet.uuid}>{pet.name}</div>
          ))}
        </SimpleGrid>
      )}
    </>
  );
}
