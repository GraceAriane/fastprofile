export const backgrounds = {
  solid: (color: string) => ({
    container: `bg-[${color}]`, // ⚠️ pour Tailwind ça ne marche pas en runtime
    style: { backgroundColor: color }, // solution dynamique
  }),
  gradient: (color: string) => ({
    container: "bg-gradient-to-r",
    style: { backgroundImage: `linear-gradient(135deg, ${color}, white)` },
  }),
  blur: (color: string) => ({
    container: "backdrop-blur-md",
    style: { backgroundColor: color, opacity: 0.7 },
  }),
} as const;
