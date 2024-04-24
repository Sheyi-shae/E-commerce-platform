import db from "@/lib/db";
import { NextResponse } from "next/server";

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
