// Project Vite config. Additional options may be provided via defineConfig({ vite: { ... } }).
import { defineConfig } from "vite";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});
