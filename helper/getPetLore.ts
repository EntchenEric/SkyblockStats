import { petStats } from '@/types/lore';

export function getPetLore(
  id: string,
  rarity: 'COMMON' | 'UNCOMMON' | 'RARE' | 'EPIC' | 'LEGENDARY' | 'MYTHIC',
  level: number,
  skin: string
) {
  if (!id) return 'No ID provided';
  if (!rarity) return 'No rarity provided';
  if (!level) return 'No level provided';

  const petStats: petStats = {
    bonusAttackSpeed: 0,
    magicFind: 0,
    speed: 0,
    intelligence: 0,
    defense: 0,
    trueDefense: 0,
    health: 0,
    strength: 0,
    critChance: 0,
    critDamage: 0,
    seaCreatureChance: 0,
    miningSpeed: 0,
    miningFortune: 0,
    farmingFortune: 0,
    foragingFortune: 0,
    abilityDamage: 0,
    petLuck: 0,
    ferocity: 0,
  };

  const determinePetStats = () => {};

  const petLores = {
    GOLDEN_DRAGON: {
      category: `§8Combat Pet, ${skin ? skin : ''}`,
      stats: `§7Bonus Attack Speed: §c${petStats.bonusAttackSpeed}\n§7Magic Find: §a${petStats.magicFind}`,
    },
  };
  switch (id) {
    case 'GOLDEN_DRAGON':
      if (rarity === 'LEGENDARY') {
      }
  }
}
