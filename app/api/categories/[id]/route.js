
import db from "@/lib/db";
import { NextResponse } from "next/server";


//update request
export async function PUT(request,{params:{id}}){
  
  try {
      const {title,imageURL,slug,description}=await request.json()
     
      // const category = await db.category.findUnique({
      //     where: {
      //         title,
      //     }

      // });
      // if(category){
      //   return NextResponse.json({error:'category exists'},{ status: 500 });
      // }
     
      
      const updatedCategory = await db.category.update({
        where:{
          id
        },
          data:{
              title,imageURL,slug,description
          }
      })
     
      return NextResponse.json(updatedCategory)
      
      
  } catch (error) {
      console.log(error)
      return NextResponse.json({ status: 500 });
      
  }

}













export async function DELETE(request,{params:{id}}) {
  

  try {
    const category = await db.category.findUnique({
        where: {
          id,
        },
      });
  
      if (!category) {
        
      console.log("category not found with ID:", id);
      return NextResponse.json({ error: "category not found" }, { status: 404 });
     }

    // 3. Attempt to delete the category:
    const deletedcategorys = await db.category.delete({
      where: {
        id,
      },
    });

    // 4. Handle successful deletion:
    if (deletedcategorys === 0) {
      console.error("category not found with ID:", id);
      return NextResponse.json({ error: "category not found" }, { status: 404 }); // Not found
    }
  

    return NextResponse.json({ message: "category deleted successfully" });
  } catch (error) {
    // 5. Handle database errors:
    console.error("Error deleting category:", error);
    return NextResponse.json({ error: "server error" }, { status: 500 });
  }
}


//get request

export async function GET(request, { params: { id } }) {

  try {
    const category = await db.category.findUnique({
      where: {
        id,
      },
    });

    if (!category) {
      console.error("Category not found with ID:", id);
      return NextResponse.json({ error: "Category not found" }, { status: 404 });
    }

    return NextResponse.json(category);
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ status: 500 });
  }
}
