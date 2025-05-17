import { createCallerFactory, createTRPCRouter } from "@/server/api/trpc"

import { playerRouter } from "./routers/player"

export const appRouter = createTRPCRouter({
  player: playerRouter,
})

export type AppRouter = typeof appRouter

export const createCaller = createCallerFactory(appRouter)
