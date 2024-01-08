import { Card, Image, Text, Badge, Button, Group, Container } from '@mantine/core';


export function PlayerCard({ name, badge }: { name: string, badge: string }) {
  return (
    <Container>
      <div>

        <Image
          src={`https://mc-heads.net/avatar/${name}`}
          height={160}
          alt="Norway"
        />
        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={500}>{name}</Text>
        </Group>
        {
          badge
            ? <Group><Badge color="pink">{badge}</Badge></Group>
            : <></>
        }
      </div>
    </Container>
  );
}
