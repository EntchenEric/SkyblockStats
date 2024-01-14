import { petStats } from '@/types/lore';
import { minecraftColoredStringToText } from './minecraftColoredStringToText';



const Icons: { [key: string]: string } = {
  "Strength": '❁',
};

export function getPetLore(
  id: string,
  rarity: 'COMMON' | 'UNCOMMON' | 'RARE' | 'EPIC' | 'LEGENDARY' | 'MYTHIC',
  level: number,
  petStatsMax: petStats,
  petStatsMin: petStats,
  skin: string
) {
  if (!id) return 'No ID provided';
  if (!rarity) return 'No rarity provided';
  if (!level) return 'No level provided';

  const extraPetStatsMinMax: any = {
    'GOLDEN_DRAGON': {
      LegendaryTreasure: {
        'LEGENDARY': [0.0012625, 0.0025],
      },
      'BLACK_CAT': {
        Hunter: {
          'LEGENDARY': [0.001, 0.1],
          'MYTHIC': [0.001, 0.1],
        },
        Omen: {
          'LEGENDARY': [0.001, 0.1],
          'MYTHIC': [0.001, 0.1],
        },
        Supernatural: {
          'LEGENDARY': [0.001, 0.1],
          'MYTHIC': [0.001, 0.1],
        },
        Looting: {
          'MYTHIC': [0.0015, 0.15],

        }
      },
      'BAT': {
        CandyLover: {
          'COMMON': [0.001, 0.1],
          'UNCOMMON': [0.0015, 0.15],
          'RARE': [0.0015, 0.15],
          'EPIC': [0.002, 0.2],
          'LEGENDARY': [0.01, 1],
          'MYTHIC': [0.01, 1],
        },
        Nightmare: {
          'RARE': { 'Intelligence': [0.2, 20], 'Speed': [0.4, 40] },
          'EPIC': { 'Intelligence': [0.3, 30], 'Speed': [0.5, 50] },
          'LEGENDARY': { 'Intelligence': [0.4, 40], 'Speed': [0.6, 60] },
          'MYTHIC': { 'Intelligence': [0.4, 40], 'Speed': [0.6, 60] },
        },
        WingsOfSteel: {
          'LEGENDARY': [0.001, 0.1],
          'MYTHIC': [0.001, 0.1],
        },
        Sonar: {
          'MYTHIC': [0.001, 0.1],
        }
      },
      'ENDERMITE': {
        MoreStonks: {
          'COMMON': [0.005, 0.5],
          'UNCOMMON': [0.008, 0.8],
          'RARE': [0.008, 0.8],
          'EPIC': [0.01, 1],
          'LEGENDARY': [0.01, 1],
          'MYTHIC': [0.01, 1],
        },
        DailyComuter: {
          'RARE': [0.003, 0.3],
          'EPIC': [0.004, 0.4],
          'LEGENDARY': [0.004, 0.4],
          'MYTHIC': [0.004, 0.4],
        },
        MiteBait: {
          'LEGENDARY': [0, 0.03],
          'MYTHIC': [0, 0.03],
        },
        Sacrificer: {
          'MYTHIC': [0.001, 0.1],
        }
      },
    }
  }



  const petAbilityScalings: any = {
    'GOLDEN_DRAGON': {
      GoldsPower: undefined,
    },
    'BAT': {
      CandyLover: {
        'COMMON': 0.001,
        'UNCOMMON': 0.0015,
        'RARE': 0.0015,
        'EPIC': 0.002,
        'LEGENDARY': 0.002,
        'MYTHIC': 0.002,
      },
      Nightmare: {
        'RARE': { 'Intelligence': 0.2, 'Speed': 0.4 },
        'EPIC': { 'Intelligence': 0.3, 'Speed': 0.5 },
        'LEGENDARY': { 'Intelligence': 0.3, 'Speed': 0.5 },
        'MYTHIC': { 'Intelligence': 0.3, 'Speed': 0.5 },
      },
      WingsOfSteel: {
        'LEGENDARY': 0.005,
        'MYTHIC': 0.005,
      },
      Sonar: {
        'MYTHIC': 0.0025,
      }
    },
    'ENDERMITE': {
      MoreStonks: {
        'COMMON': 0.005,
        'UNCOMMON': 0.008,
        'RARE': 0.008,
        'EPIC': 0.01,
        'LEGENDARY': 0.01,
        'MYTHIC': 0.01,
      },
      DailyCommuter: {
        'RARE': 0.003,
        'EPIC': 0.004,
        'LEGENDARY': 0.004,
        'MYTHIC': 0.004,
      },
      MiteBait: {
        'LEGENDARY': 0.0003,
        'MYTHIC': 0.0003,
      },
      Sacrificer: {
        'MYTHIC': 0.001,
      }
    },

  }

  const petLores: {
    [key: string]: {
      category: any | undefined, stats: any | undefined, firstAbility: any | undefined, secondAbility: any | undefined, thirdAbility: any | undefined, fourthAbility: any | undefined
    }
  } = {
    'GOLDEN_DRAGON': {
      category: minecraftColoredStringToText(`§8Combat Pet, ${skin ? skin : ''}`),
      stats: (level >= 100) ?
        minecraftColoredStringToText(`§7Bonus Attack Speed: §c${calculatePetStats(level, petStatsMin.bonusAttackSpeed ?? 0, petStatsMax.bonusAttackSpeed ?? 0)}\n
        §7Magic Find: §a${calculatePetStats(level, petStatsMin.magicFind ?? 0, petStatsMax.magicFind ?? 0)}`)
        : minecraftColoredStringToText(`§c§l???`),
      firstAbility: (level >= 100) ? minecraftColoredStringToText(`§6Gold's Power_§7§7Adds §c+${calculatePetStats(level, petStatsMin.strength ?? 0, petStatsMax.strength ?? 0, 0.5)}❁ Strength §7to all §6golden §6§7weapons.`)
        : minecraftColoredStringToText(`§7Hatches at level §b100`),
      secondAbility: (level >= 100) ? minecraftColoredStringToText(`§6Shining Scales_§7§7Grants §c+10❁ Strength §7and §b+2✯", "§bMagic Find §7to your pet for each digit", "§7in your §6gold collection§7.`)
        : '',
      thirdAbility: (level >= 100) ? minecraftColoredStringToText(`§6Dragon's Greed_§7§7Grants §a+${calculatePetStats(level, petStatsMin.strength ?? 0, petStatsMax.strength ?? 0, Number('...'))}% §c❁ Strength §7per §b5 §b✯§bMagic Find§7.`) // Need magicfind of Player for calculation
        : '',
      fourthAbility: (level >= 100) ? minecraftColoredStringToText(`§6Legendary Treasure_§7§7Gain §c${calculatePetStats(level, extraPetStatsMinMax[id].LegendaryTreasure[0], extraPetStatsMinMax[id].LegendaryTreasure[1], 0.00125)}% §7damage for every million §7coins in your bank.`)
        : ''
    },
    'BAT': {
      category: minecraftColoredStringToText(`§8Mining Pet, ${skin ? skin : ''}`),
      stats: minecraftColoredStringToText(`§7Speed: §a${calculatePetStats(level, petStatsMin.speed ?? 0, petStatsMax.speed ?? 0)}\n
      §7Intelligence: §a${calculatePetStats(level, petStatsMin.intelligence ?? 0, petStatsMax.intelligence ?? 0)}
      ${rarity === 'MYTHIC' ? `\n§7Sea Creature Chance: §c+${calculatePetStats(level, petStatsMin.seaCreatureChance ?? 0, petStatsMax.seaCreatureChance ?? 0)}` : ''}`),
      firstAbility: minecraftColoredStringToText(`§6Candy Lover_§7§7Increases drop chance of candies §7from mobs by §a${calculatePetStats(level, extraPetStatsMinMax[id].CandyLover[rarity][0], extraPetStatsMinMax[id].CandyLover[rarity][1], petAbilityScalings[id].CandyLover[rarity])}§7.`),
      secondAbility: minecraftColoredStringToText(`§6Nightmare_§7§7§7During night, gain §a${calculatePetStats(level, extraPetStatsMinMax[id].Nightmare[rarity].Intelligence[0], extraPetStatsMinMax[id].Nightmare[rarity].Intelligence[1], petAbilityScalings[id].Nightmare[rarity])}§b✎ Intelligence§7, §7§a${calculatePetStats(level, extraPetStatsMinMax[id].Nightmare[rarity].Speed[0], extraPetStatsMinMax[id].Nightmare[rarity].Speed[1])} §f✦ Speed§7, and §aNight Vision§7.`),
      thirdAbility: minecraftColoredStringToText(`§6Wings of Steel_§7§7Deals §a+${calculatePetStats(level, extraPetStatsMinMax[id].WingsOfSteel[rarity][0], extraPetStatsMinMax[id].WingsOfSteel[rarity][1], petAbilityScalings[id].WingsOfSteel[rarity])}% §7damage to §6Spooky §6§7enemies during the §6Spooky Festival§7.`),
      fourthAbility: minecraftColoredStringToText(`§6Sonar_§7§7§a+${calculatePetStats}% §7chance to fish up spooky sea", "§7creatures.`)
    },
    'BLACK_CAT': {
      category: minecraftColoredStringToText(`§8Combat Pet, ${skin ? skin : ''}`),
      stats: minecraftColoredStringToText(`§7Speed: §a+${calculatePetStats(level, petStatsMin.speed ?? 0, petStatsMax.speed ?? 0)}\n
      §7Intelligence: §a+${calculatePetStats(level, petStatsMin.intelligence ?? 0, petStatsMax.intelligence ?? 0)}\n
      §7Magic Find: §a+${calculatePetStats(level, petStatsMin.magicFind ?? 0, petStatsMax.magicFind ?? 0)}\n
      §7Pet Luck: §a+${calculatePetStats(level, petStatsMin.petLuck ?? 0, petStatsMax.petLuck ?? 0)}`),
      firstAbility: minecraftColoredStringToText(`§6Hunter_§7§7Increases your §f✦ Speed §7and speed §7cap by +§a${calculatePetStats(level, petStatsMin.speed ?? 0, petStatsMax.speed ?? 0, 1)}§7."`),
      secondAbility: minecraftColoredStringToText(`§6Omen_§7§7Grants §d+${calculatePetStats(level, petStatsMin.petLuck ?? 0, petStatsMax.petLuck ?? 0, 0.15)}♣ Pet Luck§7.`),
      thirdAbility: minecraftColoredStringToText(`§6Supernatural_§7§7Grants §b+${calculatePetStats(level, petStatsMin.magicFind ?? 0, petStatsMax.magicFind ?? 0, 0.15)}✯ Magic Find§7.`),
      fourthAbility: minecraftColoredStringToText(`§6Looting_§7§7Gain §c${calculatePetStats(level, extraPetStatsMinMax[id].Looting[0], extraPetStatsMinMax[id].Looting[1], 0.0015)}% §7more collection items from", "§7monsters!`)
    },
    'ENDERMITE': {
      category: minecraftColoredStringToText(`§8Mining Pet, ${skin ? skin : ''}`),
      stats: minecraftColoredStringToText(`§7Intelligence: §a+${calculatePetStats(level, petStatsMin.intelligence ?? 0, petStatsMax.intelligence ?? 0)}\n
      §7Pet Luck: §a+${calculatePetStats(level, petStatsMin.petLuck ?? 0, petStatsMax.petLuck ?? 0)}`),
      firstAbility: minecraftColoredStringToText(`§6More Stonks_§7§7Gain more exp orbs for breaking end §7stone and gain a +§a${calculatePetStats(level, extraPetStatsMinMax[id].MoreStonks[rarity][0], extraPetStatsMinMax[id].MoreStonks[rarity][1])}% §7chance to §7get an extra block dropped.`),
      secondAbility: minecraftColoredStringToText(`§6Daily Commuter_§7§7§9Transmission Abilities §7cost §a${calculatePetStats(level, extraPetStatsMinMax[id].DailyComuter[rarity][0], extraPetStatsMinMax[id].DailyCommuter[rarity][1])}% §7less §7mana."`),
      thirdAbility: minecraftColoredStringToText(`§6Mite Bait_§7§7Gain a §a${calculatePetStats(level, extraPetStatsMinMax[id].MiteBait[rarity][0], extraPetStatsMinMax[id].MiteBait[rarity][1])}% §7chance to dig up a bonus §7§cNest Endermite §7per §d+1♣ Pet Luck §d§8(Stacks above 100%).`),
      fourthAbility: minecraftColoredStringToText(`§6Sacrificer_§7§7Increases the odds of rolling for §7bonus items in the §cDraconic Altar §7by §7§a${calculatePetStats(level, extraPetStatsMinMax[id].Sacrificer[rarity][0], extraPetStatsMinMax[id].Sacrificer[rarity][1])}%§7.`)
    }
  };

  switch (id) {
    case 'GOLDEN_DRAGON':
      if (rarity === 'LEGENDARY') {
      }
  }
}

function calculatePetStats(
  level: number,
  statMin: number,
  statMax: number,
  scaling: number | undefined = undefined
) {
  if (statMin === 0 || statMax === 0) return '§4No min or max stat provided';
  if (!scaling) { return Math.round(statMin + (statMax - statMin) * (level / 100)); }
  if (level > 100) { return parseFloat((statMin + (level - 100) * scaling - scaling).toFixed(4)); }
  else { return parseFloat((statMin + (level * scaling) - 0.001).toFixed(4)); }
}
