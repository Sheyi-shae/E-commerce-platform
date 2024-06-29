import Image from 'next/image'
import React from 'react'

export default function Mainpreloader() {
  return (
    <div className='flex justify-center translate-y-48 items-center'>
        <Image src={'/preloaders/site.gif'} height={200}
        width={200} alt="preloader" />
    </div>
  )
}
