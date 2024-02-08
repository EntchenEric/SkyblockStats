import { prisma } from '@/lib/db';
import { NextResponse } from 'next/server';

export const POST = async (request: Request) => {
  const body: { material: string; materials: Array<string>, activeTexturePacks: { furfSky: boolean } } = await request.json();
  const material = body.material;
  const materials = body.materials ? body.materials : [];
  const activeTexturePacks = body.activeTexturePacks;
  if (!material && materials.length === 0) {
    return NextResponse.json({ error: 'Missing id' });
  }

  if (materials.length === 0) {
    materials.push(material);
  }

  const foundItemTextures = [];
  // try {
  for (let i = 0; i < materials.length; i++) {
    const itemMaterial = materials[i];
    // make every material lowercase except the first letter and the letter after an underscore
    let materiaonCased = itemMaterial.toLowerCase().replace(/(^|_)(\w)/g, function (x) {
      return x.toUpperCase();
    });
    let item;
    if (activeTexturePacks.furfSky) {
      item = await prisma.customSkyblockTextures.findUnique({
        where: {
          material: itemMaterial.toLowerCase(),
        },
      });
    }
    if (item) {
      foundItemTextures.push(item);
    } else {

      

      const skyblockItemResponse = await fetch(
        'http://localhost:5004/items?id=' + materiaonCased + '&limit=1&select=material'
      );
      const skyblockItemData = await skyblockItemResponse.json();
      let newName = skyblockItemData.data[0].material.replaceAll(" ", "_");
      if(materiaonCased.toLowerCase().includes("log")){
        if(materiaonCased.toLowerCase() === "log"){
          newName = "Oak_Log"
        }
        else if(materiaonCased.toLowerCase() === "log:1"){
          newName = "Spruce_Log"
        }
        else if(materiaonCased.toLowerCase() === "log:2"){
          newName = "Birch_Log"
        }
        else if(materiaonCased.toLowerCase() === "log:3"){
          newName = "Jungle_Log"
        }
        else if(materiaonCased.toLowerCase() === "log_2"){
          newName = "Acacia_Log"
        }
        else if(materiaonCased.toLowerCase() === "log_2:1"){
          newName = "Dark_Oak_Log"
        }
      }
      const item2 = await prisma.vanillaTextures.findUnique({
        where: {
          material: newName.toLowerCase(),
        },
      });
      if (item2) {
        foundItemTextures.push(item2);
      } else {
        const missingItem = await prisma.missingItems.findUnique({
          where: {
            material: newName.toLowerCase(),
          },
        });
        if (!missingItem) {
          await prisma.missingItems.create({
            data: {
              material: newName.toLowerCase(),
              pack: 'Vanilla',
            },
          });
        }
      }
    }
  }
  if (materials.length === 1) {
    return NextResponse.json(foundItemTextures[0]);
  } else {
    return NextResponse.json(foundItemTextures);
  }
  // } catch (e) {
  //   console.log(e)
  //   return NextResponse.json({ error: e, message: 'ITEM_NOT_FOUND(INF)' });
  // }
};
