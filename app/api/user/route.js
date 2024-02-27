

import User from "@/models/User";
import { connectToDB } from "@/utils/database";
import { NextResponse } from "next/server";





export async function POST(request) {

    try {
  
  
      const {  email, password } = await request.json();
  
  
      await connectToDB();
  
      const addUser = new User({
         
          email:email,
          password:password, 
         })
      
     await addUser.save();  
      
  
      return new Response(JSON.stringify('User added successfully'))
      
  
    } catch (error) {
    
     return new Response(error);
  
    } 
  }