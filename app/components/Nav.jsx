


'use client'
import Link from "next/link"
import Image from 'next/image';
import { useState, useEffect, useRef } from "react";
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';


function Nav() {

  const { data: session } = useSession();

  const [providers, setProviders] = useState(null)

  const [toggleDropdown, setToggleDropdown] = useState(false)


  const [showDropdown, setShowDropdown] = useState(false);



  const dropdownRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown1 = () => {
    setIsOpen(!isOpen);
  };




  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };

    // Fetch providers when the component is about to be displayed
    if (!providers) {
      setUpProviders();
    }
  }, [providers]);
  


  const closeDropdownOnOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };


  //code nih para sa dropdown

  useEffect(() => {
    document.addEventListener('click', closeDropdownOnOutsideClick);

    return () => {
      document.removeEventListener('click', closeDropdownOnOutsideClick);
    };
  }, []);







  return (
    <nav className="flex-between w-full mb-2 pt-2">
      <Link href={'/'} className="flex gap-2 flex-center">
        <Image src='/images/cotabato.png'
          width={50}
          height={50}
          alt="Cotobato Logo"
          className="objec-contain"
          priority
        />
        <div className="flex flex-col">
          <div className="font-bold">Cotabato</div>
          <div className="font-bold">Province</div>

        </div>


      </Link>

      {/* 
       desktop navigation */}

      <div className="sm:flex hidden relative">

        {session?.user ? (
          <div className="flex gap-2 md:gap-2">

            <Link href={'/desktop'} className="bg-gray-800 text-white px-4 py-2 rounded-md focus:outline-none">Home</Link>

            <Link href={'/qrcodegenerator'} className="bg-gray-800 text-white px-4 py-2 rounded-md focus:outline-none">QR Code</Link>


            <Link href={'/benificiaries'} className="bg-gray-800 text-white px-4 py-2 rounded-md focus:outline-none">Accounts</Link>


            <div className="relative inline-block text-left z-50" ref={dropdownRef}>
              <button
                type="button"
                className="bg-gray-800 text-white px-4 py-2 rounded-md focus:outline-none"
                onClick={toggleDropdown1}
              >
                Reports
              </button>

              {isOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                  {/* Dropdown content */}
                  <div className="py-1">
                    <Link
                      href="/qrPrint"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      QR Code Print
                    </Link>
                    <Link
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Evacuation Center
                    </Link>

                  </div>
                </div>
              )}
            </div>


            <Link href={'/download'} className="bg-gray-800 text-white px-4 py-2 rounded-md focus:outline-none">Downloads</Link>

            <Link href={'/settings'} className="bg-gray-800 text-white px-4 py-2 rounded-md focus:outline-none">Settings</Link>


            <button type="button" onClick={signOut} className="outline_btn">
              Sign Out
            </button>

          </div>
        ) : (
          <>
           <>
            {providers ? (
              Object.values(providers).map((provider) => (
                <div key={provider.id} className="black_btn">
                  <Link href="/api/auth/signin">Login</Link>
                </div>
              ))
            ) : (
              <div className="text-sm">Loading...</div>
            )}
          </>

          </>

        )}
      </div>




    </nav>
  )
}

export default Nav