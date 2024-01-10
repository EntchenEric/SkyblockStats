import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  const body: { material: string, materials: Array<string> } = await request.json();
  const material = body.material
  const materials = body.materials ? body.materials : []
  if (!material && materials.length === 0) {
    return NextResponse.json({ error: 'Missing id' });
  }

  if(materials.length === 0){
    materials.push(material)
  }

  const foundItemTextures = []

  for (let i = 0; i < materials.length; i++) {
    const itemMaterial = materials[i];
    const item = await prisma.vanillaTextures.findUnique({
      where: {
        material: itemMaterial.toLowerCase(),
      }
    })
    console.log("I found this in vanilla:", item, "for material:", itemMaterial.toLowerCase())
    if(item){
      foundItemTextures.push(item)
    } else {
      const item2 = await prisma.furfSkyRebornTextures.findUnique({
        where: {
          material: itemMaterial.toLowerCase(),
        }
      })
      if(item2){
        foundItemTextures.push(item2)
      }
      else {
        await prisma.missingItems.create({
          data: {
            material: itemMaterial.toLowerCase(),
            pack: "Furfsky",
          }
        })
      }
    }
  }
  console.log(foundItemTextures)
  if(materials.length === 1){
    return NextResponse.json(foundItemTextures[0]);
  } else {
    return NextResponse.json(foundItemTextures);
  }

}
