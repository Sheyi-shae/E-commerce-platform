import React from 'react'
import Headersection from './Headersection'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/authOps'

export default async function Headbar() {
    const session = await getServerSession(authOptions)
  return (
    <div>
        <Headersection sessions={session}/>
    </div>
       
    
  )
}
