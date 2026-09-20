import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

type ThemeResolver = (path: string, defaultValue?: unknown) => string;

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: { DEFAULT: "#1a1a1a", 100: "#e8e8e8", 200: "#d4d4d4", 300: "#b0b0b0", 500: "#555555", 600: "#444444" },
        light: { DEFAULT: "#f5f5f5", 200: "#333333", 300: "#bcbcbc", 400: "#aaaaaa" },
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Fira Code"', '"Courier New"', 'monospace'],
      },
      typography: ({ theme }: { theme: ThemeResolver }) => ({
        DEFAULT: {
          css: {
            maxWidth: "100%",
            color: theme("colors.dark"),
            h1: {
              color: theme("colors.dark"),
              fontWeight: "400",
            },
            h2: {
              color: theme("colors.dark"),
              fontWeight: "400",
            },
            h3: {
              color: theme("colors.dark"),
              fontWeight: "400",
            },
            h4: {
              color: theme("colors.dark"),
              fontWeight: "400",
            },
            a: {
              color: theme("colors.dark"),
              textDecoration: "underline",
              "&:hover": {
                textDecoration: "none",
              },
            },
            code: {
              color: theme("colors.dark"),
              backgroundColor: "#e0e0e0",
              borderRadius: theme("borderRadius.md"),
              padding: theme("spacing.1"),
            },
          },
        },
        dark: {
          css: {
            color: "#e0e0e0",
            h1: {
              color: theme("colors.light"),
            },
            h2: {
              color: theme("colors.light"),
            },
            h3: {
              color: theme("colors.light"),
            },
            h4: {
              color: theme("colors.light"),
            },
            a: {
              color: theme("colors.light"),
            },
            code: {
              color: theme("colors.light"),
              backgroundColor: "#2d2d2d",
            },
            strong: {
              color: theme("colors.light"),
            },
          },
        },
      }),
    },
  },
  plugins: [typography],
};

export default config;
