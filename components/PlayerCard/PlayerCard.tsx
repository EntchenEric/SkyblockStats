import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';


export function PlayerCard({ name, badge }: { name: string, badge: string }) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section component="a" href="https://mantine.dev/">
        <Image
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{name}</Text>
      </Group>
      {
        badge
          ? <Group><Badge color="pink">{badge}</Badge></Group>
          : <></>
      }

    </Card>
  );
}
