import { randomBytes } from "crypto"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateBearerToken(length: number): string {
  if (length % 2 !== 0) {
    throw new Error("Token length must be an even number.")
  }

  const tokenBytes = randomBytes(length / 2)
  const token = tokenBytes.toString("hex")
  return `${token}`
}