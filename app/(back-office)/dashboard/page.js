import AdminLoading from '@/app/components/(backe)/AdminLoading'
import DashboardComponent from '@/app/components/(backe)/dashboard'

import React, { Suspense } from 'react'

export default  function Dashboard() {
 

  return (
    <div className=' px-1'>
    <Suspense fallback={<AdminLoading/>}>
      <DashboardComponent />
      </Suspense>
    </div>
  )
}
