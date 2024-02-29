

import QRcode from "@/models/QRcode";
import { connectToDB } from "@/utils/database";
import { NextResponse } from "next/server";


export async function GET(request) {

  try {


    await connectToDB();

    const getdata = await QRcode.find({}).sort({ createdAt: -1 }).exec();

    const dataWithRowIndex = getdata.map((item, index) => ({
      rowNum: index + 1, // Add 1 to start indexing from 1
      ...item.toObject(), // pag dot find gamit same sa taas dapat naa jud ang toObject() to convert pag aggregate eh remove ang toObject()
    }));


    return NextResponse.json(dataWithRowIndex)    
     
  } catch (error) {
  
   return new Response('GET Error nih pre!');

  } 
}


export async function POST(request) {

    try {
  
  
      const { disasterIncident, region, province, municipality, barangay, qrNumber } = await request.json();
  
  
      await connectToDB();
  
      const addQRcode = new QRcode({
         
        disasterIncident: disasterIncident,
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