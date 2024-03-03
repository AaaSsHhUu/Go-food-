import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='bg-green-300 p-4 h-screen grid place-items-center'>
        <div className='bg-white w-full sm:w-2/4 flex min-h-[60vh] py-4 rounded-lg flex-col items-center'>
            <div className='w-[90%] sm:w-3/4 px-4 py-2 rounded-lg'>
                <label htmlFor="username" className='my-2 font-bold'>Username</label>
                <br />
                <input type="text" id='username' placeholder='Enter Username' className='focus:outline-2 focus:outline-green-400 rounded-md my-2 border-2 border-none outline-none w-full bg-gray-200 px-4 py-2' required />
            </div>

            <div className='w-[90%] sm:w-3/4 px-4 py-2 rounded-lg'>
                <label htmlFor="email" className='my-2 font-bold'>Email</label>
                <br />
                <input type="email" id='email' placeholder='Enter Email' className='focus:outline-2 focus:outline-green-400 rounded-md my-2 border-2 border-none outline-none w-full bg-gray-200 px-4 py-2' required />
            </div>

            <div className='w-[90%] sm:w-3/4 px-4 py-2 rounded-lg'>
                <label htmlFor="password" className='my-2 font-bold'>Password</label>
                <br />
                <input type="password" id='password' placeholder='Enter Password' className='focus:outline-2 focus:outline-green-400 rounded-md my-2 border-2 border-none outline-none w-full bg-gray-200 px-4 py-2' required />
            </div>
            <div className='text-center my-4'>
                <button className='bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-500'>Sign up</button>
                <br />
                <Link to={"/login"} className='text-blue-600 hover:underline text-sm'>Already have an account? Login</Link>
            </div>
        </div> 
    </div>
  )
}

export default Signup
