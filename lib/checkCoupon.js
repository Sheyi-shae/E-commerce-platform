import toast from "react-hot-toast";
import { getData } from "./getData";
import { FormatCurrency } from "@/app/components/(fronte)/moneyinput";

export async function checkCoupon(coupon, subTotal) {
  try {
    // Convert coupon to uppercase
    const couponUppercase = coupon.toUpperCase();

    // Fetch coupon data
    const response = await getData(`couponcode/${couponUppercase}`);
    
    // Handle response
    if (!response || response.error) {
      toast.error(response?.error || 'Invalid Coupon Code');
      return subTotal;  // Return the original subtotal if coupon is invalid
    }

    //destructiong discount from the data recieved
    const { discount } = response;

    // Calculate discount and new total
    const percentageDiscount = (discount / 100) * subTotal;
    const totalDiscount = subTotal - percentageDiscount;
    const moneySaved = FormatCurrency(percentageDiscount);

    // Notify the user about the successful application of the coupon
    toast.success(`Coupon applied! You saved ${moneySaved}`);

    return totalDiscount;

  } catch (error) {
    // Handle any errors that occur during the process
    toast.error('An error occurred while applying the coupon');
    console.error(error);
    return subTotal;  // Return the original subtotal in case of an error
  }
}
