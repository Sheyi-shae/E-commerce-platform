
import Navbar from "../components/(fronte)/Navbar";

import Headbar from "../components/(fronte)/Headbar";






export default function Layout({ children }) {
  return (
    
     
   
     
      <>
     
      <Headbar/>
      
    <Navbar/>
    {children}
     </>
     

   
  );
}
