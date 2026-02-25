import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "./db.js";

export const auth = betterAuth({
  secret: process.env.BETTER_AUTH_SECRET,
  // Use FRONTEND_URL as baseURL so Google OAuth redirect_uri points to Vercel proxy
  // This ensures ALL auth traffic goes through Vercel → cookies stay on one domain
  baseURL: process.env.FRONTEND_URL || "http://localhost:3001",
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
      sameSite: "none",
      secure: true,
    },
  },
});

