

import Children from "@/models/Children";
import { connectToDB } from "@/utils/database";
import { NextResponse } from "next/server";


export async function GET(request) {

  try {


    await connectToDB();

    const getdata = await Children.find({}).sort({ createdAt: -1 }).exec();

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
  
  
      const { familyMember, relationship, age, sex, education, skill, remark } = await request.json();
  
  
      await connectToDB();
  
      const addChildren = new Children({
         
          familyMember: familyMember,
          relationship:relationship,
          age:age,
          sex:sex,
          education:education,
          skill: skill,
          remark:remark,
          userId:'65dde5f8d5a2b553b5a3829e', 
         })
      
     await addChildren.save();  
      
  
      return new Response(JSON.stringify('Children added successfully'))
      
  
    } catch (error) {
    
     return new Response(error);
  
    } 
  }