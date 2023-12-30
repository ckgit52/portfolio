import React, { useState } from 'react'
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  const [active,setActive]=useState(false)
  return (
    <div className='bg-gradient-to-b from-slate-500 to-black min-h-screen'>

      <nav className=' flex justify-end bg-black '>
      <div class="absolute left-0 top-0 text-2xl font-bold font-serif bg-gradient-to-r from-slate-500 to-black rounded-lg mx-1 px-1 text-white">chandan</div>
      <img className=' h-8 w-8 rounded-full' src='ck.jpg'/>
        
        <ul className='flex flex-row gap-4 bg-black text-black justify-end px-3 py-1'>
          <li className='bg-green-600 rounded-xl hover:bg-green-400 px-1 transition-colors duration-200'>
            <Link to="/">About</Link>
          </li>
          <li className='bg-green-600 rounded-xl hover:bg-green-400 px-1 transition-colors duration-200'>
            <Link to="/skills">Skills</Link>
          </li>
          <li className='bg-green-600 rounded-xl hover:bg-green-400 px-1 transition-colors duration-200'>
            <Link to="/contact">Contact</Link>
          </li>
          
        </ul>
      </nav>

      <Outlet />
    </div>
  )
}

export default Layout
