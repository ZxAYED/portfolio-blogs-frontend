import authOpions from "@/lib/authOpions"
import NextAuth from "next-auth"

const handler = NextAuth(authOpions)

export { handler as GET, handler as POST }

