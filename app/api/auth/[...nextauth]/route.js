import NextAuth from 'next-auth/next';
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDB } from '@/utils/database';
import User from '@/models/User';

const handler = NextAuth({
  providers: [
   
    CredentialsProvider({
      name: 'Credentials',


      credentials: {
          email: {
            label:"email:",
            type: "text",
            placeholder:"email account"
          },

          password: {
            label:"Password:",
            type:"password",
            placeholder:"password required"
          }


      },
          

      
      async authorize(credentials) {

        const { email, password } = credentials;

        console.log(email)


        await connectToDB();

        const userData = await User.findOne({ email }).exec();

        if (!userData) {
          throw new Error("Invalid Email & Password");
        }

        const isValidPassword = userData.password === password;

        if (userData && isValidPassword) {

          return { email: userData.email };

        } else {

          throw new Error("Invalid Email & Password");
          
        }
      }


    })

  ],

  pages: {
    signIn: '/auth/signin',
    // signOut: '/auth/signout',
    // error: '/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // (used for check email message)
    // newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  },


 callbacks: {
    // async session({ session }) {
    //   try {
    //     const sessionUser = await User.findOne({ email: session.user.email });
    //     if (sessionUser) {
    //       session.user.id = sessionUser._id.toString();
    //       session.user.isAdmin = sessionUser.admin;
    //     }
    //     return session;
    //   } catch (error) {
    //     console.error('Error in session callback:', error);
    //     throw error;
    //   }
    // },

//     async signIn({ profile }) {
//       try {
//         await connectToDB();
//         const userExists = await User.findOne({ email: profile.email });

//         if (!userExists) {
//           // If the user doesn't exist, create a new user
//           await User.create({
//             email: profile.email,
//             username: profile.name.replace(/ /g, '').toLowerCase(),
//             admin: false,
//             image: profile.picture,
//           });
//         }

//         return true;
//       } catch (error) {
//         console.error('Error in signIn callback:', error);
//         throw error;
//       }
//     },
  },

  
});

export { handler as GET, handler as POST };
