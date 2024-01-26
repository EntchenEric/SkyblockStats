import { useEffect, useState } from "react";
import { decodeSkyblockData } from "../../api/decodeSkyblockData";
import { Group, HoverCard, SimpleGrid, Text, Paper, Divider, Container } from "@mantine/core";
import { SkyblockItem } from "@/types/skyblockItem";
import styled from '@emotion/styled';
import { ItemCard } from "../ItemCard/ItemCard";
import { minecraftColoredStringToText } from "../../helper/minecraftColoredStringToText";
import { getItemTexture } from "@/helper/getItemTexture";
import { getRGBtoHex } from "@/helper/getRGBtoHex";
import { getBookTypeFromEnchantedBookLore } from "@/helper/getBookTypeFromEnchantedBookLore";
import { changeNthCharacter } from "@/helper/changeNthCharacter";
import { getItemWorth } from "@/helper/getItemWorth";
import { makeid } from "@/helper/makeId";


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

                    getItemWorth(element)

                    newItem["lore"] = element.tag.value.display.value.Lore.value.value;

                    if (!newItem["lore"][newItem["lore"].length - 1].includes(newItem.tier)) {
                        const rarityIndex = raritys.indexOf(newItem.tier);
                        newItem.tier = raritys[rarityIndex + 1];
                    }

                    newItem['color'] = element.tag.value.ExtraAttributes.value.color
                        ? getRGBtoHex(element.tag.value.ExtraAttributes.value.color.value)
                        : undefined;

                    if (newItem) {
                        if(itemID != "ENCHANTED_BOOK")
                        {
                            newItem["texture"] = await getItemTexture(newItem.itemID, newItem.skin, newItem["color"]);
                        } else {
                            let bookType = replaceSpacesExceptLast(newItem.lore[0].slice(2));
                            const bookID = getBookTypeFromEnchantedBookLore(bookType)
                            newItem["texture"] = await getItemTexture(bookID, newItem.skin, newItem["color"]);

                        }
                    }


                    newInventory.push(newItem);
                }
            }
        }


        setInventory(newInventory)
    }



    function replaceSpacesExceptLast(inputString: string) {
        // Split the string into an array of words
        const words = inputString.split(' ');
    
        // Replace spaces with underscores for all words except the last one
        const result = words.slice(0, -1).join('_') + ' ' + words.slice(-1);
    
        return result;
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
                                <Text fw={700} size="xl" key={makeid(12)}>{item.name}</Text>
                                <Divider my={15} />
                                {
                                    item.lore.map((lore: string) => {
                                        return <Container p={0} key={makeid(12)}>
                                            {
                                                lore != "" ? <Container p={0} m={0}>{minecraftColoredStringToText(lore)}</Container>
                                                    : <Divider my={10} />

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