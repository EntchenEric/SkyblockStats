import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";


export const POST = async (request: Request) => {
  const body: { ids: Array<string> } = await request.json();
  const ids = body.ids

  const foundItems = []

  for (let i = 0; i < ids.length; i++) {
    const id = ids[i];
    if (!id) {
      continue
    }

    const item = await prisma.skyblockItem.findUnique({
      where: {
        itemID: id,
      },
    });

    if (item) {
      foundItems.push(item);
    } else {
      const allItems = await fetch(`https://api.hypixel.net/v2/resources/skyblock/items`);
      const data = await allItems.json();
      const items = data.items;
      let item = undefined
      for (let i = 0; i < items.length; i++) {
        const it = items[i];
        if (it.id === id) {
          item = it
        }
      }
      if (item) {

        foundItems.push(await prisma.skyblockItem.create({
          data: {
            itemID: item.id,
            name: item.name,
            material: item.material,
            tier: item.tier,
            skin: item.skin ? item.skin : null,
            npc_sell_price: item.npc_sell_price,
            wiki_link: `https://wiki.hypixel.net/${item.id}`,
          },
        }));
      } else {
        try{
          await prisma.missingItems.create({
            data: {
              material: id,
              pack: "SkyblockItemAPI"
            },
          });
        } catch (e){
          console.log("the missing item ", id , "is still Missing. Please add it to the skyblockItem Table.")
        }
      }
    }
  }

  return Response.json(foundItems)

}
