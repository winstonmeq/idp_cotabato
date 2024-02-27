

'use client'
import { useState } from 'react';
import axios from 'axios';
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

const RegistrationForm = () => {


//   const { data: session } = useSession({
//     required: true,
//     onUnauthenticated() {
//         redirect('/api/auth/signin?callbackUrl=/client')
//     }
// })



  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {

    e.preventDefault()
    console.log(userData);
    // Perform registration logic here

    try {
      const response = await axios.post('/api/user', userData);

      if (response.status === 200) {

        alert(response.data);

        
        
      } else {
        // Handle unexpected response status codes
        console.error("Unexpected response status:", response.status);
      }      
      
    } catch (error) {

      console.error('Error saving data:', error);

    }



  };

  return (
    <div className="max-w-md mx-auto mt-8 p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Login Registration</h2>
      <form onSubmit={handleSubmit}>
          

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email:
          </label>
          <input
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            type="email"
            name="email"
            value={userData.email}
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
            name="password"
            value={userData.password}
            onChange={handleChange}
          />
        </div>

        <button
          className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-black-600"
          type="submit"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
