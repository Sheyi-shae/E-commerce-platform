export function generateCouponCode(title, expiryDate) {
    // Remove spaces and convert title to uppercase
    const titleUpperCase = title.replace(/\s+/g, '').toUpperCase();
   // Remove hyphens from the expiryDate
   const formattedExpiryDate = expiryDate.replace(/-/g, '');

   // Extract year and month from the reversed date
   const reversedDate = formattedExpiryDate.split('').join('');
  
   const year = reversedDate.substring(0, 4);
   const month = reversedDate.substring(6, 8);
    
    // Combine title, year, and month to generate the coupon code
    const couponCode = `${titleUpperCase}${month}`;
  
    // Return the coupon code in uppercase
    return couponCode.toUpperCase();
  }
  
 