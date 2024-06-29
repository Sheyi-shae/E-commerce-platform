import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params: { id } }) {

    try {
      const getOrder = await db.orders.findUnique({
        where: {
          id,
        },
      });
  
      if (!getOrder) {
        console.error("user not found with ID:", id);
        return NextResponse.json({ error: "user not found" }, { status: 404 });
      }
  
      return NextResponse.json(getOrder);
    } catch (error) {
      console.error("Error:", error);
      return NextResponse.json({ status: 500 });
    }
  }


  export async function PUT(request,{params:{id}}){
    
  
  try {
      const { status}=await request.json()
     
     
      const updatedStatus = await db.orders.update({
        where:{
          id
        },
          data:{
            status
          }
      })
      console.log(updatedStatus)
      return NextResponse.json(updatedStatus)
      
      
      
  } catch (error) {
      console.log(error)
      return NextResponse.json({ status: 500 });
      
  }

}
