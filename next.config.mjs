/** @type {import('next').NextConfig} */
const nextConfig = {

    env: {
             
        LOCAL_URL: 'http://localhost:3000',        
        //LOCAL_URL: 'https://www.alistoplus.com',

        
     },

    images: {
        domains:['lh3.googleusercontent.com']
     },
};

export default nextConfig;
