// pages/api/search.js

import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get('title');
  const tag = searchParams.get('tag'); // Use singular 'tag' instead of 'tags'

  const filters = [];

  if (title) {
    filters.push({
      title: {
        contains: title,
        mode: 'insensitive', // Case-insensitive search
      },
    });
  }

  if (tag) {
    filters.push({
      tags: {
        has: tag, // Use 'has' for a single tag
      },
    });
  }

  if (filters.length === 0) {
    return NextResponse.json({ message: "No search criteria provided" }, { status: 400 });
  }

  try {
    const products = await db.product.findMany({
      where: {
        OR: filters,
      },
    });

    if (products.length === 0) {
      return NextResponse.json({ message: "No products found" }, { status: 204 });
    }

    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}
