
import db from "@/lib/db";
import { NextResponse } from "next/server";


//update request
export async function PUT(request,{params:{id}}){
  
  try {
      const {title,imageURL,isActive}=await request.json()
     
   
      const updatedBanner = await db.banners.update({
        where:{
          id
        },
          data:{
              title,imageURL,isActive
          }
      })
     
      return NextResponse.json(updatedBanner)
      
      
  } catch (error) {
      console.log(error)
      return NextResponse.json({ status: 500 });
      
  }

}













export async function DELETE(request,{params:{id}}) {
  

  try {
    const Banners = await db.banners.findUnique({
        where: {
          id,
        },
      });
  
      if (!Banners) {
        
      console.log("Banner not found with ID:", id);
      return NextResponse.json({ error: "Banner not found" }, { status: 404 });
     }

    // 3. Attempt to delete the category:
    const deletedBanner = await db.banners.delete({
      where: {
        id,
      },
    });

    // 4. Handle successful deletion:
    if (deletedBanner === 0) {
      console.error("banner not found with ID:", id);
      return NextResponse.json({ error: "banner not found" }, { status: 404 }); // Not found
    }
  

    return NextResponse.json({ message: "banner deleted successfully" });
  } catch (error) {
    // 5. Handle database errors:
    console.error("Error deleting banner:", error);
    return NextResponse.json({ error: "server error" }, { status: 500 });
  }
}


//get request

export async function GET(request, { params: { id } }) {

  try {
    const getBanner = await db.banners.findUnique({
      where: {
        id,
      },
    });

    if (!getBanner) {
      console.error("banner not found with ID:", id);
      return NextResponse.json({ error: "banner not found" }, { status: 404 });
    }

    return NextResponse.json(getBanner);
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ status: 500 });
  }
}
