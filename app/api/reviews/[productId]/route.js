import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params: { productId } }) { // Use productId for clarity

    try {
      const reviews = await db.reviews.findMany({ // Use findMany for multiple reviews
        where: {
          productId, // Search by productId
        },
      });
  
      if (!reviews.length) { // Check if there are any reviews
        return NextResponse.json({ message: "No reviews found for this product" }, { status: 204 }); // 204: No Content
      }
  
      return NextResponse.json(reviews);
    } catch (error) {
      console.error("Error fetching reviews:", error);
      return NextResponse.json({ error: "Failed to fetch reviews" }, { status: 500 });
    }
  }
  