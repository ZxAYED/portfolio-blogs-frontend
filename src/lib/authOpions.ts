import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
    ],
    pages: {
        signIn: "/login",
    },

    secret: process.env.NEXTAUTH_SECRET,

    callbacks: {
        async signIn({ user }) {

            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_URL}/user`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(user),
                });

                if (response.ok) {
                    console.log("User saved successfully");
                } else {
                    console.error("Error saving user to the backend");
                }
            } catch (error) {
                console.error("Error posting user data:", error);
            }


            return true;
        },
    },
};

export default authOptions;
