import million from "million/compiler";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dotenv from "dotenv";
dotenv.config();

export default defineConfig({
  plugins: [million.vite(), { ...react(), enforce: "default" }],
});
