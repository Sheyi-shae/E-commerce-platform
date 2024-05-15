import React from 'react'

export default function CartQuantity({handleQtyDecrement,handleQtyIncrement,itemId,qty}) {
  return (
    <div>
        <div className='flex  '>
              <span className='ring-slate-200 dark:ring-slate-500   ring-1 shadow-sm  rounded-l-sm'>
                <button
                  onClick={() => handleQtyDecrement(itemId)}
                  className='hover:bg-slate-200 text-slate-800 px-2 py-1 dark:hover:bg-slate-500'
                >
                  -
                </button>
              </span>
              <span className='ring-slate-200 ring-1 dark:ring-slate-500  text-slate-600
               roboto-light px-6 p-1 overflow-hidden'>
                {qty}
              </span>
              <span className='ring-slate-200 ring-1 dark:ring-slate-500  shadow-sm rounded-r-sm'>
                <button
                  onClick={() => handleQtyIncrement(itemId)}
                  className='hover:bg-slate-200 text-slate-800 px-2 py-1 dark:hover:bg-slate-500'
                >
                  +
                </button>
              </span>
            </div>
    </div>
  )
}
