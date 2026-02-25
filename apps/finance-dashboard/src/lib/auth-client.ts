import { createAuthClient } from "better-auth/react";

let viteApiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001';
// Better Auth strictly requires an absolute URL (e.g., https://domain.com/api)
// If VITE_API_URL is relative (like '/api' for Vercel proxy), prepend the current origin
if (viteApiUrl.startsWith('/')) {
  viteApiUrl = `${typeof window !== 'undefined' ? window.location.origin : ''}${viteApiUrl}`;
}
const API_BASE_URL = viteApiUrl;

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
