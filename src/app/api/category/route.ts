import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const filename = request.nextUrl.searchParams.get("filename");
  const filedata = request.nextUrl.searchParams.get("filedata");

  //   const filePath = path.join(process.cwd(), "data", filename);

  fs.writeFileSync(`src/data/${filename}`, `${filedata}`);
  return NextResponse.json({
    status: 200,
    revalidateTag: true,
    now: Date.now(),
  });
}
