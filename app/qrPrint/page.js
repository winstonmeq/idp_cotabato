

'use client'

import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation";
import axios from "axios";
import QRCode from "qrcode.react";
import { useReactToPrint } from 'react-to-print';






const QRPrintPage = () => {

    const [qrcodeData, setQrcodeData] = useState([]);
    const [searchName, setSearchName] = useState([])

    const router = useRouter();



    useEffect(() => {
          
        fetchQRCode()  
       
      }, []);


      const fetchQRCode = async () => {  
        
        try {    
    
  
          const {data} = await axios.get('/api/qrnumber');
    
          console.log('Fetched data:', data);
    
          if(data.length >= 0 ){
  
              setQrcodeData(data)
  
          } 
  
    
        } catch (error) {
    
          alert(error)
    
        }
      };


      const componentRef = useRef();

      const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        onAfterPrint: () => {
          // You can add logic to handle post-print actions here
          console.log('Print successful');
        },
        onError: (error) => {
          // Handle printing errors
          console.error('Error printing:', error);
        },
      });





    return (

        <div className="flex flex-row w-full justify-center bg-gray-100">
            
            <div className="flex flex-col">
                    <button onClick={handlePrint} className="mt-4 bg-blue-500 text-white p-2 rounded">
                        Print
                    </button>
            </div>

        <div ref={componentRef} className="flex flex-col items-center ">
        <div style={{ marginTop: '30px' }}>
          {qrcodeData.map((item, i) => (
            <div key={i} className="bg-green-800 p-8 m-2 rounded-md border border-solid border-gray-400">
              <h1 className="text-3xl font-bold mb-4 text-white text-center">IDP ID Card</h1>
              <div className="flex flex-row items-center gap-2">
                <QRCode
                  value={item.qrNumber}
                  size={200}
                  level="H"
                  includeMargin={true}
                />
            
              </div>
              <div className="text-xl text-gray-400">{item.qrNumber}</div>
            </div>
          ))}
          </div>
        </div>
      </div>
    )
}

export default QRPrintPage