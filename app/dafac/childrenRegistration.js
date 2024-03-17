
'use client'
import { useState } from "react";
import axios from "axios";

const ChildrenRegistration = ({onClose}) => {

    const [childrenData, setChildrenData] = useState({
        familyMember: '',
        relationship: '',
        age: 0,
        sex: '',
        education: '',
        skills: '',
        remarks: ''
      });
    
      
    
      const handleChange = (e) => {

        const { name, value } = e.target;

        setChildrenData((prevData) => ({
          ...prevData,
          [name]: value,
        }));

      };


      const handleSubmit = async (e) => {

        e.preventDefault()
        
    
        try {
          const response = await axios.post('/api/children', childrenData);
    
          if (response.status === 200) {
    
            // alert(response.data);
        
           onClose()
    
            
          } else {
            // Handle unexpected response status codes
            console.error("Unexpected response status:", response.status);
          }      
          
        } catch (error) {
    
          console.error('Error saving data:', error);
    
        }
    
    
    
      };

 
  
      return (
        <div className="flex flex-row justify-center">
    <div className="w-full p-4">

      <h3 className="mt-2 text-center text-1xl font-extrabold text-gray-900">
            FAMILY INFORMATION
      </h3>

      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-2">
          <div className='w-full'>
            <label className="block mb-2 text-sm font-medium text-gray-500 dark:text-white">
              Family Member
            </label>
           
          <input
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            name="familyMember"
            value={childrenData.familyMember}
            onChange={handleChange}
            required
          />

          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-500 dark:text-white">
              Relation to Family Head
            </label>
           
          <input
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            name="relationship"
            value={childrenData.relationship}
            onChange={handleChange}
            required
          />

          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-500 dark:text-white">
             Age
            </label>
           
          <input
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            type="number"
            name="age"
            value={childrenData.age}
            onChange={handleChange}
            required
          />

          </div>
  
        
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-500 dark:text-white">
             Sex
            </label>
           
          <input
            className="w-1/4 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            name="sex"
            value={childrenData.sex}
            onChange={handleChange}
            required
          />

          </div>
  
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-500 dark:text-white">
             Educational Attainment
            </label>
            <input
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            name="education"
            value={childrenData.education}
            onChange={handleChange}
            required
          />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-500 dark:text-white">
             Skills
            </label>
            <input
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            name="skills"
            value={childrenData.skills}
            onChange={handleChange}
            required
          />
          </div>
  
  
      

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-500 dark:text-white">
            Remarks
            </label>
          <input
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            name="remarks"
            value={childrenData.remarks}
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
              Save
            </button>
          </div>

    
          
        </div>
      </form>
      <div className='flex-col w-full ' >
            <button
              type="submit"
              onClick={onClose}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Close
            </button>
          </div>
    </div>
  </div>
      );

}

export default ChildrenRegistration


