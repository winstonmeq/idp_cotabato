

'use client'
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from "next/navigation";
import Modal from 'react-modal';


const DafacRegistration = ({incidentData}) => {

  const router = useRouter();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  

  const customStyles = {
    content: {
      width: '80%', // Adjust the width as needed
      height: '80%', // Adjust the height as needed
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  const [dafacData, setDafacData] = useState({
    surName: '',
    fName: '',
    mName:'',
    gender:'',
    age:'',
    dob:'',
    occupation:'',
    monthlyIncome:'',
    fourP:false,
    NHTS:false,
    ipType:'',
    pwd:false,
    sc:false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDafacData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {

    e.preventDefault()
   

    try {
      const response = await axios.post('/api/dafac', userData);

      if (response.status === 200) {

        alert(response.data);
    
        router.push('/')

        
      } else {
        // Handle unexpected response status codes
        console.error("Unexpected response status:", response.status);
      }      
      
    } catch (error) {

      console.error('Error saving data:', error);

    }



  };

  return (

    <div>
         <button className="flex text-sm text-red-100 px-3 py-1 rounded-full bg-red-500 hover:bg-red-800 focus:shadow-outline-red"
 
         onClick={openModal}>Add
         
         </button>

<Modal
  isOpen={modalIsOpen}
  onRequestClose={closeModal}
  style={customStyles}
>
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
          />

          </div>
  
        
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-500 dark:text-white">
             Age
            </label>
           
          <input
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            name="age"
            value={dafacData.age}
            onChange={handleChange}
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
          />
        </div>

        </div>
  
        <div className='flex flex-row w-full justify-between gap-2'>
          <div className="flex-col w-full">
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Continue
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
</Modal>
    </div>
  
  
  );
};

export default DafacRegistration;
