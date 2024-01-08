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
            <SimpleGrid cols={{ base: 3, sm: 5, lg: 5 }}>
                {PlayerList}
            </SimpleGrid>
        </Container>
    )
}