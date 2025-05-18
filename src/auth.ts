import { db } from "@/server/database"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import { jwtDecode } from "jwt-decode"
import NextAuth, { DefaultSession } from "next-auth"
import type { JWT } from "next-auth/jwt"
import DiscordProvider from "next-auth/providers/discord"

import { env } from "./env.mjs"

// import { getUserByEmail } from "./server/queries/userQueries"

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      role?: string
    } & DefaultSession["user"]
    accessToken: string
    refreshToken: string
    error?: "RefreshTokenError" | ""
  }

  interface User {
    role?: string
    user_id?: string
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken: string
    refreshToken: string
    role?: string
    error?: "RefreshTokenError" | ""
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DrizzleAdapter(db),
  providers: [
    DiscordProvider({
      clientId: env.AUTH_DISCORD_ID,
      clientSecret: env.AUTH_DISCORD_SECRET,
      profile(profile) {
        try {
          return {
            id: profile.id,
            name: profile.username ?? profile.global_name ?? "",
            email: profile.email ?? "",
            image: profile.avatar
              ? `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}.png`
              : undefined,
            role: "user",
            user_id: profile.id,
          }
        } catch (err) {
          console.error("Discord profile error:", err)
          throw new Error("Unable to fetch user profile.")
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ profile, account, session, token, user, trigger }) {
      if (user?.role) token.role = user.role

      if (profile && account && user) {
        token.id = user.user_id ?? ""
        token.name = user.name ?? ""
        token.email = user.email ?? ""
        token.role = user.role ?? "USER"
        token.image = user.image ?? ""
        token.accessToken = account.id_token ?? ""
        token.refreshToken = account.refresh_token ?? ""
      }

      if (trigger == "update") {
        token.id = session?.user?.user_id ?? ""
        token.name = session?.user?.name ?? ""
        token.email = session?.user?.email ?? ""
        token.image = session?.user?.image ?? ""
      }

      const jwtExpire = jwtDecode(token.accessToken).exp ?? 0

      if (jwtExpire < Date.now() / 1000) {
        try {
          const [discordAccount] = await prisma.account.findMany({
            where: { userId: user.id, provider: "discord" },
          })

          const refreshToken = token.refreshToken

          if (!refreshToken) {
            token.error = "RefreshTokenError"
            return token
          }

          const response = await fetch("https://discord.com/api/oauth2/token", {
            method: "POST",
            body: new URLSearchParams({
              client_id: env.AUTH_DISCORD_ID,
              client_secret: env.AUTH_DISCORD_SECRET,
              grant_type: "authorization_code",
              code: token.refreshToken,
            }),
          })

          const tokensOrError = await response.json()

          if (!response.ok) throw tokensOrError

          const newTokens = tokensOrError as {
            access_token: string
            expires_in: number
            refresh_token?: string
          }

          await prisma.account.update({
            data: {
              access_token: newTokens.access_token,
              expires_at: Math.floor(Date.now() / 1000 + newTokens.expires_in),
              refresh_token:
                newTokens.refresh_token ?? discordAccount?.refresh_token,
            },
            where: {
              provider_providerAccountId: {
                provider: "discord",
                providerAccountId: discordAccount?.providerAccountId ?? "",
              },
            },
          })

          if (newTokens.refresh_token || discordAccount?.refresh_token) {
            token.accessToken =
              newTokens.refresh_token ?? discordAccount?.refresh_token ?? ""
          } else {
            token.error = "RefreshTokenError"
          }
        } catch (error) {
          console.error("JWT refresh error:", error)
          token.error = "RefreshTokenError"
          await signOut()
        }
      }

      return token
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken
      session.refreshToken = token.refreshToken
      session.user.role = token.role ?? "user"
      session.error = token.error

      return session
    },
    async signIn({ user }) {
      try {
        const exists = await getUserByEmail(user.email as string)
        return !!exists
      } catch (err) {
        console.error("signIn error:", err)
        return false
      }
    },
  },
  debug: process.env.NODE_ENV === "development",
})
