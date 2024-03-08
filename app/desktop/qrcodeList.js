

'use client'

import Link from "next/link"
import { useState, useEffect } from "react"
import DataTable from "react-data-table-component";
import { useRouter } from "next/navigation";
import axios from "axios";
import Wizard from "./wizard";






const QRCodeTable = ({dafacModalOpen}) => {

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






    const columns = [

        {
            name: "#",
            selector: (row) => (
                <div className="justify-center text-sm">{row.rowNum}</div>
            ),
            // maxWidth: "25px",
            wrap: true,
            width: "4rem"
            // cell: (d) => (
            //   <div>
            //     {d.rowNum}
            //   </div>
            // ),
        },

        {
            name: "QRCode Number",
            selector: (row) => (
                <div className="justify-center text-sm">{row.qrNumber}</div>
            ),

        },


        {
            name: "Region",
            selector: (row) => (
                <div className="justify-center text-sm">{row.region}</div>
            ),

        },

        {
            name: "Province",
            selector: (row) => (
                <div className="justify-center text-sm">{row.province}</div>
            ),
        },

        {
            name: "Municipality",
            selector: (row) => row.municipality,
        },

        {
            name: "Barangay",
            selector: (row) => row.barangay,

            
        },

        {
            name: "Incident",
            selector: (row) => row.disasterIncident,

            
        },

     

        {
            name: "Action",
            selector: (row) =>                

                    <div className="p-2">
                     <Wizard incidentData={row} />
                    </div>
                 
            
        },
    ];


    // const totalDamageCost = buildingData.reduce((acc, row) => acc + parseFloat(row.damageCost), 0);

    // const totalRow = {
    //     rowNum: 'Total',
    //     damageCost: totalDamageCost,
    //     // Add other properties as needed based on your columns
    //   };
      
    //   const dataWithTotal = [...buildingData, totalRow];



    return (

        <div>

            <div className="flex flex-row w-full justify-end p-2">
                <div className="w-full text-right pr-4 items-center">
                    <input
                    type="text"
                    value={''}
                    placeholder=" search"
                    className="rounded"
                    onChange={(e) =>setSearchName()}
                    />
                </div>
                <div className="w-1/4 ">
                    <button
                    className="flex text-sm text-red-100 px-3 py-1 rounded-full bg-black hover:bg-gray-700 focus:text-red"
                    >
                        Search
                    </button>
                </div>

              
            </div>


            <div>                

                <DataTable
                    columns={columns}
                    data={qrcodeData}
                    striped
                    highlightOnHover
                    defaultSortFieldId="createdAt"
                    pagination={true}
                    paginationPerpage={10}
                    
                />

            </div>
        </div>
    )
}

export default QRCodeTable