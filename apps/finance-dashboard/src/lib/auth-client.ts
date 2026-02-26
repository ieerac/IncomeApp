import { createAuthClient } from "better-auth/react";

// Better Auth client needs just the ORIGIN (e.g., https://domain.com)
// In production, force using the current origin (Vercel) so auth requests go through the proxy.
const API_BASE_URL = import.meta.env.PROD
  ? (typeof window !== 'undefined' ? window.location.origin : '')
  : (import.meta.env.VITE_API_URL?.startsWith('/')
    ? (typeof window !== 'undefined' ? window.location.origin : '')
    : (import.meta.env.VITE_API_URL || 'http://localhost:3001'));

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
