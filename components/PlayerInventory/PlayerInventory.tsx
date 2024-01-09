import { useEffect, useState } from "react";
import { decodeSkyblockData } from "../../api/decodeSkyblockData";
import { Group, HoverCard, SimpleGrid, Text, Paper  } from "@mantine/core";
import { SkyblockItem } from "@/types/skyblockItem";
import { getSkyblockItemData } from "@/api/getSkyblockItemData";
import styled from '@emotion/styled';


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

        const inventoryItems: Array<SkyblockItem> = [];

        for (let i = 0; i < parsedInv.length; i++) {
            const item = parsedInv[i];
            if(item.tag){
                const itemID = item.tag.value.ExtraAttributes.value.id.value;
                const skyblockItem = await getSkyblockItemData(itemID)
                console.log(skyblockItem)
            }
        }

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
                        }
                        if (itemName === "") return (<div></div>)
                        return (
                            <HoverCard width={320} shadow="md" withArrow openDelay={200} closeDelay={400} key = {item.tag.value.ExtraAttributes.value.uuid}>
                                <HoverCard.Target>
                                    <Paper w={{base: 50, lg: 100, sm: 75}} h={{base: 50, lg: 100, sm: 75}} shadow="xs" radius="md" withBorder>
                                        {itemName}
                                    </Paper>
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