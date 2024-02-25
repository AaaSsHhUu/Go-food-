import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg-gray-700 text-white py-4 px-8 w-screen flex flex-col md:flex-row items-center'>
        <div className='font-bold text-2xl'>
            NAVBAR
        </div>
        <div className='ml-8 '>
            <ul className='flex flex-col md:flex-row text-white gap-3 list-none items-center'>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/">About</NavLink>
                </li>
                <li>
                    <NavLink to="/">Contact</NavLink>
                </li>
                <li>
                    <NavLink to="/">Blog</NavLink>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
