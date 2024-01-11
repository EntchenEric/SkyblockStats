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
    rarityUpgraded,
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
    rarityUpgraded: boolean;
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

    switch (rarity.toUpperCase()) {
        case 'COMMON':
            return (
                <HoverCardCommon width={320} shadow="md" withArrow openDelay={200} closeDelay={400}>
                    <HoverCard.Target>
                        <StyledPaper
                            w={{ base: 50, lg: 100, sm: 75 }}
                            h={{ base: 50, lg: 100, sm: 75 }}
                            shadow="xs"
                            radius="md"
                            withBorder
                            display="flex"
                        >
                            <PixelImage radius="md" h={95} w={95} fit="contain" src={imageurl} alt={name} />
                        </StyledPaper>
                    </HoverCard.Target>
                    <HoverCard.Dropdown>
                        <Container>{description}</Container>
                    </HoverCard.Dropdown>
                </HoverCardCommon>
            );

        case 'UNCOMMON':
            return (
                <HoverCardUncommon width={320} shadow="md" withArrow openDelay={200} closeDelay={400}>
                    <HoverCard.Target>
                        <StyledPaper
                            w={{ base: 50, lg: 100, sm: 75 }}
                            h={{ base: 50, lg: 100, sm: 75 }}
                            shadow="xs"
                            radius="md"
                            withBorder
                            style={{ borderColor: 'grey' }}
                        >
                            <PixelImage radius="md" h={95} w={95} fit="contain" src={imageurl} alt={name} />
                        </StyledPaper>
                    </HoverCard.Target>
                    <HoverCard.Dropdown>
                        <Container>{description}</Container>
                    </HoverCard.Dropdown>
                </HoverCardUncommon>
            );

        case 'RARE':
            return (
                <HoverCardRare width={320} shadow="md" withArrow openDelay={200} closeDelay={400}>
                    <HoverCard.Target>
                        <StyledPaper
                            w={{ base: 50, lg: 100, sm: 75 }}
                            h={{ base: 50, lg: 100, sm: 75 }}
                            shadow="xs"
                            radius="md"
                            withBorder
                            style={{ borderColor: rarityUpgraded ? rarityValues['Uncommon'] : 'grey' }}
                        >
                            <PixelImage radius="md" h={95} w={95} fit="contain" src={imageurl} alt={name} />
                        </StyledPaper>
                    </HoverCard.Target>
                    <HoverCard.Dropdown>
                        <Container>{description}</Container>
                    </HoverCard.Dropdown>
                </HoverCardRare>
            );

        case 'EPIC':
            return (
                <HoverCardEpic width={320} shadow="md" withArrow openDelay={200} closeDelay={400}>
                    <HoverCard.Target>
                        <StyledPaper
                            w={{ base: 50, lg: 100, sm: 75 }}
                            h={{ base: 50, lg: 100, sm: 75 }}
                            shadow="xs"
                            radius="md"
                            withBorder
                            style={{ borderColor: rarityUpgraded ? rarityValues['Rare'] : 'grey' }}
                        >
                            <PixelImage radius="md" h={95} w={95} fit="contain" src={imageurl} alt={name} />
                        </StyledPaper>
                    </HoverCard.Target>
                    <HoverCard.Dropdown>
                        <Container>{description}</Container>
                    </HoverCard.Dropdown>
                </HoverCardEpic>
            );

        case 'LEGENDARY':
            return (
                <HoverCardLegendary width={320} shadow="md" withArrow openDelay={200} closeDelay={400}>
                    <HoverCard.Target>
                        <StyledPaper
                            w={{ base: 50, lg: 100, sm: 75 }}
                            h={{ base: 50, lg: 100, sm: 75 }}
                            shadow="xs"
                            radius="md"
                            withBorder
                            style={{ borderColor: rarityUpgraded ? rarityValues['Epic'] : 'grey' }}
                        >
                            <PixelImage radius="md" h={95} w={95} fit="contain" src={imageurl} alt={name} />
                        </StyledPaper>
                    </HoverCard.Target>
                    <HoverCard.Dropdown>
                        <Container>{description}</Container>
                    </HoverCard.Dropdown>
                </HoverCardLegendary>
            );

        case 'MYTHIC':
            return (
                <HoverCardMythic width={320} shadow="md" withArrow openDelay={200} closeDelay={400}>
                    <HoverCard.Target>
                        <StyledPaper
                            w={{ base: 50, lg: 100, sm: 75 }}
                            h={{ base: 50, lg: 100, sm: 75 }}
                            shadow="xs"
                            radius="md"
                            withBorder
                            style={{ borderColor: rarityUpgraded ? rarityValues['Legendary'] : 'grey' }}
                        >
                            <PixelImage radius="md" h={95} w={95} fit="contain" src={imageurl} alt={name} />
                        </StyledPaper>
                    </HoverCard.Target>
                    <HoverCard.Dropdown>
                        <Container>{description}</Container>
                    </HoverCard.Dropdown>
                </HoverCardMythic>
            );

        case 'DIVINE':
            return (
                <HoverCardDivine width={320} shadow="md" withArrow openDelay={200} closeDelay={400}>
                    <HoverCard.Target>
                        <StyledPaper
                            w={{ base: 50, lg: 100, sm: 75 }}
                            h={{ base: 50, lg: 100, sm: 75 }}
                            shadow="xs"
                            radius="md"
                            withBorder
                            style={{ borderColor: rarityUpgraded ? rarityValues['Mythic'] : 'grey' }}
                        >
                            <PixelImage radius="md" h={95} w={95} fit="contain" src={imageurl} alt={name} />
                        </StyledPaper>
                    </HoverCard.Target>
                    <HoverCard.Dropdown>
                        <Container>{description}</Container>
                    </HoverCard.Dropdown>
                </HoverCardDivine>
            );

        case 'SPECIAL':
            return (
                <HoverCardSpecial width={320} shadow="md" withArrow openDelay={200} closeDelay={400}>
                    <HoverCard.Target>
                        <StyledPaper
                            w={{ base: 50, lg: 100, sm: 75 }}
                            h={{ base: 50, lg: 100, sm: 75 }}
                            shadow="xs"
                            radius="md"
                            withBorder
                            style={{ borderColor: rarityUpgraded ? rarityValues['Divine'] : 'grey' }}
                        >
                            <PixelImage radius="md" h={95} w={95} fit="contain" src={imageurl} alt={name} />
                        </StyledPaper>
                    </HoverCard.Target>
                    <HoverCard.Dropdown>
                        <Container>{description}</Container>
                    </HoverCard.Dropdown>
                </HoverCardSpecial>
            );

        case 'VERY_SPECIAL':
            return (
                <HoverCardVerySpecial width={320} shadow="md" withArrow openDelay={200} closeDelay={400}>
                    <HoverCard.Target>
                        <StyledPaper
                            w={{ base: 50, lg: 100, sm: 75 }}
                            h={{ base: 50, lg: 100, sm: 75 }}
                            shadow="xs"
                            radius="md"
                            withBorder
                            style={{ borderColor: rarityUpgraded ? rarityValues['Special'] : 'grey' }}
                        >
                            <PixelImage radius="md" h={95} w={95} fit="contain" src={imageurl} alt={name} />
                        </StyledPaper>
                    </HoverCard.Target>
                    <HoverCard.Dropdown>
                        <Container>{description}</Container>
                    </HoverCard.Dropdown>
                </HoverCardVerySpecial>
            );

        default:
            //console.log(`Item Rarity ${rarity} not found`);
            return (
                <HoverCard width={320} shadow="md" withArrow openDelay={200} closeDelay={400}>
                    <HoverCard.Target>
                        {/* <StyledPaper w={{ base: 50, lg: 100, sm: 75 }} h={{ base: 50, lg: 100, sm: 75 }} shadow="xs" radius="md" withBorder> */}
                        <PixelImage radius="md" h={95} w={95} fit="contain" src={imageurl} alt={name} />
                        {/* </StyledPaper> */}
                    </HoverCard.Target>
                    <HoverCard.Dropdown>
                        <Container>{description}</Container>
                    </HoverCard.Dropdown>
                </HoverCard>
            );
    }
}
