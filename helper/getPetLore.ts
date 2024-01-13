import { petStats } from '@/types/lore';

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

  const petLores = {
    GOLDEN_DRAGON: {
      category: `§8Combat Pet, ${skin ? skin : ''}`,
      stats: `§7Bonus Attack Speed: §c${calculatePetStats(level, petStatsMin.bonusAttackSpeed ?? 0, petStatsMax.bonusAttackSpeed ?? 0)}\n§7Magic Find: §a${calculatePetStats(level, petStatsMin.magicFind ?? 0, petStatsMax.magicFind ?? 0)}`,
    },
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
  maxLevel: number = 100
) {
  if (statMin === 0 || statMax === 0) return 'No min or max stat provided';
  return Math.round(statMin + (statMax - statMin) * (level / maxLevel));
}
