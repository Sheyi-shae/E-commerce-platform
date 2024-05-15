import db from "@/lib/db";
import { NextResponse } from "next/server";


//update request
export async function PUT(request,{params:{id}}){
   
  
  try {
      const {  title,
        categoryId,
        categoryTitle,
        description,
        imageUrl,
        slug,
        qty,
        stock,
        Origninalprice,
        Discountedprice,
        tags}=await request.json()
     
     
        const quantity = parseInt(qty);
        const rawstock = parseInt(stock);
        const rawPrice= parseFloat(Origninalprice);
        const rawPrice2 =parseFloat(Discountedprice)
      
      const updatedProduct = await db.product.update({
        where:{
          id
        },
          data:{
            title,
                categoryId,
                categoryTitle,
                description,
                imageUrl,
                slug,
                qty:quantity,
                stock:rawstock,
                Origninalprice:rawPrice,
                Discountedprice:rawPrice2,
                tags, // Renamed to avoid conflict with the 'price' variable below
        } 
        
      })
       // Parse the price as a float
     
      return NextResponse.json(updatedProduct)
      
      
  } catch (error) {
      console.log(error)
      return NextResponse.json({ status: 500 });
      
  }

}

export async function DELETE(request,{params:{id}}) {

  try {
    const product = await db.product.findUnique({
        where: {
          id,
        },
      });
  
      if (!product) {
        
      console.log("Product not found with ID:", id);
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
     }

    // 3. Attempt to delete the product:
    const deletedProducts = await db.product.delete({
      where: {
        id,
      },
    });

    // 4. Handle successful deletion:
    if (deletedProducts === 0) {
      console.error("Product not found with ID:", id);
      return NextResponse.json({ error: "Product not found" }, { status: 404 }); // Not found
    }
  

    return NextResponse.json({ message: "Product deleted successfully" });
  } catch (error) {
    // 5. Handle database errors:
    console.error("Error deleting product:", error);
    return NextResponse.json({ error: "server error" }, { status: 500 });
  }
}

export async function GET(request, { params: { id} }) { // Use slug for clarity

  try {
    const product = await db.product.findUnique({
      where: {
       id,
       
      },
    });

    if (!product) {
      console.error("Product not found with slug:", slug);
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json(product);
  } catch (error) {
    console.error("Error fetching product:", error); // More specific error message

    // Consider adding more specific error handling based on error types (e.g., database errors)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

