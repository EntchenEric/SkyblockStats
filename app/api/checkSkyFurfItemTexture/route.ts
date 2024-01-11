import { prisma } from '@/lib/db';
import { NextResponse } from 'next/server';

export const POST = async (request: Request) => {
  const body: { material: string; materials: Array<string> } = await request.json();
  const material = body.material;
  try {
    const item = await prisma.customSkyblockTextures.findUnique({
      where: {
        material: material.toLowerCase(),
      },
    });
    return NextResponse.json({ existing: item != undefined });
  } catch (error) {
    return NextResponse.json({ error: error });
  }
};
