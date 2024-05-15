import BannerForm from '@/app/components/(backe)/forms/BannerForm'
import { getData } from '@/lib/getData'
import React from 'react'

export default async function UpdateBanner({params:{id}}) {
    const banners= await getData(`banners/${id}`)
  return (
    <div>
        <BannerForm name={'Update Banner'} initialData={banners}/>
    </div>
  )
}
