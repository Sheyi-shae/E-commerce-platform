

import NewProductForm from '@/app/components/formInputs/NewProductForm';
import { getData } from '@/lib/getData';




export default async function NewProduct() {
  //get api request
  const categoriesData = await getData("categories"); //get request from api categories
const categories= categoriesData.map((category)=>{
  return{
    id:category.id,
    title:category.title
  }
})




return (
  <div>
  
    <NewProductForm categories={categories}/>
  </div>
)
  

}