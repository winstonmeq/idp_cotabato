
'use client'
import Image from 'next/image'


export default function Home() {



  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2">
       <main className="flex min-h-screen flex-col items-center justify-between p-4">
      
      <figure className="image-container">
      <figcaption className="image-caption text-center ">IDP System</figcaption> 
        <Image
          src="/images/idp.png"
          width={500}
          height={500}
          alt="A descriptive caption of the image" // Update with a meaningful description
          quality={50}
          loading="lazy"
          className="rounded-image" // Apply rounded border class (optional, see styles.css)
          style={{ borderRadius: '20px' }}
        />
      
        
        </figure>
    </main>
    </main>
  );
}


