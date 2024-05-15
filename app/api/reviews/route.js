import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request){
    try {
        const {customer_name,review,ratings,productId}=await request.json()
        
        const newReview = await db.reviews.create({
            data:{
                customer_name,review,ratings,productId
            }
        })
        return NextResponse.json(newReview)
        
        
    } catch (error) {
        console.log(error)
        return NextResponse.json({ status: 500 });
        
    }

}