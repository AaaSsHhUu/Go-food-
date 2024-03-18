import React from 'react'
import { useCart,useDispatchCart } from '../../context/ContextReducer'
import { FaTrashCan } from "react-icons/fa6";

function Cart() {
    let data = useCart();
    let dispatch = useDispatchCart();


    if(data.length === 0){
        return (
          <div className='text-6xl text-white font-bold text-center pt-20 h-[75vh]'>
             Cart is Empty !!!  
          </div>
        )
    }
    else{
        let totalPrice = data.reduce((total,food) => total + food.price , 0);
        return(
            <div className='w-full px-10 pt-10 grid grid-cols-6 text-white text-center'>
                <div className='heading'>S. no.</div>
                <div className='heading'>Name</div>
                <div className='heading'>Quantity</div>
                <div className='heading'>Option</div>
                <div className='heading'>Amount</div>
                <div></div>
                {data.map((food, index) => {
                    return (
                        <React.Fragment key={index+1}>
                            <div className='text-xl my-2'>{index + 1}</div>
                            <div className='text-xl my-2'>{food.name}</div>
                            <div className='text-xl my-2'>{food.qty}</div>
                            <div className='text-xl my-2'>{food.size}</div>
                            <div className='text-xl my-2'>{food.price}</div>
                            <button className='w-full'>{<FaTrashCan className='text-red-700 text-2xl'/>}</button>
                        </React.Fragment>
                    )
                })}
            </div>
        )
    }
}

export default Cart
