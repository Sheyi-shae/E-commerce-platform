import db from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET(request) {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Set to start of the day
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1); // Move to the next day

  try {
    const totalSales = await db.orders.aggregate({
      _sum: {
        totalPrice: true, 
      },
      where: {
        AND: [
          {
            createdAt: {
              gte: today.toISOString(), 
              lt: tomorrow.toISOString(), 
            },
          },
          {
            status: 'SUCCESS', 
          },
        ],
      },
    });

    return NextResponse.json({ totalSales: totalSales._sum.totalPrice || 0 }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error fetching sales data' }, { status: 500 });
  }
}
