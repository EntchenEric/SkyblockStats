import { prisma } from '@/lib/db';
import { NextResponse } from 'next/server';

export const POST = async (request: Request) => {
  const body: { material: string; materials: Array<string> } = await request.json();
  const material = body.material;
  const materials = body.materials ? body.materials : [];
  if (!material && materials.length === 0) {
    return NextResponse.json({ error: 'Missing id' });
  }

  if (materials.length === 0) {
    materials.push(material);
  }

  const foundItemTextures = [];
  try {
    for (let i = 0; i < materials.length; i++) {
      const itemMaterial = materials[i];
      //console.log(itemMaterial);
      // make every material lowercase except the first letter and the letter after an underscore
      const materiaonCased = itemMaterial.toLowerCase().replace(/(^|_)(\w)/g, function (x) {
        return x.toUpperCase();
      });
      const item = await prisma.customSkyblockTextures.findUnique({
        where: {
          material: itemMaterial.toLowerCase(),
        },
      });
      if (item) {
        foundItemTextures.push(item);
      } else {
        const item2 = await prisma.vanillaTextures.findUnique({
          where: {
            material: itemMaterial.toLowerCase(),
          },
        });
        if (item2) {
          foundItemTextures.push(item2);
        } else {
          const item3 = await prisma.vanillaTextures.create({
            data: {
              material: itemMaterial.toLowerCase(),
              url: 'https://minecraft.wiki/images/Invicon_' + materiaonCased + '.png',
            },
          });
          foundItemTextures.push(item3);
          const missingItem = await prisma.missingItems.findUnique({
            where: {
              material: itemMaterial.toLowerCase(),
            },
          });
          if (!missingItem) {
            await prisma.missingItems.create({
              data: {
                material: itemMaterial.toLowerCase(),
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
  } catch (e) {
    return NextResponse.json({ error: e, message: 'ITEM_NOT_FOUND(INF)' });
  }
};
