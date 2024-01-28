import { minecraftColoredStringToText } from './minecraftColoredStringToText';


const Icons: { [key: string]: string } = {
  "Strength": '❁',
};

export function getPetLore(
  id: string,
  rarity: 'COMMON' | 'UNCOMMON' | 'RARE' | 'EPIC' | 'LEGENDARY' | 'MYTHIC',
  relic: boolean,
  level: number,
  skin: string,
  profileData: any,
  uuid: string
) {

  let blazekills = undefined;
  if (id.includes('WISP')) {
    for (let i = 0; i < profileData.length; i++) {
      if (profileData[i].type.includes('WISP') && profileData[i].uuid === uuid) {
        blazekills = profileData[i]['extra']['blaze_kills'];
      }
    };
    if (blazekills != undefined) console.log(blazekills);

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
        'BaseStats': { 'Speed': [0, 125], 'Intelligence': [0, 100], 'MagicFind': [0, 15], 'PetLuck': [0, 15] },
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
          'COMMON': [0, 10],
          'UNCOMMON': [0, 15],
          'RARE': [0, 15],
          'EPIC': [0, 20],
          'LEGENDARY': [0, 20],
          'MYTHIC': [0, 20],
        },
        'Nightmare': {
          'RARE': { 'Intelligence': [0, 20], 'Speed': [0, 40] },
          'EPIC': { 'Intelligence': [0, 30], 'Speed': [0, 50] },
          'LEGENDARY': { 'Intelligence': [0, 30], 'Speed': [0, 50] },
          'MYTHIC': { 'Intelligence': [0, 30], 'Speed': [0, 50] },
        },
        'WingsOfSteel': {
          'LEGENDARY': [0, 50],
          'MYTHIC': [0, 50],
        },
        'Sonar': {
          'MYTHIC': [0, 25],
        }
      },
      'ENDERMITE': {
        'BaseStats': { 'Intelligence': [0, 150], 'PetLuck': [0, 15] },
        'MoreStonks': {
          'COMMON': [0, 50],
          'UNCOMMON': [0, 75],
          'RARE': [0, 75],
          'EPIC': [0, 100],
          'LEGENDARY': [0, 100],
          'MYTHIC': [0, 100],
        },
        'DailyCommuter': {
          'RARE': [0, 30],
          'EPIC': [0, 40],
          'LEGENDARY': [0, 40],
          'MYTHIC': [0, 40],
        },
        'MiteBait': {
          'LEGENDARY': [0, 3],
          'MYTHIC': [0, 3],
        },
        'Sacrificer': {
          'MYTHIC': [0, 10],
        }
      },
      'FLYING_FISH': {
        'BaseStats': { 'Strength': [0, 50], 'Defense': [0, 50] },
        'QuickReel': {
          'RARE': [0, 60],
          'EPIC': [0, 75],
          'LEGENDARY': [0, 80],
          'MYTHIC': [0, 80],
        },
        'WaterBender': {
          'RARE': { 'Strength': [0, 80], 'Defense': [0, 80] },
          'EPIC': { 'Strength': [0, 100], 'Defense': [0, 100] },
          'LEGENDARY': { 'Strength': [0, 100], 'Defense': [0, 100] },
        },
        'LavaBender': {
          'MYTHIC': { 'Strength': [0, 100], 'Defense': [0, 100] },
        },
        'DeepSeaDiver': {
          'LEGENDARY': [0, 20],
        },
        'MagmaticDiver': {
          'MYTHIC': [0, 20],
        },
        'RapidDecay': {
          'MYTHIC': [0, 50]
        },
      },
      'GUARDIAN': {
        'BaseStats': { 'Intelligence': [0, 100], 'Defense': [0, 50] },
        'Lazerbeam': {
          'COMMON': [0, 2],
          'UNCOMMON': [0, 5],
          'RARE': [0, 10],
          'EPIC': [0, 15],
          'LEGENDARY': [0, 20],
          'MYTHIC': [1, 120],
        },
        'EnchantingWisdomBoost': {
          'RARE': [0, 25],
          'EPIC': [0, 30],
          'LEGENDARY': [0, 30],
          'MYTHIC': [0, 30],
        },
        'ManaPool': {
          'LEGENDARY': [0, 30],
          'MYTHIC': [0, 30],
        },
        'LuckySeven': {
          'MYTHIC': [0, 7],
        },
      },
      'JERRY': {
        'BaseStats': { 'Intelligence': [0, -100] },
        'Jerry': {
          'LEGENDARY': [0, 10],
          'MYTHIC': [0, 50],
        },
      },
      'MITHRIL_GOLEM': {
        'BaseStats': { 'TrueDefense': [0, 50] },
        'MithrilAffinity': {
          'COMMON': [0, 50],
          'UNCOMMON': [0, 75],
          'RARE': [0, 75],
          'EPIC': [0, 100],
          'LEGENDARY': [0, 100],
          'MYTHIC': [0, 100],
        },
        'TheSmellOfPowder': {
          'RARE': [0, 10],
          'EPIC': [0, 20],
          'LEGENDARY': [0, 20],
          'MYTHIC': [0, 20],
        },
        'DangerAverse': {
          'LEGENDARY': [0, 20],
          'MYTHIC': [0, 20],
        },
        'RefinedSenses': {
          'MYTHIC': [0, 10],
        },
      },
      'RAT': {
        'BaseStats': { 'Strength': [0, 60], 'Health': [0, 125], 'CritDamage': [0, 25] },
        'RatsBlessing': {
          'LEGENDARY': { 'MagicFind': [2, 7], 'Seconds': [20, 60] },
          'MYTHIC': { 'MagicFind': [2, 7], 'Seconds': [20, 60] },
        },
      },
      'SNOWMAN': {
        'BaseStats': { 'Strength': [0, 25], 'Damage': [0, 25], 'CritDamage': [0, 25] },
        'Blizzard': {
          'LEGENDARY': [4, 8],
          'MYTHIC': [4, 8],
        },
        'Frostbite': {
          'LEGENDARY': [0, 15],
          'MYTHIC': [0, 15],
        },
      },
      'GHOUL': {
        'BaseStats': { 'Intelligence': [0, 75], 'Health': [1, 100], 'Ferocity': [0, 5] },
        'AmplifiedHealing': {
          'EPIC': [0, 20],
          'LEGENDARY': [0, 25],
        },
        'ZombieArm': {
          'EPIC': [0, 50],
          'LEGENDARY': [0, 50],
        },
        'ReaperSoul': {
          'LEGENDARY': [0, 100],
        },
      },
      'WITHER_SKELETON': {
        'BaseStats': { 'Strength': [0, 25], 'Intelligence': [0, 25], 'CritChance': [0, 25], 'CritDamage': [0, 25], 'Defense': [0, 25] },
        'StrongerBones': {
          'EPIC': [0, 30],
          'LEGENDARY': [0, 30],
        },
        'WitherBlood': {
          'EPIC': [0, 25],
          'LEGENDARY': [0, 25],
        },
        'DeathsTouch': {
          'LEGENDARY': [0, 200],
        }
      },
      'TIGER': {
        'BaseStats': { 'Strength': [5, 15], 'CritChance': [0, 5], 'CritDamage': [0, 50], 'Ferocity': [0, 25] },
        'MercilessSwipe': {
          'COMMON': [0, 10],
          'UNCOMMON': [0, 20],
          'RARE': [0, 20],
          'EPIC': [0, 30],
          'LEGENDARY': [0, 30],
        },
        'Hemorrhage': {
          'RARE': [0, 30],
          'EPIC': [0, 55],
          'LEGENDARY': [0, 15],
        },
        'ApexPredator': {
          'LEGENDARY': [0, 100],
        },
      },
      'WOLF': {
        'BaseStats': { 'Speed': [0, 20], 'CritDamage': [0, 10], 'Health': [0, 50], 'TrueDefense': [0, 10] },
        'AlphaDog': {
          'COMMON': [0, 10],
          'UNCOMMON': [0, 20],
          'RARE': [0, 20],
          'EPIC': [0, 30],
          'LEGENDARY': [0, 30],
        },
        'PackLeader': {
          'RARE': [0, 10],
          'EPIC': [0, 15],
          'LEGENDARY': [0, 15],
        },
        'CombatWisdomBoost': {
          'LEGENDARY': [0, 20],
        },
      },
      'MEGALODON': {
        'BaseStats': { 'Strength': [0, 50], 'Ferocity': [0, 5], 'MagicFind': [0, 10] },
        'BloodScent': {
          'EPIC': [0, 25],
          'LEGENDARY': [0, 25],
        },
        'EnhancedScales': {
          'EPIC': [0, 20],
          'LEGENDARY': [0, 20],
        },
        'FeedingFrenzy': {
          'LEGENDARY': [0, 50],
        },
      },
      'MONKEY': {
        'BaseStats': { 'Speed': [0, 20], 'Intelligence': [0, 50] },
        'Treeborn': {
          'COMMON': [0, 40],
          'UNCOMMON': [0, 50],
          'RARE': [0, 50],
          'EPIC': [0, 60],
          'LEGENDARY': [0, 60],
        },
        'VineSwing': {
          'RARE': [0, 75],
          'EPIC': [0, 100],
          'LEGENDARY': [0, 100],
        },
        'EvolvedAxes': {
          'LEGENDARY': [0, 50],
        },
      },
      'MOOSHROOM_COW': {
        'BaseStats': { 'Health': [1, 100], 'FarmingFortune': [11, 110] },
        'EfficientMushrooms': {
          'COMMON': [0, 20],
          'UNCOMMON': [0, 20],
          'RARE': [0, 30],
          'EPIC': [0, 30],
          'LEGENDARY': [0, 30],
        },
        'MushroomEater': {
          'RARE': [0, 100],
          'EPIC': [0, 100],
          'LEGENDARY': [0, 100],
        },
        'FarmingStrength': {
          'LEGENDARY': [40, 20],
        },
      },
      'OCELOT': {
        'BaseStats': { 'Speed': [0, 50], 'Ferocity': [0, 10] },
        'ForagingWisdomBoost': {
          'COMMON': [0, 20],
          'UNCOMMON': [0, 25],
          'RARE': [0, 25],
          'EPIC': [0, 30],
          'LEGENDARY': [0, 30],
        },
        'TreeHugger': {
          'RARE': [0, 30],
          'EPIC': [0, 30],
          'LEGENDARY': [0, 30],
        },
        'TreeEssence': {
          'LEGENDARY': [0, 30]
        },
      },
      'PARROT': {
        'BaseStats': { 'Intelligence': [0, 100], 'CritDamage': [0, 10] },
        'Flamboyant': {
          'EPIC': [0, 50],
          'LEGENDARY': [0, 50],
        },
        'Repeat': {
          'EPIC': [5, 40],
          'LEGENDARY': [5, 40],
        },
        'BirdDiscourse': {
          'LEGENDARY': [5, 30],
        },
        'ParrotFeatherInfusion': {
          'LEGENDARY': [0, 20],
        },
      },
      'PHOENIX': {
        'BaseStats': { 'Strength': [50, 150], 'Intelligence': [10, 60] },
        'Rekindle': {
          'EPIC': { 'Strength': [10, 20], 'Seconds': [2, 4] },
          'LEGENDARY': { 'Strength': [15, 30], 'Seconds': [2, 4] },
        },
        'FourthFlare': {
          'EPIC': { 'Value': [1, 13], 'Seconds': [2, 4] },
          'LEGENDARY': { 'Value': [1, 15], 'Seconds': [2, 5] },
        },
      },
      'PIG': {
        'BaseStats': { 'Speed': [0, 25] },
        'Run': {
          'COMMON': [0, 30],
          'UNCOMMON': [0, 40],
          'RARE': [0, 40],
          'EPIC': [0, 50],
          'LEGENDARY': [0, 50],
        },
        'Sprint': {
          'RARE': [0, 40],
          'EPIC': [0, 50],
          'LEGENDARY': [0, 50],
        },
      },
      'RABBIT': {
        'BaseStats': { 'Speed': [0, 20], 'Health': [0, 100] },
        'HappyFeet': {
          'COMMON': [0, 30],
          'UNCOMMON': [0, 40],
          'RARE': [0, 40],
          'EPIC': [0, 50],
          'LEGENDARY': [0, 50],
        },
        'FarmingWisdomBoost': {
          'RARE': [0, 25],
          'EPIC': [0, 30],
          'LEGENDARY': [0, 30],
        },
        'EfficientFarming': {
          'LEGENDARY': [0, 30],
        },
      },
      'ROCK': {
        'BaseStats': { 'Defense': [0, 200], 'TrueDefense': [0, 10] },
        'Fortify': {
          'RARE': [0, 20],
          'EPIC': [0, 25],
          'LEGENDARY': [0, 25],
        },
        'SteadyGround': {
          'LEGENDARY': [0, 30],
        },
      },
      'KUUDRA': {
        'BaseStats': { 'Strength': [0, 40], 'Health': [0, 400] },
      },
      'REINDEER': {
        'BaseStats': { 'Health': [0, 100], 'SeaCreatureChance': [0, 5], 'FishingSpeed': [0, 25] },
        'Infused': { 'LEGENDARY': [0, 75] },
        'SnowPower': { 'LEGENDARY': [0, 10] },
        'IcyWind': { 'LEGENDARY': [0, 20] },
      },
      'SKELETON': {
        'BaseStats': { 'CritChance': [0, 15], 'CritDamage': [0, 30] },
        'BoneArrows': {
          'COMMON': [0, 10],
          'UNCOMMON': [0, 15],
          'RARE': [0, 15],
          'EPIC': [0, 20],
          'LEGENDARY': [0, 20],
        },
        'Combo': {
          'RARE': [0, 15],
          'EPIC': [0, 17],
          'LEGENDARY': [0, 20],
        },
      },
      'SILVERFISH': {
        'BaseStats': { 'Health': [0, 20], 'Defense': [0, 100] },
        'TrueDefenseBoost': {
          'COMMON': [0, 5],
          'UNCOMMON': [0, 10],
          'RARE': [0, 10],
          'EPIC': [0, 15],
          'LEGENDARY': [0, 15],
        },
        'MiningWisdomBoost': {
          'RARE': [0, 25],
          'EPIC': [0, 30],
          'LEGENDARY': [0, 30],
        },
      },
      'SCATHA': {
        'BaseStats': { 'Defense': [0, 100], 'MiningSpeed': [0, 100] },
        'Grounded': {
          'RARE': [0, 100],
          'EPIC': [0, 125],
          'LEGENDARY': [0, 125],
        },
        'Burrowing': {
          'RARE': [0, 2.5],
          'EPIC': [0, 3],
          'LEGENDARY': [0, 3],
        },
        'Wormhole': {
          'EPIC': [0, 100],
          'LEGENDARY': [0, 100],
        },
        'GemstonePower': {
          'LEGENDARY': [0, 20],
        },
      },
      'SQUID': {
        'BaseStats': { 'Intelligence': [0, 50], 'Health': [0, 50] },
        'MoreInk': {
          'COMMON': [0, 50],
          'UNCOMMON': [0, 75],
          'RARE': [0, 75],
          'EPIC': [0, 100],
          'LEGENDARY': [0, 100],
        },
        'InkSpecialty': {
          'RARE': { 'Damage': [0, 30], 'Strength': [0, 10] },
          'EPIC': { 'Damage': [0, 40], 'Strength': [0, 20] },
          'LEGENDARY': { 'Damage': [0, 40], 'Strength': [0, 20] },
        },
        'FishingWisdomBoost': {
          'LEGENDARY': [0, 30],
        },
      },
      'SNAIL': {
        'BaseStats': { 'Intelligence': [0, 100] },
        'RedSandEnjoyer': {
          'COMMON': [0, 10],
          'UNCOMMON': [0, 20],
          'RARE': [0, 20],
          'EPIC': [0, 30],
          'LEGENDARY': [0, 30],
        },
        'SlowMoving': {
          'RARE': [0, 40],
          'EPIC': [0, 50],
          'LEGENDARY': [0, 50],
        },
        'SlowButEfficient': {
          'LEGENDARY': [0, 1],
        },
      },
      'GRANDMA_WOLF': {
        'BaseStats': { 'Strength': [0, 25], 'Health': [0, 100] },
        'KillCombo': {
          'COMMON': { '5': [8, 10], '10': [6, 8], '15': [4, 6], '20': [3, 5], '25': [3, 4], '30': [2, 3], 'MagicFind5': 1, 'MagicFind15': 1, 'MagicFind25': 1, 'Coins10': 2, 'CombatWisdom20': 5, 'Coins30': 2 },
          'UNCOMMON': { '5': [8, 10], '10': [6, 8], '15': [4, 6], '20': [3, 5], '25': [3, 4,], '30': [2, 3], 'MagicFind5': 1, 'MagicFind15': 2, 'MagicFind25': 1, 'Coins10': 4, 'CombatWisdom20': 7, 'Coins30': 4 },
          'RARE': { '5': [8, 10], '10': [6, 8], '15': [4, 6], '20': [3, 5], '25': [3, 4], '30': [2, 3], 'MagicFind5': 2, 'MagicFind15': 2, 'MagicFind25': 2, 'Coins10': 6, 'CombatWisdom20': 9, 'Coins30': 6 },
          'EPIC': { '5': [8, 10], '10': [6, 8], '15': [4, 6], '20': [3, 5], '25': [3, 4], '30': [2, 3], 'MagicFind5': 2, 'MagicFind15': 3, 'MagicFind25': 2, 'Coins10': 8, 'CombatWisdom20': 12, 'Coins30': 8 },
          'LEGENDARY': { '5': [8, 10], '10': [6, 8], '15': [4, 6], '20': [3, 5], '25': [3, 4], '30': [2, 3], 'MagicFind5': 3, 'MagicFind15': 3, 'MagicFind25': 3, 'Coins10': 10, 'CombatWisdom20': 15, 'Coins30': 10 },
        },
      },
      'DOLPHIN': {
        'BaseStats': { 'Intelligence': [0, 100], 'SeaCreatureChance': [0, 5] },
        'PodTactics': {
          'COMMON': [0, 7],
          'UNCOMMON': [0, 8],
          'RARE': [0, 8],
          'EPIC': [0, 10],
          'LEGENDARY': [0, 10],
        },
        'Echolocation': {
          'RARE': [0, 7],
          'EPIC': [0, 10],
          'LEGENDARY': [0, 10],
        },
      },
      'ELEPHANT': {
        'BaseStats': { 'Intelligence': [0, 75], 'Health': [0, 100] },
        'Stomp': {
          'COMMON': [0, 15],
          'UNCOMMON': [0, 15],
          'RARE': [0, 15],
          'EPIC': [0, 20],
          'LEGENDARY': [0, 20],
        },
        'WalkingFortress': {
          'RARE': [0, 1],
          'EPIC': [0, 1],
          'LEGENDARY': [0, 1],
        },
        'TrunkEfficiency': {
          'LEGENDARY': [0, 150],
        },
      },
      'BAL': {
        'BaseStats': { 'Strength': [0, 25], 'Ferocity': [0, 10] },
        'FireWhip': {
          'EPIC': [0, 10],
          'LEGENDARY': [0, 10],
        },
        'MadeofLava': {
          'LEGENDARY': [0, 15],
        },
      },
      'GRIFFIN': {
        'BaseStats': { 'Strength': [0, 25], 'Intelligence': [0, 10], 'CritChance': [0, 10], 'CritDamage': [0, 50], 'MagicFind': [0, 10] },
        'LegendaryConstitution': {
          'UNCOMMON': { 'Regeneration': 'V', 'Strength': 'VII' },
          'RARE': { 'Regeneration': 'VI', 'Strength': 'VII' },
          'EPIC': { 'Regeneration': 'VI', 'Strength': 'VIII' },
          'LEGENDARY': { 'Regeneration': 'VII', 'Strength': 'VIII' },
        },
        'PerpetualEmpathy': {
          'EPIC': [0, 16],
          'LEGENDARY': [0, 20],
        },
        'KingofKings': {
          'LEGENDARY': [1, 15],
        },
      },
      'CHICKEN': {
        'BaseStats': { 'Health': [0, 200] },
        'LightFeet': {
          'COMMON': [0, 30],
          'UNCOMMON': [0, 40],
          'RARE': [0, 40],
          'EPIC': [0, 50],
          'LEGENDARY': [0, 50],
        },
        'Eggstra': {
          'RARE': [0, 80],
          'EPIC': [0, 100],
          'LEGENDARY': [0, 100],
        },
        'MightyChickens': {
          'LEGENDARY': [0, 30],
        },
      },
      'BLAZE': {
        'BaseStats': { 'Intelligence': [0, 100], 'Defense': [10, 30] },
      },
      'BABY_YETI': {
        'BaseStats': { 'Strength': [0, 40], 'Intelligence': [0, 75] },
        'ColdBreeze': {
          'EPIC': [0, 50],
          'LEGENDARY': [0, 50],
        },
        'IceShields': {
          'EPIC': [0, 50],
          'LEGENDARY': [0, 50],
        },
        'YetiFury': {
          'LEGENDARY': [0, 100],
        },
      },
      'SKELETON_HORSE': {
        'BaseStats': { 'Speed': [0, 50], 'Intelligence': [0, 100] },
        'Run': { 'LEGENDARY': [0, 150] },
        'RideIntoBattle': { 'LEGENDARY': [0, 40] },
      },
      'BLUE_WHALE': {
        'BaseStats': { 'Health': [0, 200] },
        'Ingest': {
          'COMMON': [0, 50],
          'UNCOMMON': [0, 100],
          'RARE': [0, 150],
          'EPIC': [0, 200],
          'LEGENDARY': [0, 250],
        },
        'Bulk': {
          'RARE': { 'Health': [0, 1], 'Defense': [30] },
          'EPIC': { 'Health': [0, 1], 'Defense': [25] },
          'LEGENDARY': { 'Health': [0, 1], 'Defense': [20] },
        },
        'Archimedes': {
          'LEGENDARY': [0, 20],
        },
      },
      'GIRAFFE': {
        'BaseStats': { 'CritChance': [0, 5], 'Health': [0, 100] },
        'GoodHeart': {
          'COMMON': [0, 5],
          'UNCOMMON': [0, 10],
          'RARE': [0, 15],
          'EPIC': [0, 20],
          'LEGENDARY': [0, 25],
        },
        'HigherGround': {
          'RARE': { 'Strength': [0, 40], 'CritDamage': [20, 30] },
          'EPIC': { 'Strength': [0, 50], 'CritDamage': [20, 45] },
          'LEGENDARY': { 'Strength': [0, 50], 'CritDamage': [20, 60] },
        },
        'LongNeck': {
          'LEGENDARY': [0, 25],
        },
      },
      'AMMONITE': {
        'BaseStats': { 'SeaCreatureChance': [0, 5] }, // maxed is 12 but only with the Heart of the Sea perk
        'HeartoftheSea': {
          'LEGENDARY': [0, 1],
        },
        'ExpertCaveFisher': {
          'LEGENDARY': [1, 100],
        },
        'GiftoftheAmmonite': {
          'LEGENDARY': { 'FishingSpeed': [0.01, 0.5], 'Speed': [0.02, 2], 'Defense': [0.02, 2] },
        },
      },
      'LION': {
        'BaseStats': { 'Strength': [0, 50], 'Speed': [0, 25], 'Ferocity': [0, 5] },
        'PrimalForce': {
          'COMMON': { 'Damage': [0, 3], 'Strength': [0, 3] },
          'UNCOMMON': { 'Damage': [0, 5], 'Strength': [0, 5] },
          'RARE': { 'Damage': [0, 10], 'Strength': [0, 10] },
          'EPIC': { 'Damage': [0, 15], 'Strength': [0, 15] },
          'LEGENDARY': { 'Damage': [0, 20], 'Strength': [0, 20] },
        },
        'FirstPounce': {
          'RARE': [0, 75],
          'EPIC': [0, 100],
          'LEGENDARY': [0, 100],
        },
        'KingoftheJungle': {
          'LEGENDARY': [0, 150],
        },
      },
      'JELLYFISH': {
        'BaseStats': { 'Health': [0, 200], 'HealthRegeneration': [0, 100] },
        'RadiantScyphozoa': {
          'EPIC': [0, 50],
          'LEGENDARY': [0, 50],
        },
        'StoredEnergy': {
          'EPIC': [0, 1],
          'LEGENDARY': [0, 1],
        },
        'PowerfulPotions': {
          'LEGENDARY': [0, 50],
        },
      },
      'ARMADILLO': {
        'BaseStats': { 'Defense': [0, 200] },
        'RollingMiner': {
          'RARE': [60, 40],
          'EPIC': [60, 30],
          'LEGENDARY': [60, 30],
        },
        'MobileTank': {
          'LEGENDARY': [100, 50],
        },
      },
      'ENDERMAN': {
        'BaseStats': { 'CritDamage': [0, 75] },
        'Enderian': {
          'COMMON': [0, 10],
          'UNCOMMON': [0, 20],
          'RARE': [0, 20],
          'EPIC': [0, 30],
          'LEGENDARY': [0, 30],
          'MYTHIC': [0, 30],
        },
        'TeleportSavyy': {
          'RARE': [0, 40],
          'EPIC': [0, 50],
          'LEGENDARY': [0, 50],
          'MYTHIC': [0, 50],
        },
        'ZealotMadness': {
          'LEGENDARY': [0, 25],
          'MYTHIC': [0, 25],
        },
        'EndermanSlayer': {
          'MYTHIC': [1, 1.4],
        },
      },
      'EERIE': {
        'BaseStats': { 'Speed': [0, 10], 'Intelligence': [0, 50] }
      },
      'TARANTULA': {
        'BaseStats': { 'Strength': [0, 10], 'CritChance': [0, 10], 'CritDamage': [0, 30] },
        'WebbedCells': {
          'EPIC': [0, 30],
          'LEGENDARY': [0, 30],
          'MYTHIC': [0, 30],
        },
        'EightLegs': {
          'EPIC': [0, 50],
          'LEGENDARY': [0, 50],
          'MYTHIC': [0, 50],
        },
        'ArachnidSlayer': {
          'LEGENDARY': [1, 1.5],
          'MYTHIC': [1, 1.5],
        },
      },
      'PIGMAN': {
        'BaseStats': { 'Strength': [0, 50], 'Ferocity': [0, 5], 'Defense': [0, 50] },
        'BaconFarmer': {
          'EPIC': [0, 30],
          'LEGENDARY': [0, 30],
        },
        'PorkMaster': {
          'EPIC': { 'Damage': [0, 40], 'Strength': [0, 25] },
          'LEGENDARY': { 'Damage': [0, 40], 'Strength': [0, 25] },
        },
        'GiantSlayer': {
          'LEGENDARY': [0, 25],
        },
      },
      'MAGMA_CUBE': {
        'BaseStats': { 'Strength': [0, 20], 'Health': [0, 50], 'Defense': [0, (33 + (4 / 3))] },
        'SlimyMinions': {
          'COMMON': [0, 20],
          'UNCOMMON': [0, 25],
          'RARE': [0, 25],
          'EPIC': [0, 30],
          'LEGENDARY': [0, 30],
        },
        'SaltBlade': {
          'RARE': [0, 20],
          'EPIC': [0, 25],
          'LEGENDARY': [0, 25],
        },
        'HotEmber': {
          'LEGENDARY': [0, 50],
        },
      },
      'SUBZERO_WISP': {
        'BaseStats': { 'Damage': [0, 25], 'Intelligence': [0, 250], 'Health': [0, 600], 'TrueDefense': [0, 35] },
        'BlazeSlayer': [1, 1.5],
        'EphemeralStability': [0, 40],
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
        'OneWiththeSpider': {
          'COMMON': [0, 10],
          'UNCOMMON': [0, 10],
          'RARE': [0, 10],
          'EPIC': [0, 10],
          'LEGENDARY': [0, 10],
          'MYTHIC': [0, 10],
        },
        'WebWeaver': {
          'RARE': [0, 40],
          'EPIC': [0, 40],
          'LEGENDARY': [0, 40],
          'MYTHIC': [0, 40],
        },
        'SpiderWhisperer': {
          'LEGENDARY': [0, 30],
          'MYTHIC': [0, 30],
        },
      },
      'TURTLE': {
        'BaseStats': { 'Health': [0, 50], 'Defense': [0, 100] },
        'TurtleTactics': {
          'EPIC': [3, 30],
          'LEGENDARY': [3, 30],
        },
        'GeniusAmniote': {
          'EPI': [5, 20],
          'LEGENDARY': [5, 30],
        },
        'TurtleShell': {
          'LEGENDARY': [0, 25],
        },
      },
      'ZOMBIE': {
        'BaseStats': { 'CritDamage': [0, 100], 'Health': [0, 100] },
        'Chomp': {
          'COMMON': [0, 15],
          'UNCOMMON': [0, 20],
          'RARE': [0, 20],
          'EPIC': [0, 25],
          'LEGENDARY': [0, 25],
        },
        'RottenBlade': {
          'RARE': [0, 20],
          'EPIC': [0, 25],
          'LEGENDARY': [0, 25],
        },
        'LivingDead': {
          'LEGENDARY': [0, 20],
        },
      },
      'HORSE': {
        'BaseStats': { 'Speed': [0, 25], 'Intelligence': [0, 50] },
        'Run': {
          'RARE': [0, 110],
          'EPIC': [0, 120],
          'LEGENDARY': [0, 120],
        },
        'RideIntoBattle': {
          'LEGENDARY': [0, 25],
        },
      },
      'HOUND': {
        'BaseStats': { 'Strength': [0, 40], 'BonusAttackSpeed': [0, 15], 'Ferocity': [0, 5] },
        'Scavenger': {
          'EPIC': [0, 5],
          'LEGENDARY': [0, 5],
        },
        'Finder': {
          'EPIC': [0, 10],
          'LEGENDARY': [0, 10],
        },
        'FuryClaws': {
          'LEGENDARY': [0, 10],
        },
      },
      'RIFT_FERRET': {
        'BaseStats': { 'Speed': [0, 50], 'Intelligence': [0, -2] },
      },
      'SPIRIT': {
        'BaseStats': { 'Speed': [0, 30], 'Intelligence': [0, 100] },
        'SpiritCooldowns': {
          'EPIC': [5, 50],
          'LEGENDARY': [5, 50],
        },
      },
      'SLUG': {
        'BaseStats': { 'Intelligence': [0, 25], 'Defense': [0, 20] },
        'SlowandSteady': {
          'EPIC': [0, 50],
          'LEGENDARY': [0, 50],
        },
        'PestFriends': {
          'EPIC': [0, 40],
          'LEGENDARY': [0, 40],
        },
        'RepugnantAroma': {
          'LEGENDARY': [0, 100],
        },
      },
      'BEE': {
        'BaseStats': { 'Strength': [5, 30], 'Speed': [0, 10], 'Intelligence': [0, 50] },
        'Hive': {
          'COMMON': { 'Intelligence': [1, 3], 'Strength': [1, 3], 'Defense': [1, 2] },
          'UNCOMMON': { 'Intelligence': [1, 3], 'Strength': [1, 3], 'Defense': [1, 2] },
          'RARE': { 'Intelligence': [1, 6], 'Strength': [1, 5], 'Defense': [1, 3] },
          'EPIC': { 'Intelligence': [1, 10], 'Strength': [1, 8], 'Defense': [1, 5] },
          'LEGENDARY': { 'Intelligence': [1, 10], 'Strength': [1, 8], 'Defense': [1, 5] },
        },
        'BusyBuzzBuzz': {
          'RARE': [0, 20],
          'EPIC': [0, 30],
          'LEGENDARY': [0, 30],
        },
        'WeaponizedHoney': {
          'LEGENDARY': [5, 25],
        },
      },
      'OWL': {
        'BaseStats': {},
      },
      'GOLEM': {
        'BaseStats': { 'Strength': [0, 50], 'Health': [0, 50] },
        'LastStand': {
          'EPIC': [0, 30],
          'LEGENDARY': [0, 30],
        },
        'Ricochet': {
          'EPIC': [0, 20],
          'LEGENDARY': [0, 25],
        },
        'Toss': {
          'LEGENDARY': [200, 500],
        },
      },
      'ENDER_DRAGON': {
        'BaseStats': { 'Strength': [0, 50], 'Health': [0, 150] },
        'EndStrike': {
          'EPIC': [0, 200],
          'LEGENDARY': [0, 200],
        },
        'OnewiththeDragons': {
          'EPIC': [0, 50],
          'LEGENDARY': [0, 50],
        },
      },
      'SHEEP': {
        'BaseStats': { 'Intelligence': [0, 100], 'AbilityDamage': [0, 20] },
        'ManaSaver': {
          'COMMON': [0, 10],
          'UNCOMMON': [0, 15],
          'RARE': [0, 15],
          'EPIC': [0, 20],
          'LEGENDARY': [0, 20],
        },
        'Overheal': {
          'RARE': [0, 10],
          'EPIC': [0, 10],
          'LEGENDARY': [0, 10],
        },
        'DungeonWizard': {
          'LEGENDARY': [0, 25],
        },
      },
    }


    const BulkwarkStats = {
      '100': { 'Defense': 30, 'TrueDefense': 3 },
      '200': { 'Defense': 60, 'TrueDefense': 6 },
      '300': { 'Defense': 90, 'TrueDefense': 9 },
      '500': { 'Defense': 135, 'TrueDefense': 14 },
      '800': { 'Defense': 180, 'TrueDefense': 18 },
    }




    let maxLevel;
    if (id === 'GOLDEN_DRAGON') {
      maxLevel = 200;
    }
    else {
      maxLevel = 100;
    }

    // console.log('id: ', id, 'BaseStats', extraPetStatsMinMax[id]['BaseStats'], 'RARITY', rarity)
    rarity = rarity.toUpperCase() as any;

    let rarityNumber = getNumericRepresentation(rarity); // 6 = mythic, 5 = legendary, 4 = epic, 3 = rare, 2 = uncommon, 1 = common
    /*
    category: minecraftColoredStringToText(`'', ${skin ? skin : ''}`),
    stats: minecraftColoredStringToText(`
  
    `),
    firstAbility: minecraftColoredStringToText(``),
    secondAbility: (rarityNumber >= 3) ? minecraftColoredStringToText(``) : '',
    thirdAbility: (rarityNumber >= 5) ? minecraftColoredStringToText(``) : '',
    fourthAbility: (rarityNumber >= 6) ? minecraftColoredStringToText(``) : '',
    */
    switch (id) {
      case 'GOLDEN_DRAGON': return ({
        category: minecraftColoredStringToText(`§8Combat Pet, ${skin ? skin : ''}`),
        stats: (level >= 100) ? minecraftColoredStringToText(`
        §7Bonus Attack Speed: §c${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['BonusAttackSpeed'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['BonusAttackSpeed'][1], minosRelic: relic })}ZEILENUMBRUCH
        §7Magic Find: §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['MagicFind'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['MagicFind'][1], minosRelic: relic })}\n
        `)
          : minecraftColoredStringToText(`§c§l???`),
        firstAbility: (level >= 100) ? minecraftColoredStringToText(`§6Gold's PowerZEILENUMBRUCH§7Adds §c+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['GoldsPower'][rarity][0] ?? 0, maxStat: extraPetStatsMinMax[id]['GoldsPower'][rarity][1] ?? 0 })}❁ Strength §7to all §6golden §6§7weapons.`)
          : minecraftColoredStringToText(`§7Hatches at level §b100`),
        secondAbility: (level >= 100) ? minecraftColoredStringToText(`§6Shining ScalesZEILENUMBRUCH§7Grants §c+10❁ Strength §7and §b+2✯ §bMagic Find §7to your pet for each digit in your §6gold collection§7.`)
          : '',
        thirdAbility: (level >= 100) ? minecraftColoredStringToText(`§6Dragon's GreedZEILENUMBRUCH§7Grants §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['DragonsGreed'][rarity][0], maxStat: extraPetStatsMinMax[id]['LegendaryTreasure'][rarity][1] })}% §c❁ Strength §7per §b5 §b✯§bMagic Find§7.`)
          : '',
        fourthAbility: (level >= 100) ? minecraftColoredStringToText(`§6Legendary TreasureZEILENUMBRUCH§7Gain §c${roundLegendaryTreasure(calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['LegendaryTreasure'][rarity][0], maxStat: extraPetStatsMinMax[id]['LegendaryTreasure'][rarity][1] }), level)}% §7damage for every million §7coins in your bank.`)
          : ''
      });
      case 'BAT': return ({
        category: minecraftColoredStringToText(`§8Mining Pet, ${skin ? skin : ''}`),
        stats: minecraftColoredStringToText(`
      §7Speed: §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Speed'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Speed'][1], minosRelic: relic })}\n
      §7Intelligence: §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Intelligence'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Intelligence'][1], minosRelic: relic })}
      ${(rarityNumber >= 6) ? `ZEILENUMBRUCH§7Sea Creature Chance: §c+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['SeaCreatureChance'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['SeaCreatureChance'][1], minosRelic: relic })}` : ''}
      `),
        firstAbility: minecraftColoredStringToText(`§6Candy LoverZEILENUMBRUCH§7Increases drop chance of candies §7from mobs by §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['CandyLover'][rarity][0], maxStat: extraPetStatsMinMax[id]['CandyLover'][rarity][1] })}§7.`),
        secondAbility: (rarityNumber >= 3) ? minecraftColoredStringToText(`§6NightmareZEILENUMBRUCH§7§7During night, gain §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['Nightmare'][rarity]['Intelligence'][0], maxStat: extraPetStatsMinMax[id]['Nightmare'][rarity]['Intelligence'][1] })}§b✎ Intelligence§7, §7§a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['Nightmare'][rarity]['Speed'][0], maxStat: extraPetStatsMinMax[id]['Nightmare'][rarity]['Speed'][1] })} §f✦ Speed§7, and §aNight Vision§7.`) : '',
        thirdAbility: (rarityNumber >= 5) ? minecraftColoredStringToText(`§6Wings of SteelZEILENUMBRUCH§7Deals §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['WingsOfSteel'][rarity][0], maxStat: extraPetStatsMinMax[id]['WingsOfSteel'][rarity][1] })}% §7damage to §6Spooky §6§7enemies during the §6Spooky Festival§7.`) : '',
        fourthAbility: (rarityNumber >= 6) ? minecraftColoredStringToText(`§6SonarZEILENUMBRUCH§7§a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['Sonar'][rarity][0], maxStat: extraPetStatsMinMax[id]['Sonar'][rarity][1] })}% §7chance to fish up spooky sea creatures.`) : ''
      });
      case 'BLACK_CAT': return ({
        category: minecraftColoredStringToText(`§8Combat Pet, ${skin ? skin : ''}`),
        stats: minecraftColoredStringToText(`
      §7Speed: §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Speed'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Speed'][1], minosRelic: relic })}ZEILENUMBRUCH
      §7Intelligence: §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Intelligence'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Intelligence'][1], minosRelic: relic })}ZEILENUMBRUCH
      §7Magic Find: §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['MagicFind'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['MagicFind'][1], minosRelic: relic })}ZEILENUMBRUCH
      §7Pet Luck: §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['PetLuck'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['PetLuck'][1], minosRelic: relic })}
      `),
        firstAbility: minecraftColoredStringToText(`§6HunterZEILENUMBRUCH§7Increases your §f✦ Speed §7and speed §7cap by +§a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['Hunter'][rarity][0], maxStat: extraPetStatsMinMax[id]['Hunter'][rarity][1] })}§7.`),
        secondAbility: minecraftColoredStringToText(`§6OmenZEILENUMBRUCH§7Grants §d+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['Omen'][rarity][0], maxStat: extraPetStatsMinMax[id]['Omen'][rarity][1] })}♣ Pet Luck§7.`),
        thirdAbility: minecraftColoredStringToText(`§6SupernaturalZEILENUMBRUCHGrants §b+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['Supernatural'][rarity][0], maxStat: extraPetStatsMinMax[id]['Supernatural'][rarity][1] })}✯ Magic Find§7.`),
        fourthAbility: (rarityNumber >= 6) ? minecraftColoredStringToText(`§6LootingZEILENUMBRUCH§7Gain §c${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['Looting'][rarity][0], maxStat: extraPetStatsMinMax[id]['Looting'][rarity][0] })}% §7more collection items from", "§7monsters!`) : ''
      });
      case 'ENDERMITE': return ({
        category: minecraftColoredStringToText(`§8Mining Pet, ${skin ? skin : ''}`),
        stats: minecraftColoredStringToText(`
      §7Intelligence: §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Intelligence'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Intelligence'][1] })}ZEILENUMBRUCH
      §7Pet Luck: §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['PetLuck'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['PetLuck'][1] })}`
        ),
        firstAbility: minecraftColoredStringToText(`§6More StonksZEILENUMBRUCH§7Gain more exp orbs for breaking end §7stone and gain a +§a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['MoreStonks'][rarity][0], maxStat: extraPetStatsMinMax[id]['MoreStonks'][rarity][1] })}% §7chance to §7get an extra block dropped.`),
        secondAbility: (rarityNumber >= 3) ? minecraftColoredStringToText(`§6Daily CommuterZEILENUMBRUCH§7§9Transmission Abilities §7cost §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['DailyCommuter'][rarity][0], maxStat: extraPetStatsMinMax[id]['DailyCommuter'][rarity][1] })}% §7less §7mana."`) : '',
        thirdAbility: (rarityNumber >= 5) ? minecraftColoredStringToText(`§6Mite BaitZEILENUMBRUCH§7Gain a §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['MiteBait'][rarity][0], maxStat: extraPetStatsMinMax[id]['MiteBait'][rarity][1] })}% §7chance to dig up a bonus §7§cNest Endermite §7per §d+1♣ Pet Luck §d§8(Stacks above 100%).`) : '',
        fourthAbility: (rarityNumber >= 6) ? minecraftColoredStringToText(`§6SacrificerZEILENUMBRUCH§7Increases the odds of rolling for §7bonus items in the §cDraconic Altar §7by §7§a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['Sacrificer'][rarity][0], maxStat: extraPetStatsMinMax[id]['Sacrificer'][rarity][1] })}%§7.`) : ''
      });
      case 'SILVERFISH': return ({
        category: minecraftColoredStringToText(`§8Mining Pet, ${skin ? skin : ''}`),
        stats: minecraftColoredStringToText(`
      §7Health: §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Health'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Health'][1] })}ZEILENUMBRUCH
      §7Defense: §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Defense'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Defense'][1] })}
      `),
        firstAbility: minecraftColoredStringToText(`§6True Defense BoostZEILENUMBRUCH§7§7Grants §f+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['TrueDefenseBoost'][rarity][0], maxStat: extraPetStatsMinMax[id]['TrueDefenseBoost'][rarity][1] })}❂ True Defense§7.`),
        secondAbility: (rarityNumber >= 3) ? minecraftColoredStringToText(`§6Mining Wisdom BoostZEILENUMBRUCH§7§7Grants §3+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['MiningWisdomBoost'][rarity][0], maxStat: extraPetStatsMinMax[id]['MiningWisdomBoost'][rarity][1] })}☯ Mining Wisdom§7.`) : '',
        thirdAbility: (rarityNumber >= 5) ? minecraftColoredStringToText(`§6Dexterity:  §7§7Gives permanent haste III.`) : '',
      });
      case 'ARMADILLO': return ({
        category: minecraftColoredStringToText(`§8Mining Mount, ${skin ? skin : ''}`),
        stats: minecraftColoredStringToText(`
      §7Defense: §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Defense'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Defense'][1] })}
      `),
        firstAbility: minecraftColoredStringToText(`§6RidableZEILENUMBRUCH§7Right-click your summoned pet to ride it!`),
        secondAbility: minecraftColoredStringToText(`§6TunnellerZEILENUMBRUCH§7The Armadillo breaks all stone or ore in its path while you are riding it in the §5Crystal Hollows §7using your held item.`),
        thirdAbility: minecraftColoredStringToText(`§6Earth SurferZEILENUMBRUCH§7The Armadillo moves faster based on your §f✦ Speed§7.`),
        fourthAbility: (rarityNumber >= 3) ? minecraftColoredStringToText(`§6Rolling MinerZEILENUMBRUCH§7Every §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['RollingMiner'][rarity][0], maxStat: extraPetStatsMinMax[id]['RollingMiner'][rarity][1] })} §7seconds, the next §7gemstone you mine gives §a2x §7drops.`) : '',
        fifthAbility: (rarityNumber >= 5) ? minecraftColoredStringToText(`§6Mobile TankZEILENUMBRUCH§7For every §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['MobileTank'][rarity][0], maxStat: extraPetStatsMinMax[id]['MobileTank'][rarity][1] })} §a❈ Defense§7, gain §f+1 ✦ §fSpeed §7and §6+1⸕ Mining Speed§7.`) : '',
      });
      case 'MITHRIL_GOLEM': return ({
        category: minecraftColoredStringToText(`§8Mining Pet, ${skin ? skin : ''}`),
        stats: minecraftColoredStringToText(`
      §7True Defense: §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['TrueDefense'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['TrueDefense'][1] })}
      `),
        firstAbility: minecraftColoredStringToText(`"§6Mithril AffinityZEILENUMBRUCH§7Gain §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['MithrilAffinity'][rarity][0], maxStat: extraPetStatsMinMax[id]['MithrilAffinity'][rarity][1] })} §6⸕ Mining Speed §7when mining §7§eMithril§7.`),
        secondAbility: (rarityNumber >= 3) ? minecraftColoredStringToText(`"§6The Smell Of PowderZEILENUMBRUCH§7Gain §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['TheSmellOfPowder'][rarity][0], maxStat: extraPetStatsMinMax[id]['TheSmellOfPowder'][rarity][1] })}% §7more §2Mithril Powder §7while mining."`) : '',
        thirdAbility: (rarityNumber >= 5) ? minecraftColoredStringToText(`§6Danger AverseZEILENUMBRUCH§7Increases most combat stats by §7§a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['DangerAverse'][rarity][0], maxStat: extraPetStatsMinMax[id]['DangerAverse'][rarity][1] })}% §7on mining islands.`) : '',
        fourthAbility: (rarityNumber >= 6) ? minecraftColoredStringToText(`§6Refined SensesZEILENUMBRUCH§7Increases your §b✯ Magic Find §7by §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['RefinedSenses'][rarity][0], maxStat: extraPetStatsMinMax[id]['RefinedSenses'][rarity][1] })}% §a§7when on a Mining Island.`) : '',
      });
      case 'SNAIL': return ({
        category: minecraftColoredStringToText(`§8Mining Pet, ${skin ? skin : ''}`),
        stats: minecraftColoredStringToText(`
      §7Intelligence: §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Intelligence'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Intelligence'][1] })}
      `),
        firstAbility: minecraftColoredStringToText(`"§6Red Sand EnjoyerZEILENUMBRUCH§7Red Sand minions work §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['RedSandEnjoyer'][rarity][0], maxStat: extraPetStatsMinMax[id]['RedSandEnjoyer'][rarity][1] })}% §7faster while on your island.`),
        secondAbility: (rarityNumber >= 3) ? minecraftColoredStringToText(`"§6Slow MovingZEILENUMBRUCH§7Converts all §f✦ Speed §7over 100 into §7§6☘ Mining Fortune §7for non-ores at §7§a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['SlowMoving'][rarity][0], maxStat: extraPetStatsMinMax[id]['SlowMoving'][rarity][1] })}% §7efficiency.`) : '', //TODO Checking if I can easily implement this: 'Current bonus: §6+0☘'
        thirdAbility: (rarityNumber >= 5) ? minecraftColoredStringToText(`§6Slow But EfficientZEILENUMBRUCH§7Reduces the mana cost of §9Utility Abilities §7by §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['SlowButEfficient'][rarity][0], maxStat: extraPetStatsMinMax[id]['SlowButEfficient'][rarity][1] })}% §7 for every 15 §f✦ Speed §7converted.`) : '',
      });
      case 'WITHER_SKELETON': return ({
        category: minecraftColoredStringToText(`§8Mining Pet, ${skin ? skin : ''}`),
        stats: minecraftColoredStringToText(`
      §7Defense: §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Defense'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Defense'][1] })}ZEILENUMBRUCH
      §7Strength: §c+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Strength'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Strength'][1] })}ZEILENUMBRUCH
      §7Intelligence: §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Intelligence'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Intelligence'][1] })}ZEILENUMBRUCH
      §7Crit Chance: §c+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['CritChance'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['CritChance'][1] })}%ZEILENUMBRUCH
      §7Crit Damage: §c+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['CritDamage'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['CritDamage'][1] })}%
      `),
        firstAbility: (rarityNumber >= 4) ? minecraftColoredStringToText(`§6Stronger BonesZEILENUMBRUCH§7Take §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['StrongerBones'][rarity][0], maxStat: extraPetStatsMinMax[id]['StrongerBones'][rarity][1] })}% §7less damage from skeletons.`) : '',
        secondAbility: (rarityNumber >= 4) ? minecraftColoredStringToText(`§6Wither BloodZEILENUMBRUCH§7Deal §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['WitherBlood'][rarity][0], maxStat: extraPetStatsMinMax[id]['WitherBlood'][rarity][1] })}% §7more damage to wither mobs.`) : '',
        thirdAbility: (rarityNumber >= 5) ? minecraftColoredStringToText(`§6Death's TouchZEILENUMBRUCH§7Upon hitting an enemy inflict the §7wither effect for §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['DeathsTouch'][rarity][0], maxStat: extraPetStatsMinMax[id]['DeathsTouch'][rarity][0] })}% §7damage over §73 seconds. §8Does not stack`) : '',
      });
      case 'SCATHA': return ({
        category: minecraftColoredStringToText(`§8Mining Pet, ${skin ? skin : ''}`),
        stats: minecraftColoredStringToText(`
      §7Defense: §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Defense'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Defense'][1] })}ZEILENUMBRUCH
      §7Mining Speed: §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['MiningSpeed'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['MiningSpeed'][1] })}
      `),
        firstAbility: minecraftColoredStringToText(`§6GroundedZEILENUMBRUCH§7Gain §6+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['Grounded'][rarity][0], maxStat: extraPetStatsMinMax[id]['Grounded'][rarity][1] })}☘ Mining Fortune§7.`),
        secondAbility: (rarityNumber >= 3) ? minecraftColoredStringToText(`§6BurrowingZEILENUMBRUCH§7Grants a §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['Burrowing'][rarity][0], maxStat: extraPetStatsMinMax[id]['Burrowing'][rarity][1] })}% §7chance to find §7treasure while mining.`) : '',
        thirdAbility: (rarityNumber >= 4) ? minecraftColoredStringToText(`§6WormholeZEILENUMBRUCH§7Gives a §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['Wormhole'][rarity][0], maxStat: extraPetStatsMinMax[id]['Wormhole'][rarity][1] })}% §7chance to mine 2 §7adjacent stone or hard stone.`) : '',
        fourthAbility: (rarityNumber >= 5) ? minecraftColoredStringToText(`§6Gemstone PowerZEILENUMBRUCH§7Gain §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['GemstonePower'][rarity][0], maxStat: extraPetStatsMinMax[id]['GemstonePower'][rarity][1] })}% §7more §dGemstone Powder§7.`) : '',
      });
      case 'ROCK': return ({
        category: minecraftColoredStringToText(`§8Mining Mount, ${skin ? skin : ''}`),
        stats: minecraftColoredStringToText(`
      §7Defense: §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Defense'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Defense'][1] })}ZEILENUMBRUCH
      §7True Defense: §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['TrueDefense'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['TrueDefense'][1] })}
      `),
        firstAbility: minecraftColoredStringToText(`§6Ridable", "§7§7Right-click your summoned pet to ride it!`),
        secondAbility: minecraftColoredStringToText(`§6Sailing StoneZEILENUMBRUCH§7Sneak to move your rock to your location (15s cooldown).`),
        thirdAbility: (rarityNumber >= 3) ? minecraftColoredStringToText(`§6FortifyZEILENUMBRUCH§7While sitting on your rock, gain +§a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['Fortify'][rarity][0], maxStat: extraPetStatsMinMax[id]['Fortify'][rarity][1] })}% §a§7defense.`) : '',
        fourthAbility: (rarityNumber >= 5) ? minecraftColoredStringToText(`§6Steady GroundZEILENUMBRUCH§7While sitting on your rock, deal §c+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['SteadyGround'][rarity][0], maxStat: extraPetStatsMinMax[id]['SteadyGround'][rarity][1] })}x §c§7damage.`) : '', //TODO: Check if this is correct
      });
      case 'BAL': return ({
        category: minecraftColoredStringToText(`§8Combat Pet, ${skin ? skin : ''}`),
        stats: minecraftColoredStringToText(`
        §7Strength: §c+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Strength'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Strength'][1] })}ZEILENUMBRUCH
        §7Ferocity: §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Ferocity'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Ferocity'][1] })}
      `),
        firstAbility: minecraftColoredStringToText(`§6Protective Skin_ §7§7Gives §cheat immunity§7.`),
        secondAbility: minecraftColoredStringToText(`§6Fire WhipZEILENUMBRUCH§7Every §a5s §7while in combat on public §7islands, Bal will strike nearby enemies with his fire whip dealing §c${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['FireWhip'][rarity][0], maxStat: extraPetStatsMinMax[id]['FireWhip'][rarity][1] })}% §c§7of your damage as §ftrue damage§7.`),
        thirdAbility: (rarityNumber >= 5) ? minecraftColoredStringToText(`§6Made of LavaZEILENUMBRUCH§7Gain §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['MadeofLava'][rarity][0], maxStat: extraPetStatsMinMax[id]['MadeofLava'][rarity][1] })}% §7on ALL stats when inside the §cMagma Fields§7.`) : '',
      });
      case 'ZOMBIE': return ({
        category: minecraftColoredStringToText(`§8Combat Pet, ${skin ? skin : ''}`),
        stats: minecraftColoredStringToText(`
      §7Health: §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Health'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Health'][1] })}ZEILENUMBRUCH
      §7Crit Damage: §c+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['CritDamage'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['CritDamage'][1] })}%
      `),
        firstAbility: minecraftColoredStringToText(`§6ChompZEILENUMBRUCH§7Heal §c+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['Chomp'][rarity][0], maxStat: extraPetStatsMinMax[id]['Chomp'][rarity][1] })}❤ §7per Zombie kill.`),
        secondAbility: (rarityNumber >= 3) ? minecraftColoredStringToText(`§6Rotten BladeZEILENUMBRUCH§7Deal §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['RottenBlade'][rarity][0], maxStat: extraPetStatsMinMax[id]['RottenBlade'][rarity][1] })}% §7more damage to zombies.`) : '',
        thirdAbility: (rarityNumber >= 5) ? minecraftColoredStringToText(`§6Living DeadZEILENUMBRUCH§7Increases all stats on §2undead ༕ §2§7armor by §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['LivingDead'][rarity][0], maxStat: extraPetStatsMinMax[id]['LivingDead'][rarity][1] })}%§7.`) : '',
      });
      case 'WOLF': return ({
        category: minecraftColoredStringToText(`§8Combat Pet  , ${skin ? skin : ''}`),
        stats: minecraftColoredStringToText(`
      §7Health: §a+$${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Health'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Health'][1] })}ZEILENUMBRUCH
      §7Speed: §a+$${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Speed'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Speed'][1] })}ZEILENUMBRUCH
      §7Crit Damage: §c+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['CritDamage'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['CritDamage'][1] })}%ZEILENUMBRUCH
      §7True Defense: §a+$${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['TrueDefense'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['TrueDefense'][1] })}
      `),
        firstAbility: minecraftColoredStringToText(`§6Alpha DogZEILENUMBRUCH§7Take §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['AlphaDog'][rarity][0], maxStat: extraPetStatsMinMax[id]['AlphaDog'][rarity][1] })}% §7less damage from wolves.`),
        secondAbility: (rarityNumber >= 3) ? minecraftColoredStringToText(`§6Pack LeaderZEILENUMBRUCH§7Gain §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['PackLeader'][rarity][0], maxStat: extraPetStatsMinMax[id]['PackLeader'][rarity][1] })} §9☠ Crit Damage §7for every nearby wolf monster. §8Max 10 wolves`) : '',
        thirdAbility: (rarityNumber >= 5) ? minecraftColoredStringToText(`§6Combat Wisdom BoostZEILENUMBRUCH§7§7Grants §3+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['CombatWisdomBoost'][rarity][0], maxStat: extraPetStatsMinMax[id]['CombatWisdomBoost'][rarity][1] })}☯ Combat Wisdom§7.`) : '',
      });
      case 'TURTLE': return ({
        category: minecraftColoredStringToText(`§8Combat Pet, ${skin ? skin : ''}`),
        stats: minecraftColoredStringToText(`
      §7Health: §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Health'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Health'][1] })}ZEILENUMBRUCH
      §7Defense: §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Defense'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Defense'][1] })}
      `),
        firstAbility: minecraftColoredStringToText(`§6Turtle TacticsZEILENUMBRUCH§7Gain §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['TurtleTactics'][rarity][0], maxStat: extraPetStatsMinMax[id]['TurtleTactics'][rarity][1] })}% §a❈ Defense§7.`),
        secondAbility: minecraftColoredStringToText(`§6Genius AmnioteZEILENUMBRUCH§7Grants §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['GeniusAmniote'][rarity][0], maxStat: extraPetStatsMinMax[id]['GeniusAmniote'][rarity][0] })}❈ Defense §7for every §7player around you, up to 4 nearby §7players.`),
        thirdAbility: (rarityNumber >= 5) ? minecraftColoredStringToText(`§6UnflippableZEILENUMBRUCH§7Gain §aimmunity §7to knockback.`) : '',
        fourthAbility: (rarityNumber >= 5) ? minecraftColoredStringToText(`§6Turtle ShellZEILENUMBRUCH§7When under §c33% §7maximum HP, you take §7§a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['TurtleShell'][rarity][0], maxStat: extraPetStatsMinMax[id]['TurtleShell'][rarity][1] })}% §7less damage.`) : '',
      });
      case 'TIGER': return ({
        category: minecraftColoredStringToText(`§8Combat Pet, ${skin ? skin : ''}`),
        stats: minecraftColoredStringToText(`
      §7Strength: §c+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Strength'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Strength'][1] })}ZEILENUMBRUCH
      §7Crit Chance: §c+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['CritChance'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['CritChance'][1] })}%ZEILENUMBRUCH
      §7Crit Damage: §c+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['CritDamage'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['CritDamage'][1] })}%ZEILENUMBRUCH
      §7Ferocity: §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Ferocity'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Ferocity'][1] })}
      `),
        firstAbility: minecraftColoredStringToText(`§6Merciless SwipeZEILENUMBRUCH§7Gain §c+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['MercilessSwipe'][rarity][0], maxStat: extraPetStatsMinMax[id]['MercilessSwipe'][rarity][1] })}% §c⫽ Ferocity§7.`),
        secondAbility: (rarityNumber >= 3) ? minecraftColoredStringToText(`§6Hemorrhage: §7§7Melee attacks reduce healing by §6${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['Hemorrhage'][rarity][0], maxStat: extraPetStatsMinMax[id]['Hemorrhage'][rarity][1] })}% §6§7for §a10s§7.`) : '',
        thirdAbility: (rarityNumber >= 5) ? minecraftColoredStringToText(`§6Apex PredatorZEILENUMBRUCH§7Deal §c+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['ApexPredator'][rarity][0], maxStat: extraPetStatsMinMax[id]['ApexPredator'][rarity][1] })}% §7damage against targets with no other mobs within §a15 §7blocks.`) : '',
      });
      case 'TARANTULA': return ({
        category: minecraftColoredStringToText(`§8Combat Pet, ${skin ? skin : ''}`),
        stats: minecraftColoredStringToText(`
      §7Strength: §c+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Strength'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Strength'][1] })}ZEILENUMBRUCH
      §7Crit Chance: §c+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['CritChance'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['CritChance'][1] })}%ZEILENUMBRUCH
      §7Crit Damage: §c+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['CritDamage'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['CritDamage'][1] })}%
      `),
        firstAbility: minecraftColoredStringToText(`§6Webbed CellsZEILENUMBRUCH§7Anti-healing is §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['WebbedCells'][rarity][0], maxStat: extraPetStatsMinMax[id]['WebbedCells'][rarity][1] })}% §7less effective against you.`),
        secondAbility: minecraftColoredStringToText(`§6Eight LegsZEILENUMBRUCH§7Decreases the mana cost of Spider, §7Tarantula and Spirit Boots by §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['EightLegs'][rarity][0], maxStat: extraPetStatsMinMax[id]['EightLegs'][rarity][1] })}%§7.`),
        thirdAbility: (rarityNumber >= 5) ? minecraftColoredStringToText(`§6Arachnid SlayerZEILENUMBRUCH§7Gain §b${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['ArachnidSlayer'][rarity][0], maxStat: extraPetStatsMinMax[id]['ArachnidSlayer'][rarity][1] })}x §7Combat XP §7against §aSpiders§7.`) : '',
        fourthAbility: (rarityNumber >= 6) ? minecraftColoredStringToText(`§6Web BattlefieldZEILENUMBRUCH§7Killing mobs grants §c+6❁ Strength §c§7and §b+1✯ Magic Find §7for §a40s §7to all players staying within §a20 §7blocks §7of §7where they died. §8Stacks up to 10 times.`) : '',
      });
      case 'SPIRIT': return ({
        category: minecraftColoredStringToText(`§8Combat Pet, ${skin ? skin : ''}`),
        stats: minecraftColoredStringToText(`
      §7Speed: §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Speed'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Speed'][1] })}ZEILENUMBRUCH
      §7Intelligence: §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Intelligence'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Intelligence'][1] })}
      `),
        firstAbility: minecraftColoredStringToText(`§6Spirit AssistanceZEILENUMBRUCH§7Spawns and assists you when you §7are a ghost in Dungeons.`),
        secondAbility: minecraftColoredStringToText(`§6Spirit CooldownsZEILENUMBRUCH§7Reduces the cooldown of your ghost", "§7abilities in dungeons by §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['SpiritCooldowns'][rarity][0], maxStat: extraPetStatsMinMax[id]['SpiritCooldowns'][rarity][1] })}%§7.`),
        thirdAbility: (rarityNumber >= 5) ? minecraftColoredStringToText(`§6Half LifeZEILENUMBRUCH§7If you are the first player to die in §7a dungeon, the score penalty for §7that death is reduced to §a1§7.`) : '',
      });
      case 'SPIDER': return ({
        category: minecraftColoredStringToText(`§8Combat Pet, ${skin ? skin : ''}`),
        stats: minecraftColoredStringToText(`
      §7Strength: §c+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Strength'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Strength'][1] })}ZEILENUMBRUCH
      §7Crit Chance: §c+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['CritChance'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['CritChance'][1] })}%
      `),
        firstAbility: minecraftColoredStringToText(`§6One With The SpiderZEILENUMBRUCH§7Gain §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['OneWiththeSpider'][rarity][0], maxStat: extraPetStatsMinMax[id]['OneWiththeSpider'][rarity][1] })} §c❁ Strength §7for every §7nearby spider. §8Max 10 spiders`),
        secondAbility: (rarityNumber >= 3) ? minecraftColoredStringToText(`§6Web-weaverZEILENUMBRUCH§7Upon hitting a monster, it becomes §7slowed by §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['WebWeaver'][rarity][0], maxStat: extraPetStatsMinMax[id]['WebWeaver'][rarity][1] })}}%§7.`) : '',
        thirdAbility: (rarityNumber >= 5) ? minecraftColoredStringToText(`§6Spider WhispererZEILENUMBRUCH§7Spider and tarantula minions work §7§a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['SpiderWhisperer'][rarity][0], maxStat: extraPetStatsMinMax[id]['SpiderWhisperer'][rarity][1] })}% §7faster while on your island.`) : '',
        fourthAbility: (rarityNumber >= 6) ? minecraftColoredStringToText(`§6Web BattlefieldZEILENUMBRUCH§7Killing mobs grants §c+6❁ Strength §c§7and §b+1✯ Magic Find §7for §a40s §7to all players staying within §a20 §7blocksof where they died. §8Stacks up to 10", "§8times.`) : '',
      });
      case 'SNOWMAN': return ({
        category: minecraftColoredStringToText(`§8Combat Pet, ${skin ? skin : ''}`),
        stats: minecraftColoredStringToText(`
      §7Damage: §c+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Damage'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Damage'][1] })}ZEILENUMBRUCH
      §7Strength: §c+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Strength'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Strength'][1] })}ZEILENUMBRUCH
      §7Crit Damage: §c+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['CritDamage'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['CritDamage'][1] })}%
      `),
        firstAbility: minecraftColoredStringToText(`§6BlizzardZEILENUMBRUCH§7Slow all enemies within §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['Blizzard'][rarity][0], maxStat: extraPetStatsMinMax[id]['Blizzard'][rarity][1] })} §7blocks.`),
        secondAbility: minecraftColoredStringToText(`§6FrostbiteZEILENUMBRUCH§7Your freezing aura slows enemy attacks causing you to take §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['Frostbite'][rarity][0], maxStat: extraPetStatsMinMax[id]['Frostbite'][rarity][1] })}% §a§7reduced damage.`),
        thirdAbility: minecraftColoredStringToText(`§6Snow CannonZEILENUMBRUCH§7Your snowman fires a snowball dealing §a5x§7 your §c❁ Strength §7when a mob gets close to you (1s cooldown).`),
        fourthAbility: (rarityNumber >= 6) ? minecraftColoredStringToText(`§6Ouch!ZEILENUMBRUCH§7§7Your snowballs have §a50% §7chance of dealing §cdouble §7damage!`) : '',
      });
      case 'SKELETON': return ({
        category: minecraftColoredStringToText(`§8Combat Pet, ${skin ? skin : ''}`),
        stats: minecraftColoredStringToText(`
      §7Crit Chance: §c+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['CritChance'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['CritChance'][1] })}%ZEILENUMBRUCH
      §7Crit Damage: §c+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['CritDamage'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['CritDamage'][1] })}%
      `),
        firstAbility: minecraftColoredStringToText(`§6Bone ArrowsZEILENUMBRUCH§7Increase arrow damage by §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BoneArrows'][rarity][0], maxStat: extraPetStatsMinMax[id]['BoneArrows'][rarity][1] })}%§7 which is tripled while in dungeons.`),
        secondAbility: (rarityNumber >= 3) ? minecraftColoredStringToText(`§6ComboZEILENUMBRUCH§7Gain a combo stack for every bow hit granting +§a3 §c❁ Strength§7. Max §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['Combo'][rarity][0], maxStat: extraPetStatsMinMax[id]['Combo'][rarity][1] })} §a§7stacks, stacks disappear after 8 seconds.`) : '',
        thirdAbility: (rarityNumber >= 5) ? minecraftColoredStringToText(`§6Skeletal DefenseZEILENUMBRUCH§7Your skeleton shoots an arrow dealing §a30x §7your §9☠ Crit Damage §9§7when a mob gets close to you (5s cooldown).`) : '',
      });
      case 'SKELETON_HORSE': return ({
        category: minecraftColoredStringToText(`§8Combat Mount, ${skin ? skin : ''}`),
        stats: minecraftColoredStringToText(`
      §7Speed: §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Speed'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Speed'][1] })}ZEILENUMBRUCH
      §7Intelligence: §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Intelligence'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Intelligence'][1] })}
      `),
        firstAbility: minecraftColoredStringToText(`§6RidableZEILENUMBRUCH§7Right-click your summoned pet to ride it!`),
        secondAbility: minecraftColoredStringToText(`§6RunZEILENUMBRUCH§7Increases the speed of your mount by §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['Run'][rarity][0], maxStat: extraPetStatsMinMax[id]['Run'][rarity][1] })}%§7.`),
        thirdAbility: minecraftColoredStringToText(`§6Ride Into BattleZEILENUMBRUCH§7While riding your horse, gain +§a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['RideIntoBattle'][rarity][0], maxStat: extraPetStatsMinMax[id]['RideIntoBattle'][rarity][1] })}% §a§7bow damage.`),
      });
      case 'RAT':
        // console.log(extraPetStatsMinMax[id]['RatsBlessing'][rarity]['MagicFind'][1])
        return ({
          category: minecraftColoredStringToText(`§8Combat Morph, ${skin ? skin : ''}`),
          stats: minecraftColoredStringToText(`
      §7Health: §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Health'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Health'][1] })}ZEILENUMBRUCH
      §7Strength: §c+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Strength'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Strength'][1] })}ZEILENUMBRUCH
      §7Crit Damage: §c+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['CritDamage'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['CritDamage'][1] })}%
      `),
          firstAbility: minecraftColoredStringToText(`§6MorphZEILENUMBRUCH§7Right-click your summoned pet to morph into it!`),
          secondAbility: minecraftColoredStringToText(`§6CHEESE!ZEILENUMBRUCH§7As a Rat, you smell §e§lCHEESE§7 nearby! §7Yummy!`),
          thirdAbility: minecraftColoredStringToText(`§6Rat's BlessingZEILENUMBRUCH§7Has a chance to grant a random §7player §b+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['RatsBlessing'][rarity]['MagicFind'][0], maxStat: extraPetStatsMinMax[id]['RatsBlessing'][rarity]['MagicFind'][1] })}✯ Magic Find§7 for §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['RatsBlessing'][rarity]['Seconds'][0], maxStat: extraPetStatsMinMax[id]['RatsBlessing'][rarity]['Seconds'][1] })}§7 §7seconds after finding a yummy piece of Cheese! If the player gets a drop during this buff, you have a §a20%§7 §7chance to get it too.`),
          fourthAbility: (rarityNumber >= 6) ? minecraftColoredStringToText(`§6Extreme SpeedZEILENUMBRUCH§7The Rat is TWO times faster AND can §7fly!`) : '',
        });
      case 'PIGMAN': return ({
        category: minecraftColoredStringToText(`§8Combat Pet, ${skin ? skin : ''}`),
        stats: minecraftColoredStringToText(`
      §7Defense: §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Defense'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Defense'][1] })}ZEILENUMBRUCH
      §7Strength: §c+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Strength'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Strength'][1] })}ZEILENUMBRUCH
      §7Ferocity: §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Ferocity'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Ferocity'][1] })}
      `),
        firstAbility: minecraftColoredStringToText(`§6Bacon FarmerZEILENUMBRUCH§7Pig minions work §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaconFarmer'][rarity][0], maxStat: extraPetStatsMinMax[id]['BaconFarmer'][rarity][1] })}% §7faster while on your island.`),
        secondAbility: minecraftColoredStringToText(`§6Pork MasterZEILENUMBRUCH§7Buffs the §6Pigman Sword §7by §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['PorkMaster'][rarity][0], maxStat: extraPetStatsMinMax[id]['PorkMaster'][rarity][1] })} §c❁ Damage §7and §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['PorkMaster'][rarity][0], maxStat: extraPetStatsMinMax[id]['PorkMaster'][rarity][1] })} §c❁ Strength§7.`),
        thirdAbility: (rarityNumber >= 5) ? minecraftColoredStringToText(`§6Giant SlayerZEILENUMBRUCH§7Deal §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['GiantSlayer'][rarity][0], maxStat: extraPetStatsMinMax[id]['GiantSlayer'][rarity][1] })}% §7extra damage to monsters level 100 and up.`) : '',
      });
      case 'PHOENIX': return ({
        category: minecraftColoredStringToText(`§8Combat Pet, ${skin ? skin : ''}`),
        stats: minecraftColoredStringToText(`
      §7Strength: §c+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Strength'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Strength'][1] })}ZEILENUMBRUCH
      §7Intelligence: §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Intelligence'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Intelligence'][1] })}
      `),
        firstAbility: minecraftColoredStringToText(`§6RekindleZEILENUMBRUCH§7Before death, become §eimmune §7and gain §c${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['Rekindle'][rarity]['Strength'][0], maxStat: extraPetStatsMinMax[id]['Rekindle'][rarity]['Strength'][1] })} §c❁ Strength §7for §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['Rekindle'][rarity]['Seconds'][0], maxStat: extraPetStatsMinMax[id]['Rekindle'][rarity]['Seconds'][1] })} §7seconds. §860s cooldown`),
        secondAbility: minecraftColoredStringToText(`§6Fourth FlareZEILENUMBRUCH§7On 4th melee strike, §6ignite §7mobs, dealing §c${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['FourthFlare'][rarity]['Value'][0], maxStat: extraPetStatsMinMax[id]['FourthFlare'][rarity]['Value'][1] })}x §7your §9☠ Crit Damage §9§7each second for §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['FourthFlare'][rarity]['Seconds'][0], maxStat: extraPetStatsMinMax[id]['FourthFlare'][rarity]['Seconds'][1] })} §7seconds.`),
        thirdAbility: (rarityNumber >= 5) ? minecraftColoredStringToText(`§6Magic BirdZEILENUMBRUCH§7You may always fly on your private island and garden.`) : '',
        fourtAbility: (rarityNumber >= 5) ? minecraftColoredStringToText(`§6Eternal CoinsZEILENUMBRUCH§7Don't lose coins from death.`) : '',
      });
      case 'MAGMA_CUBE': return ({
        category: minecraftColoredStringToText(`§8Combat Pet, ${skin ? skin : ''}`),
        stats: minecraftColoredStringToText(`
      §7Health: §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Health'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Health'][1] })}ZEILENUMBRUCH
      §7Defense: §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Defense'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Defense'][1] })}ZEILENUMBRUCH
      §7Strength: §c+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Strength'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Strength'][1] })}
      `),
        firstAbility: minecraftColoredStringToText(`§6Slimy MinionsZEILENUMBRUCH§7Slime minions work §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['SlimyMinions'][rarity][0], maxStat: extraPetStatsMinMax[id]['SlimyMinions'][rarity][1] })}% §7faster while on your island.`),
        secondAbility: (rarityNumber >= 3) ? minecraftColoredStringToText(`§6Salt BladeZEILENUMBRUCH§7Deal §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['SaltBlade'][rarity][0], maxStat: extraPetStatsMinMax[id]['SaltBlade'][rarity][1] })}% §7more damage to slimes.`) : '',
        thirdAbility: (rarityNumber >= 5) ? minecraftColoredStringToText(`§6Hot EmberZEILENUMBRUCH§7Buffs the stats of §5Rekindled Ember §5Armor §7by §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['HotEmber'][rarity][0], maxStat: extraPetStatsMinMax[id]['HotEmber'][rarity][1] })}%§7.`) : '',
      });
      case 'JERRY': return ({
        category: minecraftColoredStringToText(`§8Combat Pet, ${skin ? skin : ''}`),
        stats: minecraftColoredStringToText(`
      §7Intelligence: §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Intelligence'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Intelligence'][1] })}
      `),
        firstAbility: minecraftColoredStringToText(`§6JerryZEILENUMBRUCH§7Gain §a50% §7chance to deal your regular damage.`),
        secondAbility: minecraftColoredStringToText(`§6JerryZEILENUMBRUCH§7Gain §a100% §7chance to receive a normal amount of drops from mobs.`),
        thirdAbility: (rarityNumber >= 5) ? minecraftColoredStringToText(`§6JerryZEILENUMBRUCH§7Actually adds §c${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['Jerry'][rarity][0], maxStat: extraPetStatsMinMax[id]['Jerry'][rarity][1] })} damage §7to the Aspect of the Jerry.`) : '',
        fourthAbility: (rarityNumber >= 6) ? minecraftColoredStringToText(`§6JerryZEILENUMBRUCH§7Tiny chance to find Jerry Candies when killing mobs.`) : '',
      });
      case 'HOUND': return ({
        category: minecraftColoredStringToText(`§8Combat Pet, ${skin ? skin : ''}`),
        stats: minecraftColoredStringToText(`
      §7Strength: §c+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Strength'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Strength'][1] })}ZEILENUMBRUCH
      §7Bonus Attack Speed: §c+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['BonusAttackSpeed'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['BonusAttackSpeed'][1] })}%ZEILENUMBRUCH
      §7Ferocity: §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Ferocity'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Ferocity'][1] })}
      `),
        firstAbility: minecraftColoredStringToText(`§6ScavengerZEILENUMBRUCH§7Gain +§a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['Scavenger'][rarity][0], maxStat: extraPetStatsMinMax[id]['Scavenger'][rarity][1] })} §7coins per monster kill.`),
        secondAbility: minecraftColoredStringToText(`§6FinderZEILENUMBRUCH§7Increases the chance for monsters to drop their armor by §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['Finder'][rarity][0], maxStat: extraPetStatsMinMax[id]['Finder'][rarity][1] })}%§7.`),
        thirdAbility: (rarityNumber >= 5) ? minecraftColoredStringToText(`§6Fury ClawsZEILENUMBRUCH§7Grants §e+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['FuryClaws'][rarity][0], maxStat: extraPetStatsMinMax[id]['FuryClaws'][rarity][1] })}⚔ Bonus Attack Speed§7.`) : '',
      });
      case 'HORSE': return ({
        category: minecraftColoredStringToText(`§8Combat Mount, ${skin ? skin : ''}`),
        stats: minecraftColoredStringToText(`
      §7Speed: §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Speed'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Speed'][1] })}ZEILENUMBRUCH
      §7Intelligence: §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Intelligence'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Intelligence'][1] })}
      `),
        firstAbility: minecraftColoredStringToText(`§6RidableZEILENUMBRUCH§7Right-click your summoned pet to ride it!`),
        secondAbility: (rarityNumber >= 3) ? minecraftColoredStringToText(`§6RunZEILENUMBRUCH§7Increases the speed of your mount by §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['Run'][rarity][0], maxStat: extraPetStatsMinMax[id]['Run'][rarity][1] })}%§7.`) : '',
        thirdAbility: (rarityNumber >= 5) ? minecraftColoredStringToText(`§6Ride Into BattleZEILENUMBRUCH§7While riding your horse, gain +§a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['RideIntoBattle'][rarity][0], maxStat: extraPetStatsMinMax[id]['RideIntoBattle'][rarity][1] })}% §a§7bow damage.`) : '',
      });
      case 'GRANDMA_WOLF': return ({
        category: minecraftColoredStringToText(`§8Combat Pet, ${skin ? skin : ''}`),
        stats: minecraftColoredStringToText(`
      §7Health: §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Health'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Health'][1] })}ZEILENUMBRUCH
      §7Strength: §c+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Strength'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Strength'][1] })}
      `),
        firstAbility: minecraftColoredStringToText(`
      §6Kill ComboZEILENUMBRUCH§7Gain buffs for combo kills. Effects stack as you increase your combo.ZEILENUMBRUCH§a5 Combo §8(lasts §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['KillCombo'][rarity]['5'][0], maxStat: extraPetStatsMinMax[id]['KillCombo'][rarity]['5'][1] })}s§8)ZEILENUMBRUCH
      §8§b+${extraPetStatsMinMax[id]['KillCombo'][rarity]['MagicFind5']}✯ Magic FindZEILENUMBRUCH
      §a10 Combo §8(lasts §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['KillCombo'][rarity]['10'][0], maxStat: extraPetStatsMinMax[id]['KillCombo'][rarity]['10'][1] })}s§8)ZEILENUMBRUCH
      §8+§6${extraPetStatsMinMax[id]['KillCombo'][rarity]['Coins10']} §7coins per killZEILENUMBRUCH
      §a15 Combo §8(lasts §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['KillCombo'][rarity]['15'][0], maxStat: extraPetStatsMinMax[id]['KillCombo'][rarity]['15'][1] })}s§8)ZEILENUMBRUCH
      §8§b+${extraPetStatsMinMax[id]['KillCombo'][rarity]['MagicFind15']}✯ Magic FindZEILENUMBRUCH
      §a20 Combo §8(lasts §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['KillCombo'][rarity]['20'][0], maxStat: extraPetStatsMinMax[id]['KillCombo'][rarity]['20'][1] })}s§8)ZEILENUMBRUCH
      §8§3+${extraPetStatsMinMax[id]['KillCombo'][rarity]['CombatWisdom20']}☯ Combat WisdomZEILENUMBRUCH
      §a25 Combo §8(lasts §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['KillCombo'][rarity]['25'][0], maxStat: extraPetStatsMinMax[id]['KillCombo'][rarity]['25'][1] })}s§8)ZEILENUMBRUCH
      §8§b+${extraPetStatsMinMax[id]['KillCombo'][rarity]['MagicFind25']}✯ Magic FindZEILENUMBRUCH
      §a30 Combo §8(lasts §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['KillCombo'][rarity]['30'][0], maxStat: extraPetStatsMinMax[id]['KillCombo'][rarity]['30'][1] })}s§8)ZEILENUMBRUCH
      §8+§6${extraPetStatsMinMax[id]['KillCombo'][rarity]['Coins30']} §7coins per kill
      `),
      });
      case 'GRIFFIN': return ({
        // §7Defense: §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Defense'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Defense'][1] })}ZEILENUMBRUCH //TODO: Implement Pet Items which can add / change stats
        category: minecraftColoredStringToText(`§8Combat Pet, ${skin ? skin : ''}`),
        stats: minecraftColoredStringToText(`
      §7Strength: §c+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Strength'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Strength'][1] })}ZEILENUMBRUCH
      §7Intelligence: §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Intelligence'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Intelligence'][1] })}ZEILENUMBRUCH
      §7Crit Chance: §c+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['CritChance'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['CritChance'][1] })}%ZEILENUMBRUCH
      §7Crit Damage: §c+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['CritDamage'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['CritDamage'][1] })}%ZEILENUMBRUCH
      §7Magic Find: §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['MagicFind'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['MagicFind'][1] })}
      `),
        firstAbility: minecraftColoredStringToText(`§6OdysseyZEILENUMBRUCH§7§2Mythological creatures §7you find and burrows you dig scale in §cdifficulty §c§7and §6rewards §7based on your equipped Griffin's rarity.`),
        secondAbility: (rarityNumber >= 2) ? minecraftColoredStringToText(`§6Legendary ConstitutionZEILENUMBRUCH§7Permanent §cRegeneration ${extraPetStatsMinMax[id]['LegendaryConstitution'][rarity]['Regeneration']} §7and §7§4Strength ${extraPetStatsMinMax[id]['LegendaryConstitution'][rarity]['Strength']}§7.`) : '',
        thirdAbility: (rarityNumber >= 4) ? minecraftColoredStringToText(`§6Perpetual EmpathyZEILENUMBRUCHHeal nearby players for §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['PerpetualEmpathy'][rarity][0], maxStat: extraPetStatsMinMax[id]['PerpetualEmpathy'][rarity][1] })}% §7of the final damage you receive.ZEILENUMBRUCH§8Excludes other griffins.`) : '',
        fourthAbility: (rarityNumber >= 5) ? minecraftColoredStringToText(`§6King of KingsZEILENUMBRUCH§7Gain §c+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['KingofKings'][rarity][0], maxStat: extraPetStatsMinMax[id]['KingofKings'][rarity][1] })}% §c❁ Strength §7when above §7§c85% §7health.`) : '',
      });
      case 'GOLEM': return ({
        category: minecraftColoredStringToText(`§8Combat Pet, ${skin ? skin : ''}`),
        stats: minecraftColoredStringToText(`
      §7Health: §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Health'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Health'][1] })}ZEILENUMBRUCH
      §7Strength: §c+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Strength'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Strength'][1] })}
      `),
        firstAbility: minecraftColoredStringToText(`§6Last StandZEILENUMBRUCH§7While at less than §a25% HP§7, deal §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['LastStand'][rarity][0], maxStat: extraPetStatsMinMax[id]['LastStand'][rarity][1] })}% §a§7more damage.`),
        secondAbility: minecraftColoredStringToText(`§6RicochetZEILENUMBRUCH§7Your iron plating causes §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['Ricochet'][rarity][0], maxStat: extraPetStatsMinMax[id]['Ricochet'][rarity][1] })}% §7of attacks to ricochet and hit the §7attacker.`),
        thirdAbility: (rarityNumber >= 5) ? minecraftColoredStringToText(`§6TossZEILENUMBRUCH§7Every 5 hits, throw the enemy up into §7the air and deal §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['Toss'][rarity][0], maxStat: extraPetStatsMinMax[id]['Toss'][rarity][1] })}% §7damage (10s cooldown).`) : '',
      });
      case 'GHOUL': return ({
        category: minecraftColoredStringToText(`§8Combat Pet, ${skin ? skin : ''}`),
        stats: minecraftColoredStringToText(`
      §7Health: §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Health'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Health'][1] })}ZEILENUMBRUCH
      §7Intelligence: §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Intelligence'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Intelligence'][1] })}ZEILENUMBRUCH
      §7Ferocity: §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Ferocity'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Ferocity'][1] })}
      `),
        firstAbility: minecraftColoredStringToText(`§6Amplified HealingZEILENUMBRUCH§7Grants §4+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['AmplifiedHealing'][rarity][0], maxStat: extraPetStatsMinMax[id]['AmplifiedHealing'][rarity][1] })}♨ Vitality§7, which increases your incoming healing.`),
        secondAbility: minecraftColoredStringToText(`§6Zombie ArmZEILENUMBRUCH§7Increases the health and range of the §9Zombie Sword §7by §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['ZombieArm'][rarity][0], maxStat: extraPetStatsMinMax[id]['ZombieArm'][rarity][1] })}%§7.`),
        thirdAbility: (rarityNumber >= 5) ? minecraftColoredStringToText(`§6Reaper SoulZEILENUMBRUCH§7Increases the health and lifespan of the §6Reaper Scythe §7zombies by §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['ReaperSoul'][rarity][0], maxStat: extraPetStatsMinMax[id]['ReaperSoul'][rarity][1] })}%§7.`) : '',
      });
      case 'ENDERMAN': return ({
        category: minecraftColoredStringToText(`§8Combat Pet, ${skin ? skin : ''}`),
        stats: minecraftColoredStringToText(`
      §7Crit Damage: §c+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['CritDamage'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['CritDamage'][1] })}%
      `),
        firstAbility: minecraftColoredStringToText(`§6EnderianZEILENUMBRUCH§7§7Take §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['Enderian'][rarity][0], maxStat: extraPetStatsMinMax[id]['Enderian'][rarity][1] })}% §7less damage from end monsters.`),
        secondAbility: (rarityNumber >= 3) ? minecraftColoredStringToText(`§6Teleport SavvyZEILENUMBRUCH§7§7Buffs the Transmission abilitiesZEILENUMBRUCH§7granting §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['TeleportSavyy'][rarity][0], maxStat: extraPetStatsMinMax[id]['TeleportSavyy'][rarity][1] })} §7weapon damage for 5s on use.`) : '',
        thirdAbility: (rarityNumber >= 5) ? minecraftColoredStringToText(`§6Zealot MadnessZEILENUMBRUCH§7§7Increases your odds to find a", "§7special Zealot by §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['ZealotMadness'][rarity][0], maxStat: extraPetStatsMinMax[id]['ZealotMadness'][rarity][1] })}%§7.`) : '',
        fourthAbility: (rarityNumber >= 6) ? minecraftColoredStringToText(`§6Enderman SlayerZEILENUMBRUCH§7§7Gain §b${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['EndermanSlayer'][rarity][0], maxStat: extraPetStatsMinMax[id]['EndermanSlayer'][rarity][1] })}x §7Combat XP §7against §aEndermen§7.`) : '',
      });
      case 'SLUG': return ({
        category: minecraftColoredStringToText(`§8Farming Pet, ${skin ? skin : ''}`),
        stats: minecraftColoredStringToText(`
      §7Defense: §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Defense'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Defense'][1] })}ZEILENUMBRUCH
      §7Intelligence: §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Intelligence'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Intelligence'][1] })}
      `),
        firstAbility: minecraftColoredStringToText(`§6Slow and SteadyZEILENUMBRUCH§7§7When fishing in the §cCrimson Isle§7, §7§aSlugfish §7take §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['SlowandSteady'][rarity][0], maxStat: extraPetStatsMinMax[id]['SlowandSteady'][rarity][1] })}% §7less time to catch.`),
        secondAbility: minecraftColoredStringToText(`§6Pest FriendsZEILENUMBRUCH§7§7§7Grants §2+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['PestFriends'][rarity][0], maxStat: extraPetStatsMinMax[id]['PestFriends'][rarity][1] })}ൠ Bonus Pest Chance§7.`),
        thirdAbility: (rarityNumber >= 5) ? minecraftColoredStringToText(`§6Repugnant AromaZEILENUMBRUCH§7§7When farming in a plot affected by a §aSprayonator§7, gain §6+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['RepugnantAroma'][rarity][0], maxStat: extraPetStatsMinMax[id]['RepugnantAroma'][rarity][1] })}☘ Farming Fortune§7.`) : '',
      });
      case 'RABBIT': return ({
        category: minecraftColoredStringToText(`§8Farming Pet, ${skin ? skin : ''}`),
        stats: minecraftColoredStringToText(`
      §7Health: §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Health'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Health'][1] })}ZEILENUMBRUCH
      §7Speed: §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Speed'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Speed'][1] })}
      `),
        firstAbility: minecraftColoredStringToText(`§6Happy FeetZEILENUMBRUCH§7§7Jump potions also give §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['HappyFeet'][rarity][0], maxStat: extraPetStatsMinMax[id]['HappyFeet'][rarity][1] })} §7speed.`),
        secondAbility: (rarityNumber >= 3) ? minecraftColoredStringToText(`§6Farming Wisdom BoostZEILENUMBRUCH§7§7§7Grants §3+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['FarmingWisdomBoost'][rarity][0], maxStat: extraPetStatsMinMax[id]['FarmingWisdomBoost'][rarity][1] })}☯ Farming Wisdom§7.`) : '',
        thirdAbility: (rarityNumber >= 5) ? minecraftColoredStringToText(`§6Efficient FarmingZEILENUMBRUCH§7§7Farming minions work §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['EfficientFarming'][rarity][0], maxStat: extraPetStatsMinMax[id]['EfficientFarming'][rarity][1] })}% §7faster while on your island.`) : '',
      });
      case 'MOOSHROOM_COW': return ({
        category: minecraftColoredStringToText(`§8Farming Pet, ${skin ? skin : ''}`),
        stats: minecraftColoredStringToText(`
      §7Health: §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Health'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Health'][1] })}ZEILENUMBRUCH
      §7Farming Fortune: §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['FarmingFortune'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['FarmingFortune'][1] })}☘ZEILENUMBRUCH
      `),
        firstAbility: minecraftColoredStringToText(`§6Efficient MushroomsZEILENUMBRUCH§7§7Mushroom§7 and Mycelium minions work §7§a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['EfficientMushrooms'][rarity][0], maxStat: extraPetStatsMinMax[id]['EfficientMushrooms'][rarity][1] })}% §7faster while on your island.`),
        secondAbility: (rarityNumber >= 3) ? minecraftColoredStringToText(`§6Mushroom EaterZEILENUMBRUCH§7§7When breaking mature crops, there is a §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['MushroomEater'][rarity][0], maxStat: extraPetStatsMinMax[id]['MushroomEater'][rarity][1] })}% §7chance that a mushroom will drop.`) : '',
        thirdAbility: (rarityNumber >= 5) ? minecraftColoredStringToText(`§6Farming StrengthZEILENUMBRUCH§7§7Gain §6+0.7☘ Farming Fortune §7per every §c${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['FarmingStrength'][rarity][0], maxStat: extraPetStatsMinMax[id]['FarmingStrength'][rarity][1] })} §c❁ Strength§7.`) : '',
      });
      case 'PIG': return ({
        category: minecraftColoredStringToText(`§8Farming Mount, ${skin ? skin : ''}`),
        stats: minecraftColoredStringToText(`
      §7Speed: §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Speed'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Speed'][1] })}
      `),
        firstAbility: minecraftColoredStringToText(`§6RidableZEILENUMBRUCH§7§7Right-click your summoned pet to ride it!`),
        secondAbility: minecraftColoredStringToText(`§6RunZEILENUMBRUCH§7§7Increases the speed of your mount by §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['Run'][rarity][0], maxStat: extraPetStatsMinMax[id]['Run'][rarity][1] })}%§7.`),
        thirdAbility: (rarityNumber >= 3) ? minecraftColoredStringToText(`§6SprintZEILENUMBRUCH§7§7While holding an §aEnchanted Carrot on §aa Stick§7, increases the speed of your mount by §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['Sprint'][rarity][0], maxStat: extraPetStatsMinMax[id]['Sprint'][rarity][1] })}%§7.`) : '',
        fourthAbility: (rarityNumber >= 5) ? minecraftColoredStringToText(`§6TrampleZEILENUMBRUCH§7§7Your pig will break all crops that it walks over while on your private island or Garden. While riding, §6☘Farming Fortune §7and §aFarming Exp §a§7gain is reduced by §a75%§7.`) : '',
      });
      case 'ELEPHANT': return ({
        category: minecraftColoredStringToText(`§8Farming Pet, ${skin ? skin : ''}`),
        stats: minecraftColoredStringToText(`
      §7Health: §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Health'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Health'][1] })}ZEILENUMBRUCH
      §7Intelligence: §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Intelligence'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Intelligence'][1] })}ZEILENUMBRUCH
      `), // TODO: Implement Pet Items which can add / change stats
        firstAbility: minecraftColoredStringToText(`§6StompZEILENUMBRUCH§7§7Gain §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['Stomp'][rarity][0], maxStat: extraPetStatsMinMax[id]['Stomp'][rarity][1] })}❈ Defense §7for every 100 §f✦§fSpeed§7.`),
        secondAbility: (rarityNumber >= 3) ? minecraftColoredStringToText(`§6Walking FortressZEILENUMBRUCH§7§7Gain §c${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['WalkingFortress'][rarity][0], maxStat: extraPetStatsMinMax[id]['WalkingFortress'][rarity][1] })}❤ Health §7for every 10 §a❈ §aDefense§7.`) : '',
        thirdAbility: (rarityNumber >= 5) ? minecraftColoredStringToText(`§6Trunk EfficiencyZEILENUMBRUCH§7§7Grants §6+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['TrunkEfficiency'][rarity][0], maxStat: extraPetStatsMinMax[id]['TrunkEfficiency'][rarity][1] })}☘ Farming Fortune§7, §7which increases your chance for multiple drops.`) : '',
      });
      case 'CHICKEN': return ({
        category: minecraftColoredStringToText(`§8Farming Pet, ${skin ? skin : ''}`),
        stats: minecraftColoredStringToText(`
      §7Health: §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Health'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Health'][1] })}
      `),
        firstAbility: minecraftColoredStringToText(`§6Light FeetZEILENUMBRUCH§7§7§7Reduces fall damage by §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['LightFeet'][rarity][0], maxStat: extraPetStatsMinMax[id]['LightFeet'][rarity][1] })}%§7.`),
        secondAbility: (rarityNumber >= 3) ? minecraftColoredStringToText(`§6EggstraZEILENUMBRUCH§7§7Killing chickens has a §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['Eggstra'][rarity][0], maxStat: extraPetStatsMinMax[id]['Eggstra'][rarity][1] })}% §7chance to drop an egg.`) : '',
        thirdAbility: (rarityNumber >= 5) ? minecraftColoredStringToText(`§6Mighty ChickensZEILENUMBRUCH§7§7Chicken minions work §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['MightyChickens'][rarity][0], maxStat: extraPetStatsMinMax[id]['MightyChickens'][rarity][1] })}% §7faster while on your island.`) : '',
      });
      case 'BEE': return ({
        category: minecraftColoredStringToText(`§8Farming Pet, ${skin ? skin : ''}`),
        stats: minecraftColoredStringToText(`
      §7Speed: §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Speed'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Speed'][1] })}ZEILENUMBRUCH
      §7Strength: §c+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Strength'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Strength'][1] })}ZEILENUMBRUCH
      §7Intelligence: §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Intelligence'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Intelligence'][1] })}ZEILENUMBRUCH
      `),
        firstAbility: minecraftColoredStringToText(`§6HiveZEILENUMBRUCH§7For each player within §a25 §7blocks:ZEILENUMBRUCH§b+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['Hive'][rarity]['Intelligence'][0], maxStat: extraPetStatsMinMax[id]['Hive'][rarity]['Intelligence'][1] })}✎ IntelligenceZEILENUMBRUCH§c+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['Hive'][rarity]['Strength'][0], maxStat: extraPetStatsMinMax[id]['Hive'][rarity]['Strength'][1] })}❁ StrengthZEILENUMBRUCH§a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['Hive'][rarity]['Defense'][0], maxStat: extraPetStatsMinMax[id]['Hive'][rarity]['Defense'][1] })}❈ DefenseZEILENUMBRUCH§8Max 15 players"`),
        secondAbility: (rarityNumber >= 3) ? minecraftColoredStringToText(`"§6Busy Buzz BuzzZEILENUMBRUCH§7Grants §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BusyBuzzBuzz'][rarity][0], maxStat: extraPetStatsMinMax[id]['BusyBuzzBuzz'][rarity][1] })} §7of each to your pet:ZEILENUMBRUCH§6☘ Farming FortuneZEILENUMBRUCH§6☘ Foraging FortuneZEILENUMBRUCH§6☘ Mining Fortune`) : '',
        thirdAbility: (rarityNumber >= 5) ? minecraftColoredStringToText(`§6Weaponized HoneyZEILENUMBRUCH§7§7Gain §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['WeaponizedHoney'][rarity][0], maxStat: extraPetStatsMinMax[id]['WeaponizedHoney'][rarity][1] })}% §7of received damage as §6❤ §6Absorption§7.`) : '',
      });
      case 'REINDEER': return ({
        category: minecraftColoredStringToText(`§8Fishing Pet, ${skin ? skin : ''}`),
        stats: minecraftColoredStringToText(`
      §7Health: §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Health'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Health'][1] })}ZEILENUMBRUCH
      §7Sea Creature Chance: §c+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['SeaCreatureChance'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['SeaCreatureChance'][1] })}%ZEILENUMBRUCH
      §7Fishing Speed: §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['FishingSpeed'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['FishingSpeed'][1] })}
      `),
        firstAbility: minecraftColoredStringToText(`§6Winter SprintZEILENUMBRUCH§7§7Gain §ddouble §7pet §aEXP§7.`),
        secondAbility: minecraftColoredStringToText(`§6InfusedZEILENUMBRUCH§7§7Gives §b+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['Infused'][rarity][0], maxStat: extraPetStatsMinMax[id]['Infused'][rarity][1] })}☂ Fishing Speed §7and §3+10α §3Sea Creature Chance §7while on §7§cJerry's Workshop§7.`),
        thirdAbility: minecraftColoredStringToText(`§6Snow PowerZEILENUMBRUCH§7§7Grants §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['SnowPower'][rarity][0], maxStat: extraPetStatsMinMax[id]['SnowPower'][rarity][1] })}% §7bonus gift chance during the §cGift Attack §7event.`),
        fourthAbility: minecraftColoredStringToText(`§6Icy WindZEILENUMBRUCH§7§7Grants §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['IcyWind'][rarity][0], maxStat: extraPetStatsMinMax[id]['IcyWind'][rarity][1] })}% §7chance of getting double §bIce Essence§7.`)
      });
      case 'SQUID': return ({
        category: minecraftColoredStringToText(`§8Fishing Pet, ${skin ? skin : ''}`),
        stats: minecraftColoredStringToText(`
      §7Health: §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Health'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Health'][1] })}ZEILENUMBRUCH
      §7Intelligence: §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Intelligence'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Intelligence'][1] })}
      `),
        firstAbility: minecraftColoredStringToText(`§6More InkZEILENUMBRUCH§7§7Gain a §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['MoreInk'][rarity][0], maxStat: extraPetStatsMinMax[id]['MoreInk'][rarity][1] })}% §7chance to get double drops from squids.`),
        secondAbility: (rarityNumber >= 3) ? minecraftColoredStringToText(`§6Ink SpecialtyZEILENUMBRUCH§7§7Buffs the §5Ink Wand §7by §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['InkSpecialty'][rarity]['Damage'][0], maxStat: extraPetStatsMinMax[id]['InkSpecialty'][rarity]['Damage'][1] })} §c❁ Damage §c§7and §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['InkSpecialty'][rarity]['Strength'][0], maxStat: extraPetStatsMinMax[id]['InkSpecialty'][rarity]['Strength'][1] })} §c❁ Strength§7.`) : '',
        thirdAbility: (rarityNumber >= 5) ? minecraftColoredStringToText(`§6Fishing Wisdom BoostZEILENUMBRUCH§7§7§7Grants §3+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['FishingWisdomBoost'][rarity][0], maxStat: extraPetStatsMinMax[id]['FishingWisdomBoost'][rarity][1] })}☯ Fishing Wisdom§7.`) : '',
      });
      case 'FLYING_FISH': return ({
        category: minecraftColoredStringToText(`§8Fishing Pet, ${skin ? skin : ''}`),
        stats: minecraftColoredStringToText(`
      §7Defense: §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Defense'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Defense'][1] })}ZEILENUMBRUCH
      §7Strength: §c+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Strength'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Strength'][1] })}ZEILENUMBRUCH
      `),
        firstAbility: minecraftColoredStringToText(`§6Quick ReelZEILENUMBRUCH§7§7Grants §b+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['QuickReel'][rarity][0], maxStat: extraPetStatsMinMax[id]['QuickReel'][rarity][1] })}☂ Fishing Speed§7.`),
        secondAbility: (rarityNumber >= 3 && rarityNumber <= 5) ?
          minecraftColoredStringToText(`§6Water BenderZEILENUMBRUCH§7§7Gives §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['WaterBender'][rarity]['Strength'][0], maxStat: extraPetStatsMinMax[id]['WaterBender'][rarity]['Strength'][1] })} §c❁ Strength §7andZEILENUMBRUCH§a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['WaterBender'][rarity]['Defense'][0], maxStat: extraPetStatsMinMax[id]['WaterBender'][rarity]['Defense'][1] })}❈ Defense §a§7when near water.`)
          : minecraftColoredStringToText(`§6Lava BenderZEILENUMBRUCH§7§7Gives §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['LavaBender'][rarity]['Strength'][0], maxStat: extraPetStatsMinMax[id]['LavaBender'][rarity]['Strength'][1] })} §c❁ Strength §7andZEILENUMBRUCH§a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['LavaBender'][rarity]['Defense'][0], maxStat: extraPetStatsMinMax[id]['LavaBender'][rarity]['Defense'][1] })}❈ §aDefense §7when near water or lava.`),
        thirdAbility: (rarityNumber >= 5 && rarityNumber !== 6) ?
          minecraftColoredStringToText(`§6Deep Sea DiverZEILENUMBRUCH§7§7Increases the stats of Diver's Armor by §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['DeepSeaDiver'][rarity][0], maxStat: extraPetStatsMinMax[id]['DeepSeaDiver'][rarity][1] })}%§7.`)
          : minecraftColoredStringToText(`§6Magmatic DiverZEILENUMBRUCH§7§7Increases the stats of Magma Lord Armor by §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['MagmaticDiver'][rarity][0], maxStat: extraPetStatsMinMax[id]['MagmaticDiver'][rarity][1] })}%§7.`),
        fourthAbility: (rarityNumber >= 6) ? minecraftColoredStringToText(`§6Rapid DecayZEILENUMBRUCH§7§7Increases the chance to activate the §d§lFlash Enchantment §7by §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['RapidDecay'][rarity][0], maxStat: extraPetStatsMinMax[id]['RapidDecay'][rarity][1] })}%§7.`) : '',
      });
      case 'DOLPHIN': return ({
        category: minecraftColoredStringToText(`§8Fishing Pet, ${skin ? skin : ''}`),
        stats: minecraftColoredStringToText(`
      §7Intelligence: §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Intelligence'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Intelligence'][1] })}ZEILENUMBRUCH
      §7Sea Creature Chance: §c+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['SeaCreatureChance'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['SeaCreatureChance'][1] })}%
      `),
        firstAbility: minecraftColoredStringToText(`§6Pod TacticsZEILENUMBRUCH§7§7Grants §b+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['PodTactics'][rarity][0], maxStat: extraPetStatsMinMax[id]['PodTactics'][rarity][1] })}☂ Fishing Speed §7for each player within §a30 §7blocks, up to §a5 §a§7players.`),
        secondAbility: (rarityNumber >= 3) ? minecraftColoredStringToText(`§6EcholocationZEILENUMBRUCH§7§7Grants §3+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['Echolocation'][rarity][0], maxStat: extraPetStatsMinMax[id]['Echolocation'][rarity][1] })}α Sea Creature Chance§7.`) : '',
        thirdAbility: (rarityNumber >= 5) ? minecraftColoredStringToText(`§6Splash SurpriseZEILENUMBRUCH§7§7Stun sea creatures for §a5s §7after fishing them up.`) : '',
      });
      case 'BLUE_WHALE': return ({
        category: minecraftColoredStringToText(`§8Fishing Pet, ${skin ? skin : ''}`),
        stats: minecraftColoredStringToText(`
      §7Health: §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Health'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Health'][1] })}
      `),
        firstAbility: minecraftColoredStringToText(`§6IngestZEILENUMBRUCH§7§7All potions heal §c+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['Ingest'][rarity][0], maxStat: extraPetStatsMinMax[id]['Ingest'][rarity][1] })}❤§7.`),
        secondAbility: (rarityNumber >= 3) ? minecraftColoredStringToText(`§6BulkZEILENUMBRUCH§7§7Gain §a${extraPetStatsMinMax[id]['Bulk'][rarity]['Defense'][0]}§a❈ DefenseZEILENUMBRUCH§7per §c${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['Bulk'][rarity]['Health'][0], maxStat: extraPetStatsMinMax[id]['Bulk'][rarity]['Health'][1] })} Max §c❤ §cHealth§7.`) : '',
        thirdAbility: (rarityNumber >= 5) ? minecraftColoredStringToText(`§6ArchimedesZEILENUMBRUCH§7§7Gain §c+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['Archimedes'][rarity][0], maxStat: extraPetStatsMinMax[id]['Archimedes'][rarity][1] })}% Max §c❤ Health§7.`) : '',
      });
      case 'BABY_YETI': return ({
        category: minecraftColoredStringToText(`§8Fishing Pet, ${skin ? skin : ''}`),
        stats: minecraftColoredStringToText(`
      §7Strength: §c+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Strength'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Strength'][1] })}ZEILENUMBRUCH
      §7Intelligence: §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Intelligence'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Intelligence'][1] })}
      `),
        firstAbility: minecraftColoredStringToText(`§6Cold BreezeZEILENUMBRUCH§7§7Gives §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['ColdBreeze'][rarity][0], maxStat: extraPetStatsMinMax[id]['ColdBreeze'][rarity][1] })} §c❁ Strength §7andZEILENUMBRUCH§9☠ Crit §9Damage §7when near snow.`),
        secondAbility: minecraftColoredStringToText(`§6Ice ShieldsZEILENUMBRUCH§7§7Gain §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['IceShields'][rarity][0], maxStat: extraPetStatsMinMax[id]['IceShields'][rarity][1] })}% §7of your §c❁ StrengthZEILENUMBRUCH§7as §a❈ Defense§7.`),
        thirdAbility: (rarityNumber >= 5) ? minecraftColoredStringToText(`§6Yeti FuryZEILENUMBRUCH§7§7Buffs the §6Yeti Sword §7byZEILENUMBRUCH§a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['YetiFury'][rarity][0], maxStat: extraPetStatsMinMax[id]['YetiFury'][rarity][1] })} §c❁ Damage §7and §b✎ Intelligence§7.`) : '',
      });
      case 'AMMONITE': return ({
        category: minecraftColoredStringToText(`§8Fishing Pet, ${skin ? skin : ''}`),
        stats: minecraftColoredStringToText(`
      §7Sea Creature Chance: §c+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['SeaCreatureChance'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['SeaCreatureChance'][1] })}%
      `),
        firstAbility: minecraftColoredStringToText(`§6Heart of the SeaZEILENUMBRUCH§7§7Grants §3+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['HeartoftheSea'][rarity][0], maxStat: extraPetStatsMinMax[id]['HeartoftheSea'][rarity][1] })}α Sea Creature Chance §7to your pet for each §5Heart of the Mountain §7level.`),
        secondAbility: minecraftColoredStringToText(`§6Expert Cave FisherZEILENUMBRUCH§7§7The fishing speed reduction from being underground is attenuated by §7§a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['ExpertCaveFisher'][rarity][0], maxStat: extraPetStatsMinMax[id]['ExpertCaveFisher'][rarity][1] })}%§7.`),
        thirdAbility: minecraftColoredStringToText(`§6Gift of the AmmoniteZEILENUMBRUCH§7§7Each Mining and Fishing level grants §7§b+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['GiftoftheAmmonite'][rarity]['FishingSpeed'][0], maxStat: extraPetStatsMinMax[id]['GiftoftheAmmonite'][rarity]['FishingSpeed'][1] })}☂ Fishing Speed§7, §f+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['GiftoftheAmmonite'][rarity]['Speed'][0], maxStat: extraPetStatsMinMax[id]['GiftoftheAmmonite'][rarity]['Speed'][1] })}✦ Speed §7and §7§a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['GiftoftheAmmonite'][rarity]['Defense'][0], maxStat: extraPetStatsMinMax[id]['GiftoftheAmmonite'][rarity]['Defense'][1] })}❈ Defense§7.`),
      });
      case 'MEGALODON': return ({
        category: minecraftColoredStringToText(`§8Fishing Pet, ${skin ? skin : ''}`),
        stats: minecraftColoredStringToText(`
      §7Strength: §c+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Strength'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Strength'][1] })}ZEILENUMBRUCH
      §7Magic Find: §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['MagicFind'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['MagicFind'][1] })}ZEILENUMBRUCH
      §7Ferocity: §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Ferocity'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Ferocity'][1] })}
      `),
        firstAbility: minecraftColoredStringToText(`§6Blood ScentZEILENUMBRUCH§7§7Deal up to §c+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BloodScent'][rarity][0], maxStat: extraPetStatsMinMax[id]['BloodScent'][rarity][1] })}% §c❁ Damage §7based on the enemy's missing health.`),
        secondAbility: minecraftColoredStringToText(`§6Enhanced ScalesZEILENUMBRUCH§7§7Increases the stats of §aShark Scale Armor §7by §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['EnhancedScales'][rarity][0], maxStat: extraPetStatsMinMax[id]['EnhancedScales'][rarity][1] })}%§7.`),
        thirdAbility: (rarityNumber >= 5) ? minecraftColoredStringToText(`§6Feeding FrenzyZEILENUMBRUCH§7§7On kill gain §c${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['FeedingFrenzy'][rarity][0], maxStat: extraPetStatsMinMax[id]['FeedingFrenzy'][rarity][1] })}❁ Damage §7and §f✦ Speed §7for §a5s§7.`) : '',
      });
      case 'MONKEY': return ({
        category: minecraftColoredStringToText(`§8Foraging Pet, ${skin ? skin : ''}`),
        stats: minecraftColoredStringToText(`
      §7Speed: §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Speed'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Speed'][1] })}ZEILENUMBRUCH
      §7Intelligence: §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Intelligence'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Intelligence'][1] })}
      `),
        firstAbility: minecraftColoredStringToText(`§6TreebornZEILENUMBRUCH§7§7Grants §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['Treeborn'][rarity][0], maxStat: extraPetStatsMinMax[id]['Treeborn'][rarity][1] })} §6☘ Foraging Fortune§7, which increases your chance at double logs.`),
        secondAbility: (rarityNumber >= 3) ? minecraftColoredStringToText(`§6Vine SwingZEILENUMBRUCH§7§7Gain +§a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['VineSwing'][rarity][0], maxStat: extraPetStatsMinMax[id]['VineSwing'][rarity][1] })} §f✦ Speed §7while in The Park.`) : '',
        thirdability: (rarityNumber >= 5) ? minecraftColoredStringToText(`§6Evolved AxesZEILENUMBRUCH§7§7Reduce the cooldown of §aJungle Axe §a§7and §5Treecapitator §7by §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['EvolvedAxes'][rarity][0], maxStat: extraPetStatsMinMax[id]['EvolvedAxes'][rarity][1] })}%§7.`) : '',
      });
      case 'LION': return ({
        category: minecraftColoredStringToText(`§8Foraging Pet, ${skin ? skin : ''}`),
        stats: minecraftColoredStringToText(`
      §7Speed: §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Speed'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Speed'][1] })}ZEILENUMBRUCH
      §7Strength: §c+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Strength'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Strength'][1] })}ZEILENUMBRUCH
      §7Ferocity: §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Ferocity'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Ferocity'][1] })}
      `),
        firstAbility: minecraftColoredStringToText(`§6Primal ForceZEILENUMBRUCH§7§7Adds §c+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['PrimalForce'][rarity]['Damage'][0], maxStat: extraPetStatsMinMax[id]['PrimalForce'][rarity]['Damage'][1] })} §c❁ Damage §7and §c+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['PrimalForce'][rarity]['Strength'][0], maxStat: extraPetStatsMinMax[id]['PrimalForce'][rarity]['Strength'][1] })} §c❁ §cStrength §7to your weapons.`),
        secondAbility: (rarityNumber >= 3) ? minecraftColoredStringToText(`§6First PounceZEILENUMBRUCH§7§7First Strike§7, Triple-Strike§7, and §dCombo §7are §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['FirstPounce'][rarity][0], maxStat: extraPetStatsMinMax[id]['FirstPounce'][rarity][1] })}% §7more effective.`) : '',
        thirdAbility: (rarityNumber >= 5) ? minecraftColoredStringToText(`§6King of the JungleZEILENUMBRUCH§7§7Deal §c+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['KingoftheJungle'][rarity][0], maxStat: extraPetStatsMinMax[id]['KingoftheJungle'][rarity][1] })}% §c❁ Damage §7against mobs that have attacked you.`) : '',
      });
      case 'GIRAFFE': return ({
        category: minecraftColoredStringToText(`§8Foraging Pet, ${skin ? skin : ''}`),
        stats: minecraftColoredStringToText(`
      §7Health: §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Health'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Health'][1] })}ZEILENUMBRUCH
      §7Crit Chance: §c+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['CritChance'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['CritChance'][1] })}%
      `),
        firstAbility: minecraftColoredStringToText(`§6Good HeartZEILENUMBRUCH§7§7Regen §c${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['GoodHeart'][rarity][0], maxStat: extraPetStatsMinMax[id]['GoodHeart'][rarity][1] })} ❤ §7per second.`),
        secondAbility: (rarityNumber >= 3) ? minecraftColoredStringToText(`§6Higher GroundZEILENUMBRUCH§7§7Grants §c+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['HigherGround'][rarity]['Strength'][0], maxStat: extraPetStatsMinMax[id]['HigherGround'][rarity]['Strength'][1] })}❁ Strength §7and §9+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['HigherGround'][rarity]['CritDamage'][0], maxStat: extraPetStatsMinMax[id]['HigherGround'][rarity]['CritDamage'][1] })}☠", "§9Crit Damage §7when mid air or jumping.`) : '',
        thirdAbility: (rarityNumber >= 5) ? minecraftColoredStringToText(`§6Long NeckZEILENUMBRUCH§7§7See enemies from afar and gain §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['LongNeck'][rarity][0], maxStat: extraPetStatsMinMax[id]['LongNeck'][rarity][1] })}% §a§7dodge chance.`) : '',
      });
      case 'OCELOT': return ({
        category: minecraftColoredStringToText(`§8Foraging Pet, ${skin ? skin : ''}`),
        stats: minecraftColoredStringToText(`
      §7Speed: §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Speed'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Speed'][1] })}ZEILENUMBRUCH
      §7Ferocity: §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Ferocity'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Ferocity'][1] })}
      `),
        firstAbility: minecraftColoredStringToText(`§6Foraging Wisdom BoostZEILENUMBRUCH§7§7§7Grants §3+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['ForagingWisdomBoost'][rarity][0], maxStat: extraPetStatsMinMax[id]['ForagingWisdomBoost'][rarity][1] })}☯ Foraging Wisdom§7.`),
        secondAbility: (rarityNumber >= 3) ? minecraftColoredStringToText(`§6Tree HuggerZEILENUMBRUCH§7§7Foraging minions work §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['TreeHugger'][rarity][0], maxStat: extraPetStatsMinMax[id]['TreeHugger'][rarity][1] })}% §7faster while on your island.`) : '',
        thirdAbility: (rarityNumber >= 5) ? minecraftColoredStringToText(`§6Tree EssenceZEILENUMBRUCH§7§7Gain a §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['TreeEssence'][rarity][0], maxStat: extraPetStatsMinMax[id]['TreeEssence'][rarity][1] })}% §7chance to get exp from breaking a log.`) : '',
      });
      case 'GUARDIAN': return ({
        category: minecraftColoredStringToText(`§8Enchanting Pet, ${skin ? skin : ''}`),
        stats: minecraftColoredStringToText(`
      §7Defense: §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Defense'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Defense'][1] })}ZEILENUMBRUCH
      §7Intelligence: §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Intelligence'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Intelligence'][1] })}
      `),
        firstAbility: minecraftColoredStringToText(`§6LaserbeamZEILENUMBRUCH§7§7Zaps your enemies for §b${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['Lazerbeam'][rarity][0], maxStat: extraPetStatsMinMax[id]['Lazerbeam'][rarity][1] })}x §7your §b✎ Intelligence §7every §a3s§7.`),
        secondAbility: (rarityNumber >= 3) ? minecraftColoredStringToText(`§6Enchanting Wisdom BoostZEILENUMBRUCH§7§7§7Grants §3+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['EnchantingWisdomBoost'][rarity][0], maxStat: extraPetStatsMinMax[id]['EnchantingWisdomBoost'][rarity][1] })}☯ Enchanting Wisdom§7.`) : '',
        thirdAbility: (rarityNumber >= 5) ? minecraftColoredStringToText(`§6Mana PoolZEILENUMBRUCH§7§7Regenerate §b${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['ManaPool'][rarity][0], maxStat: extraPetStatsMinMax[id]['ManaPool'][rarity][1] })}% §7extra mana, doubled when near or in water.`) : '',
        fourthAbility: (rarityNumber >= 6) ? minecraftColoredStringToText(`§6Lucky SevenZEILENUMBRUCH§7§7Gain §b+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['LuckySeven'][rarity][0], maxStat: extraPetStatsMinMax[id]['LuckySeven'][rarity][1] })}% §7chance to find §5ultra rare §5§7books in §dSuperpairs§7.`) : '',
      });
      case 'SHEEP': return ({
        category: minecraftColoredStringToText(`§8Alchemy Pet, ${skin ? skin : ''}`),
        stats: minecraftColoredStringToText(`
      §7Intelligence: §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Intelligence'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Intelligence'][1] })}ZEILENUMBRUCH
      §7Ability Damage: §c+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['AbilityDamage'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['AbilityDamage'][1] })}%
      `),
        firstAbility: minecraftColoredStringToText(`§6Mana SaverZEILENUMBRUCH§7§7§7Reduces the mana cost of abilities by §7§a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['ManaSaver'][rarity][0], maxStat: extraPetStatsMinMax[id]['ManaSaver'][rarity][1] })}%§7.`),
        secondAbility: (rarityNumber >= 3) ? minecraftColoredStringToText(`§6OverhealZEILENUMBRUCH§7§7Gives a §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['Overheal'][rarity][0], maxStat: extraPetStatsMinMax[id]['Overheal'][rarity][1] })}% §7shield after not taking damage for 10s.`) : '',
        thirdAbility: (rarityNumber >= 5) ? minecraftColoredStringToText(`§6Dungeon WizardZEILENUMBRUCH§7§7Increases your total mana by §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['DungeonWizard'][rarity][0], maxStat: extraPetStatsMinMax[id]['DungeonWizard'][rarity][1] })}% §a§7while in dungeons.`) : '',
      });
      case 'PARROT': return ({
        category: minecraftColoredStringToText(`§8Alchemy Pet, ${skin ? skin : ''}`),
        stats: minecraftColoredStringToText(`
      §7Intelligence: §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Intelligence'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Intelligence'][1] })}ZEILENUMBRUCH
      §7Crit Damage: §c+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['CritDamage'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['CritDamage'][1] })}%
      `),
        firstAbility: minecraftColoredStringToText(`§6FlamboyantZEILENUMBRUCH§7§7Adds §a${calculateParrotStatFlamboyant({ maxLevel, level, maxStat: extraPetStatsMinMax[id]['Flamboyant'][rarity][1] })} §7levels to intimidation accessories.`),
        secondAbility: minecraftColoredStringToText(`§6RepeatZEILENUMBRUCH§7§7Boosts potions duration by §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['Repeat'][rarity][0], maxStat: extraPetStatsMinMax[id]['Repeat'][rarity][1] })}%§7.`),
        thirdAbility: (rarityNumber >= 5) ? minecraftColoredStringToText(`§6Bird DiscourseZEILENUMBRUCH§7§7Gives §c+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BirdDiscourse'][rarity][0], maxStat: extraPetStatsMinMax[id]['BirdDiscourse'][rarity][1] })}❁ Strength §7to players within §a20 §7blocks.ZEILENUMBRUCH§8Doesn't stack`) : '',
        fourthAbility: (rarityNumber >= 5) ? minecraftColoredStringToText(`§6Parrot Feather InfusionZEILENUMBRUCH§7§7When summoned or in your Pets menu, boost the duration of consumed §cGod Potions §7by §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['ParrotFeatherInfusion'][rarity][0], maxStat: extraPetStatsMinMax[id]['ParrotFeatherInfusion'][rarity][1] })}%§7.`) : '',
      });
      case 'JELLYFISH': return ({
        category: minecraftColoredStringToText(`§8Alchemy Pet, ${skin ? skin : ''}`),
        stats: minecraftColoredStringToText(`
      §7Health: §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['Health'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['Health'][1] })}ZEILENUMBRUCH
      §7Health Regen: §a+${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['BaseStats']['HealthRegeneration'][0], maxStat: extraPetStatsMinMax[id]['BaseStats']['HealthRegeneration'][1] })}
      `),
        firstAbility: minecraftColoredStringToText(`§6Radiant ScyphozoaZEILENUMBRUCH§7§7While in dungeons, reduces the mana cost of Power Orbs by §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['RadiantScyphozoa'][rarity][0], maxStat: extraPetStatsMinMax[id]['RadiantScyphozoa'][rarity][1] })}%§7.`),
        secondAbility: minecraftColoredStringToText(`§6Stored EnergyZEILENUMBRUCH§7§7While in dungeons, for every §c2,000 HP §7you heal teammates the cooldown of §aWish §7is reduced by §a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['StoredEnergy'][rarity][0], maxStat: extraPetStatsMinMax[id]['StoredEnergy'][rarity][1] })}s§7, up to §a30s§7.`),
        thirdAbility: (rarityNumber >= 5) ? minecraftColoredStringToText(`§6Powerful PotionsZEILENUMBRUCH§7§7While in dungeons, increase the effectiveness of Dungeon Potions by §7§a${calculatePetStats({ maxLevel, level, minStat: extraPetStatsMinMax[id]['PowerfulPotions'][rarity][0], maxStat: extraPetStatsMinMax[id]['PowerfulPotions'][rarity][1] })}%§7.`) : '',
      });
      default:
        console.log('Pet not found', id);
        console.log()
        return null;
    }
  }

  function roundLegendaryTreasure(num: any, level: number) {
    let levelneedOneUp = [188, 164, 140]
    let levelneedOneDown = [196]
    let truncated = parseFloat(Math.floor(num.toString() * 10000).toString()) / 10000;
    // console.log('\nNUM', truncated);

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

  function calculateParrotStatFlamboyant({
    maxLevel,
    level,
    maxStat,
  }: {
    maxLevel: number,
    level: number,
    maxStat: number,
  }) {
    return ((level / maxLevel) * (maxStat - 1) + 1).toFixed(0);
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

  function getNumericRepresentation(rarity: 'COMMON' | 'UNCOMMON' | 'RARE' | 'EPIC' | 'LEGENDARY' | 'MYTHIC') {
    switch (rarity) {
      case 'COMMON': return 1
      case 'UNCOMMON': return 2
      case 'RARE': return 3
      case 'EPIC': return 4
      case 'LEGENDARY': return 5
      case 'MYTHIC': return 6
    }
  }
}