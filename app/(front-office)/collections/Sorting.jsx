'use client';

import { FormatCurrency } from '@/app/components/(fronte)/moneyinput';
import Pagination from '@/app/components/(fronte)/products/Pagination';
import ProductExt from '@/app/components/(fronte)/products/ProductExt';
import ShopByCategory from '@/app/components/(fronte)/products/ShopByCategory';
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import React, { useState } from 'react';


export default function SortingComponent({ items, heading }) {
  const [sortOption, setSortOption] = useState('relevance');
  const [priceFilter, setPriceFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const SortChangeHandler = (option) => {
    setSortOption(option);
  };
  const priceFilterChange = (event) => {
    setPriceFilter(event.target.value);
  };
  const handlePriceFilterChange = (value) => {
    setPriceFilter(value);
  };

  const filterItemsByPrice = (items, priceFilter) => {
    if (priceFilter === 'all') {
      return items;
    }
    return items.filter((item) => {
      const price = item.Discountedprice;
      switch (priceFilter) {
        case 'under-20000':
          return price < 20000;
        case '20000-40000':
          return price >= 20000 && price <= 40000;
        case '40000-100000':
          return price > 40000 && price <= 100000;
        case 'above-100000':
          return price > 100000;
        default:
          return true;
      }
    });
  };

  const sortItems = (items, option) => {
    let sortedItems;
    switch (option) {
      case 'high-to-low':
        sortedItems = items.slice().sort((a, b) => b.Discountedprice - a.Discountedprice);
        break;
      case 'low-to-high':
        sortedItems = items.slice().sort((a, b) => a.Discountedprice - b.Discountedprice);
        break;
      case 'relevance':
      default:
        sortedItems = items;
    }
    return sortedItems;
  };

  const filteredItems = filterItemsByPrice(items, priceFilter);
  const sortedItems = sortItems(filteredItems, sortOption);

  // Pagination
  const pageSize = 10;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const pageCount = Math.ceil(sortedItems.length / pageSize);
  const pageIndex = sortedItems.slice(startIndex, endIndex);

  return (
    <div className='flex dark:bg-slate-800 dark:text-slate-50 gap-2 p-2'>
      {/* left sidebar  hidden on mobile */}
      <div className='hidden md:block md:w-[20%] shadow-md  montserrat'>
        <div className='p-2 px-1 rounded-sm ring-1 ring-slate-200 shadow-sm'>
          <h2 className='capitalize montserrat text-slate-800 p-0 text-lg specialbg px-2 ring-slate-200 shadow-sm'>price</h2>
          <RadioGroup value={priceFilter} onValueChange={handlePriceFilterChange}>
            <div className="flex items-center space-x-2 mt-2">
              <RadioGroupItem value="under-20000" id="under-20000" />
              <Label htmlFor="under-20000">Under &#x20A6; 20,000</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="20000-40000" id="20000-40000" />
              <Label htmlFor="20000-40000">&#x20A6;20,000 - &#x20A6;40,000</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="40000-100000" id="40000-100000" />
              <Label htmlFor="40000-100000">&#x20A6;40,000 - &#x20A6;100,000</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="above-100000" id="above-100000" />
              <Label htmlFor="above-100000">Above &#x20A6;100,000</Label>
            </div>
          </RadioGroup>
        </div>
        <div className='p-2 px-1 rounded-sm ring-1 ring-slate-200 shadow-sm'>
          <h2 className='capitalize montserrat text-slate-800 p-0 text-lg specialbg px-2 ring-slate-200 shadow-sm'>by category</h2>
          <ShopByCategory />
        </div>
      </div>
      {/* end side bar */}
      <div className='w-full md:w-[80%] shadow-md dark:bg-slate-800'>
        <h2 className='capitalize montserrat text-slate-800 dark:text-slate-50 p-2 text-2xl md:text-3xl'>{heading}</h2>

        {/* for medium screen or less */}
        <div className='flex justify-between'>
        {/* filter by price */}
        <div className="sort-component md:hidden mb:2 flex px-1 shrink-0 montserrat justify-end text-xs">
          <select
            id="sort-items"
            className='shadow-sm rounded-md montserrat dark:text-slate-700 text-xs custom-select'
            value={priceFilter} 
            onChange={priceFilterChange}
          >
              <option value="all">--Price Filter--</option>
            <option value="under-20000">Under &#x20A6; 20,000</option>
            <option value="20000-40000">&#x20A6;20,000 - &#x20A6;40,000</option>
            <option value="40000-100000">&#x20A6;40,000 - &#x20A6;100,000</option>
            <option  value="above-100000">Above &#x20A6;100,000</option>
          </select>
        </div>

        {/* sort by price */}
        <div className="sort-component md:hidden mb:2 flex px-1 shrink-0 montserrat justify-end text-xs">
          <select
            id="sort-items"
            className='shadow-sm rounded-md montserrat  dark:text-slate-700 text-xs custom-select'
            value={sortOption}
            onChange={handleSortChange}
          >
          <option value="relevance">--Sort By--</option>
            <option value="relevance">Relevance</option>
            <option value="high-to-low">Price: High to Low</option>
            <option value="low-to-high">Price: Low to High</option>
          </select>
        </div>

        </div>
        
        {/* for medium screen upward */}
        <div className="sort-component rounded-sm hidden px-3 montserrat md:flex justify-end text-sm">
          <div className='flex shadow-sm'>
            <span onClick={() => SortChangeHandler('relevance')} className={`border cursor-pointer border-slate-300 px-1 ${sortOption === 'relevance' ? 'dark:bg-pink-800 bg-red-500 text-slate-100' : ''}`}>Relevance</span>
            <span onClick={() => SortChangeHandler('high-to-low')} className={`border cursor-pointer border-slate-300 px-1 ${sortOption === 'high-to-low' ? 'dark:bg-pink-800 bg-red-500 text-slate-100' : ''}`}>Price: High to Low</span>
            <span onClick={() => SortChangeHandler('low-to-high')} className={`border cursor-pointer border-slate-300 px-1 ${sortOption === 'low-to-high' ? 'dark:bg-pink-800 bg-red-500 text-slate-100' : ''}`}>Price: Low to High</span>
          </div>
        </div>
        <section>
          <div className="px-2 mx-auto max-w-7xl">
            <div className="grid sm:grid-cols-3 grid-cols-2 md:grid-cols-3 p-2 gap-6 mt-10 lg:mt-4 lg:gap-4 lg:grid-cols-4 xl:grid-cols-5">
              {pageIndex.length > 0 ? (
                pageIndex.map((product) => (
                  <ProductExt key={product.id} product={product} />
                ))
              ) : (
                <p>No product found</p>
              )}
            </div>
          </div>
          <Pagination
            currentPage={currentPage}
            pageCount={pageCount}
            onPageChange={setCurrentPage}
          />
        </section>
      </div>
    </div>
  );
}
