export interface SkyblockItem {
  material: string;
  name: string;
  category: string;
  tier:
    | 'COMMON'
    | 'UNCOMMON'
    | 'RARE'
    | 'EPIC'
    | 'LEGENDARY'
    | 'MYTHIC'
    | 'SPECIAL'
    | 'VERY_SPECIAL';
  requirements: SkyblockItemRequirement | undefined;
  id: string;
  durability: number | undefined;
  unstackable: boolean | undefined;
  skin: string | undefined;
  generator: string | undefined;
  generator_tier: string | undefined;
}

export type SkyblockItemRequirement =
  | SkyblockItemRequirementSkill
  | SkyblockItemRequirementTrophyFishing;

export interface SkyblockItemRequirementSkill {
  type: 'SKILL';
  skill:
    | 'COMBAT'
    | 'MINING'
    | 'FORAGING'
    | 'FARMING'
    | 'FISHING'
    | 'ENCHANTING'
    | 'ALCHEMY'
    | 'TAMING';
  level: number;
}

export interface SkyblockItemRequirementTrophyFishing {
  type: 'TROPHY_FISHING';
  reward: 'BRONZE' | 'SILVER' | 'GOLD' | 'DIAMOND';
}

export interface PetDataInterface {
  name: string;
  active: boolean;
  candyUsed: number;
  exp: number;
  level: number;
  heldItem: string;
  skin: string | null;
  tier: 'COMMON' | 'UNCOMMON' | 'RARE' | 'EPIC' | 'LEGENDARY' | 'MYTHIC';
  uuid: string;
}
