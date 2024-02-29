import '../styles/globals.css'
// import { Inter } from 'next/font/google'
import Nav from './components/Nav'
import Provider from './components/Provider'
                                  


// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'IDP',
  description: 'IDP System',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body>

      <Provider>                  
          <main className='p-4'>
          <Nav />
          {children}
          </main>  
          
       </Provider>    

      </body>
    </html>
  )
}
