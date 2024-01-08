"use client"

import { Button, Container, SimpleGrid } from "@mantine/core"

export default function player({params}: any){
    return (
        <Container size={"lg"}>
            <SimpleGrid cols={{ base: 3, sm: 6, lg: 10 }} mt={20}>
                <Button p={0}>
                    Inventory
                </Button>
                <Button p={0}>
                    Enderchest
                </Button>
                <Button p={0}>
                    Backpacks
                </Button>
                <Button p={0}>
                    Wardrobe
                </Button>
                <Button p={0}>
                    Pets
                </Button>
                <Button p={0}>
                    Accessories
                </Button>
                <Button p={0}>
                    Progression
                </Button>
                <Button p={0}>
                    Collection
                </Button>
                <Button p={0}>
                    Minions
                </Button>
                <Button p={0}>
                    Misc
                </Button>
            </SimpleGrid>
        </Container>
    )
}