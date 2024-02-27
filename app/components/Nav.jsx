


'use client'
import Link from "next/link"
import Image from 'next/image';
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders} from 'next-auth/react';


function Nav() {

const {data:session} = useSession();

const [providers, setProviders] = useState(null)

const [toggleDropdown, setToggleDropdown] = useState(false)




useEffect(() =>{

    const setUpProviders = async () => {

        const response = await getProviders();

        setProviders(response)

    }

    setUpProviders();

},[])


  return (
    <nav className="flex-between w-full mb-16 pt-3">
        <Link href={'/'} className="flex gap-2 flex-center">
            <Image src='/images/cotabato.png' 
            width={75}
            height={75} 
            alt="Cotobato Logo"
            className="objec-contain"
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
                <div className="flex gap-3 md:gap-6">
                    
                   <Link href={'/task'} className="black_btn">Task</Link>

                   <Link href={'/generate'} className="black_btn">Benificiary</Link>

                   <Link href={'/distribution'} className="black_btn">Distribution</Link>

                   <Link href={'/store'} className="black_btn">Stores</Link>

                    <Link href={'/voters'} className="black_btn">Member</Link>

                    <Link href={'/qrcodegenerator'} className="black_btn">Generate QR Code</Link>

                    <button type="button" onClick={signOut} className="outline_btn">
                        Sign Out
                    </button>
                 
                </div>
              ):(
                <>
                {providers && Object.values(providers).map((provider) => (

                        // <button type="button" key={provider.name} onClick={() => 
                        // signIn(provider.id)} className="black_btn">Sign In

                        // </button>
                    
                        <div key={provider}> 
                                <Link href="/api/auth/signin">Login</Link>
                     
                        </div>

                )
                
                
                )}

                </>

              )}
        </div>

 


    </nav>
  )
}

export default Nav