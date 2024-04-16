import React, { useEffect, useRef } from "react";
import { FaTrashCan } from "react-icons/fa6";
import { FaWindowClose } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Cart({ data, dispatch, setShowCart }) {

  const cartRef = useRef();
  const navigate = useNavigate();

  const closeCart = (e) => {
    if (cartRef.current == e.target) {
        console.log(data);
      setShowCart(false);
    }
  };

  const handleRemoveCartItem = (index) => {
    dispatch({
      type : "REMOVE",
      index : index
    })
  }

  const handleCheckout = async () => {
    let userEmail = localStorage.getItem("userEmail");
    let accessToken = localStorage.getItem("accessToken");

    // If user is not logged in then login first
    if(!accessToken){
      setShowCart(false);
      navigate("/login");
      toast.error("You have to Login First",{
        position : "top-center",
        autoClose : 5000,
        closeOnClick : true,
        hideProgressBar : false,
      })
    }
    else{
        let response = await fetch(`${import.meta.env.VITE_ROOT_ROUTE}/order`, {
          method : 'POST',
          headers : {
            'Content-Type' : 'application/json'
          },
          body : JSON.stringify({
            email : userEmail,
            order_data : data,
          })
        })
      
        if(response.status === 200){
          dispatch({
            type : "DROP"
          })
          toast.success("Checked out",{
            position : 'top-center',
            autoClose : 3000,
            closeOnClick : true,
            hideProgressBar : false
          })
        }
    }
  }

  useEffect(() => {
    console.log(data);
  },[data])
  let totalPrice = data.reduce((total,food) => total + food.price , 0);

   return (
    <>
      <div
        ref={cartRef}
        onClick={closeCart}
        className="fixed inset-y-1 inset-x-0 sm:inset-2  md:inset-4 bg-opacity-40 rounded-lg flex justify-center  backdrop-blur-sm z-10"
      >
        <div className="w-full sm:w-[80%] md:w-3/4 rounded-lg bg-black bg-opacity-50 ">
          <div className="relative w-full px-4 md:px-10 pt-10 grid grid-cols-6 text-center text-white">
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

            { data.length > 0 ?
              data.map((food, index) => {
                  return (
                      <React.Fragment key={index}>
                          <div className="text-xl my-2">{index + 1}</div>
                          <div className="text-xl my-2">{food.name}</div>
                          <div className="text-xl my-2">{food.qty}</div>
                          <div className="text-xl my-2">{food.size}</div>
                          <div className="text-xl my-2">{food.price}</div>
                          <button className="w-full" onClick={() => handleRemoveCartItem(index)}>
                          {<FaTrashCan className="text-red-700 text-2xl" />}
                          </button>
                      </React.Fragment>
                  );
              }) : <h1 className="text-white font-bold text-4xl w-[200px] sm:w-[250px] md:w-[300px]">Cart is Empty</h1> 
            }
          </div>
          {data.length !== 0 &&
          <div>
            <h1 className="text-white my-6 font-bold text-3xl text-center">Total Price : {totalPrice}</h1>
            <button
              className="bg-green-600 text-white text-xl font-bold rounded-md px-4 py-2 block mx-auto"
              onClick={handleCheckout}
            >
                check out
            </button>
          </div>
          }
        </div>
      </div>
    </>
  )
  
}

export default Cart;
