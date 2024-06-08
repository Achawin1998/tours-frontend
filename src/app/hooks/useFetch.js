 'use client'
 import React, { useEffect, useState } from 'react'

 
 function useFetch(url) {

    const [data , setData] = useState([]);
    const [loading , setLoading] = useState(false);
    const [error , setError] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const res = await fetch(url);

                if (!res.ok) {
                    setError('Failed to fetch data');
                    alert("Falied to fetch data")
                    return
                }

                const result = await res.json()
                setData(result.data)
                setLoading(false)
            } catch (error) {
                setError('Failed to fetch data');
                setLoading(false);
                console.log( 'Error fetching data' ,error);
            }
        }

        fetchData()
    },[url])


   return { data  , error , loading}
 }
 
 export default useFetch