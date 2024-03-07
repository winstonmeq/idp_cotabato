"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";





const GenerateQRCode = () => {


  const [disasterIncident, setDisasterIncident] = useState('');

  const [region, setRegion] = useState("");
  const [province, setProvince] = useState("");
  const [municipality, setMunicipality] = useState("");
  const [barangay, setBarangay] = useState("");
  const [numbergenerate, setNumbergenerate] = useState(10)

  const router = useRouter();



  const generateRandomNumber = () => {
    const newRandomNumber = Math.floor(Math.random() * 18200) + 1; // Generates a random number between 1 and 182000
    return newRandomNumber; // Return the generated number for chaining in the loop
  };



const handleGenerate = (e) => {

  generateQR(e,numbergenerate)

}


  const generateQR =  (e, numbergenerate) => {

    for (let i = 0; i < numbergenerate; i++) {
        
     const newNum = generateRandomNumber(); // Generate a random number in each iteration
     
     addQRcode(e, disasterIncident+newNum); // Pass payload to addQRcode function and wait for it to finish
      
      
    }
  };
 
  
  const addQRcode = async (e, newNum) => {

    e.preventDefault()

    try {

        const payload = {
            disasterIncident,
            region,
            province,
            municipality,
            barangay,
            qrNumber:newNum// Use the newly generated number
          };

      const response = await axios.post('/api/qrnumber', payload);
  
      if (response.status === 200) {
        console.log('added');
      } else {
        // Handle unexpected response status codes
        console.error("Unexpected response status:", response.status);
      }
    } catch (error) {
      console.log(error);
    }

    router.push('/desktop')
  };
  

  return (
    
    <div className="flex flex-row justify-center">
    <div className="w-1/2 p-4">
      <h3 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Generate QR Code
      </h3>
      <form className="mt-8 space-y-6" onSubmit={handleGenerate}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-500 dark:text-white">
              Incident
            </label>
            <select
              required
              value={disasterIncident}
              onChange={(e) => setDisasterIncident(e.target.value)}
              className="mt-1 block w-full border-gray-300 p-2 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:border-indigo-300"
            >
              <option value="">Select</option>
              <option value="Landslide">Landslide</option>
              <option value="Flood">Flood</option>
              <option value="Fire">Fire</option>
            </select>
          </div>
  
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-500 dark:text-white">
              Region
            </label>
            <select
              required
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className="mt-1 block w-full border-gray-300 p-2 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:border-indigo-300"
            >
              <option value="">Select</option>
              <option value="XII">XII</option>
            </select>
          </div>
  
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-500 dark:text-white">
              Province
            </label>
            <select
              required
              value={province}
              onChange={(e) => setProvince(e.target.value)}
              className="mt-1 block w-full border-gray-300 p-2 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:border-indigo-300"
            >
              <option value="">Select</option>
              <option value="Cotabato">Cotabato</option>
            </select>
          </div>
  
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-500 dark:text-white">
              City/Municipality
            </label>
            <select
              required
              value={municipality}
              onChange={(e) => setMunicipality(e.target.value)}
              className="mt-1 block w-full border-gray-300 p-2 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:border-indigo-300"
            >
              <option value="">Select</option>
              <option value="Kidapawan City">Kidapawan City</option>
              <option value="Matalam">Matalam</option>
              <option value="Antipas">Antipas</option>
            </select>
          </div>
  
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-500 dark:text-white">
              Barangay
            </label>
            <select
              required
              value={barangay}
              onChange={(e) => setBarangay(e.target.value)}
              className="mt-1 block w-full border-gray-300 p-2 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:border-indigo-300"
            >
              <option value="">Select</option>
              <option value="Amas">Amas</option>
              <option value="Poblacion">Poblacion</option>
              <option value="Malatab">Malatab</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-500 dark:text-white">
              How Many Card?
            </label>
            <select
              required
              value={numbergenerate}
              onChange={(e) => setNumbergenerate(e.target.value)}
              className="mt-1 block w-full border-gray-300 p-2 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:border-indigo-300"
            >
              <option value="">Select</option>
              <option value="100">100</option>
              <option value="300">300</option>
              <option value="500">500</option>
            </select>
          </div>

        </div>
  
        <div>
          <div className="p-6">
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Generate
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
  
   
  );
};

export default GenerateQRCode;
