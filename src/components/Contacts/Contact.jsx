import React, { useState } from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

function Contact() {
  const [info, setInfo] = useState({
    email: "",
    query: "",
  });

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="w-full h-[75vh] flex flex-col md:flex-row items-center justify-center">
      {/* Left section */}
      <div className="w-2/4 flex flex-col items-center text-white px-8">
        <h1 className="text-5xl font-bold my-3">Contact Us</h1>
        <p className="text-xl italic">
          Need to get in touch with us? Fill out the form given with your
          inquiry.
        </p>
        <div className="mt-8 flex items-center gap-3">
            <a target="_blank" href="https://www.linkedin.com/in/ashunegi510/" className="hover:text-blue-700 flex flex-col items-center">
                <FaLinkedin className="text-3xl" />
                <p className="text-sm">Linkedin</p>
            </a>
            <a target="_blank" href="https://github.com/AaaSsHhUu" className="hover:text-black flex flex-col items-center">
                <FaGithub className="text-3xl" />
                <p  className="text-sm">Github</p>
            </a>
            <a target="_blank" href="https://discord.com/" className="hover:text-[#5764f1] flex flex-col items-center">
                <FaDiscord className="text-3xl" />
                <p className="text-sm">Discord</p>
            </a>
        </div>
      </div>
      {/* Right section */}
      <div className="w-2/4 border-white">
        <form
          onSubmit={handleSubmit}
          className="w-3/4 bg-white h-96 mx-auto rounded-lg"
        >
          <div className="flex flex-col px-8 py-6 items-center">
            <div className="w-full my-3">
                <label className="font-bold" htmlFor="email">Email</label>
                <br />
                <input
                type="email"
                className="px-4 py-2 w-full bg-gray-300 focus:outline-green-600 rounded-md mt-2"
                id="email"
                name="email"
                placeholder="Enter Email"
                value={info.username}
                onChange={handleChange}
                required
                />
            </div>

            <div className="w-full my-3">
                <label className="font-bold" htmlFor="query">Query</label>
                <br />
                <textarea
                type="text"
                rows={8}
                className="px-4 py-2 w-full bg-gray-300 max-h-32 focus:outline-green-600 rounded-md mt-2"
                id="query"
                name="query"
                placeholder="Enter query"
                value={info.query}
                onChange={handleChange}
                required
                />
            </div>

            <div>
                <button className="bg-green-500 text-white px-4 py-1 rounded-md mt-6 hover:bg-green-700 hover:outline-green-500">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
