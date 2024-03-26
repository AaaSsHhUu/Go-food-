import React, { useEffect, useState } from "react";

function MyOrder() {
  const [orderData, setOrderData] = useState([]);
  const fetchOrderData = async () => {
    let userEmail = localStorage.getItem("userEmail");
    let response = await fetch("/api/order/user_orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: userEmail,
      }),
    });
    let data = await response.json();
    // console.log(data);
    setOrderData(data.reverse());
    // console.log(orderData)
  };

  useEffect(() => {
     fetchOrderData()
  }, []);

  return (
    <>
      {
        orderData.length === 0 ? <h1 className="text-white font-bold text-3xl text-center">No data found</h1> 
        : 
        orderData.map((order) => {
          return order.map((data,index) => {
            return data.Order_date ? 
                      <h1 key={index} className="text-xl text-white text-center font-bold">Date : {data.Order_date}</h1>
                    :
                          <div key={index} className="flex w-2/4 flex-col items-center rounded-lg text-white px-4 py-2 mx-auto bg-gray-500 my-4">
                              <p className="text-lg font-bold">{data.name}</p>
                              <p>Quantity : {data.qty}</p>
                              <p>Size : {data.size}</p>
                              <p>Price : ₹{data.price}</p>
                          </div>
          })
        })
      }
    </>
  );
}

export default MyOrder;
