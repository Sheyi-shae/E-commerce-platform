"use client"
import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DbestSellingChart() {
 const data = {
        labels: ['Electronics', 'Watches', 'Smart Phones', 'Laptops', ],
        datasets: [
          {
            label: 'No of sales',
            data: [45, 20, 25, 10,],
            backgroundColor: [
              'rgba(43, 97, 167)',
              'rgba(43, 167, 74)',
              'rgba(168, 141, 20)',
              'rgba(124, 70, 212)',
              
            ],
            borderColor: [
              'rgba(255, 255, 255)',
              'rgba(255, 255, 255)',
              'rgba(255, 255, 255)',
              'rgba(255, 255, 255)',
             
            ],
            borderWidth: 1,
          },
        ],
      };
      
  return (
    <div className='dark:bg-slate-700 bg-slate-100 shadow-md dark:shadow-none shadow-slate-300 flex-1 p-1'>
    <div>
    <h2 className='capitalize text-center font-normal text-slate-700 dark:text-white ring-0 p-
    1 ring-slate-400 shadow-md shadow-black'>Best selling product</h2>
    
    
    </div>
    <div className='flex items-center justify-center h-[390px] w-[100%]'>
    <Pie data={data} draggable='true'  />
    </div>
        </div>
  )
}
