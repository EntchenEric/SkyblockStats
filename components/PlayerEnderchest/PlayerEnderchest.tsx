import { useEffect, useState } from "react";
import { decodeSkyblockData } from "../../api/decodeSkyblockData";
import { Group, HoverCard, SimpleGrid, Text, Paper, Divider, Container, Button, Modal } from "@mantine/core";
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
import { useDisclosure } from "@mantine/hooks";
import { formatNumberAbbreviated } from "@/helper/formatNumberAbbreviated"


export function PlayerEnderchest({ profileData, uuid }: { profileData: any, uuid: string }) {
    const [inventoryData, setInventoryData] = useState(
        decodeSkyblockData(profileData.members[uuid.replaceAll("-", "")].inventory.ender_chest_contents.data)
    );
    const [inventory, setInventory] = useState([]);

    const [selectedItemData, setSelectedItemData] = useState<any>(undefined);

    const [itemInformationOpened, { open: openItemInformation, close: closeItemInformation }] = useDisclosure(false);
    const [itemPriceCalculationOpened, { open: openItemPriceCalculation, close: closeItemPriceCalculation }] = useDisclosure(false);

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

                    newItem["count"] = element.Count.value;

                    newItem["lore"] = element.tag.value.display.value.Lore.value.value;

                    if (!newItem["lore"][newItem["lore"].length - 1].includes(newItem.tier)) {
                        const rarityIndex = raritys.indexOf(newItem.tier);
                        newItem.tier = raritys[rarityIndex + 1];
                    }

                    newItem['color'] = element.tag.value.ExtraAttributes.value.color
                        ? getRGBtoHex(element.tag.value.ExtraAttributes.value.color.value)
                        : undefined;

                    if (newItem) {
                        if (itemID != "ENCHANTED_BOOK") {
                            newItem["texture"] = await getItemTexture(newItem.itemID, newItem.skin, newItem["color"], {furfSky: false});
                        } else {
                            let bookType = replaceSpacesExceptLast(newItem.lore[0].slice(2));
                            const bookID = getBookTypeFromEnchantedBookLore(bookType)
                            newItem["texture"] = await getItemTexture(bookID, newItem.skin, newItem["color"], {furfSky: false});

                        }
                    }
                    newItem["nbtData"] = element


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
            <Modal opened={itemPriceCalculationOpened} onClose={closeItemPriceCalculation} title="Item worth calculation">
                <Divider my={10} label={"Instabuy: " + formatNumberAbbreviated(selectedItemData?.worth?.instaBuyWorth)}/>
                {
                    selectedItemData?.worth?.instaBuyCalculation?.map((calculation: any) => {
                        return <Container p={0} m={0} key={makeid(12)}>{calculation}</Container>
                    })
                }
                <Divider my={10} mt={20} label={"Buyorder: " + formatNumberAbbreviated(selectedItemData?.worth?.buyOrderWorth)}/>
                {
                    selectedItemData?.worth?.buyOrderCalculation?.map((calculation: any) => {
                        return <Container p={0} m={0} key={makeid(12)}>{calculation}</Container>
                    })
                }
            </Modal>
            <Modal opened={itemInformationOpened} onClose={closeItemInformation} title={selectedItemData?.name}>
                {selectedItemData?.lore}
                <Divider my={10} />
                <HoverCard width={280} shadow="md">
                    <HoverCard.Target>
                        <Text>Itemworth: {formatNumberAbbreviated(selectedItemData?.worth?.buyOrderWorth)}</Text>
                    </HoverCard.Target>
                    <HoverCard.Dropdown>
                        <Text>Instabuy: {formatNumberAbbreviated(selectedItemData?.worth?.instaBuyWorth)}</Text>
                        <Text>Buyorder: {formatNumberAbbreviated(selectedItemData?.worth?.buyOrderWorth)}</Text>
                        <Button onClick={() => {closeItemInformation(); openItemPriceCalculation()}}>View Calculation</Button>
                    </HoverCard.Dropdown>
                </HoverCard>
            </Modal>
            <SimpleGrid cols={9}>
                {
                    inventory.map((item: any) => {
                        let itemName = ""
                        let itemLore: any
                        if (item && item.itemID != undefined) {

                            itemName = item.name
                            itemLore = <div>
                                <Text fw={700} size="xl" key={makeid(12)}>{item.name}</Text>
                                <Button onClick={async () => {
                                    const worth = await getItemWorth(item.nbtData)
                                    setSelectedItemData({
                                        lore:
                                            item.lore.map((lore: string) => {
                                                return <Container p={0} key={makeid(12)}>
                                                    {
                                                        lore != "" ? <Container p={0} m={0}>{minecraftColoredStringToText(lore)}</Container>
                                                            : <Divider my={10} />

                                                    }
                                                </Container>
                                            }),
                                        name: item.name,
                                        worth: worth
                                    })

                                    openItemInformation()
                                }}>More Info</Button>
                            </div>
                        }
                        if (itemName === "") return (<Paper w={{ base: 50, lg: 100, sm: 75 }} h={{ base: 50, lg: 100, sm: 75 }} shadow="xs" radius="md" withBorder></Paper>)
                        return (
                            <ItemCard
                                name={itemName}
                                description={itemLore}
                                imageurl={item.texture}
                                rarity={item.tier}
                                count={item.count}
                            />
                        )
                    })
                }
            </SimpleGrid>
        </>
    )
}