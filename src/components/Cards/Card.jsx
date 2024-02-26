import React from "react";

export default function Card() {
  return (
    <>
      <div className="bg-white rounded-md m-3 w-80 h-56 mt-3">
        <div className="w-80 max-h-96 m-3 flex flex-col">
          <img src="" className="w-full" />
          <div className="">
            <h5 className="font-bold text-xl">Card Title</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
              sed? Aliquid quod modi perferendis? Error.
            </p>
            <div className="w-full flex flex-row items-center gap-3">
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
                <option key={1} value="half">
                  Half
                </option>
                <option key={2} value="full">
                  Full
                </option>
              </select>

              <div className="bg-green-600 py-1 px-2 text-white rounded-lg">
                Total Price
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
