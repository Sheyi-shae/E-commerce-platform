"use client";
import React, { useEffect, useState } from 'react';
import { Spinner } from 'flowbite-react';

export default function FetchData({
    endpoint,
    state,
    setState,
}) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
                const response = await fetch(`${baseUrl}/api/${endpoint}`, {
                    cache: "no-store",
                });
                const data = await response.json();
                setState(data);
                setLoading(false); // Data fetched, stop loading
            } catch (error) {
                console.error('Error:', error);
                setLoading(false); // Error occurred, stop loading
            }
        };
        fetchData();
    }, [endpoint, setState, state]);

    return (
        <>
            {loading && (
                <div class="cssload-preloader">
	<div class="cssload-preloader-box">	
    	<div>l</div>		
        <div>o</div>	
        	<div>a</div>	
            	<div>d</div>
                		<div>i</div>	
                        	<div>n</div>	
                            	<div>g</div>
                                </div>
</div>
            ) }
        </>
    );
}
