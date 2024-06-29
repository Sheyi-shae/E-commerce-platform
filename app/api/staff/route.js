import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request){
    try {
 
        const {FirstName,LastName,StaffDate, StaffDepartment, StaffRole,
            imageURL,password,staffId}=await request.json()
        
        
        const newStaff= await db.staff.create({
            data:{
                FirstName,LastName,StaffDate, StaffDepartment, StaffRole,
            imageURL,password,staffId
            }
        })
        return NextResponse.json(newStaff)
        
        
    } catch (error) {
        console.log(error)
        return NextResponse.json({ status: 500 });
        
    }
}

export async function GET(request){
    try {
        const staff =await db.staff.findMany(
            {
                orderBy:{
                    createdAt:"desc"
                },
                
            },
            
        )
        return NextResponse.json(staff);
    } catch (error) {
        console.error("Error:", error);
        // Return an error response with status code 500
        return NextResponse.json({ status: 500 });
    }
}