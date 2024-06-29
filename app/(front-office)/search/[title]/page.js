import React from 'react'
import SortingComponent from '../../collections/Sorting'
import { getData } from '@/lib/getData'

export default async function page({params:{title}}) {
  const products= await getData(`/search?title=${title}`)
  return (
    <div><SortingComponent items={products} heading={`Search Result for-'${title}'`}/></div>
  )
}
