import React, { useContext, useEffect, useState } from 'react'
import {Card, DefaultCarousel} from '../index';
import NavContext from '../../context/NavContext';

const Home = () => {

  const {searchVal} = useContext(NavContext);

  let slides = [
     "https://source.unsplash.com/random/2100x600/?burger",
     "https://source.unsplash.com/random/2100x600/?barbeque",
     "https://source.unsplash.com/random/2100x600/?pizza",
  ]

  const [foodCategory,setFoodCategory] = useState([]);
  const [foodItem,setFoodItem] = useState([]);

  const loadData = async () => {
    try{
      let response = await fetch("/api/data/foodData",{
        method : "POST",
        headers : {
          "Content-Type" : "application/json"
        }
      })
      response = await response.json();
      console.log(response[0],response[1]);

      setFoodItem(response[0])
      setFoodCategory(response[1])
    }catch(err){
      console.log(err);
    }
  }

  useEffect(()=>{
    loadData();
  },[])

  return (
      <>
        <div className=' from-gray-500 to-gray-500'>
          {/* Carousel */}
          <div className='w-full hidden md:flex justify-center'>
            <DefaultCarousel slides={slides} />
          </div>
          {/* Food Data from backend */}
          <div className='text-white text-center'>
            {
              (foodCategory.length > 0) ? foodCategory.map((category) => {
                return (
                  <div className=''>
                    <div key={category._id} className='text-4xl font-bold my-8 title shadow-lg pb-4 '>{category.CategoryName}</div>
                    
                      <div className='flex flex-col sm:flex-row flex-wrap gap-2'>
                      {
                          (foodItem.length > 0) ? foodItem.filter((item) => (item.CategoryName === category.CategoryName && item.name.toLowerCase().includes(searchVal)))
                            .map((food) => {
                              return (
                                <div key={food._id} className='mx-auto cursor-pointer'>
                                  <Card foodItems = {food} options= {food.options[0]} />  
                                </div>
                              )
                            })
                          : 
                          <div>Data not Found</div>
                      }
                      </div>
                  </div>
                )
              })
              :
              <div>Data Not Found</div>
            }
          </div>
        </div>
      </>
  )
}

export default Home
