import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  if (
    req.headers.get("Authorization") !== `Bearer ${process.env.CRON_SECRET}`
  ) {
    // @ts-ignore
    return res.status(401).end("Unauthorized");
  } else {
    console.log("Cron job is running");
    console.log(Date.now());
    return NextResponse.json({ ok: true });
  }
}
