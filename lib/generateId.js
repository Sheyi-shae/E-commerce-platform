export function generateId(StaffDepartment, StaffDate) {
    //shorten department
   const word= StaffDepartment;
   const shortenedDept=word.split(" ").map(word=>word.charAt(0)).join("")
   
    
    // Remove spaces  date
  
   const formattedExpiryDate = StaffDate.replace(/-/g, '');

   // Extract year and month from the reversed date to generate unique ID
   const reversedDate = formattedExpiryDate.split('').join('');
   const year = reversedDate.substring(2, 4);
   const month = reversedDate.substring(6, 8);
    
    // Combine title, year, and month to generate the coupon code
    const staffId= `SE/${shortenedDept}/${month}${year}`;
  
    // Return the coupon code in uppercase
   return staffId
  }
  
 