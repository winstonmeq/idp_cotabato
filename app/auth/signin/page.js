
'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { signIn } from "next-auth/react";


const LoginForm = () => {


  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  

  useEffect(() => {
    setFormData((prevData) => ({ ...prevData })); // Ensure autofill values are in state
  }, []);



  const handleChange = (e) => {
    e.preventDefault()

    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await signIn("credentials", {
        email: formData.email,
        password: formData.password,
        redirect: true,
        callbackUrl: "/desktop",
      });


  };

  return (

    <div className='w-full h-screen'>
    <div className='flex'>
    <div className="max-w-md mx-auto mt-8 p-8 bg-gray-100 border-black border-solid shadow-xl rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">User Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email:
          </label>
          <input
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password:
          </label>
          <input
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <button
          className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-black mr-4"
          type="submit"
        >
          Login
        </button>

        <Link href="/register">
          <div className="text-black-500 m-4 hover:underline focus:outline-none">
            Register here.
          </div>
        </Link>
      </form>
    </div>
    </div>
    </div>
  );
};

export default LoginForm;
