import { writeFile } from 'fs/promises';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const formData = await request.formData();
  const file = formData.get('file') as File;

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const filePath = `./public/${file.name}`;

  await writeFile(filePath, buffer);

  return NextResponse.json({ message: 'success' });
}
