import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";

const Signup = () => {
  const [userCredentials, setUserCredentials] = useState({
    name: "",
    email: "",
    password: "",
    location: "",
  });
  const navigate = useNavigate();
  const [viewPassword, setViewPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: userCredentials.name,
        email: userCredentials.email,
        password: userCredentials.password,
        location: userCredentials.location,
      }),
    });

    const json = await response.json();
    console.log(json)


    const toastOption = {
      position : "top-center",
      autoClose : 5000,
      closeOnClick : true,
      hideProgressBar : false,
    }
    if(json.success){
      toast.success("You are Registered, Login to continue", toastOption)
      navigate('/login');
    }
    else{
      toast.error("User with given email already exist",toastOption);
    }
  };

  const onChange = (e) => {
    setUserCredentials({...userCredentials,[e.target.name] : e.target.value});
  };

  return (
    <div className="bg-green-300 p-4 h-screen grid place-items-center">
      <div className="bg-white w-full sm:w-2/4 flex min-h-[60vh] py-4 rounded-lg flex-col items-center">
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col items-center"
        >
          {/* Username */}
          <div className="w-[90%] sm:w-3/4 px-4 py-2 rounded-lg">
            <label htmlFor="username" className="my-2 font-bold">
              Username
            </label>
            <br />
            <input
              type="text"
              id="username"
              name="name"
              value={userCredentials.name}
              onChange={onChange}
              placeholder="Enter Username"
              className="focus:outline-2 focus:outline-green-400 rounded-md my-2 border-2 border-none outline-none w-full bg-gray-200 px-4 py-2"
              required
            />
          </div>
          {/* Email */}
          <div className="w-[90%] sm:w-3/4 px-4 py-2 rounded-lg">
            <label htmlFor="email" className="my-2 font-bold">
              Email
            </label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              value={userCredentials.email}
              onChange={onChange}
              placeholder="Enter Email"
              className="focus:outline-2 focus:outline-green-400 rounded-md my-2 border-2 border-none outline-none w-full bg-gray-200 px-4 py-2"
              required
            />
          </div>
          {/* Password */}
          <div className="w-[90%] sm:w-3/4 px-4 py-2 rounded-lg">
            <label htmlFor="password" className="my-2 font-bold">
              Password
            </label>
            <br />
            <div className="flex items-center focus:outline-2 focus:outline-green-400 bg-gray-200 rounded-md pr-4">
              <input
                type={viewPassword ? "text" : "password"}
                id="password"
                name="password"
                value={userCredentials.password}
                onChange={onChange}
                placeholder="Enter Password"
                className="rounded-l-md my-2 border-2 border-none outline-none w-full bg-gray-200 px-4 "
                required
              />
              <div onClick={() => setViewPassword(!viewPassword)} className="text-lg cursor-pointer rounded-r-md" >{viewPassword ? <FaEye /> : <FaRegEyeSlash />}</div>
            </div>
            

          </div>
          {/* Address */}
          <div className="w-[90%] sm:w-3/4 px-4 py-2 rounded-lg">
            <label htmlFor="geolocation" className="my-2 font-bold">
              Address
            </label>
            <br />
            <input
              type="text"
              id="geolocation"
              name="location"
              value={userCredentials.location}
              onChange={onChange}
              placeholder="Enter Address"
              className="focus:outline-2 focus:outline-green-400 rounded-md my-2 border-2 border-none outline-none w-full bg-gray-200 px-4 py-2"
              required
            />
          </div>
          {/* Submit btn */}
          <div className="text-center my-4">
            <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-500">
              Sign up
            </button>
            <br />
            <Link
              to={"/login"}
              className="text-blue-600 hover:underline text-sm"
            >
              Already have an account? Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
