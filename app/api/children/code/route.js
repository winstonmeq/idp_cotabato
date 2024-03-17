




import Children from "@/models/Children";
import { connectToDB } from "@/utils/database";
import { NextResponse } from "next/server";




export async function POST(request) {

  try {


    const { lastName,firstName, } = await request.json();

    console.log(event_code)

    await connectToDB();

    const getdata = await Children.find({lastName:lastName, firstName:firstName}).sort({ createdAt: -1 }).exec();

    const dataWithRowIndex = getdata.map((item, index) => ({
      rowNum: index + 1, // Add 1 to start indexing from 1
      ...item.toObject(), // pag dot find gamit same sa taas dapat naa jud ang toObject() to convert pag aggregate eh remove ang toObject()
    }));


    return NextResponse.json(dataWithRowIndex)
     
    

  } catch (error) {
  
   return new Response('POST Error nih pre!');

  } 
}





