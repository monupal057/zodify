/* eslint-disable react/no-unknown-property */
import React from 'react'
import Layout from "../../components/Layout/Layout"
import login from "../../assets/login.png"
import { Link } from "react-router-dom"

const SignUp = () => {
  return (
    <Layout>
    <div>
       <div className="container px-5 py-24 mx-auto flex ">
    <div className=" mx-auto bg-green-500 rounded-lg p-8 flex flex-col mt-8 md:mt-0  shadow-md text-white w-[500px]">
      <h2 className="text-white text-4xl mb-5 font-medium title-font">
        Sign Up
      </h2>

      <div className="relative mb-4">
        <label for="name" className="leading-7 text-sm">
          Name
          </label>
        <input type="text"  name="na" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      
      <div className="relative mb-4">
        <label for="email" className="leading-7 text-sm">
          Email
          </label>
        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label for="message" className="leading-7 text-sm">
          Password
          </label>
        <input type="password" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
        Login
        </button>
      <p className="text-xs text-gray-500 mt-5">
       Do you  have an account?
       <Link to="/SignUp">
       <button className=" cursor-pointer hover:text-blue-300">
        Sign Up
       </button>
       </Link>
        </p>
    </div>
  </div>
    </div>
    </Layout>
  )
}

export default SignUp
