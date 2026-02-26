import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "./db.js";

// Detect if we're in production (HTTPS) or local dev (HTTP)
const isProduction = process.env.NODE_ENV === "production" ||
  process.env.BETTER_AUTH_URL?.startsWith("https://");

export const auth = betterAuth({
  secret: process.env.BETTER_AUTH_SECRET,
  // Use FRONTEND_URL as baseURL in production so Google OAuth redirect_uri points to Vercel proxy.
  // In local dev, use the API's own URL because there is no proxy.
  baseURL: isProduction
    ? process.env.FRONTEND_URL
    : (process.env.BETTER_AUTH_URL || "http://localhost:3001"),
  basePath: "/api/auth",
  database: drizzleAdapter(db, {
    provider: "pg",
  }),
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    },
  },
  session: {
    expiresIn: 60 * 60 * 24 * 30, // 30 days
    updateAge: 60 * 60 * 24, // 1 day
  },
  trustedOrigins: [
    process.env.FRONTEND_URL || "http://localhost:5173",
    process.env.BETTER_AUTH_URL || "http://localhost:3001",
  ],
  advanced: {
    defaultCookieAttributes: {
      // In production (HTTPS): sameSite "none" + secure true for cross-origin cookies
      // In local dev (HTTP): sameSite "lax" + secure false so cookies actually work
      sameSite: isProduction ? "none" : "lax",
      secure: isProduction,
    },
  },
});

