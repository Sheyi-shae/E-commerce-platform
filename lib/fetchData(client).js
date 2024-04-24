"use client"
import React, { useEffect } from 'react'

export default function FetchData({
    endpoint,
    state,
    setState,

}) {
    useEffect(() => {
        const fetchData = async () => {
          try {
            const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
          const response = await fetch(`${baseUrl}/api/${endpoint}`, {
            cache: "no-store",
          });
          const data = await response.json();
          setState(data)
          
            
          } catch (error) {
            console.error('Error:', error);
          }
        };
        fetchData();
      }, [endpoint,setState,state]);
  
}
