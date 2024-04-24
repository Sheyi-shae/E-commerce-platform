import db from "@/lib/db"
import { NextResponse } from "next/server"

export async function POST(request){
    try {
        const {title,imageURL,slug,description}=await request.json()
        // Find the category based on the selectCategory (categoryId)
        const category = await db.category.findUnique({
            where: {
                slug
            }
        });
        if (category) {
            // Handle case where category is not found
            return NextResponse.json({ error: "Category exist" }, { status: 404 });
        }
        const newCategory = await db.category.create({
            data:{
                title,imageURL,slug,description
            }
        })
        return NextResponse.json(newCategory)
        
        
    } catch (error) {
        console.log(error)
        return NextResponse.json({ status: 500 });
        
    }

}


export async function GET(request){
    try {
        const Categories =await db.category.findMany(
            {
                orderBy:{
                    createdAt:"desc"
                }
            }
        )
        return NextResponse.json(Categories);
    } catch (error) {
        console.error("Error:", error);
        // Return an error response with status code 500
        return NextResponse.json({ status: 500 });
    }

}
