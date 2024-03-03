import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg-green-600 text-white py-4 px-12 w-full flex flex-col md:flex-row justify-evenly items-center'>
        <div className='font-bold text-3xl'>
            GoFood
        </div>
        <div className='ml-8 w-full flex flex-col sm:flex-row justify-evenly items-center'>
            <ul className='flex flex-col md:flex-row text-white gap-8 text-lg font-bold list-none items-center'>
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
                    <NavLink to="/login">Login</NavLink>
                </li>
            </ul>
        </div>
        <div className='flex items-center'>
            <input type="text" placeholder='What do you want to eat?' className='border-none w-60 outline-none rounded-l-md px-3 py-2 text-gray-700'/>
            <button className='bg-green-400 text-white font-bold rounded-r-md py-2 px-3'>Search</button>
        </div>
    </nav>
  )
}

export default Navbar
