import React, { useEffect, useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

function DefaultCarousel({ slides }) {

    const [current, setCurrent] = useState(0);

    function previousSlide(){
        if(current === 0)  setCurrent(slides.length - 1);
        else setCurrent(current - 1);
    }

    function nextSlide(){
        if(current === slides.length - 1) setCurrent(0);
        else setCurrent(current + 1);
    }

    useEffect(()=>{
      const intervalId = setInterval(()=>{
        nextSlide()
      },5000)

      return () => clearInterval(intervalId)
    },[current])

  return (
    <>
      <div className="overflow-hidden relative w-full">
        <div className={`flex fade transition ease-out duration-400 object-cover`} style={{transform : `translateX(-${current * 100}%)`}}>
            {slides.map((s, i) => {
            return <img src={s} key={i} />;
            })}
        </div>
        <div className="text-white flex justify-between items-center absolute top-0 h-full w-full px-4 text-2xl">
            <button onClick={previousSlide}><FaArrowCircleLeft /></button>
            <button onClick={nextSlide}><FaArrowCircleRight /></button>
        </div>

        <div className="absolute bottom-0 py-4 flex gap-3 justify-center w-full">
            {slides.map((s,i) => {
                return (
                    <div onClick={()=>{setCurrent(i)}} key={i} className={`cursor-pointer rounded-full w-3 h-3 ${i===current ? "bg-white" : "bg-gray-400"}`}></div>
                )
            })}
        </div>
      </div>
    </>
  );
}

export default DefaultCarousel;
