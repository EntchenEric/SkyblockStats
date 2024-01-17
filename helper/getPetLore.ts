import { petStats } from '@/types/lore';
import { minecraftColoredStringToText } from './minecraftColoredStringToText';


const Icons: { [key: string]: string } = {
  "Strength": '❁',
};

export function getPetLore(
  id: string,
  rarity: 'COMMON' | 'UNCOMMON' | 'RARE' | 'EPIC' | 'LEGENDARY' | 'MYTHIC',
  relic: boolean,
  level: number,
  skin: string
) {
  // if (!id) return 'No ID provided';
  // if (!rarity) return 'No rarity provided';
  // if (!level) return 'No level provided';
  // console.log(id, rarity, level, relic, skin)

  const extraPetStatsMinMax: any = {
    'GOLDEN_DRAGON': {
      'BaseStats': { 'Strength': [95, 120], 'BonusAttackSpeed': [0, 30], 'MagicFind': [0, 15] },
      'GoldsPower': {
        'LEGENDARY': [50, 100],
      },
      'DragonsGreed': {
        'LEGENDARY': [0, 0.5],
      },
      'LegendaryTreasure': {
        'LEGENDARY': [0.125, 0.25],
      }
    },
    'BLACK_CAT': {
      'BaseStats': { 'Speed': [0, 125], 'Intelligence': [0, 100], 'MagicFind': [0, 15], 'petLuck': [0, 15] },
      'Hunter': {
        'LEGENDARY': [1, 100],
        'MYTHIC': [1, 100],
      },
      'Omen': {
        'LEGENDARY': [0, 15],
        'MYTHIC': [0, 15],
      },
      'Supernatural': {
        'LEGENDARY': [0.15, 15],
        'MYTHIC': [0.15, 15],
      },
      'Looting': {
        'MYTHIC': [0.1, 15],
      }
    },
    'BAT': {
      'BaseStats': { 'Speed': [0, 5], 'Intelligence': [0, 100], 'SeaCreatureChance': [0, 5] },
      'CandyLover': {
        'COMMON': [0.001, 0.1],
        'UNCOMMON': [0.0015, 0.15],
        'RARE': [0.0015, 0.15],
        'EPIC': [0.002, 0.2],
        'LEGENDARY': [0.002, 0.2],
        'MYTHIC': [0.002, 0.2],
      },
      'Nightmare': {
        'RARE': { 'Intelligence': [0.2, 20], 'Speed': [0.4, 40] },
        'EPIC': { 'Intelligence': [0.3, 30], 'Speed': [0.5, 50] },
        'LEGENDARY': { 'Intelligence': [0.3, 30], 'Speed': [0.5, 50] },
        'MYTHIC': { 'Intelligence': [0.3, 30], 'Speed': [0.5, 50] },
      },
      'WingsOfSteel': {
        'LEGENDARY': [0.005, 0.5],
        'MYTHIC': [0.005, 0.5],
      },
      'Sonar': {
        'MYTHIC': [0.0025, 0.25],
      }
    },
    'ENDERMITE': {
      'BaseStats': { 'Intelligence': [0, 150], 'PetLuck': [0, 15] },
      'MoreStonks': {
        'COMMON': [0.005, 0.5],
        'UNCOMMON': [0.008, 0.8],
        'RARE': [0.008, 0.8],
        'EPIC': [0.01, 1],
        'LEGENDARY': [0.01, 1],
        'MYTHIC': [0.01, 1],
      },
      'DailyCommuter': {
        'RARE': [0.003, 0.3],
        'EPIC': [0.004, 0.4],
        'LEGENDARY': [0.004, 0.4],
        'MYTHIC': [0.004, 0.4],
      },
      'MiteBait': {
        'LEGENDARY': [0, 0.03],
        'MYTHIC': [0, 0.03],
      },
      'Sacrificer': {
        'MYTHIC': [0.001, 0.1],
      }
    },
    'FLYING_FISH': {
      'BaseStats': { 'Strength': [0, 50], 'Defense': [0, 50] },
      'QuickReel': {
        'RARE': [0.6, 60],
        'EPIC': [0.75, 75],
        'LEGENDARY': [0.80, 80],
        'MYTHIC': [0.80, 80],
      },
      'WaterBender': {
        'RARE': [0.8, 80],
        'EPIC': [1, 100],
        'LEGENDARY': [1, 100]
      },
      'LavaBender': {
        'MYTHIC': [1, 100],
      },
      'DeepSeaDiver': {
        'LEGENDARY': [0.002, 0.2],
      },
      'MagmaticDiver': {
        'MYTHIC': [0.002, 0.2],
      },
      'RapidDecay': {
        'MYTHIC': [0.005, 0.5]
      },
    },
    'GUARDIAN': {
      'BaseStats': { 'Intelligence': [0, 100], 'Defense': [0, 50] },
      'Lazerbeam': {
        'COMMON': [0.02, 2],
        'UNCOMMON': [0.06, 6],
        'RARE': [0.1, 10],
        'EPIC': [0.15, 15],
        'LEGENDARY': [0.2, 20],
        'MYTHIC': [1.2, 120],
      },
      'EnchantingWisdomBoost': {
        'RARE': [0.25, 25],
        'EPIC': [0.3, 30],
        'LEGENDARY': [0.3, 30],
        'MYTHIC': [0.3, 30],
      },
      'ManaPool': {
        'LEGENDARY': [0.003, 0.3],
        'MYTHIC': [0.003, 0.3],
      },
      'LuckySeven': {
        'MYTHIC': [0.0007, 0.07],
      },
    },
    'JERRY': {
      'BaseStats': { 'intelligence': [0, -100] },
      'Jerry': {
        'LEGENDARY': [0.1, 10],
        'MYTHIC': [0.5, 50],
      },
    },
    'MITHRIL_GOLEM': {
      'BaseStats': { 'TrueDefense': [0, 50] },
      'MithrilAffinity': {
        'COMMON': [0.5, 50],
        'UNCOMMON': [0.75, 75],
        'RARE': [0.75, 75],
        'EPIC': [1, 100],
        'LEGENDARY': [1, 100],
        'MYTHIC': [1, 100],
      },
      'TheSmellOfPowder': {
        'RARE': [0.001, 0.1],
        'EPIC': [0.002, 0.2],
        'LEGENDARY': [0.002, 0.2],
        'MYTHIC': [0.002, 0.2],
      },
      'DangerAverse': {
        'LEGENDARY': [0.002, 0.2],
        'MYTHIC': [0.002, 0.2],
      },
      'RefinedSenses': {
        'MYTHIC': [0.001, 0.1],
      },
    },
    'RAT': {
      'BaseStats': { 'Strength': [0, 60], 'Health': [0, 125], 'CritChance': [0, 0, 25] },
      'RatsBlessing': {
        'LEGENDARY': { 'Magicfind': [2.05, 7], 'Seconds': [20.4, 60] }
      },
    },
    'SNOWMAN': {
      'BaseStats': { 'Strength': [0, 25], 'Damage': [0, 25], 'CritDamage': [0, 25] },
      'Blizzard': {
        'LEGENDARY': [4, 8],
        'MYTHIC': [4, 8],
      },
      'Frostbite': {
        'LEGENDARY': [0.0015, 0.15],
        'MYTHIC': [0.0015, 0.15],
      },
    },
    'GHOUL': {
      'BaseStats': { 'Intelligence': [0, 75], 'Health': [1, 100], 'Ferocity': [0, 5] },
      'AmplifiedHealing': {
        'EPIC': [0, 25],
        'LEGENDARY': []
      },
    },
    'WITHER_SKELETON': {
      'BaseStats': { 'Strength': [0, 25], 'Intelligence': [0, 25], 'CritChance': [0, 25], 'CritDamage': [0, 25], 'Defense': [0, 25] },
    },
    'TIGER': {
      'BaseStats': { 'Strength': [5, 15], 'CritChance': [0, 5], 'CritDamage': [0, 50], 'Ferocity': [0, 25] },
    },
    'WOLF': {
      'BaseStats': { 'Speed': [0, 20], 'CritDamage': [0, 10], 'Health': [0, 50], 'TrueDefense': [0, 10] },
    },
    'MEGALODON': {
      'BaseStats': { 'Strength': [0, 50], 'Ferocity': [0, 5], 'MagicFind': [0, 10] },
    },
    'MONKEY': {
      'BaseStats': { 'Speed': [0, 20], 'Intelligence': [0, 50] },
    },
    'MOOSHROOM_COW': {
      'BaseStats': { 'Health': [1, 100], 'FarmingFortune': [11, 110] },
    },
    'OCELOT': {
      'BaseStats': { 'Speed': [0, 50], 'Ferocity': [0, 10] },
    },
    'PARROT': {
      'BaseStats': { 'Intelligence': [0, 100], 'CritDamage': [0, 10] },
    },
    'PHOENIX': {
      'BaseStats': { 'Strength': [50, 150], 'Intelligence': [10, 60] },
    },
    'PIG': {
      'BaseStats': { 'Speed': [0, 25] },
    },
    'RABBIT': {
      'BaseStats': { 'Speed': [0, 20], 'Health': [0, 100] },
    },
    'ROCK': {
      'BaseStats': { 'Defense': [0, 200], 'TrueDefense': [0, 10] },
    },
    'KUUDRA': {
      'BaseStats': { 'Strength': [0, 40], 'Health': [0, 400] },
    },
    'REINDEER': {
      'BaseStats': { 'Health': [0, 100], 'SeaCreatureChance': [0, 5], 'FishingSpeed': [0, 25] },
    },
    'SKELETON': {
      'BaseStats': { 'CritChance': [0, 15], 'CritDamage': [0, 30] },
    },
    'SILVERFISH': {
      'BaseStats': { 'Health': [0, 20], 'Defense': [0, 100] },
    },
    'SCATHA': {
      'BaseStats': { 'Defense': [0, 100], 'MiningSpeed': [0, 100] },
    },
    'SQUID': {
      'BaseStats': { 'Intelligence': [0, 50], 'Health': [0, 50] },
    },
    'SNAIL': {
      'BaseStats': { 'Intelligence': [0, 100] },
    },
    'GRANDMA_WOLF': {
      'BaseStats': { 'Strength': [0, 25], 'Health': [0, 100] },
    },
    'DOLPHIN': {
      'BaseStats': { 'Intelligence': [0, 100], 'SeaCreatureChance': [0, 5] },
    },
    'ELEPHANT': {
      'BaseStats': { 'Intelligence': [0, 75], 'Health': [0, 100] },
    },
    'BAL': {
      'BaseStats': { 'Strength': [0, 25], 'Ferocity': [0, 10] },
    },
    'GRIFFIN': {
      'BaseStats': { 'Strength': [0, 25], 'intelligence': [0, 10], 'CritChance': [0, 10], 'CritDamage': [0, 50], 'MagicFind': [0, 10] },
    },
    'CHICKEN': {
      'BaseStats': { 'Health': [0, 200] },
    },
    'BLAZE': {
      'BaseStats': { 'Intelligence': [0, 100], 'Defense': [10, 30] },
    },
    'BABY_YETI': {
      'BaseStats': { 'Strength': [0, 40], 'Intelligence': [0, 75] },
    },
    'SKELETON_HORSE': {
      'BaseStats': { 'Speed': [0, 50], 'Intelligence': [0, 100] },
    },
    'BLUE_WHALE': {
      'BaseStats': { 'Health': [0, 200] },
    },
    'GIRAFFE': {
      'BaseStats': { 'CritChance': [0, 5], 'Health': [0, 100] },
    },
    'AMMONITE': {
      'BaseStats': { 'SeaCreatureChance': [0, 5] }, // maxed is 12 but only with the Heart of the Sea perk
    },
    'LION': {
      'BaseStats': { 'Strength': [0, 50], 'Speed': [0, 25], 'Ferocity': [0, 5] },
    },
    'JELLYFISH': {
      'BaseStats': { 'Health': [0, 200], 'HealthRegeneration': [0, 100] },
    },
    'ARMADILLO': {
      'BaseStats': { 'Defense': [0, 200] },
    },
    'ENDERMAN': {
      'BaseStats': { 'CritDamage': [0, 75] },
    },
    'EERIE': {
      'BaseStats': { 'Speed': [0, 10], 'Intelligence': [0, 50] }
    },
    'TARANTULA': {
      'BaseStats': { 'Strength': [0, 10], 'CritChance': [0, 10], 'CritDamage': [0, 30] },
    },
    'PIGMAN': {
      'BaseStats': { 'Strength': [0, 50], 'Ferocity': [0, 5], 'Defense': [0, 50] },
    },
    'MAGMA_CUBE': {
      'BaseStats': { 'Strength': [0, 20], 'Health': [0, 50], 'Defense': [0, (33 + (4 / 3))] },
    },
    'SUBZERO_WISP': {
      'BaseStats': { 'Damage': [0, 25], 'Intelligence': [0, 250], 'Health': [0, 600], 'TrueDefense': [0, 35] },
    },
    'GLACIAL_WISP': {
      'BaseStats': { 'Damage': [0, 20], 'Intelligence': [0, 125], 'Health': [0, 400], 'TrueDefense': [0, 30] },
    },
    'FROST_WISP': {
      'BaseStats': { 'Damage': [0, 15], 'Intelligence': [0, 50], 'Health': [0, 250], 'TrueDefense': [0, 15] },
    },
    'DROPLET_WISP': {
      'BaseStats': { 'Damage': [0, 10], 'Health': [0, 100] },
    },
    'SPIDER': {
      'BaseStats': { 'Strength': [0, 10], 'CritChance': [0, 10] },
    },
    'TURTLE': {
      'BaseStats': { 'Health': [0, 50], 'Defense': [0, 100] },
    },
    'ZOMBIE': {
      'BaseStats': { 'CritDamage': [0, 100], 'Health': [0, 100] },
    },
    'HORSE': {
      'BaseStats': { 'Speed': [0, 25], 'Intelligence': [0, 50] },
    },
    'HOUND': {
      'BaseStats': { 'Strength': [0, 40], 'BonusAttackSpeed': [0, 15], 'Ferocity': [0, 5] },
    },
    'RIFT_FERRET': {
      'BaseStats': { 'Speed': [0, 50], 'Intelligence': [0, -2] },
    },
    'SPIRIT': {
      'BaseStats': { 'Speed': [0, 30], 'Intelligence': [0, 100] },
    },
    'SLUG': {
      'BaseStats': { 'Intelligence': [0, 25], 'Defense': [0, 20] },
    },
    'BEE': {
      'BaseStats': { 'Strength': [5, 30], 'Speed': [0, 10], 'Intelligence': [0, 50] },
    },
    'OWL': {
      'BaseStats': {},
    },
    'GOLEM': {
      'BaseStats': { 'Strength': [0, 50], 'Health': [0, 50] },
    },
    'ENDER_DRAGON': {
      'BaseStats': { 'Strength': [0, 50], 'Health': [0, 150] },
    },
    'SHEEP': {
      'BaseStats': { 'Intelligence': [0, 100], 'AbilityDamage': [0, 20] },
    },
  }




  let maxLevel;
  if (id === 'GOLDEN_DRAGON') {
    maxLevel = 200;
  }
  else {
    maxLevel = 100;
  }

  console.log('id: ', id, 'BaseStats', extraPetStatsMinMax[id]['BaseStats'], 'RARITY', rarity)
  rarity = rarity.toUpperCase() as any;
  switch (id) {
    case 'GOLDEN_DRAGON': return ({
      category: minecraftColoredStringToText(`§8Combat Pet, ${skin ? skin : ''}`),
      stats: (level >= 100) ?
        minecraftColoredStringToText(`§7Bonus Attack Speed: §c${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['BonusAttackSpeed'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['BonusAttackSpeed'][1], minosRelic: relic })}\n
        §7Magic Find: §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['MagicFind'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['MagicFind'][1], minosRelic: relic })}\n})})}`)
        : minecraftColoredStringToText(`§c§l???`),
      firstAbility: (level >= 100) ? minecraftColoredStringToText(`§6Gold's Power_§7§7Adds §c+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['GoldsPower'][rarity][0] ?? 0, maxStat: extraPetStatsMinMax[id]['GoldsPower'][rarity][1] ?? 0 })}❁ Strength §7to all §6golden §6§7weapons.`)
        : minecraftColoredStringToText(`§7Hatches at level §b100`),
      secondAbility: (level >= 100) ? minecraftColoredStringToText(`§6Shining Scales_§7§7Grants §c+10❁ Strength §7and §b+2✯", "§bMagic Find §7to your pet for each digit", "§7in your §6gold collection§7.`)
        : '',
      thirdAbility: (level >= 100) ? minecraftColoredStringToText(`§6Dragon's Greed_§7§7Grants §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['DragonsGreed'][rarity][0], maxStat: extraPetStatsMinMax[id]['LegendaryTreasure'][rarity][1] })}% §c❁ Strength §7per §b5 §b✯§bMagic Find§7.`)
        : '',
      fourthAbility: (level >= 100) ? minecraftColoredStringToText(`§6Legendary Treasure_§7§7Gain §c${roundLegendaryTreasure(calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['LegendaryTreasure'][rarity][0], maxStat: extraPetStatsMinMax[id]['LegendaryTreasure'][rarity][1] }), level)}% §7damage for every million §7coins in your bank.`)
        : ''
    });
    case 'BAT': return ({
      category: minecraftColoredStringToText(`§8Mining Pet, ${skin ? skin : ''}`),
      stats: minecraftColoredStringToText(`§7Speed: §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Speed'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Speed'][1], minosRelic: relic })}\n
      §7Intelligence: §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Intelligence'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Intelligence'][1], minosRelic: relic })}
      ${rarity === 'MYTHIC' ? `\n§7Sea Creature Chance: §c+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['SeaCreatureChance'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['SeaCreatureChance'][1], minosRelic: relic })}` : ''}`),
      firstAbility: minecraftColoredStringToText(`§6Candy Lover_§7§7Increases drop chance of candies §7from mobs by §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['CandyLover'][rarity][0], maxStat: extraPetStatsMinMax[id]['CandyLover'][rarity][1] })}§7.`),
      secondAbility: minecraftColoredStringToText(`§6Nightmare_§7§7§7During night, gain §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['Nightmare'][rarity]['Intelligence'][0], maxStat: extraPetStatsMinMax[id]['Nightmare'][rarity]['Intelligence'][1] })}§b✎ Intelligence§7, §7§a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['Nightmare'][rarity]['Speed'][0], maxStat: extraPetStatsMinMax[id]['Nightmare'][rarity]['Speed'][1] })} §f✦ Speed§7, and §aNight Vision§7.`),
      thirdAbility: minecraftColoredStringToText(`§6Wings of Steel_§7§7Deals §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['WingsOfSteel'][rarity][0], maxStat: extraPetStatsMinMax[id]['WingsOfSteel'][rarity][1] })}% §7damage to §6Spooky §6§7enemies during the §6Spooky Festival§7.`),
      fourthAbility: (rarity === 'MYTHIC') ? minecraftColoredStringToText(`§6Sonar_§7§7§a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['Sonar'][rarity][0], maxStat: extraPetStatsMinMax[id]['Sonar'][rarity][1] })}% §7chance to fish up spooky sea", "§7creatures.`)
        : ''
    });
    case 'BLACK_CAT': return ({
      category: minecraftColoredStringToText(`§8Combat Pet, ${skin ? skin : ''}`),
      stats: minecraftColoredStringToText(`§7Speed: §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Speed'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Speed'][1], minosRelic: relic })}\n
      §7Intelligence: §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Intelligence'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Intelligence'][1], minosRelic: relic })}\n
      §7Magic Find: §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['MagicFind'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['MagicFind'][1], minosRelic: relic })}\n
      §7Pet Luck: §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['PetLuck'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['PetLuck'][1], minosRelic: relic })}`),
      firstAbility: minecraftColoredStringToText(`§6Hunter_§7§7Increases your §f✦ Speed §7and speed §7cap by +§a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['Hunter'][rarity][0], maxStat: extraPetStatsMinMax[id]['Hunter'][rarity][1] })}§7."`),
      secondAbility: minecraftColoredStringToText(`§6Omen_§7§7Grants §d+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['Omen'][rarity][0], maxStat: extraPetStatsMinMax[id]['Omen'][rarity][1] })}♣ Pet Luck§7.`),
      thirdAbility: minecraftColoredStringToText(`§6Supernatural_§7§7Grants §b+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['Supernatural'][rarity][0], maxStat: extraPetStatsMinMax[id]['Supernatural'][rarity][1] })}✯ Magic Find§7.`),
      fourthAbility: (rarity === 'MYTHIC') ? minecraftColoredStringToText(`§6Looting_§7§7Gain §c${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['Looting'][rarity][0], maxStat: extraPetStatsMinMax[id]['Looting'][rarity][0] })}% §7more collection items from", "§7monsters!`)
        : ''
    });
    case 'ENDERMITE': return ({
      category: minecraftColoredStringToText(`§8Mining Pet, ${skin ? skin : ''}`),
      stats: minecraftColoredStringToText(`§7Intelligence: §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Intelligence'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Intelligence'][1] })}\n
      §7Pet Luck: §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['PetLuck'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['PetLuck'][1] })}`),
      firstAbility: minecraftColoredStringToText(`§6More Stonks_§7§7Gain more exp orbs for breaking end §7stone and gain a +§a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['MoreStonks'][rarity][0], maxStat: extraPetStatsMinMax[id]['MoreStonks'][rarity][1] })}% §7chance to §7get an extra block dropped.`),
      secondAbility: minecraftColoredStringToText(`§6Daily Commuter_§7§7§9Transmission Abilities §7cost §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['DailyCommuter'][rarity][0], maxStat: extraPetStatsMinMax[id]['DailyCommuter'][rarity][1] })}% §7less §7mana."`),
      thirdAbility: minecraftColoredStringToText(`§6Mite Bait_§7§7Gain a §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['MiteBait'][rarity][0], maxStat: extraPetStatsMinMax[id]['MiteBait'][rarity][1] })}% §7chance to dig up a bonus §7§cNest Endermite §7per §d+1♣ Pet Luck §d§8(Stacks above 100%).`),
      fourthAbility: minecraftColoredStringToText(`§6Sacrificer_§7§7Increases the odds of rolling for §7bonus items in the §cDraconic Altar §7by §7§a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['Sacrificer'][rarity][0], maxStat: extraPetStatsMinMax[id]['Sacrificer'][rarity][1] })}%§7.`)
    });
  }

  //     switch (id) {
  //       case 'GOLDEN_DRAGON': // ENDERMITE; BLACK:CAT; BAT; GOLDEN_DRAGON
  //         if (rarity === 'LEGENDARY') {
  //         }
}


function roundLegendaryTreasure(num: any, level: number) {
  let levelneedOneUp = [188, 164, 140]
  let levelneedOneDown = [196]
  let truncated = parseFloat(Math.floor(num.toString() * 10000).toString()) / 10000;
  console.log('\nNUM', truncated);

  if (levelneedOneUp.includes(level)) {
    truncated += 0.001
  }
  else if (levelneedOneDown.includes(level)) {
    truncated -= 0.001;
  }

  return parseFloat(truncated.toFixed(2));
}


function berechne_m(x: number, y: number, b: number) {
  return (y - b) / x
}


function calculatePetStats({
  maxLevel,
  level,
  minStat,
  maxStat,
  minosRelic = false,
}: {
  maxLevel: number,
  level: number,
  minStat: number,
  maxStat: number,
  minosRelic?: boolean,
}) {
  if (maxLevel > 100) { level -= 100; maxLevel -= 100 }
  let erg = berechne_m(maxLevel, maxStat, minStat) * level + minStat
  if (minosRelic) return parseFloat((erg * (4 / 3)).toFixed(2))
  return erg
}