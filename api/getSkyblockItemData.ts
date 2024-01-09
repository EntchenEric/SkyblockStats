import { prisma } from "@/lib/db";

export async function getSkyblockItemData(id: string) {
    const item = await prisma.skyblockItem.findUnique({
        where: {
            itemID: id,
        },
    });

    if (item) {
        return item;
    } else {
        const allItems = await fetch(`https://api.hypixel.net/v2/resources/skyblock/items`);
        const data = await allItems.json();
        const items = data.items;
        const item = items.find((item: any) => item.id === id);

        if (!item) return "ITEM NOT FOUND";

        return await prisma.skyblockItem.create({
            data: {
                itemID: item.id,
                name: item.name,
                category: item.category,
                material: item.material,
                tier: item.tier,
                skin: item.skin ? item.skin : null,
                npc_sell_price: item.npc_sell_price,
                wiki_link: `https://wiki.hypixel.net/${item.id}`,
            },
        });
    }
}