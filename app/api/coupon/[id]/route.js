import db from "@/lib/db";
import { NextResponse } from "next/server";


//update request
export async function PUT(request,{params:{id}}){
    console.log(id)
  
  try {
      const { title,
        expiryDate,
        couponSlug}=await request.json()
     
     
        const isoExpiryDate = new Date(expiryDate).toISOString();
      
      const updatedCoupon = await db.couponcode.update({
        where:{
          id
        },
          data:{
            title,
            expiryDate:isoExpiryDate,
            couponSlug
          }
      })
     
      return NextResponse.json(updatedCoupon)
      
      
  } catch (error) {
      console.log(error)
      return NextResponse.json({ status: 500 });
      
  }

}


















export async function DELETE(request,{params:{id}}) {
  

    try {
      const coupon= await db.couponcode.findUnique({
          where: {
            id,
          },
        });
    
        if (!coupon) {
          
        console.log("couponnot found with ID:", id);
        return NextResponse.json({ error: "coupon not found" }, { status: 404 });
       }
  
      // 3. Attempt to delete the category:
      const deletedCoupon = await db.couponcode.delete({
        where: {
          id,
        },
      });
  
      // 4. Handle successful deletion:
      if (deletedCoupon === 0) {
        console.error("coupon not found with ID:", id);
        return NextResponse.json({ error: "coupon not found" }, { status: 404 }); // Not found
      }
    
  
      return NextResponse.json({ message: "coupon deleted successfully" });
    } catch (error) {
      // 5. Handle database errors:
      console.error("Error deleting category:", error);
      return NextResponse.json({ error: "server error" }, { status: 500 });
    }
  }
  
  
  //get request
  
  export async function GET(request, { params: { id } }) {

  
    try {
      const coupon = await db.couponcode.findUnique({
        where: {
          id,
        },
      });
  
      if (!coupon) {
        console.error("Category not found with ID:", id);
        return NextResponse.json({ error: "Category not found" }, { status: 404 });
      }
  
      return NextResponse.json(coupon);
    } catch (error) {
      console.error("Error:", error);
      return NextResponse.json({ status: 500 });
    }
  }
  