import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function PUT(request,{params:{id}}){
   
  
    try {
        const {  address,
          country,
          city,
          state,}=await request.json()
       
       
        
        const updatedUser = await db.user.update({
          where:{
            id
          },
            data:{
              
  address,
  country,
  city,
  state,
          } 
          
        })
         // Parse the price as a float
       console.log(updatedUser)
        return NextResponse.json(updatedUser)
        
        
    } catch (error) {
        console.log(error)
        return NextResponse.json({ status: 500 });
        
    }
  
  }
  export async function GET(request, { params: { id } }) {

    try {
      const getUser = await db.user.findUnique({
        where: {
          id,
        },
      });
  
      if (!getUser) {
        console.error("user not found with ID:", id);
        return NextResponse.json({ error: "user not found" }, { status: 404 });
      }
  
      return NextResponse.json(getUser);
    } catch (error) {
      console.error("Error:", error);
      return NextResponse.json({ status: 500 });
    }
  }