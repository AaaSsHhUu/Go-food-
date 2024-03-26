import React, { useEffect, useState,useRef } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatchCart, useCart } from "../../context/ContextReducer";
import { toast } from "react-toastify";

export default function Card({options,foodItems}) {
  let dispatch = useDispatchCart();
  let priceOptions = Object.keys(options)
  let priceRef = useRef();
  let [qty,setQty] = useState(1);
  let [size, setSize] = useState("");
  let data = useCart();
  const handleAddToCart = async () => {
    await dispatch(
        {
          type : "ADD",
          id : foodItems._id,
          name : foodItems.name,
          price : finalPrice,
          qty : qty,
          size : size
        }
      )
      const toastCondition = {
        position : 'top-center',
        autoClose : 5000,
        closeOnClick : true,
        hideProgressBar : false
      }
      toast.success("Item added to Cart",toastCondition)
      console.log(data);
  }

  let finalPrice = qty * parseInt(options[size]);

  useEffect(()=>{
    setSize(priceRef.current.value);
  },[])
  return (
    <>
      {/* Outer div */}
      <div className="bg-white rounded-md w-80 h-[26rem] mt-3 text-black overflow-hidden">
        {/* Inner div */}
        <div className="w-full h-full flex flex-col ">
          <img src={foodItems.img} className="w-full h-2/4" />
            <h5 className="font-bold text-xl my-1">{foodItems.name}</h5>
            <p className="px-2 mb-2 text-gray-700">
              {foodItems.description}
            </p>
            <div className="w-full flex flex-row justify-evenly my-1 items-center gap-3">
              <select className="mx-2 bg-green-600 text-white outline-none rounded-md" onChange={(e) => setQty(e.target.value)}>
                {Array.from(Array(6), (elem, index) => {
                  return (
                    <option key={index + 1} value={index + 1}>
                      {index + 1}
                    </option>
                  );
                })}
              </select>
              <select className="mx-2 bg-green-600 py-1 px-2 text-white outline-none rounded-md" onChange={(e) => setSize(e.target.value)} ref={priceRef}>
                {
                  priceOptions.map((data) => {
                    if(data === "_id"){
                      return ;
                    }
                    return <option key={data} value={data}>{data}</option>
                  })
                }
              </select>

              <div className="bg-green-600 py-1 px-2 text-white rounded-lg">
                ₹{finalPrice}
              </div>
            </div>
            <div>
              <button 
                className="bg-green-600 text-white w-2/4 py-2 my-2 mx-4 rounded-lg"
                onClick={handleAddToCart}
                >
                {<FaShoppingCart className="mx-auto" />}
              </button>
            </div>
          </div>
      </div>
    </>
  );
}
