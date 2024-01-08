import { Container, SimpleGrid } from "@mantine/core"
import { PlayerCard } from "../PlayerCard/PlayerCard"

export function PlayerCardGrid({ players }: { players: Array<{ name: string, badge: string }> }) {
    const PlayerList = players.map((player) => {
        return (
            <PlayerCard name={player.name} badge={player.badge} key = {player.name}/>
        )
    })

    return (
        <Container>
            <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }}>
                {PlayerList}
            </SimpleGrid>
        </Container>
    )
}