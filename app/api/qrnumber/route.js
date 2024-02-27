

import QRcode from "@/models/QRcode";
import { connectToDB } from "@/utils/database";
import { NextResponse } from "next/server";





export async function POST(request) {

    try {
  
  
      const { region, province, municipality, barangay, qrNumber } = await request.json();
  
  
      await connectToDB();
  
      const addQRcode = new QRcode({
         
          region:region,
          province:province,
          municipality:municipality,
          barangay:barangay,
          qrNumber: qrNumber,
          userId:'65dde5f8d5a2b553b5a3829e', 
         })
      
     await addQRcode.save();  
      
  
      return new Response(JSON.stringify('QR Code added successfully'))
      
  
    } catch (error) {
    
     return new Response(error);
  
    } 
  }