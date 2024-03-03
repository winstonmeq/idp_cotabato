
'use client'
import { useState } from "react";

const RegistrationPage = ({incidentData, closeModal, data, onNext}) => {

    const [dafacData, setDafacData] = useState(data);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setDafacData({
        ...dafacData,
        [name]: value,
      });



    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission logic for Step 1
      onNext(dafacData);

    };
  
      return (
        <div className="flex flex-row justify-center">
    <div className="w-full p-4">
    <label>{incidentData._id}</label>

      <h3 className="mt-2 text-center text-1xl font-extrabold text-gray-900">
        DISASTER ASSITANCE FAMILY ACCESS CARD(DAFAC)
      </h3>

      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-2">
          <div className='w-full'>
            <label className="block mb-2 text-sm font-medium text-gray-500 dark:text-white">
              Surname
            </label>
           
          <input
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            name="surName"
            value={dafacData.surName}
            onChange={handleChange}
            required
          />

          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-500 dark:text-white">
              First Name
            </label>
           
          <input
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            name="fName"
            value={dafacData.fName}
            onChange={handleChange}
            required
          />

          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-500 dark:text-white">
             Middle Name
            </label>
           
          <input
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            name="mName"
            value={dafacData.mName}
            onChange={handleChange}
            required
          />

          </div>
  
        
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-500 dark:text-white">
             Age
            </label>
           
          <input
            className="w-1/4 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            name="age"
            value={dafacData.age}
            onChange={handleChange}
            required
          />

          </div>
  
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-500 dark:text-white">
             Gender
            </label>
            <select
              required
              name='gender'
              value={dafacData.gender}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 p-2 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:border-indigo-300"
            >
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
  
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-500 dark:text-white">
              Date of Birth
            </label>
            <input
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            type="date"
            name="dob"
            value={dafacData.dob}
            onChange={handleChange}
            required
          />

          </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-500 dark:text-white">
             Occupation
            </label>
          <input
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            name="occupation"
            value={dafacData.occupation}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-500 dark:text-white">
             Monthly Income
            </label>
          <input
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            name="monthlyIncome"
            value={dafacData.monthlyIncome}
            onChange={handleChange}
            required
          />
        </div>

        </div>
  
        <div className='flex flex-row w-full justify-between gap-2'>
          <div className="flex-col w-full">
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Next
            </button>
          </div>

          <div className='flex-col w-full ' >
            <button
              type="submit"
              onClick={closeModal}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Close
            </button>
          </div>
          
        </div>
      </form>

    </div>
  </div>
      );

}

export default RegistrationPage


