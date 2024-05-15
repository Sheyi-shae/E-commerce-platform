import db from "@/lib/db.js";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        // Extract data from request body
        const { title, expiryDate, couponSlug,discount } = await request.json();

        const isoExpiryDate = new Date(expiryDate).toISOString();

        
        const perDiscount = parseFloat(discount);
        // Create a new coupon in the database
        const newCoupon =await db.couponcode.create({
            data: {
                title,
                expiryDate:isoExpiryDate,
                couponSlug,
                discount:perDiscount
            }
        })

        // Return the newly created coupon as JSON response
      
        return NextResponse.json(newCoupon);
        
    } catch (error) {
        console.error("Error:", error);
        // Return an error response with status code 500
        return NextResponse.json({ status: 500 });
    }
}

export async function GET(request){
    try {
        const Coupon =await db.couponcode.findMany()
        return NextResponse.json(Coupon);
    } catch (error) {
        console.error("Error:", error);
        // Return an error response with status code 500
        return NextResponse.json({ status: 500 });
    }

}
