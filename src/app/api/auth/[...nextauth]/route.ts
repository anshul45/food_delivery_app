import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcrypt";
import { connectDB } from "@/lib/db";
import User from "@/models/UserModel";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId:
        "345325084920-ic4oq4enpqipno9dnucljbrafhca2r3h.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      authorize: async (credentials: any) => {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        await connectDB();
        try {
          const fetchedUser = await User.findOne({ email: email });
          if (!fetchedUser) {
            return null;
          }
          const isPasswordCorrect = bcrypt.compareSync(
            password,
            fetchedUser.password
          );
          if (!isPasswordCorrect) {
            return null;
          }
          return fetchedUser;
        } catch {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    // @ts-ignore
    async signIn(params: {
      account: { provider: string };
      profile: { email: string; name: string };
    }): Promise<boolean | void> {
      const { account, profile } = params;

      if (account.provider === "google") {
        await connectDB();
        try {
          const newUser = new User({
            name: profile.name,
            email: profile.email,
          });

          await newUser.save();
        } catch (err) {
          console.error(err);
          return false;
        }
      }

      return true;
    },
  },
});

export { handler as GET, handler as POST };
