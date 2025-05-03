
/// <reference types="vite/client" />

// Define proper types for Cal.com
import "@calcom/embed-react";

// This ensures proper global TypeScript interface for Cal
declare global {
  interface Window {
    Cal?: unknown;
  }
}
