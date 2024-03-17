

'use client'

import { useState, useEffect } from "react"
import DataTable from "react-data-table-component";
import axios from "axios";
import ChildrenRegistration from '../dafac/childrenRegistration'




const DafacList = ({lastName,firstName}) => {

    const [childrenData, setChildrenData] = useState([]);
    const [showChildRegistration, setShowChildRegistration] = useState(false)
    const [showChildList, setShowChildList] = useState(true)




    const handleShowChildRegistration = () => {
        setShowChildRegistration(true)

        setShowChildList(false)
    }

    const handleShowChildList = () => {
        setShowChildList(true)

        setShowChildRegistration(false)
        //fetchChildren()

    }




    useEffect(() => {


       // fetchChildren(lastName, firstName)
        console.log('check lastname',lastName, firstName)

    }, [lastName, firstName]);




    const fetchChildren = async (lName, fName) => {

        try {

            const payload = {lastName:lName, firstName:fName}

            const { data } = await axios.post('/api/children/code', payload);

            console.log('Fetched data:', data);

            if (data.length >= 0) {

                setChildrenData(data)

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
            name: "Family Member",
            selector: (row) => (
                <div className="justify-center text-sm">{row.familyMember}</div>
            ),

        },


        {
            name: "Relationship",
            selector: (row) => (
                <div className="justify-center text-sm">{row.relationship}</div>
            ),

        },

        {
            name: "Age",
            selector: (row) => (
                <div className="justify-center text-sm">{row.age}</div>
            ),
        },

        {
            name: "Sex",
            selector: (row) => row.sex,
        },

        {
            name: "Education Level",
            selector: (row) => row.education,


        },

        {
            name: "Skills",
            selector: (row) => row.skills,


        },



        {
            name: "Action",
            selector: (row) =>

                <div className="p-2">

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

            <div className="flex flex-row justify-end">
            <button
                className="flex text-sm text-red-100 px-3 py-1 rounded-full bg-black hover:bg-gray-700 focus:text-red"
                onClick={handleShowChildRegistration}>
                Add Child

            </button>
            </div>
          


            <div>



                {showChildList && <DataTable
                    columns={columns}
                    data={childrenData}
                    striped
                    highlightOnHover
                    defaultSortFieldId="createdAt"
                    pagination={true}
                    paginationPerpage={10}

                />
                }

                {showChildRegistration &&

                    <ChildrenRegistration onClose={handleShowChildList} />

                }



            </div>




        </div>
    )
}

export default DafacList