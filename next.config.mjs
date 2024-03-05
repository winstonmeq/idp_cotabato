/** @type {import('next').NextConfig} */
const nextConfig = {

    env: {
             
        //LOCAL_URL: 'http://localhost:3000',        
        LOCAL_URL: 'https://idpcotabato.vercel.app',

        NEXTAUTH_URL:'https://idpcotabato.vercel.app',

        //NEXTAUTH_URL_INTERNAL: 'https://idpcotabato.vercel.app'
        
     },

    images: {
        domains:['lh3.googleusercontent.com']
     },
};

export default nextConfig;
