import { NextResponse, NextRequest } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";

export async function POST(request: NextRequest) {
  const url = new URL(request.url);
  const searchParams = new URLSearchParams(url.searchParams);

  const id = searchParams.get("id");
  //   const title = searchParams.get("title");

  const data = await request.formData();
  const file: File | null = data.get("image") as unknown as File;

  if (!file) {
    return NextResponse.json({ success: false });
  }

  const fileExtinction = file.type?.split("/")?.[1];

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const pathname = path.join(
    process.cwd(),
    `/public/images/${id}.${fileExtinction}`
  );

  await writeFile(pathname, buffer);
  return NextResponse.json({ success: true, imagePath: pathname });
}
