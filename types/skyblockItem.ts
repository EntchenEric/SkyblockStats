export interface SkyblockItem{
    material: string;
    name: string;
    tier: "COMMON" | "UNCOMMON" | "RARE" | "EPIC" | "LEGENDARY" | "MYTHIC"  | "SPECIAL" | "VERY_SPECIAL";
    requirements: SkyblockItemRequirement | undefined;
    skin: string | undefined;
    generator: string | undefined;
    generator_tier: string | undefined;
}

export type SkyblockItemRequirement = SkyblockItemRequirementSkill | SkyblockItemRequirementTrophyFishing;

export interface SkyblockItemRequirementSkill{
    type: "SKILL";
    skill: "COMBAT" | "MINING" | "FORAGING" | "FARMING" | "FISHING" | "ENCHANTING" | "ALCHEMY" | "TAMING";
    level: number;
}

export interface SkyblockItemRequirementTrophyFishing{
    type: "TROPHY_FISHING";
    reward: "BRONZE" | "SILVER" | "GOLD" | "DIAMOND";
}