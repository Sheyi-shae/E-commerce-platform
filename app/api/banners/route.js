import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request){
    try {
        const {title,imageURL,isActive}=await request.json()
  
       
        const newBanner = await db.banners.create({
            data:{
                title,imageURL,isActive
            }
             })
             
        return NextResponse.json(newBanner)
        
        
    } catch (error) {
        console.log(error)
        return NextResponse.json({ status: 500 });
        
    }

}

export async function GET(request){
    try {
        const Banners =await db.banners.findMany(
            {
                orderBy:{
                    createdAt:"desc"
                }
            }
        )
        return NextResponse.json(Banners);
    } catch (error) {
        console.error("Error:", error);
        // Return an error response with status code 500
        return NextResponse.json({ status: 500 });
    }

}