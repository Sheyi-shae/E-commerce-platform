import db from '@/lib/db';
import { NextResponse } from 'next/server';


export async function GET(request){
  const today = new Date();
  const yesterday = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1); // Get yesterday's date
  const tomorrow = new Date(yesterday.getFullYear(), yesterday.getMonth(), yesterday.getDate() + 1); // Get tomorrow (represents end of yesterday)

  try {
    const totalSales = await db.orders.aggregate({
      _sum: {
        totalPrice: true, // Select totalPrice for summation
      },
      where: {
        AND:[
           {
        createdAt: {
          gte: yesterday.toISOString(), // Filter from start of yesterday (inclusive)
          lt: tomorrow.toISOString(), // Filter to end of yesterday (exclusive)
        },
    },
    {
        status: 'SUCCESS', // Filter for successful orders only
      },
]
      },
    });

    return NextResponse.json({ totalSales: totalSales._sum.totalPrice || 0 },{ status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error fetching sales data' },{ status: 500 });
  }
}
