
import CategoryForm from '@/app/components/(backe)/forms/CategoryForm'

import { getData } from '@/lib/getData'


//recieving id from the other end via params
export default  async function UpadteCategory({params:{id}}) {
    const category = await getData(`categories/${id}`)
  return (
    <div>
    
    
   
        <CategoryForm title={'Update Category'} initialData={category} />
    </div>
  )
}
