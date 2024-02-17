import NextAuth from "next-auth";
import FacebookProvider from "next-auth/providers/facebook";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
    providers: [
        FacebookProvider({
        clientId: process.env.FACEBOOK_ID,
        clientSecret: process.env.FACEBOOK_SECRET,
        }),

        GithubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
        }),
    ],
    secret: process.env.SECRET,
};

export default NextAuth(authOptions);