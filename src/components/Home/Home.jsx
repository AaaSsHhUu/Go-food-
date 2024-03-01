import React from 'react'
import {Card, DefaultCarousel} from '../index';
 
const Home = () => {

  let slides = [
     "https://source.unsplash.com/random/2100x600/?burger",
     "https://source.unsplash.com/random/2100x600/?barbeque",
     "https://source.unsplash.com/random/2100x600/?pizza",
  ]
  return (
      <>
        <div className=' from-gray-500 to-gray-500'>
          <div className='w-full flex justify-center'>
            <DefaultCarousel slides={slides} />
          </div>
        </div>
        <Card />
      </>
  )
}

export default Home
