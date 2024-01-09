import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: any, res: any) {
  const id = req.query.id;

  console.log("Now fetching item:", id)

  if (req.method === 'GET') {
    try {

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
        })
      }

    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch posts' });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
