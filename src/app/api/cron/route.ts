import { NextResponse } from "next/server";

export async function GET() {
  try {
    const result = await fetch("https://emojihub.yurace.pro/api/random");
    const data = await result.json();

    if (data.success) {
      const name = data.name;
      const unicode = data.unicode;
      console.log(`${name}: ${unicode}`);
      return NextResponse.json(
        { message: `${name}: ${unicode}` },
        { status: 200 }
      );
    } else {
      console.error("Error fetching random emoji:", data);
      return NextResponse.json(
        { error: "Failed to fetch random emoji" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error fetching random emoji:", error);
    return NextResponse.json(
      { error: "Failed to fetch random emoji" },
      { status: 500 }
    );
  }
}
