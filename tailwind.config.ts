import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--montserrat)", ...fontFamily.sans],
        karantina: "var(--karantina)",
        indie_flower: "var(--indie_flower)",
      },
      colors: {
        green_ch: {
          100: "#",
          200: "#",
          300: "#",
          400: "#25D72C",
          500: "#1AAF20",
          600: "#",
          700: "#106318",
          800: "#08260B",
          900: "#011A03",
        },
      },
    },
  },
  plugins: [],
};
export default config;
