


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

        console.log(response)

    }

    setUpProviders();

},[])


  return (
    <nav className="flex-between w-full mb-2 pt-2">
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
                <div className="flex gap-2 md:gap-2">
                    
                   <Link href={'/desktop'} className="black_btn">Home</Link>

                   <Link href={'/qrcodegenerator'} className="black_btn">QR Code</Link>


                   <Link href={'/benificiaries'} className="black_btn">Accounts</Link>

                   <Link href={'/distribution'} className="black_btn">Reports</Link>

                   <Link href={'/department'} className="black_btn">Downloads</Link>

                    <Link href={'/settings'} className="black_btn">Settings</Link>


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
                    
                        <div  className="black_btn"> 
                                <Link  key={provider.id} href="/api/auth/signin">Login</Link>
                     
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