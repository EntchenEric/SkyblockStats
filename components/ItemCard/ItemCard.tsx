import { Container, HoverCard, Paper, Text, Image } from '@mantine/core';
import styled from '@emotion/styled';

const StyledPaper = styled(Paper)`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const PixelImage = styled(Image)`
    image-rendering: -webkit-optimize-contrast;
    image-rendering: crisp-edges;
    image-rendering: pixelated;
    -ms-interpolation-mode: nearest-neighbor;  /* IE8+ */
  `;

const CountText = styled(Text)`
  position: absolute;
  bottom: 0;
  right: 0;
  font-weight: 700;
  font-size: 1.2rem;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
`;


const HoverCardCommon = styled(HoverCard)`
  background-color: #aaaaaa;
`;
const HoverCardUncommon = styled(HoverCard)`
  background-color: #00aa00;
`;
const HoverCardRare = styled(HoverCard)`
  background-color: #5555ff;
`;
const HoverCardEpic = styled(HoverCard)`
  background-color: #aa00aa;
`;
const HoverCardLegendary = styled(HoverCard)`
  background-color: #ffaa00;
`;
const HoverCardMythic = styled(HoverCard)`
  background-color: #ff55ff;
`;
const HoverCardDivine = styled(HoverCard)`
  background-color: #00aaaa;
`;
const HoverCardSpecial = styled(HoverCard)`
  background-color: #ff5555;
`;
const HoverCardVerySpecial = styled(HoverCard)`
  background-color: #aa0000;
`;



export function ItemCard({
    name,
    imageurl,
    description,
    rarity,
    count
}: {
    name: string;
    imageurl: string;
    description: any;
    rarity:
    | 'COMMON'
    | 'UNCOMMON'
    | 'RARE'
    | 'EPIC'
    | 'LEGENDARY'
    | 'MYTHIC'
    | 'DIVINE'
    | 'SPECIAL'
    | 'VERY_SPECIAL';
    count: number;
}) {
    const rarityValues = {
        'Common': '#aaaaaa',
        'Uncommon': '#00aa00',
        'Rare': '#5555ff',
        'Epic': '#aa00aa',
        'Legendary': '#ffaa00',
        'Mythic': '#ff55ff',
        'Divine': '#00aaaa',
        'Special': '#ff5555',
        'Very Special': '#aa0000',
    };

    const getCountDisplay = () => {
        return count > 1 ? `${count}` : '';
    };

    const renderHoverCard = (HoverCardComponent: React.ComponentType<any>) => (
        <HoverCardComponent width={320} shadow="md" withArrow openDelay={200} closeDelay={400}>
            <HoverCard.Target>
                <StyledPaper w={{ base: 50, lg: 100, sm: 75 }} h={{ base: 50, lg: 100, sm: 75 }} shadow="xs" radius="md" withBorder>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', position: 'relative' }}>
                        <PixelImage radius="md" h={80} w={80} fit="contain" src={imageurl} alt={name} />
                        <CountText size="sm">{getCountDisplay()}</CountText>
                    </div>
                </StyledPaper>
            </HoverCard.Target>
            <HoverCard.Dropdown>
                <Container p={0}>{description}</Container>
            </HoverCard.Dropdown>
        </HoverCardComponent>
    );


    switch (rarity.toUpperCase()) {
        case 'COMMON':
            return renderHoverCard(HoverCardCommon);

        case 'UNCOMMON':
            return renderHoverCard(HoverCardUncommon);

        case 'RARE':
            return renderHoverCard(HoverCardRare);

        case 'EPIC':
            return renderHoverCard(HoverCardEpic);

        case 'LEGENDARY':
            return renderHoverCard(HoverCardLegendary);

        case 'MYTHIC':
            return renderHoverCard(HoverCardMythic);

        case 'DIVINE':
            return renderHoverCard(HoverCardDivine);

        case 'SPECIAL':
            return renderHoverCard(HoverCardSpecial);

        case 'VERY_SPECIAL':
            return renderHoverCard(HoverCardVerySpecial);

        default:
            //console.log(`Item Rarity ${rarity} not found`);
            return renderHoverCard(HoverCardCommon);
    }
}
