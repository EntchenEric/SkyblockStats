import { useEffect, useState } from "react";
import { decodeSkyblockData } from "../../api/decodeSkyblockData";
import { Group, HoverCard, SimpleGrid, Text, Paper, Divider, Container } from "@mantine/core";
import { SkyblockItem } from "@/types/skyblockItem";
import styled from '@emotion/styled';
import { ItemCard } from "../ItemCard/ItemCard";
import { minecraftColoredStringToText } from "../../helper/minecraftColoredStringToText";
import { getItemTexture } from "@/helper/getItemTexture";
import { getRGBtoHex } from "@/helper/getRGBtoHex";


export function PlayerInventory({ profileData, uuid }: { profileData: any, uuid: string }) {
    const [inventoryData, setInventoryData] = useState(
        decodeSkyblockData(profileData.members[uuid.replaceAll("-", "")].inventory.inv_contents.data)
    );
    const [inventory, setInventory] = useState([]);

    useEffect(() => {
        inventoryContents()
    }, []);

    const raritys = [
        "COMMON",
        "UNCOMMON",
        "RARE",
        "EPIC",
        "LEGENDARY",
        "MYTHIC",
        "DIVINE",
        "SPECIAL",
        "VERY SPECIAL"
    ]

    const inventoryContents = async () => {
        const inv = await inventoryData;
        let parsedInv = inv.parsed.value.i.value.value
        let firstNineSlots = parsedInv.slice(0, 9);

        parsedInv = parsedInv.slice(9);

        parsedInv = parsedInv.concat(firstNineSlots);

        const inventoryItems: Array<SkyblockItem> = [];

        const itemIDs = parsedInv.map((item: any) => {
            if (item.tag) {
                const itemID = item.tag.value.ExtraAttributes.value.id.value;
                inventoryItems.push(itemID);
                return itemID;
            }
        });

        const skyblockItems = await fetch("api/bulkGetSkyblockItemData",
            {
                method: "POST",
                body: JSON.stringify({ ids: itemIDs }),
            });
        let itemData;
        try {
            itemData = await skyblockItems.json();
        } catch (error) {
            console.error('Error parsing JSON response:', error);
            return;
        }
        // const itemData = await skyblockItems.json();


        const newInventory: any = [];

        for (let i = 0; i < parsedInv.length; i++) {
            const element = parsedInv[i];
            if (!element.tag) {
                newInventory.push({});
            } else {
                const itemID = element.tag.value.ExtraAttributes.value.id.value;
                const correspondingItem = itemData.find((item: any) => item.itemID === itemID);

                if (correspondingItem) {
                    const newItem = { ...correspondingItem }; // Create a new object for each item

                    newItem["lore"] = element.tag.value.display.value.Lore.value.value;

                    if (!newItem["lore"][newItem["lore"].length - 1].includes(newItem.tier)) {
                        const rarityIndex = raritys.indexOf(newItem.tier);
                        newItem.tier = raritys[rarityIndex + 1];
                    }

                    newItem['color'] = element.tag.value.ExtraAttributes.value.color
                        ? getRGBtoHex(element.tag.value.ExtraAttributes.value.color.value)
                        : undefined;

                    if (newItem) newItem["texture"] = await getItemTexture(newItem.itemID, newItem.skin, newItem["color"]);

                    newInventory.push(newItem);
                }
            }
        }


        console.log(newInventory)
        setInventory(newInventory)
    }

    return (
        <>
            <SimpleGrid cols={9}>
                {
                    inventory.map((item: any) => {
                        let itemName = ""
                        let itemLore: any
                        if (item && item.itemID != undefined) {

                            itemName = item.name
                            itemLore = <div>
                                {
                                    item.lore.map((lore: string) => {
                                        return <Container>
                                            {
                                                lore != "" ? <Container p={0} m={0}>{minecraftColoredStringToText(lore)}</Container>
                                                    : <Divider />

                                            }
                                        </Container>
                                    })
                                }
                            </div>
                        }
                        if (itemName === "") return (<Paper w={{ base: 50, lg: 100, sm: 75 }} h={{ base: 50, lg: 100, sm: 75 }} shadow="xs" radius="md" withBorder></Paper>)
                        return (
                            <ItemCard
                                name={itemName}
                                description={itemLore}
                                imageurl={item.texture}
                                rarity={item.tier}
                                rarityUpgraded={false}
                            />
                        )
                    })
                }
            </SimpleGrid>
        </>
    )
}