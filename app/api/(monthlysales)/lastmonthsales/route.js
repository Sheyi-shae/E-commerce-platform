import db from '@/lib/db';
import { NextResponse } from 'next/server';


export async function GET(request){
  const today = new Date();
  const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1);
  const firstDayThisMonth = new Date(today.getFullYear(), today.getMonth(), 1);

  try {
    const totalSales = await db.orders.aggregate({
      _sum: {
        totalPrice: true, // Select totalPrice for summation
      },
      where: {
        AND:[
          {
        createdAt: {
          gte: lastMonth.toISOString(), // Use ISOString for Prisma comparison
          lt: firstDayThisMonth.toISOString(),
        },
      },
      {
        status: 'SUCCESS', // Filter for successful orders only
      }, // Filter for successful orders only
      ]
      },
    });

    return NextResponse.json({ totalSales:totalSales._sum.totalPrice || 0 },{ status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error fetching sales data' },{ status: 500 });
  }
}
