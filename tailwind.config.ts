// import { nextui } from "@nextui-org/theme";
// const svgToDataUri = require("mini-svg-data-uri");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");
const config = {
  corePlugins: {
    preflight: true,
  },
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    // "./node_modules/@nextui-org/theme/dist/components/[object Object].js"
  ],
  prefix: "",

  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
        xs: "480px",
        // => @media (min-width: 480px) { ... }
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "background-shine": {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "background-shine": "background-shine 2s linear infinite",
        spotlight: "spotlight 2s ease .75s 1 forwards",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      typography: (theme: any) => ({
        DEFAULT: {
          css: {
            maxWidth: "none",
          },
        },
        // dark: {
        //   css: {
        //     color: theme("colors.gray.300"),
        //     '[class~="lead"]': { color: theme("colors.gray.400") },
        //     a: { color: theme("colors.gray.100") },
        //     strong: { color: theme("colors.gray.100") },
        //     "ul > li::before": { backgroundColor: theme("colors.gray.700") },
        //     hr: { borderColor: theme("colors.gray.800") },
        //     blockquote: {
        //       color: theme("colors.gray.100"),
        //       borderLeftColor: theme("colors.gray.800"),
        //     },
        //     h1: { color: theme("colors.gray.100") },
        //     h2: { color: theme("colors.gray.100") },
        //     h3: { color: theme("colors.gray.100") },
        //     h4: { color: theme("colors.gray.100") },
        //     code: { color: theme("colors.gray.100") },
        //     "a code": { color: theme("colors.gray.100") },
        //     pre: {
        //       color: theme("colors.gray.200"),
        //       // backgroundColor: theme("colors.gray.800"),
        //     },
        //     thead: {
        //       color: theme("colors.gray.100"),
        //       borderBottomColor: theme("colors.gray.700"),
        //     },
        //     "tbody tr": { borderBottomColor: theme("colors.gray.800") },
        //   },
        // },
        // light: {
        //   css: {
        //     pre: {
        //       backgroundColor: theme("colors.gray.100"),
        //     },
        //   },
        // },
      }),
    },
  },
  // variants: {
  //   extend: {
  //     typography: ["dark"],
  //   },
  // },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss-animate"),
    require("tailwindcss-animated"),
    require("tailwind-scrollbar"),
    require("tailwind-scrollbar-hide"),
    addVariablesForColors,
    // function ({ matchUtilities,theme }: any) {
    //   matchUtilities(
    //     {
    //       bg-dot-thick: (value: any) => ({
    //         backgroundImage: url(${svgToDataUri(
    //           <svg xmlns=http://www.w3.org/2000/svg viewBox=0 0 32 32 width=16 height=16 fill=none><circle fill=${value} id=pattern-circle cx=10 cy=10 r=2.5></circle></svg>
    //         )}),}),},{ values: flattenColorPalette(theme(backgroundColor)),type: color }
    //   );
    // },nextui()],
  ],
} satisfies Config;

export default config;

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
