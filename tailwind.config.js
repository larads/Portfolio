/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    screens: {
      "mobile": { "max": "600px" },
      "notebook": { "min": "600px", "max": "1400px" },
    },
    extend: {
      gridTemplateRows: {
        "principal": "20vh 5vh 25vh",
        "mobile": "10vh 5vh 30vh"
      },

      animation: {
        wiggle: 'title 2.8s 0s normal both,blinkCursor 1s infinite normal',
        "habilidades": "habilidadeAnimation 5s 3s normal both",
        "more-details": "details 3s 3s normal both",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        vermelhoPrincipal: "#FF4A57",
        azulPrincipal: "#23263A",
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
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },

        title: {
          'from': {
            width: "0",
            borderRight: "2px solid rgba(0,0,0,0.7)"
          },
          'to': {
            width: "100%",
            borderRight: "2px solid rgba(0,0,0,0.7)"
          },
        },
        blinkCursor: {
          "from": {
            borderRightColor: " #FF4A57"
          },
          "to": {
            borderRightColor: "transparent"
          }
        },
        habilidadeAnimation: {
          "from": {
            opacity: "0",
            display: "none"
          },
          "to": {
            opacity: "1",
            display: "flex"
          }
        },
        details: {
          "from": {
            opacity: "0",
            display: "none"
          },
          "to": {
            opacity: "1",
            display: "inline"
          }
        }
      },

    },
  },
  plugins: [require("tailwindcss-animate")],
}