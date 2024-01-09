import { useEffect, useState } from "react";
import { decodeSkyblockData } from "../../api/decodeSkyblockData";
import { Group, HoverCard, SimpleGrid, Text } from "@mantine/core";
import styled from '@emotion/styled';

const InventorySlot = styled(Group)`
    width: 7rem;
    height: 7rem;
    border: 1px solid black;
    border-radius: 10px;
    background-color: #e0e0e0;
`;

export function PlayerInventory({ profileData, uuid }: { profileData: any, uuid: string }) {
    const [inventoryData, setInventoryData] = useState(
        decodeSkyblockData(profileData.members[uuid.replaceAll("-", "")].inventory.inv_contents.data)
    );
    const [inventory, setInventory] = useState([]);

    useEffect(() => {
        inventoryContents()
    }, []);

    const inventoryContents = async () => {
        const inv = await inventoryData;
        let parsedInv = inv.parsed.value.i.value.value
        let firstNineSlots = parsedInv.slice(0, 9);

        parsedInv = parsedInv.slice(9);

        parsedInv = parsedInv.concat(firstNineSlots);
        setInventory(parsedInv)
    }


    return (
        <>
            <SimpleGrid cols={9}>
                {
                    inventory.map((item: any) => {
                        let itemName = ""
                        let itemLore = []
                        if (item.id != undefined) {
                            itemName = item.tag.value.display.value.Name.value
                            itemLore = item.tag.value.display.value.Lore.value.value
                            console.log(itemLore)
                        }
                        if (itemName === "") return (<div></div>)
                        return (
                            <HoverCard width={320} shadow="md" withArrow openDelay={200} closeDelay={400}>
                                <HoverCard.Target>
                                    <InventorySlot>
                                        {itemName}
                                    </InventorySlot>
                                </HoverCard.Target>
                                <HoverCard.Dropdown>
                                    <Group>
                                        {
                                            itemLore.map((lore: string) => {
                                                return (
                                                    <Text>
                                                        {lore}
                                                    </Text>
                                                )
                                            })
                                        }
                                    </Group>
                                </HoverCard.Dropdown>
                            </HoverCard>
                        )
                    })
                }
            </SimpleGrid>
        </>
    )
}