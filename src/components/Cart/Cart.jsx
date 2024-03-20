import React from 'react'
import { useCart,useDispatchCart } from '../../context/ContextReducer'
import { FaTrashCan } from "react-icons/fa6";
import { FaWindowClose } from "react-icons/fa";


function Cart({setShowCart}) {
    let data = useCart() || [];
    let dispatch = useDispatchCart();


    
    
    // let totalPrice = data.reduce((total,food) => total + food.price , 0);
     return(
            <div className='fixed inset-4 bg-opacity-40 rounded-lg flex justify-center  backdrop-blur-sm z-10'>
                <div className='w-3/4   rounded-lg bg-black bg-opacity-50 '>
                    <div className='relative w-full px-10 pt-10 grid grid-cols-6 text-center'>
                        <button className='absolute -top-3 right-4' onClick={() => setShowCart(false)}><FaWindowClose size={"2.5rem"} color='red' /></button>
                        <div className='heading'>S. no.</div>
                        <div className='heading'>Name</div>
                        <div className='heading'>Quantity</div>
                        <div className='heading'>Option</div>
                        <div className='heading'>Amount</div>
                        <div></div>
                        {data.map((food, index) => {
                            if(data.length === 0){
                                return (
                                    <div>
                                        <h1>Cart is Empty</h1>
                                    </div>
                                )
                            }
                            else{
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
                            }
                        })}
                    </div>
                </div>
            </div>
        )
    // }
}

export default Cart
