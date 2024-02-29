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

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="flex flex-wrap">
      {/* Navigation Bar */}
      <nav className="w-full bg-blue-600 p-2">
        <div className="flex items-center justify-between">
          <button onClick={toggleMenu} className="text-white">
            ☰
          </button>
          <div className="text-white">Welcome! {session?.user?.email}</div>
        </div>
      </nav>

      {/* Sidebar */}
      <div className={`w-64 relative bg-blue-600 ${showMenu ? 'hidden md:block' : ''}`}>
        <div className='flex flex-col p-4 items-left'>
           <button className="text-gray-300 font-semibold mb-2 focus:outline-none hover:bg-blue-700 focus:bg-orange-400 rounded py-2" >Home</button>
            <button className="text-gray-300 font-semibold mb-2 focus:outline-none hover:bg-blue-700 focus:bg-orange-400 rounded py-2" >Dashboard</button>
            <button className="text-gray-300 font-semibold mb-2 focus:outline-none hover:bg-blue-700 focus:bg-orange-400 rounded py-2" >Evacuation</button>
            <button className='text-gray-300 font-semibold mb-2 focus:outline-none hover:bg-blue-700 focus:bg-orange-400 rounded py-2' >Settings</button>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full md:flex-1 bg-gray-100 p-4">
       <QRCodeTable />
      </div>
    </div>
  );
};

export default DesktopPage;
