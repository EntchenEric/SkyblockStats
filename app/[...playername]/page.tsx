"use client"

import { Button, Container, SimpleGrid } from "@mantine/core"
import { useState, useEffect, SetStateAction } from "react";
import { getSkyblockProfileData } from "../../api/getSkyblockProfileData";
import { getUUIDFromName } from "../../api/getUUIDFromName";
import { PlayerInventory } from "../../components/PlayerInventory/PlayerInventory";


export default function player({ params }: any) {
    const [uuid, setUUID] = useState();
    const [profileData, setProfileData] = useState();
    const [selectedProfile, setSelectedProfile] = useState();
    const fetchData = async () => {
        const uuid = await getUUIDFromName(params.playername);
        setUUID(uuid);
        const profileData = (await getSkyblockProfileData(uuid)).profiles;
        setProfileData(profileData);
        profileData.forEach((profile: any) => {
            if (profile && profile.selected) {
                setSelectedProfile(profile);
            }
        });
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
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

            <Container size={"lg"}>
                <PlayerInventory profileData={selectedProfile} />
            </Container>
        </>
    )
}