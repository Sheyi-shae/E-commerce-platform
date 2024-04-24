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