import React from 'react'

function Contact() {
  return (
    <div className='w-full h-[75vh] flex flex-col md:flex-row items-center justify-center'>
        {/* Left section */}
        <div className='w-2/4 flex flex-col items-center text-white px-8'>
            <h1 className='text-5xl font-bold my-3'>Contact Us</h1>
            <p className='text-xl italic'>Need to get in touch with us? Fill out the form given with your inquiry.</p>
        </div>
        {/* Right section */}
        <div className='w-2/4 border-white'>
            <form onClick={(e) => e.preventDefault()} className='w-3/4 bg-white h-96 mx-auto rounded-lg py-4 px-6' >
                <div className='flex flex-col'>
                    <label htmlFor="username">Username</label>
                    <input type="text" id='username' placeholder='Enter username' className='w-[80%] px-4 py-2' />
                </div>
            </form>
        </div>
    </div>
  )
}

export default Contact
