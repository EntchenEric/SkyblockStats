import { Container, Flex, SimpleGrid } from '@mantine/core';
import { useState, useEffect } from 'react';
import { PetDataInterface } from '@/types/skyblockItem';
import { Paper, Group, Text } from '@mantine/core';
import { ItemCard } from '../ItemCard/ItemCard';
import { getUUIDFromBase64String } from '@/helper/getUUIDFromBase64String';
import { getSkullFromSkin } from '@/helper/getSkullFromSkin';
import { petStats } from '@/types/lore';
import { xpData } from '@/helper/requiredPetExp';

export function PlayerPets({ profileData, uuid }: { profileData: any; uuid: string }) {
  const [petData, setPetData] = useState(
    profileData.members[uuid.replaceAll('-', '')].pets_data.pets
  );
  const [pets, setPets] = useState<Array<PetDataInterface>>([]);
  useEffect(() => {
    if (pets.length === 0) petContent();
  }, []);

  const rarityValues: any = {
    'Common': 1,
    'Uncommon': 2,
    'Rare': 3,
    'Epic': 4,
    'Legendary': 5,
    'Mythic': 6
  };

  function formatPetData(string: string, tierboost: boolean = false) {
    if (!string) return '';
    let formatted: string =
      string.
        replaceAll('_', ' ')
        .toLowerCase()
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
        .join(' ');
    if (tierboost) {
      const newValue = rarityValues[formatted] + 1;
      formatted = Object.keys(rarityValues).find(key => rarityValues[key] === newValue) as string;
    }
    return formatted;
  }

  function calcPetLevel(exp: number, rarity: string, lvl200: boolean = false) {
    let level = 0;
    let maxLevel = lvl200 ? 200 : 100;
    let tempRarity = rarity === 'Mythic' ? 'Legendary' : rarity;


    // Assuming xpData is an object with levels as keys and rarity experience as values
    while (level < maxLevel && xpData[level + 1] && exp >= xpData[level + 1][tempRarity]) {
      level++;
    }
    return level;
  }


  const getPetTexture = async (item: any) => {
    if (item.skin) {
      if (item.skin != "idk") {
        return getSkullFromSkin(getUUIDFromBase64String(item.skin))
      } else {
        return "https://static.wikia.nocookie.net/minecraft_gamepedia/images/4/4a/Barrier_JE2_BE2.png/revision/latest/scale-to-width-down/150?cb=20200329164158"
      }
    } else {
      const response = await fetch("api/getItemTexture", {
        method: "POST",
        body: JSON.stringify({ material: item.itemID }),
      });
      const data = await response.json();
      return data.url;
    }
  }

  const petContent = async () => {
    const parsedPets: Array<PetDataInterface> = [];
    const petStatMax: any = {};
    const petStatMin: any = {};
    let rarityUpgraded = false;
    const itemIds = [];
    const mythicPets = ["SNOWMAN", "FLYING_FISH", "RAT"]
    for (let i = 0; i < petData.length; i++) {
      const pet = petData[i];
      console.log(pet)
      if (pet.tier === 'MYTHIC' && mythicPets.includes(pet.type)) {
        itemIds.push(pet.type + "_PET_1");
        continue;
      }
      itemIds.push(pet.type + "_PET");
    }

    const response = await fetch('api/bulkGetSkyblockItemData', {
      method: 'POST',
      body: JSON.stringify({ ids: itemIds }),
    });

    const SkyblockItemPets = await response.json()


    for (const key in petData) {
      const pet = petData[key];
      const parsedPet: any = {
        active: pet.active,
        candyUsed: pet.candyUsed,
        exp: pet.exp,
        tier: formatPetData(pet.tier),
        tier_upgraded: false,
        lvl_200: false,
        uuid: pet.uuid,
      };
      const itemID = pet.type;
      const correspondingItem = SkyblockItemPets.find((item: { itemID: any; }) => item.itemID.substring(0, item.itemID.indexOf('PET') - 1) === itemID);
      if (correspondingItem) {
        parsedPet['skin'] = await getPetTexture(correspondingItem)
      }


      rarityUpgraded = false;
      switch (pet.type) {
        default:
          parsedPet['name'] = 'Pet not found!';
          break;

        case 'GHOUL':
          parsedPet['name'] = `Ghoul`;
          petStatMax.ferocity = 5;
          petStatMin.ferocity = 0;
          petStatMax.intelligence = 75;
          petStatMin.intelligence = 0;
          petStatMax.health = 100;
          petStatMin.health = 1;
          break;

        case 'WITHER_SKELETON':
          parsedPet['name'] = `Wither Skeleton`;
          petStatMax.critDamage = 0.25;
          petStatMin.critDamage = 0;
          petStatMax.critChance = 0.05;
          petStatMin.critChance = 0;
          petStatMax.defense = 25;
          petStatMin.defense = 0;
          petStatMax.strength = 25;
          petStatMin.strength = 0;
          petStatMax.intelligence = 25;
          petStatMin.intelligence = 0;
          break;

        case 'TIGER':
          parsedPet['name'] = 'Tiger';
          petStatMax.critDamage = 0.5;
          petStatMin.critDamage = 0;
          petStatMax.critChance = 0.05;
          petStatMin.critChance = 0;
          petStatMax.ferocity = 25;
          petStatMin.ferocity = 0;
          petStatMax.strength = 15;
          petStatMin.strength = 5;
          break;

        case 'WOLF':
          parsedPet['name'] = 'Wolf';
          petStatMax.critDamage = 0.1;
          petStatMin.critDamage = 0;
          petStatMax.health = 20;
          petStatMin.health = 0;
          petStatMax.speed = 20;
          petStatMin.speed = 0;
          petStatMax.trueDefense = 10;
          petStatMin.trueDefense = 0;
          break;

        case 'MEGALODON':
          parsedPet['name'] = 'Megalodon';
          petStatMax.ferocity = 5;
          petStatMin.ferocity = 0;
          petStatMax.strength = 50;
          petStatMin.strength = 0;
          petStatMax.magicFind = 10;
          petStatMin.magicFind = 0;
          break;

        case 'MONKEY':
          parsedPet['name'] = 'Monkey';
          petStatMax.intelligence = 50;
          petStatMin.intelligence = 0;
          petStatMax.speed = 20;
          petStatMin.speed = 0;
          break;

        case 'MOOSHROOM_COW':
          parsedPet['name'] = 'Mooshroom Cow';
          petStatMax.health = 100;
          petStatMin.health = 1;
          petStatMax.farmingFortune = 110;
          petStatMin.farmingFortune = 11;
          break;

        case 'OCELOT':
          parsedPet['name'] = 'Ocelot';
          petStatMax.ferocity = 10;
          petStatMin.ferocity = 0;
          petStatMax.speed = 50;
          petStatMin.speed = 0;
          break;

        case 'PARROT':
          parsedPet['name'] = 'Parrot';
          petStatMax.intelligence = 100;
          petStatMin.intelligence = 1;
          petStatMax.critDamage = 0.1;
          petStatMin.critDamage = 0;
          break;

        case 'PHOENIX':
          parsedPet['name'] = 'Phoenix';
          petStatMax.intelligence = 150;
          petStatMin.intelligence = 51;
          petStatMax.strength = 60;
          petStatMin.strength = 10;
          break;

        case 'PIG':
          parsedPet['name'] = 'Pig';
          petStatMax.speed = 25;
          petStatMin.speed = 0;
          break;

        case 'RABBIT':
          parsedPet['name'] = 'Rabbit';
          petStatMax.health = 100;
          petStatMin.health = 1;
          petStatMax.speed = 20;
          petStatMin.speed = 0;
          break;

        case 'ROCK':
          parsedPet['name'] = 'Rock';
          petStatMax.defense = 200;
          petStatMin.defense = 2;
          petStatMax.trueDefense = 10;
          petStatMin.trueDefense = 0;
          break;

        case 'KUUDRA':
          parsedPet['name'] = 'Kuudra';
          petStatMax.strength = 40;
          petStatMin.strength = 0;
          petStatMax.health = 400;
          petStatMin.health = 0;
          break;

        case 'REINDEER':
          parsedPet['name'] = 'Reindeer';
          petStatMax.health = 100;
          petStatMin.health = 1;
          petStatMax.seaCreatureChance = 0.5;
          petStatMin.seaCreatureChance = 0.0005;
          petStatMax.fishingSpeed = 25;
          petStatMin.fishingSpeed = 0.25;
          break;

        case 'SKELETON':
          parsedPet['name'] = 'Skeleton';
          petStatMax.critChance = 0.15;
          petStatMin.critChance = 0;
          petStatMax.critDamage = 0.3;
          petStatMin.critDamage = 0;
          break;

        case 'SILVERFISH':
          parsedPet['name'] = 'Silverfish';
          petStatMax.defense = 100;
          petStatMin.defense = 1;
          petStatMax.heatlh = 20;
          petStatMin.heatlh = 0;
          break;

        case 'SCATHA':
          parsedPet['name'] = 'Scatha';
          petStatMax.defense = 100;
          petStatMin.defense = 0;
          petStatMax.miningSpeed = 100;
          petStatMin.miningSpeed = 0;
          break;

        case 'SQUID':
          parsedPet['name'] = 'Squid';
          petStatMax.intelligence = 50;
          petStatMin.intelligence = 0;
          petStatMax.health = 50;
          petStatMin.health = 0;
          break;

        case 'SNAIL':
          parsedPet['name'] = 'Snail';
          petStatMax.intelligence = 100;
          petStatMin.intelligence = 1;
          break;

        case 'GRANDMA_WOLF':
          parsedPet['name'] = 'Grandma Wolf';
          petStatMax.strength = 25;
          petStatMin.strength = 0;
          petStatMax.health = 100;
          petStatMin.health = 1;
          break;

        case 'DOLPHIN':
          parsedPet['name'] = 'Dolphin';
          petStatMax.seaCreatureChance = 0.05;
          petStatMin.seaCreatureChance = 0;
          petStatMax.intelligence = 100;
          petStatMin.intelligence = 1;
          break;

        case 'ELEPHANT':
          parsedPet['name'] = 'Elephant';
          petStatMax.intelligence = 75;
          petStatMin.intelligence = 0;
          petStatMax.health = 100;
          petStatMin.health = 1;
          break;

        case 'BAL':
          parsedPet['name'] = 'Bal';
          petStatMax.ferocity = 10;
          petStatMin.ferocity = 0;
          petStatMax.strength = 25;
          petStatMin.strength = 0;
          break;

        case 'GRIFFIN':
          parsedPet['name'] = 'Griffin';
          petStatMax.magicFind = 10;
          petStatMin.magicFind = 0.1;
          petStatMax.critDamage = 0.5;
          petStatMin.critDamage = 0.005;
          petStatMax.critChance = 0.1;
          petStatMin.critChance = 0.001;
          break;

        case 'CHICKEN':
          parsedPet['name'] = 'Chicken';
          petStatMax.health = 200;
          petStatMin.health = 2;
          break;

        case 'BLAZE':
          parsedPet['name'] = 'Blaze';
          petStatMax.intelligence = 100;
          petStatMin.intelligence = 1;
          petStatMax.defense = 30;
          petStatMin.defense = 10;
          break;

        case 'BABY_YETI':
          parsedPet['name'] = 'Baby Yeti';
          petStatMax.strength = 40;
          petStatMin.strength = 0;
          petStatMax.intelligence = 75;
          petStatMin.intelligence = 0;
          break;

        case 'SKELETON_HORSE':
          parsedPet['name'] = 'Skeleton Horse';
          petStatMax.intelligence = 100;
          petStatMin.intelligence = 1;
          petStatMax.speed = 50;
          petStatMin.speed = 0;
          break;

        case 'BLUE_WHALE':
          parsedPet['name'] = 'Blue Whale';
          petStatMax.health = 200;
          petStatMin.health = 2;
          break;

        case 'GIRAFFE':
          parsedPet['name'] = 'Giraffe';
          petStatMax.health = 100;
          petStatMin.health = 1;
          petStatMax.critChance = 0.05;
          petStatMin.critChance = 0;
          break;

        case 'AMMONITE':
          parsedPet['name'] = 'Ammonite';
          petStatMax.seaCreatureChance = 0.12;
          petStatMin.seaCreatureChance = 0.0012;
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
          parsedPet['lvl_200'] = true;

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

      switch (pet.heldItem) {
        default:
          parsedPet['heldItem'] = 'No Pet Item';
          break;

        case 'PET_ITEM_TIER_BOOST':
          parsedPet['heldItem'] = 'Tier Boost';
          parsedPet['tier_upgraded'] = true;
          rarityUpgraded = true;
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
      parsedPet['tier'] = formatPetData(pet.tier, rarityUpgraded);
      parsedPets.push(parsedPet);
    }


    const rarityValues: any = {
      'COMMON': 1,
      'UNCOMMON': 2,
      'RARE': 3,
      'EPIC': 4,
      'LEGENDARY': 5,
      'MYTHIC': 6
    };

    parsedPets.sort((a: any, b: any) => {
      // Sort by rarity first
      if (rarityValues[a.tier.toUpperCase()] > rarityValues[b.tier.toUpperCase()]) {
        return -1;
      }
      if (rarityValues[a.tier.toUpperCase()] < rarityValues[b.tier.toUpperCase()]) {
        return 1;
      }
      // If rarity is the same, sort by exp
      return b.exp - a.exp;
    });
    setPets(parsedPets);
  };

  return (
    <>
      {petData == undefined ? (
        <div>Loading...</div>
      ) : (
        <SimpleGrid cols={{ base: 1, sm: 4, lg: 7 }}>
          {pets.map((pet) => (
            <ItemCard
              name={pet.name}
              description={
                <Group display={Flex} align='center' justify='space-between'>

                  <div><Text>Name: {pet.name}</Text></div>
                  <br />
                  <div><Text>Level: {calcPetLevel(pet.exp, pet.tier, pet.lvl_200)}</Text></div>

                  <div><Text>Exp: {Math.floor(pet.exp).toLocaleString('en-US')}</Text></div>
                  <br />
                  <div><Text>Held Item: {pet.heldItem}</Text></div>

                </Group>}
              imageurl={pet.skin ?? ''}
              rarity={pet.tier}
              rarityUpgraded={pet.tier_upgraded}
              key={pet.uuid}
            />
          ))}
        </SimpleGrid>
      )}
    </>
  );
}
function petContent() {
  throw new Error('Function not implemented.');
}

