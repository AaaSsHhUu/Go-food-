import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: userCredentials.email,
        password: userCredentials.password,
      }),
    });

    const json = await response.json();
    console.log(json);

    if(!json.success){
        alert("Enter Valid credentials");
    }
    if(json.success){
        navigate("/");
    }
  };

  const onChange = (e)=>{
        setUserCredentials({...userCredentials,[e.target.name] : e.target.value})
  }

  return (
    <div className="bg-green-300 p-4 h-screen grid place-items-center">
      <div className="bg-white w-full sm:w-2/4 flex min-h-[50vh] py-4 rounded-lg flex-col items-center">
        <form
          className="w-full flex flex-col items-center"
          onSubmit={handleSubmit}
        >
          <div className="w-[90%] sm:w-3/4 px-4 py-2 rounded-lg">
            <label htmlFor="email" className="my-2 font-bold">
              Email
            </label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Email"
              className="focus:outline-2 focus:outline-green-400 rounded-md my-2 border-2 border-none outline-none w-full bg-gray-200 px-4 py-2"
              required
              value={userCredentials.email}
              onChange={onChange}
            />
          </div>

          <div className="w-[90%] sm:w-3/4 px-4 py-2 rounded-lg">
            <label htmlFor="password" className="my-2 font-bold">
              Password
            </label>
            <br />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter Password"
              className="focus:outline-2 focus:outline-green-400 rounded-md my-2 border-2 border-none outline-none w-full bg-gray-200 px-4 py-2"
              required
              value={userCredentials.password}
              onChange={onChange}
            />
          </div>
          <div className="text-center my-4">
            <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-500">
              Login
            </button>
            <br />
            <Link
              to={"/signup"}
              className="text-blue-600 hover:underline text-sm"
            >
              Don't have an account? create a new one
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
