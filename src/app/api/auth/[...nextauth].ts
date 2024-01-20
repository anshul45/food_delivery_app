import { connectDB } from '@/lib/db';
import User from '@/models/userModel';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
          name: "Credentials",
         credentials: {},
       authorize: async (credentials:any) => {
        const {email, password} = credentials as {
                email: string,
                password: string,
              };
              await connectDB();  
        try  {   
          const fetchedUser  = await User.findOne({ email: email });

          console.log(fetchedUser);
                  if (!fetchedUser) {
                    return null;
                  }
                    const isPasswordCorrect = bcrypt.compareSync(password, fetchedUser.password);

                    console.log(isPasswordCorrect);
          
                    if (!isPasswordCorrect) {
                      
                      return null;
                    } 
                    return fetchedUser;
                }
         catch {
             return null
  
             }
      }
    })
  ],
  pages: {
    error: "/",
  },
});

export { handler as GET, handler as POST }
