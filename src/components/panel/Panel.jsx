"use client"
import React from 'react'
import './Panel.css'
import Image from 'next/image'
import logo from '@/../public/Logo.svg'
import overview from '@/../public/overview.png'
import tinkers from '@/../public/tickets.png'
function Panel({setProducts,setUsers,products,users}) {
  return (
    <div className='panel'>
        <div style={{width: '100%', display: 'flex',flexDirection: 'column', justifyContent: 'center' ,alignItems: 'center'}}>
        <div className='logo'>
        <Image src={logo} width={40} height={40} alt='logo' />
        <h3>Dashboard</h3>
        </div>
        <ul className='categories'>
            <li style={products ? {background: 'rgb(95, 97, 103)'}: {background: 'rgba(54, 55, 64, 1)'}} onClick={() => {
                setUsers(false)
                setProducts(true)
            }}><Image src={overview} width={15} height={15} alt='over' /> Products</li>
            <li style={users ? {background: 'rgb(95, 97, 103)'}: {background: 'rgba(54, 55, 64, 1)'}} onClick={() => {
                setProducts(false)
                setUsers(true)
            }}><Image src={tinkers} width={15} height={15} alt='tkr' /> Users</li>
            <li><Image src={overview} width={15} height={15} alt='over' /> Posts</li>
            <li><Image src={overview} width={15} height={15} alt='over' /> Contacts</li>
            <li><Image src={overview} width={15} height={15} alt='over' /> Agents</li>
            <li><Image src={overview} width={15} height={15} alt='over' /> Articles</li>
        </ul>
        </div>
        <div className='btns'>
            <button>Change mode</button>
            <button>Logout</button>
        </div>
    </div>
  )
}

export default Panel
