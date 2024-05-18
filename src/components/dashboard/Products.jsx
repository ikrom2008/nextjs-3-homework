"use client"
import React, { useEffect, useState } from 'react'
import './Dashboard.css'
import Image from 'next/image'
import { CircularProgress } from '@mui/material';

export default function Products({menu}){
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://dummyjson.com/products');
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await res.json();
        setData(jsonData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

    let prs = data?.products?.map((item) => (
        <li key={item.id} className='item'>
            <div className='ower'>
            <Image style={{borderRadius: '50%'}} src={item.images[0]} width={30} height={30} alt={item.title} />
            <h4>{item.title.slice(0,10)}</h4>
            </div>
            <p className='date'>1.15.12</p>
            <span className='pro' style={{color: 'rgba(0, 202, 57, 1)'}}>${item.price}</span>
            <span className='oldpro' style={{ color:'rgba(228, 64, 103, 1)'}}>${item.price + 100}</span>
            <h5  className='phone'>(99) 999-99-99</h5>
        </li>
    ))
    if (!data) {
      return <div className='load'><CircularProgress disableShrink /></div>;
    }
  return (
    <div>
      <ul className='items'>
          <li className='item' style={menu ? {background: 'white', position: 'fixed', paddingRight: '300px'}: {background: 'white', position: 'fixed', paddingRight: '80px'}}>
            <div className='ower' ><h4 style={{opacity: '0.5'}}>Owner</h4></div>
            <p className='date'>End date</p>
            <span className='pro'>Profits</span>
            <span className='oldpro'>Losses</span>
            <h5 className='phone' style={{fontSize: '16px'}}>Phone</h5>
          </li>
          {prs}
      </ul>
    </div>
  )
}

