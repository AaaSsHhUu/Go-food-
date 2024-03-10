import React from "react";

export default function Card({name,img,desc,options}) {

  let option = options;
  let priceOptions = Object.keys(option)

  return (
    <>
      {/* Outer div */}
      <div className="bg-white rounded-md w-80 h-[24rem] mt-3 text-black overflow-hidden">
        {/* Inner div */}
        <div className="w-full h-full flex flex-col ">
          <img src={img} className="w-full h-2/4" />
            <h5 className="font-bold text-xl my-2">{name}</h5>
            <p className="px-2 mb-2 text-gray-700">
              {desc}
            </p>
            <div className="w-full flex flex-row justify-evenly my-2 items-center gap-3">
              <select className="mx-2 bg-green-600 text-white outline-none rounded-md">
                {Array.from(Array(6), (elem, index) => {
                  return (
                    <option key={index + 1} value={index + 1}>
                      {index + 1}
                    </option>
                  );
                })}
              </select>
              <select className="mx-2 bg-green-600 py-1 px-2 text-white outline-none rounded-md">
                {
                  priceOptions.map((data) => {
                    return <option key={data} value={data}>{data}</option>
                  })
                }
              </select>

              <div className="bg-green-600 py-1 px-2 text-white rounded-lg">
                Total Price
              </div>
            </div>
          </div>
      </div>
    </>
  );
}
