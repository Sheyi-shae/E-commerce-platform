import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params: { slug } }) {
 
  try {
    const couponCode = await db.couponcode.findUnique({
      where: {
        couponSlug: slug,
      },
    });

    if (!couponCode) {
      console.error(`${slug} is invalid`);
      return NextResponse.json({ error: "Coupon code is invalid" }, { status: 404 });
    }

    return NextResponse.json(couponCode);
  } catch (error) {
    console.error("Error fetching coupon code:", error.message); // Log the specific error message

    // Check the type of error and respond accordingly
    if (error instanceof db.PrismaClientKnownRequestError) {
      return NextResponse.json({ error: "Database request error" }, { status: 500 });
    }

    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
