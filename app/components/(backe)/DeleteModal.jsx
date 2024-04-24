import { Trash2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2'

export default function DeleteModal({endpoint,id}){
  const [loading, setLoading]=useState(false);
  const router = useRouter();

  async function handleDelete(){
    
    setLoading(true)
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "rgb(224 36 36 / var(--tw-text-opacity))",
  cancelButtonColor: "rgb(5 122 85 / var(--tw-text-opacity))",
  confirmButtonText: "Yes, delete it!"
 
  
}).then(async(result) => {
  if (result.isConfirmed) {
    console.log(`${baseUrl}/api/${endpoint}/${id}`)
     //fire delete request when yes is clicked
    const res = await fetch(`${baseUrl}/api/${endpoint}/${id}`, {
      method: "DELETE",
      
    });
    console.log(res)
    if(res.ok){
      router.refresh()
      setLoading(false);
    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
  

  }if (!res.ok) {
    const errorMessage = "Error deleting product";
    console.error("Error:", errorMessage);
    setLoading(false);
    toast.error(errorMessage);
 
  }
  
  }
});
}
return(

  <div className='flex text-red-600'><Trash2 size={22}/>
    <button className='text-red-500 ' onClick={handleDelete}> 
    Delete
    
    </button>
  </div>
)

}