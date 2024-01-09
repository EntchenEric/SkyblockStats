import { Group, HoverCard, Text } from '@mantine/core';
import Image from 'next/image';
import styled from '@emotion/styled';

const HoverCardCommon = styled(HoverCard)`
  bg-color: #aaaaaa;
`;
const HoverCardUncommon = styled(HoverCard)`
  bg-color: #00aa00;
`;
const HoverCardRare = styled(HoverCard)`
  bg-color: #5555ff;
`;
const HoverCardEpic = styled(HoverCard)`
  bg-color: #aa00aa;
`;
const HoverCardLegendary = styled(HoverCard)`
  bg-color: #ffaa00;
`;
const HoverCardMythic = styled(HoverCard)`
  bg-color: #aa00aa;
`;
const HoverCardDivine = styled(HoverCard)`
  bg-color: #00aaaa;
`;
const HoverCardSpecial = styled(HoverCard)`
  bg-color: #ff5555;
`;
const HoverCardVerySpecial = styled(HoverCard)`
  bg-color: #aa0000;
`;

export function ItemCard(
  name: string,
  imageurl: string,
  description: any,
  rarity:
    | 'COMMON'
    | 'UNCOMMON'
    | 'RARE'
    | 'EPIC'
    | 'LEGENDARY'
    | 'MYTHIC'
    | 'DIVINE'
    | 'SPECIAL'
    | 'VERY_SPECIAL'
) {
  return (
    <HoverCard width={320} shadow="md" withArrow openDelay={200} closeDelay={400}>
      <HoverCard.Target>
        <Image src={imageurl} alt={name} />
      </HoverCard.Target>
      <HoverCard.Dropdown>
        <Group>{description}</Group>
      </HoverCard.Dropdown>
    </HoverCard>
  );
}
