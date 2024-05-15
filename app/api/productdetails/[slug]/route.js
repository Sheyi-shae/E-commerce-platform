import db from "@/lib/db";
import { NextResponse } from "next/server";



export async function GET(request, { params: { slug} }) { // Use slug for clarity

    try {
      const product = await db.product.findUnique({
        where: {
         slug 
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