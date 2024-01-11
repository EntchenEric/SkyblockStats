import { prisma } from '@/lib/db';
import { NextResponse } from 'next/server';

export const POST = async (request: Request) => {
  const body: { id: string } = await request.json();
  const id = body.id;
  if (!id) {
    return NextResponse.json({ error: 'Missing id' });
  }

  //console.log("Now fetching item:", id)

  try {
    const item = await prisma.skyblockItem.findUnique({
      where: {
        itemID: id,
      },
    });

    if (item) {
      return NextResponse.json(item);
    } else {
      const allItems = await fetch(`https://api.hypixel.net/v2/resources/skyblock/items`);
      const data = await allItems.json();
      const items = data.items;
      const item = items.find((item: any) => item.id === id);

      return NextResponse.json(
        await prisma.skyblockItem.create({
          data: {
            itemID: item.id,
            name: item.name,
            material: item.material,
            tier: item.tier,
            skin: item.skin ? item.skin : null,
            npc_sell_price: item.npc_sell_price,
            wiki_link: `https://wiki.hypixel.net/${item.id}`,
          },
        })
      );
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to fetch posts' });
  }
};
