import db from "@/lib/db";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs'

export async function POST(request){
    try {
        const { firstName, lastName, email, password,phone } = await request.json();
     
        const isAdmin = false;
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
      
        const existingUser = await db.user.findUnique({
            where: {
                email
            }
        });
        if (existingUser) {
            
            return NextResponse.json({ message: "Email already exist" }, { status: 400 });
        }
        const newUser = await db.user.create({
            data: {
                firstName,
                lastName,
                email,
                isAdmin,
                password: hashedPassword,
                phone
            }
        });

            
        return NextResponse.json(newUser);
        
        
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Internal Server Error", status: 500 });
    }
}


export async function GET(request){
    try {
        const user=await db.user.findMany(
            {
                orderBy:{
                    createdAt:"desc"
                }
            }
        )
        return NextResponse.json(user);
    } catch (error) {
        console.error("Error:", error);
        // Return an error response with status code 500
        return NextResponse.json({ status: 500 });
    }

}