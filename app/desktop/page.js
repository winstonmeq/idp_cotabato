'use client'
import { useState } from 'react';
import axios from 'axios';
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import QRCodeTable from './qrcodeList'



const DesktopPage = () => {
  
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/api/auth/signin?callbackUrl=/client')
    }
  });

  console.log('Session:', session?.user?.email);

  const [showMenu, setShowMenu] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };


const dafacModalOpen = () =>{

setIsModalOpen(true)

}

const dafacModalClose = () =>{

  setIsModalOpen(false)
  
  }



  return (
    <div className="flex flex-wrap">
      <nav className="bg-black p-2">
        <div className="flex flex-col">
          <button onClick={toggleMenu} className="text-white">
            ☰
          </button>

          
      <div className={`${showMenu ? 'hidden lg:block' : ''}`}>
        <div className='flex flex-col p-4 items-left'>
           <button className="text-gray-300 font-semibold focus:outline-none hover:bg-gray-700 focus:bg-gray-600 rounded p-2" >Home</button>
            <button className="text-gray-300 font-semibold focus:outline-none hover:bg-gray-700 focus:bg-gray-600 rounded p-2" >Dashboard</button>
            <button className="text-gray-300 font-semibold focus:outline-none hover:bg-gray-700 focus:bg-gray-600 rounded p-2" >Evacuation</button>
            <button className='text-gray-300 font-semibold focus:outline-none hover:bg-gray-700 focus:bg-gray-600 rounded p-2' >Departments</button>
            <button className='text-gray-300 font-semibold focus:outline-none hover:bg-gray-700 focus:bg-gray-600 rounded p-2' >Distribution</button>
            <button className='text-gray-300 font-semibold focus:outline-none hover:bg-gray-700 focus:bg-gray-600 rounded p-2' >Benificiaries</button>

        </div>
      </div>

        </div>
      </nav>

     
      
      <div className="lg:flex-1 sm:flex-1 bg-gray-100">
      <div className='px-4 py-2 bg-gray-300' >Welcome! {session?.user?.email}</div>

       <QRCodeTable dafacModalOpen={dafacModalOpen} />

      </div>
    </div>
  );
};

export default DesktopPage;
