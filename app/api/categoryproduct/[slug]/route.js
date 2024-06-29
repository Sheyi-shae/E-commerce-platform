import db from "@/lib/db";
import { NextResponse } from "next/server";



export async function GET(request, { params: { slug } }) {

    try {
      
        const category = await db.category.findUnique({
          where: {
            slug, // Filter category by slug
          },
          include: {
            products: { // Include related products
              include: {
                reviews: true // Include reviews for each product(reviews has been added to products in the schema)
              }
            }
          }
        });
  
      if (!category) {
        console.error("Category not found with ID:", slug);
        return NextResponse.json({ error: "Category not found" }, { status: 404 });
      }
  
      return NextResponse.json(category);
    } catch (error) {
      console.error("Error:", error);
      return NextResponse.json({ status: 500 });
    }
  }
  