import { createAuthClient } from "better-auth/react";

// Make it relative in production so it hits the Vercel rewrite proxy
// This eliminates ALL cross-origin cookie issues since cookies become first-party
const isProd = import.meta.env.PROD;
const API_BASE_URL = isProd ? '/api' : (import.meta.env.VITE_API_URL || 'http://localhost:3001');

export const authClient = createAuthClient({
  baseURL: API_BASE_URL,
  fetchOptions: {
    credentials: "include" as RequestCredentials,
  },
});

// Export individual hooks for convenience
export const {
  useSession,
  signIn,
  signUp,
  signOut,
  updateUser,
  changePassword,
} = authClient;
