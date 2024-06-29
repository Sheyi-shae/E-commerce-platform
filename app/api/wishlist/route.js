import { authOptions } from "@/lib/authOps";
import db from "@/lib/db";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const session = await getServerSession(authOptions);
        const userId = session.user.id;

        if (!userId) {
            return NextResponse.json({ message: 'Not authorized', status: 401 });
        }

        const user = await db.user.findUnique({
            where: { id: userId },
        });

        if (!user) {
            return NextResponse.json({ message: 'User not found', status: 404 });
        }

        // Parse the request body correctly
        const { productId } = await request.json();

        if (!productId) {
            return NextResponse.json({ message: 'Product ID not found', status: 400 });
        }

        // Check if the product id exists in the wishlist associated with the user model
        const isLiked = user.wishlist.includes(productId);

        let updatedWishlist;

        if (isLiked) {
            updatedWishlist = user.wishlist.filter(id => id !== productId);
        } else {
            updatedWishlist = [...user.wishlist, productId];
        }

        // Update the user's wishlist in the database
        await db.user.update({
            where: { id: userId },
            data: { wishlist: updatedWishlist },
        });

        return NextResponse.json({ message: 'Wishlist updated successfully', status: 200, wishlist: updatedWishlist });
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ message: 'Internal server error', status: 500 });
    }
}
