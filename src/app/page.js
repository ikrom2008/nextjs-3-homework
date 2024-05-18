"use client"
import { useState } from 'react';
import './globals.css'
import Panel from '@/components/panel/Panel';
import Dashboard from '@/components/dashboard/Dashboard';
export default function Home() {
  const [products,setProducts] = useState(true)
  const [menu,setMenu] = useState(true)
  const [users,setUsers] = useState(null)
  return (
    <main className='main'>
      {menu ? <Panel setProducts={setProducts} users={users} products={products} setUsers={setUsers} /> : <></>}
      <Dashboard products={products} users={users} menu={menu} setMenu={setMenu} />
    </main>
  );
}
