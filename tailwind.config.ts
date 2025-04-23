import type { Config } from "tailwindcss";

const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "65ch",
            color: "inherit",
            a: {
              color: "inherit",
              textDecoration: "none",
              fontWeight: "500",
            },
            '[class~="lead"]': {
              color: "inherit",
            },
            strong: {
              color: "inherit",
            },
            'ol[type="A"]': {
              listStyleType: "upper-alpha",
            },
            'ol[type="a"]': {
              listStyleType: "lower-alpha",
            },
            'ol[type="A" s]': {
              listStyleType: "upper-alpha",
            },
            'ol[type="a" s]': {
              listStyleType: "lower-alpha",
            },
            'ol[type="I"]': {
              listStyleType: "upper-roman",
            },
            'ol[type="i"]': {
              listStyleType: "lower-roman",
            },
            'ol[type="I" s]': {
              listStyleType: "upper-roman",
            },
            'ol[type="i" s]': {
              listStyleType: "lower-roman",
            },
            'ol[type="1"]': {
              listStyleType: "decimal",
            },
            "ul > li": {
              paddingLeft: "1.5em",
            },
            "ul > li::before": {
              width: "0.375em",
              height: "0.375em",
              top: "calc(0.875em - 0.1875em)",
              left: "0.25em",
              borderRadius: "50%",
            },
            hr: {
              borderColor: "inherit",
              opacity: 0.1,
            },
            blockquote: {
              fontWeight: "500",
              fontStyle: "italic",
              color: "inherit",
              borderLeftWidth: "0.25rem",
              borderLeftColor: "inherit",
              quotes: '"\\201C""\\201D""\\2018""\\2019"',
              marginTop: "1.6em",
              marginBottom: "1.6em",
              paddingLeft: "1em",
            },
            h1: {
              color: "inherit",
            },
            h2: {
              color: "inherit",
            },
            h3: {
              color: "inherit",
            },
            h4: {
              color: "inherit",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
} satisfies Config;

export default config;
