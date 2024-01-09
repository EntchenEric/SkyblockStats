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
    if (pets.length === 0) petContent();
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

      // console.log(pet.heldItem);
      switch (pet.type) {
        default:
          parsedPet['name'] = 'Pet not found!';
          break;

        case 'GHOUL':
          parsedPet['name'] = `Ghoul`;
          // parsedPet['skin'];
          break;

        case 'WITHER_SKELETON':
          parsedPet['name'] = `Wither Skeleton`;

          break;

        case 'TIGER':
          parsedPet['name'] = 'Tiger';

          break;

        case 'WOLF':
          parsedPet['name'] = 'Wolf';

          break;

        case 'MEGALODON':
          parsedPet['name'] = 'Megalodon';

          break;

        case 'MONKEY':
          parsedPet['name'] = 'Monkey';

          break;

        case 'MOOSHROOM_COW':
          parsedPet['name'] = 'Mooshroom Cow';

          break;

        case 'OCELOT':
          parsedPet['name'] = 'Ocelot';

          break;

        case 'PARROT':
          parsedPet['name'] = 'Parrot';

          break;

        case 'PHOENIX':
          parsedPet['name'] = 'Phoenix';

          break;

        case 'PIG':
          parsedPet['name'] = 'Pig';

          break;

        case 'RABBIT':
          parsedPet['name'] = 'Rabbit';

          break;

        case 'ROCK':
          parsedPet['name'] = 'Rock';

          break;

        case 'KUUDRA':
          parsedPet['name'] = 'Kuudra';

          break;

        case 'REINDEER':
          parsedPet['name'] = 'Reindeer';

          break;

        case 'SKELETON':
          parsedPet['name'] = 'Skeleton';

          break;

        case 'SILVERFISH':
          parsedPet['name'] = 'Silverfish';

          break;

        case 'SCATHA':
          parsedPet['name'] = 'Scatha';

          break;

        case 'SQUID':
          parsedPet['name'] = 'Squid';

          break;

        case 'SNAIL':
          parsedPet['name'] = 'Snail';

          break;

        case 'GRANDMA_WOLF':
          parsedPet['name'] = 'Grandma Wolf';

          break;

        case 'DOLPHIN':
          parsedPet['name'] = 'Dolphin';

          break;

        case 'ELEPHANT':
          parsedPet['name'] = 'Elephant';

          break;

        case 'BAL':
          parsedPet['name'] = 'Bal';

          break;

        case 'GRIFFIN':
          parsedPet['name'] = 'Griffin';

          break;

        case 'CHICKEN':
          parsedPet['name'] = 'Chicken';

          break;

        case 'BLAZE':
          parsedPet['name'] = 'Blaze';

          break;

        case 'BABY_YETI':
          parsedPet['name'] = 'Baby Yeti';

          break;

        case 'SKELETON_HORSE':
          parsedPet['name'] = 'Skeleton Horse';

          break;

        case 'BLUE_WHALE':
          parsedPet['name'] = 'Blue Whale';

          break;

        case 'GIRAFFE':
          parsedPet['name'] = 'Giraffe';

          break;

        case 'AMMONITE':
          parsedPet['name'] = 'Ammonite';

          break;

        case 'LION':
          parsedPet['name'] = 'Lion';

          break;

        case 'JELLYFISH':
          parsedPet['name'] = 'Jellyfish';

          break;

        case 'ARMADILLO':
          parsedPet['name'] = 'Armadillo';

          break;

        case 'ENDERMAN':
          parsedPet['name'] = 'Enderman';

          break;

        case 'FLYING_FISH':
          parsedPet['name'] = 'Flying Fish';

          break;

        case 'GUARDIAN':
          parsedPet['name'] = 'Guardian';

          break;

        case 'BLACK_CAT':
          parsedPet['name'] = 'Black Cat';

          break;

        case 'MITHRIL_GOLEM':
          parsedPet['name'] = 'Mithril Golem';

          break;

        case 'ENDERMITE':
          parsedPet['name'] = 'Endermite';

          break;

        case 'EERIE':
          parsedPet['name'] = 'Eerie';

          break;

        case 'TARANTULA':
          parsedPet['name'] = 'Tarantula';

          break;

        case 'PIGMAN':
          parsedPet['name'] = 'Pigman';

          break;

        case 'MAGMA_CUBE':
          parsedPet['name'] = 'Magma Cube';

          break;

        case 'SUBZERO_WISP':
          parsedPet['name'] = 'Subzero Wisp';
          parsedPet['tier'] = 'LEGENDARY';

          break;

        case 'GLACIAL_WISP':
          parsedPet['name'] = 'Glacial Wisp';
          parsedPet['tier'] = 'EPIC';

          break;

        case 'FROST_WISP':
          parsedPet['name'] = 'Frost Wisp';
          parsedPet['tier'] = 'RARE';

          break;

        case 'DROPLET_WISP':
          parsedPet['name'] = 'Droplet Wisp';
          parsedPet['tier'] = 'UNCOMMON';

          break;

        case 'SPIDER':
          parsedPet['name'] = 'Spider';

          break;

        case 'BAT':
          parsedPet['name'] = 'Bat';

          break;

        case 'TURTLE':
          parsedPet['name'] = 'Turtle';

          break;

        case 'ZOMBIE':
          parsedPet['name'] = 'Zombie';

          break;

        case 'HORSE':
          parsedPet['name'] = 'Horse';

          break;

        case 'HOUND':
          parsedPet['name'] = 'Hound';

          break;

        case 'SNOWMAN':
          parsedPet['name'] = 'Snowman';

          break;

        case 'GOLDEN_DRAGON':
          parsedPet['name'] = 'Golden Dragon';

          break;

        case 'RIFT_FERRET':
          parsedPet['name'] = 'Rift Ferret';

          break;

        case 'SPIRIT':
          parsedPet['name'] = 'Spirit';

          break;

        case 'SLUG':
          parsedPet['name'] = 'Slug';

          break;

        case 'JERRY':
          parsedPet['name'] = 'Jerry';

          break;

        case 'BEE':
          parsedPet['name'] = 'Bee';

          break;

        case 'RAT':
          parsedPet['name'] = 'Rat';

          break;

        case 'OWL':
          parsedPet['name'] = 'Owl';

          break;

        case 'GOLEM':
          parsedPet['name'] = 'Golem';

          break;

        case 'ENDER_DRAGON':
          parsedPet['name'] = 'Ender Dragon';

          break;

        case 'SHEEP':
          parsedPet['name'] = 'Sheep';

          break;
      }
      parsedPets.push(parsedPet);

      switch (pet.heldItem) {
        default:
          parsedPet['heldItem'] = 'No Pet Item';
          break;

        case 'PET_ITEM_TIER_BOOST':
          parsedPet['heldItem'] = 'Tier Boost';

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

        case 'PET_ITEM_QUICK_CLAW':
          parsedPet['heldItem'] = 'Quick Claw';

          break;

        case 'BEJEWELED COLLAR':
          parsedPet['heldItem'] = 'Bejeweled Collar';

          break;

        case 'PET_ITEM_TEXTBOOK':
          parsedPet['heldItem'] = 'Textbook';

          break;

        case 'PET_ITEM_SPOOKY_CUPCAKE':
          parsedPet['heldItem'] = 'Spooky Cupcake';

          break;

        case 'REAPER_GEM':
          parsedPet['heldItem'] = 'Reaper Gem';

          break;

        case 'PET_ITEM_LUCKY_CLOVER':
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

        case 'PET_ITEM_EXP_SHARE':
          parsedPet['heldItem'] = 'Exp Share';
          break;

        case 'PET_ITEM_SADDLE':
          parsedPet['heldItem'] = 'Saddle';
          break;

        case 'PET_ITEM_FLYING_PIG':
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

        case 'PET_ITEM_ALL_SKILLS_BOOST_COMMON':
          parsedPet['heldItem'] = '10% All Skills Boost';
          break;

        case 'ALL_SKILLS_SUPER_BOOST':
          parsedPet['heldItem'] = '20% All Skills Boost';
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

        case 'PET_ITEM_FARMING_SKILL_BOOST_UNCOMMON':
          parsedPet['heldItem'] = '30% Farming Skill Boost';
          break;

        case 'PET_ITEM_FARMING_SKILL_BOOST_RARE':
          parsedPet['heldItem'] = '40% Farming Skill Boost';
          break;

        case 'PET_ITEM_FARMING_SKILL_BOOST_EPIC':
          parsedPet['heldItem'] = '50% Farming Skill Boost';
          break;

        case 'PET_ITEM_FISHING_SKILL_BOOST_COMMON':
          parsedPet['heldItem'] = '20% Fishing Skill Boost';
          break;

        case 'PET_ITEM_FISHING_SKILL_BOOST_UNCOMMON':
          parsedPet['heldItem'] = '30% Fishing Skill Boost';
          break;

        case 'PET_ITEM_FISHING_SKILL_BOOST_RARE':
          parsedPet['heldItem'] = '40% Fishing Skill Boost';
          break;

        case 'PET_ITEM_FISHING_SKILL_BOOST_EPIC':
          parsedPet['heldItem'] = '50% Fishing Skill Boost';
          break;

        case 'PET_ITEM_COMBAT_SKILL_BOOST_COMMON':
          parsedPet['heldItem'] = '20% Combat Skill Boost';
          break;

        case 'PET_ITEM_COMBAT_SKILL_BOOST_UNCOMMON':
          parsedPet['heldItem'] = '30% Combat Skill Boost';
          break;

        case 'PET_ITEM_COMBAT_SKILL_BOOST_RARE':
          parsedPet['heldItem'] = '40% Combat Skill Boost';
          break;

        case 'PET_ITEM_COMBAT_SKILL_BOOST_EPIC':
          parsedPet['heldItem'] = '50% Combat Skill Boost';
          break;

        case 'PET_ITEM_FORAGING_SKILL_BOOST_COMMON':
          parsedPet['heldItem'] = '20% Foraging Skill Boost';
          break;

        case 'PET_ITEM_FORAGING_SKILL_BOOST_EPIC':
          parsedPet['heldItem'] = '50% Foraging Skill Boost';
          break;
      }
      parsedPets.push(parsedPet);
    }
    setPets(parsedPets);
    console.log(parsedPets);
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
