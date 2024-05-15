import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const {
            title,
            categoryId,
            description,
            
          tags,
          productImages,
            slug,
            qty:quantity,
            stock:rawstock,
            Origninalprice: rawPrice,
            Discountedprice:rawPrice2 // Renamed to avoid conflict with the 'price' variable below
        } = await request.json();

        
        // Parse the price as a float`
        const qty = parseInt(quantity);
        const stock = parseInt(rawstock);
        const Origninalprice = parseFloat(rawPrice);
        const Discountedprice = parseFloat(rawPrice2);
        

        const newProduct = await db.product.create({
            data: {
                title,
                categoryId,
                description,
                productImages,
                imageUrl:productImages[0],
                   slug,
                   stock,
                   qty,
                Origninalprice,
                Discountedprice,
                tags,
                
            }
        });

        // Return the newly created product as a JSON response
        console.log(newProduct);
        return NextResponse.json(newProduct);
        
    } catch (error) {
        console.error("Error:", error);
        // Return an error response with status code 500
        return NextResponse.json({ status: 500 });
    }
}

export async function GET(request){
    try {
        const Products =await db.product.findMany(
            // {
            //     orderBy:{
            //         createdAt:"desc"
            //     }
            // }
        )
        return NextResponse.json(Products);
    } catch (error) {
        console.error("Error:", error);
        // Return an error response with status code 500
        return NextResponse.json({ status: 500 });
    }

}

