import db from "@/lib/db";
import { NextResponse } from "next/server";


export async function POST(request) {
    try {
        const {
            address,
            city,
            email,
            firstName,
            lastName,
            phone,
            product,
           amountPaid:paid,
            state,
            totalPrice:rawPrice,
            userId
            
        } = await request.json();

        
        // Parse the price as a float`
        const amountPaid=parseFloat(paid)
        const totalPrice = parseFloat(rawPrice);
        const newOrder = await db.orders.create({
            data: {
                address,
            city,
            email,
            firstName,
            lastName,
            phone,
            product,
           amountPaid,
            state,
            totalPrice,
            userId,
          
            }
        });

        // Return the newly created product as a JSON response
        console.log(newOrder);
        return NextResponse.json(newOrder);
        
    } catch (error) {
        console.error("Error:", error);
        // Return an error response with status code 500
        return NextResponse.json({ status: 500 });
    }
}
export async function GET(request){
    try {
        const orders =await db.orders.findMany(
            {
                orderBy:{
                    createdAt:"desc"
                }
            }
        )
        return NextResponse.json(orders);
    } catch (error) {
        console.error("Error:", error);
        // Return an error response with status code 500
        return NextResponse.json({ status: 500 });
    }

}

       
        





