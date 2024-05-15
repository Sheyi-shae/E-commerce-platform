export function  passwordCheck(password) {
    const minLength = 8;
    
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSymbol = /[!@#$%^&*()_+\-={}[\]\\|,.<>/?`~]/.test(password);
   
  
    return (
      password?.length >= minLength &&
      
      hasLowerCase &&
      hasNumber &&
      hasSymbol 
    );
  }
  