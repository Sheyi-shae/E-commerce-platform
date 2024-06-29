'use client'
import React, { useState, useEffect } from 'react';
import { getData } from '@/lib/getData';
import MultiSliders from './MultiSliders';

export default function ProductSliders() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add loading state


  useEffect(() => {
    const fetchData = async () => {
      try {
        const topPicks = await getData('categoryproduct/electronics');
        setProducts(topPicks.products);
      } catch (err) {
        console.error
      } finally {
        setIsLoading(false); // Always set loading to false after fetch
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Loading products...</p> // Display loading message
      )  : (
        <MultiSliders products={products} />
      )}
    </div>
  );
}
