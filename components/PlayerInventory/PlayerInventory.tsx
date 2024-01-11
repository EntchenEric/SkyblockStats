import { useEffect, useState } from "react";
import { decodeSkyblockData } from "../../api/decodeSkyblockData";
import { Group, HoverCard, SimpleGrid, Text, Paper, Divider, Container } from "@mantine/core";
import { SkyblockItem } from "@/types/skyblockItem";
import styled from '@emotion/styled';
import { ItemCard } from "../ItemCard/ItemCard";
import { getSkullFromSkin } from "@/helper/getSkullFromSkin";
import { getUUIDFromBase64String } from "@/helper/getUUIDFromBase64String";
import { minecraftColoredStringToText } from "./minecraftColoredStringToText";
import { getItemTexture } from "@/helper/getItemTexture";


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
        const response = await fetch("http://localhost:5000/colorizeItem", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ texture: "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IgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgIHhtbG5zOkdJTVA9Imh0dHA6Ly93d3cuZ2ltcC5vcmcveG1wLyIKICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIgogICAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIgogICB4bXBNTTpEb2N1bWVudElEPSJnaW1wOmRvY2lkOmdpbXA6Mzg2YTA0MmEtOWYxOS00MWEyLWFmYTQtNTI4MDA3ZmYyZjY3IgogICB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmQ5MjJiMTJiLWNiZDMtNDA2Yi05NWEyLWIyYzRjNmIwZDFhNCIKICAgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmYxYWU3YzdhLWM4NTMtNDJhOC05ZWRiLTM5NDdiOTNhMTIwYiIKICAgZGM6Rm9ybWF0PSJpbWFnZS9wbmciCiAgIEdJTVA6QVBJPSIyLjAiCiAgIEdJTVA6UGxhdGZvcm09Ik1hYyBPUyIKICAgR0lNUDpUaW1lU3RhbXA9IjE2NzY1MDIzMTQ1NDE4NzYiCiAgIEdJTVA6VmVyc2lvbj0iMi4xMC4zMCIKICAgdGlmZjpPcmllbnRhdGlvbj0iMSIKICAgeG1wOkNyZWF0b3JUb29sPSJHSU1QIDIuMTAiPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJzYXZlZCIKICAgICAgc3RFdnQ6Y2hhbmdlZD0iLyIKICAgICAgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoyZTY3Y2NkMC01MTlmLTQ4ZDQtODljOC1kNzkwMjA3MGIwNzQiCiAgICAgIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkdpbXAgMi4xMCAoTWFjIE9TKSIKICAgICAgc3RFdnQ6d2hlbj0iMjAyMy0wMi0xNVQxNzowNToxNC0wNjowMCIvPgogICAgPC9yZGY6U2VxPgogICA8L3htcE1NOkhpc3Rvcnk+CiAgPC9yZGY6RGVzY3JpcHRpb24+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9InciPz7R9Nw0AAAABmJLR0QAOQAyAChHKPiMAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5wIPFwUOZpCuGwAAAHxJREFUOMvVkTEOgCAMRavhJsYjcLs/chbjyjm6FhwMZ6mTJkITNU68qbyQ3/Ah6p7BkgDUe39zzEwhhOExEYDWZBGNMSoAre+Ptag3n8zTZPrxbwdNADPTltJ1Pue9FDPAWXJZV7JK7AAAmkXUIotoFmm+0r15f2c9fOUA/lRarHTQ+GMAAAAASUVORK5CYII=", "color": "#000000" }),
        });

        console.log(await response.json())

        console.log(skyblockItems)
        const itemData = await skyblockItems.json();


        const newInventory: any = [];

        for (let i = 0; i < parsedInv.length; i++) {
            const element = parsedInv[i];
            if (!element.tag) newInventory.push({})
            else {
                const itemID = element.tag.value.ExtraAttributes.value.id.value;
                const correspondingItem = itemData.find((item: { itemID: any; }) => item.itemID === itemID);
                if (correspondingItem) {
                    correspondingItem["lore"] = element.tag.value.display.value.Lore.value.value;
                    if (!correspondingItem["lore"][correspondingItem["lore"].length - 1].includes(correspondingItem.tier)) {
                        const rarityIndex = raritys.indexOf(correspondingItem.tier);
                        correspondingItem.tier = raritys[rarityIndex + 1];
                    }
                    if (correspondingItem) correspondingItem["texture"] = await getItemTexture(correspondingItem.itemID, correspondingItem.skin)
                    newInventory.push(correspondingItem);
                }
            }
        }

        setInventory(newInventory)
    }

    const getItemTexture123 = async (item: any) => {
        if (item.skin) {
            if (item.skin != "idk") {
                return getSkullFromSkin(getUUIDFromBase64String(item.skin))
            } else {
                return "https://static.wikia.nocookie.net/minecraft_gamepedia/images/4/4a/Barrier_JE2_BE2.png/revision/latest/scale-to-width-down/150?cb=20200329164158"
            }
        } else {
            const response = await fetch("api/getItemTexture", {
                method: "POST",
                body: JSON.stringify({ material: item.itemID }),
            });
            const data = await response.json();
            return data.url;
        }
    }

    return (
        <>
            <SimpleGrid cols={9}>
                {
                    inventory.map((item: any) => {
                        let itemName = ""
                        let itemLore: any
                        if (item && item.itemID != undefined) {

                            console.log(item.lore)
                            itemName = item.name
                            itemLore = <Group>
                                {
                                    item.lore.map((lore: string) => {
                                        return <Container display="flex">
                                            {
                                                lore != "" ? <Text>{minecraftColoredStringToText(lore)}</Text>
                                                    : <Divider />

                                            }
                                        </Container>
                                    })
                                }
                            </Group>
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