import type { Href } from 'expo-router';

// Typed routes are on (app.json experiments.typedRoutes), so these are checked
// against the real route tree rather than being loose strings.
export const LOGIN_HREF = '/login' as Href;
export const SIGNUP_HREF = '/signup' as Href;
