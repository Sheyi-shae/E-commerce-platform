import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";

import { compare } from "bcryptjs";
import db from './db'

export const authOptions = {
  adapter: PrismaAdapter(db),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/", //login in page directory
  },
  //providers and callbacks are the only blocks you need
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "seyi@gmail.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          console.log("Authorize function recieved credentials:", credentials);
          // Check if user credentials are are not empty
          if (!credentials?.email || !credentials?.password) {
            throw { error: "No Inputs Found", status: 401 };
          }
          console.log("Passed Check 1 ");
          //Check if user exists
          const existingUser = await db.user.findUnique({
            where: { email: credentials.email },
          });
          if (!existingUser) {
            console.log("No user found");
            throw { error: "No user found", status: 401 };
          }

          // console.log("Passed Check 2");

          //Check if Password is correct
          const passwordMatch = await compare(
            credentials.password,
            existingUser.password //password hashed while registering
          );
          if (!passwordMatch) {
            // console.log("Password incorrect");
            throw { error: "Password Incorrect", status: 401 };
          }
          console.log("Pass 3 Checked");
          const user = {
            id: existingUser.id,
            firstName: existingUser.firstName,
            lastName: existingUser.lastName,
            email: existingUser.email,
            phone: existingUser.phone,
            isAdmin:existingUser.isAdmin,
            address:existingUser.address,
            state:existingUser.state,
            city:existingUser.city
          };
          //
          // console.log("User Compiled");
          // console.log(user);
          return user;
        } catch (error) {
          // console.log("aLL Failed");
          // console.log(error);
          throw { error: "Something went wrong", status: 401 };
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (token) {
        console.log(`token:${token} in session`);
        session.user.id = token.id;
        session.user.firstName = token.firstName;
        session.user.lastName = token.lastName;
        session.user.email = token.email
        session.user.isAdmin=token.isAdmin
        session.user.address=token.address
        session.user.phone=token.phone
        session.user.state = token.state
        session.user.city = token.city
        
      }
      // console.log(`session:${session.user}`);
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.firstName = user.firstName;
        token.email = user.email;
        token.lastName = user.lastName;
        token.isAdmin= user.isAdmin
        token.phone=user.phone
        token.address=user.address
        token.city=user.city
        token.state=user.state
       
        
      }
      console.log(`token:${token}`);
      return token;
    },
  },
};