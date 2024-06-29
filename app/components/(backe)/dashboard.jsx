import React from 'react'
import DashboardCards from './dashboardCards'
import DsmallCards from './DsmallCards'
import DsalesChart from './DsalesChart'
import DbestSellingChart from './DbestSellingChart'
import Dtable from './Dtable'
import CustomerTable from './CustomerTable'
import RecentOrders from './RecentOrders'

export default function DashboardComponent() {
 
  return (
    <div className='   '>
        <div className= 'dark:text-white text-2xl font-normal capitalize'>dashboard overview</div>
        
        <DashboardCards/>
        
        <DsmallCards />

        <div className='flex flex-col md:flex-row   '>
        <div className='md:w-1/2 p-3'>
          {/* sales chart */}
          <DsalesChart/>
        </div>

<div className='md:w-1/2 p-3'>
  {/* best selling chart */}
  <DbestSellingChart/>
</div>

        </div>

        {/* table */}
        <div className=' z-0 p-2'>
        {/* <Dtable/> */}
        <RecentOrders/>
       
        </div>
        
    </div>
  )
}
