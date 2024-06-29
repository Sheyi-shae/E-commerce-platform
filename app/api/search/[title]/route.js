// pages/api/search.js

import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params: { title } }) { 

  if (!title || typeof title !== 'string') {
    return NextResponse.json({ message: "No product found found for this product" }, { status: 204 });
    return;
  }

  try {
    const products = await db.product.findMany({
      where: {
        title: {
          contains: title,
          mode: 'insensitive', // Case-insensitive search
        },
      },
    });
    if(!products){
      return NextResponse.json()
    }
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch products' });
  }
}
