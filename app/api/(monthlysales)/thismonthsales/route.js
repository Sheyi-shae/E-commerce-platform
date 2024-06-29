import db from '@/lib/db';
import { NextResponse } from 'next/server';


export async function GET(request){
  const today = new Date();
  const firstDayThisMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  const tomorrow = new Date(today.getFullYear(), today.getMonth() + 1, 0); // Get end of month (day before next month)

  try {
    const totalSales = await db.orders.aggregate({
      _sum: {
        totalPrice: true, // Select totalPrice for summation
      },
      where: {
        AND:[
            {
        createdAt: {
          gte: firstDayThisMonth.toISOString(), // Filter from start of this month
          lt: tomorrow.toISOString(), // Filter to end of this month (exclusive)
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
