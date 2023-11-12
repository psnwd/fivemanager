import { db } from "@/db"
import { env } from "@/env.mjs"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import type { NextAuthOptions } from "next-auth"
import DiscordProvider from "next-auth/providers/discord"

export const authOptions: NextAuthOptions = {
  adapter: DrizzleAdapter(db),
  callbacks: {
    session: ({ session, user }) => {
      session.user.id = user.id
      // session.user.role = user.role
      return session
    },
  },
  providers: [
    DiscordProvider({
      clientId: env.DISCORD_CLIENT_ID,
      clientSecret: env.DISCORD_CLIENT_SECRET,
    }),
  ],
}
