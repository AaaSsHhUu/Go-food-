import React, { useEffect, useRef } from "react";
import { useCart, useDispatchCart } from "../../context/ContextReducer";
import { FaTrashCan } from "react-icons/fa6";
import { FaWindowClose } from "react-icons/fa";

function Cart({ setShowCart }) {
  let data = useCart();
  let dispatch = useDispatchCart();

  const cartRef = useRef();

  const closeCart = (e) => {
    if (cartRef.current == e.target) {
        console.log(data);
      setShowCart(false);
    }
  };

  useEffect(() => {
    console.log(data);
  },[data])
//   let totalPrice = data.reduce((total,food) => total + food.price , 0);

   return (
    <div
      ref={cartRef}
      onClick={closeCart}
      className="fixed inset-y-1 inset-x-0 sm:inset-2  md:inset-4 bg-opacity-40 rounded-lg flex justify-center  backdrop-blur-sm z-10"
    >
      <div className="w-full sm:w-[80%] md:w-3/4 rounded-lg bg-black bg-opacity-50 ">
        <div className="relative w-full px-4 md:px-10 pt-10 grid grid-cols-6 text-center">
          <button
            className="absolute -top-3 right-4"
            onClick={() => setShowCart(false)}
          >
            <FaWindowClose size={"2.5rem"} color="red" />
          </button>

          <div className="heading">S. no.</div>
          <div className="heading">Name</div>
          <div className="heading">Quantity</div>
          <div className="heading">Option</div>
          <div className="heading">Amount</div>
          <div></div>

          { data ?
            data.map((food, index) => {
                return (
                    <React.Fragment key={index + 1}>
                        <div className="text-xl my-2">{index + 1}</div>
                        <div className="text-xl my-2">{food.name}</div>
                        <div className="text-xl my-2">{food.qty}</div>
                        <div className="text-xl my-2">{food.size}</div>
                        <div className="text-xl my-2">{food.price}</div>
                        <button className="w-full">
                        {<FaTrashCan className="text-red-700 text-2xl" />}
                        </button>
                    </React.Fragment>
                );
            }) : <h1 className="text-white font-bold text-4xl w-[200px] sm:w-[250px] md:w-[300px]">Cart is Empty</h1> 
          }
        </div>
      </div>
    </div>

   
   


  )
  
}

export default Cart;
