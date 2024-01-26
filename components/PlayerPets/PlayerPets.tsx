import { Container, Divider, Flex, SimpleGrid } from '@mantine/core';
import { useState, useEffect } from 'react';
import { PetDataInterface } from '@/types/skyblockItem';
import { Paper, Group, Text } from '@mantine/core';
import { ItemCard } from '../ItemCard/ItemCard';
import { getUUIDFromBase64String } from '@/helper/getUUIDFromBase64String';
import { getSkullFromSkin } from '@/helper/getSkullFromSkin';
import { petStats } from '@/types/lore';
import { xpData } from '@/helper/requiredPetExp';
import { getPetLore } from '@/helper/getPetLore';
import { minecraftColoredStringToText } from '@/helper/minecraftColoredStringToText';
import React from 'react';

export function PlayerPets({ profileData, uuid }: { profileData: any; uuid: string }) {
  const [petData, setPetData] = useState(
    profileData.members[uuid.replaceAll('-', '')].pets_data.pets
  );
  const [pets, setPets] = useState<Array<PetDataInterface>>([]);
  useEffect(() => {
    if (pets.length === 0) petContent();
  }, []);


  let hasRelic = false;
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
        type: pet.type,
        active: pet.active,
        candyUsed: pet.candyUsed,
        exp: pet.exp,
        skin_name: pet.skin,
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
          switch (pet.skin_name) {
            default:
              break;
          }
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
      hasRelic = false;
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
          hasRelic = true;
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
      parsedPet['level'] = calcPetLevel(pet.exp, parsedPet['tier'], parsedPet['lvl_200']);
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
          {pets.map((pet) => {
            const petLore: any = getPetLore(pet.type, pet.tier, hasRelic, pet.level, pet.skin ?? '')
            const keys = Object.keys(petLore ?? {});
            return (
              <ItemCard
                name={pet.name}
                description={
                  <Group display={Flex} align='center' justify='space-between'>
                    <Container><Text>Name: {pet.name}</Text></Container>
                    <Divider size={'xs'} />
                    <Container><Text>Level: {pet.level}</Text></Container>
                    {keys && petLore ? (
                      keys.map((key: string, index: number) => {
                        console.log(pet.skin_name)
                        if (petLore[key] != "")
                          return (
                            <Container w={'100%'} p={0} m={0} key={index}>
                              <Divider my={10} size={'xs'} />
                              <Container><Text>{petLore[key]}</Text></Container>
                            </Container>
                          )
                        return (<></>)
                      })
                    ) : null}
                  </Group>}
                imageurl={pet.skin ?? ''}
                rarity={pet.tier}
                rarityUpgraded={pet.tier_upgraded}
                key={pet.uuid}
              />
            )
          })}
        </SimpleGrid>
      )}
    </>
  );
}
function petContent() {
  throw new Error('Function not implemented.');
}