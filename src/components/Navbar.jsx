import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-gray-700 text-white py-4 px-8 w-screen flex flex-col md:flex-row items-center'>
        <div className='font-bold text-2xl'>
            NAVBAR
        </div>
        <div className='ml-8 '>
            <ul className='flex flex-col md:flex-row text-white gap-3 list-none items-center'>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/">About</a>
                </li>
                <li>
                    <a href="/">Contact</a>
                </li>
                <li>
                    <a href="/">Blog</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
