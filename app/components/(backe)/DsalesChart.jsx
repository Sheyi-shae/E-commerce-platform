'use client'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  import { faker } from '@faker-js/faker';
import React, { useState } from 'react'

export default function DsalesChart() {
    //line chart here
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
      );
      
       const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top' ,
          },
          title: {
            display: false,
            text: 'Chart.js Line Chart',
          },
        },
      };
      
      const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
      
       const data = {
        labels,
        datasets: [
          {
            label: 'Monthly Sales',
            data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
            borderColor: 'rgb(168, 141, 20)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            label: 'Monthly Orders',
            data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      };

    //line chart ends here
   const tabs=[
        {
            title:"Sales Chart",
        type:"sales"
    
    },{
        title:"Orders Chart",
        type:"orders"
    }]
    const [chart,setChart]=useState(tabs[0].type)
  return (
    <div className='dark:bg-slate-700 bg-slate-100 shadow-md dark:shadow-none shadow-slate-300 p-1 h-[430px]'>
<div>
<h2 className='capitalize text-center font-normal text-slate-700 ring-0 ring-slate-400 shadow-md
 shadow-black p-1 dark:text-slate-50'>Sales & orders chart</h2>

</div>

<div>
{/* tabs */}


<div className="border-b border-gray-400 dark:border-gray-500">
    <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-300 dark:text-gray-300">
    {tabs.map((tab,i)=>{
        return (
            <li className="me-2" key={i}>
            <button className={chart === tab.type ? "inline-flex items-center justify-center p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group" : "inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"}
                   onClick={() => setChart(tab.type)}
                                    >
                                         {tab.title}
                    
            </button>
        </li>   
        )
    })}

       
    </ul>
</div>

</div>
<div>
{/* content */}
{tabs.map((tab,i)=>{
if(chart === tab.type){
return(
<div key={i}>
  
    <Line options={options} data={data} />
    </div>
)

}


})}

</div>

    </div>
  )
}
