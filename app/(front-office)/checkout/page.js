import FormSteps from '@/app/components/(fronte)/checkout-compo/FormSteps'

import { authOptions } from '@/lib/authOps'
import { ChevronRight } from 'lucide-react'
import { getServerSession } from 'next-auth'
import React from 'react'

export default async function page() {
  const steps=[{number:1,title:"user account", icon:<ChevronRight size={20}/>},
  {number:2,title:"shipping details",icon:<ChevronRight size={20}/>},
  {number:3,title:"payment method" ,icon:<ChevronRight size={20}/>},
  {number:4,title:"order summary"}
  ]
  const session = await getServerSession(authOptions)
  return (
    <div className='mx-auto p-5 lg:p-1 md:p-3 sm:p-4 w-full lg:w-[60%] min-h-[50vh] mt-3 shadow-md'> 
    
    
      <FormSteps sessions={session} steps={steps}/>
    </div>
   
  )
}
