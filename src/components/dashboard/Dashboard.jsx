'use client'
import React from 'react'
import './Dashboard.css'
import Image from 'next/image'
import Vector from '@/../public/Vector.svg'
import Vector2 from '@/../public/Vector2.png'
import userphoto from '@/../public/Photo.png'
import Products from './Products'
import Users from './Users'

  
  export default function Dashboard({products,users,menu,setMenu}){

  return (
    <div className='dashboard' style={menu ? {width:'85%'} : {width: '100%'}}>
        <div className='menu'>
            <Image src={Vector} width={25} height={25} alt='vektor' onClick={() => setMenu(!menu)} />
            <div className='user'>
                <p>Jones Ferdinand</p>
                <Image src={userphoto} width={40} height={40} alt='user' />
            </div>
        </div>
        <div className='overview'>
            <h2>{products ? "Overview" : "Tickets"}</h2>
            <div className='add'>
                <button><Image src={Vector2} width={20} height={5} alt='vektor2' /></button>
                <button style={{background:'rgba(16, 205, 69, 1)'}}>Add</button>
            </div>
        </div>
        {
            products ? <Products menu={menu} /> : <Users menu={menu} />
        }
    </div>
  )
}