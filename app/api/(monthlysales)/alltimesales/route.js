import db from '@/lib/db';
import { NextResponse } from 'next/server';


export async function GET(request){
  try {
    const totalSales = await db.orders.aggregate({
      _sum: {
        totalPrice: true, // Select totalPrice for summation
      },
      where: {
        status: 'SUCCESS', // Filter for successful orders only
      },
    });

    return NextResponse.json({ totalSales: totalSales._sum.totalPrice || 0 },{ status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error fetching sales data' },{ status: 500 });
  }
}
