"use client"
import React, { useEffect, useState } from 'react'
import './Dashboard.css'
import Image from 'next/image';
import { CircularProgress } from '@mui/material';
function Users({menu}) {
    const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://dummyjson.com/users');
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
  let users = data?.users?.map((item) => (
    <li className='list' key={item.id}>
        <div className='ower'>
            <Image src={item.image} width={30} height={30} alt='user'/>
            <h4>{item.lastName}</h4>
        </div>
        <p className='date'>{item.firstName}</p>
        <span className='pro' style={{fontWeight: '500'}}>{item.birthDate}</span>
        <div className='act'>
            Normal
        </div>
        <span>:</span>
    </li>
  ))
  if (!data) {
    return <div className='load'><CircularProgress disableShrink /></div>;
  }
  return (
    <div>
      <ul className='lists'>
        <li className='list' style={menu ? {position: 'fixed', paddingRight: '320px', maxWidth: '1600px'} : {position: 'fixed', paddingRight: '80px',maxWidth: '1600px'} }>
            <div >
                <h4 style={{opacity: '0.6'}}>Ticket details</h4>
            </div>
            <p style={{paddingLeft: '100px',opacity: '0.6'}}>Customer name</p>
            <span style={{paddingRight: '70px',opacity: '0.6'}}>Date</span>
            <div style={{opacity: '0.6'}}>
            Priority
            </div>
        </li>
        {
            users
        }
      </ul>
    </div>
  )
}

export default Users
