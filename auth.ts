import { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
// console.log('env', process.env.GOOGLE_CLIENT_SECRET);
export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
};

// console.log('env', process.env.GOOGLE_CLIENT_SECRET);
