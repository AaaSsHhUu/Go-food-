import React from 'react'

const Signup = () => {
  return (
    <div className='bg-green-300 h-screen grid place-items-center'>
        <div className='bg-white w-2/4 flex flex-col items-center'>
            <div>
                <label htmlFor="username">Username</label>
                <input type="text" id='username' placeholder='Enter Username' required />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" id='email' placeholder='Enter Email' required />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" id='password' placeholder='Enter Password' required />
            </div>
        </div> 
    </div>
  )
}

export default Signup
