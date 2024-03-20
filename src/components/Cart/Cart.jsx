import React from 'react'
import { useCart,useDispatchCart } from '../../context/ContextReducer'
import { FaTrashCan } from "react-icons/fa6";
import { FaWindowClose } from "react-icons/fa";


function Cart({setShowCart}) {
    let data = useCart() || [];
    let dispatch = useDispatchCart();


    
    
    // let totalPrice = data.reduce((total,food) => total + food.price , 0);
     return(
            <div className='fixed inset-0 sm:inset-x-8 sm:inset-y-10 md:inset-x-40 md:inset-y-20 border-white bg-opacity-40 rounded-lg border-2 bg-white backdrop-blur-sm z-10'>
                <div>
                    <button className='absolute right-4 -top-3' onClick={() => setShowCart(false)}><FaWindowClose size={"2.5rem"} color='red' /></button>
                    <div className='w-full px-10 pt-10 grid grid-cols-6 text-white text-center'>
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
