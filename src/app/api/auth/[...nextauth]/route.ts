import { db } from "@/lib/db";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { DefaultSession, NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import { env } from "@/lib/env.mjs";
import DiscordProvider from "next-auth/providers/discord";

declare module "next-auth" {
	interface Session {
		user: DefaultSession["user"] & {
			id: string;
		};
	}
}

export const authOptions: NextAuthOptions = {
	adapter: DrizzleAdapter(db),
	callbacks: {
		session: ({ session, user }) => {
			session.user.id = user.id;
			return session;
		},
	},
	providers: [
		DiscordProvider({
			clientId: env.DISCORD_CLIENT_ID,
			clientSecret: env.DISCORD_CLIENT_SECRET,
		}),
	],
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
