// ~/config/backgrounds.ts
export const backgrounds = {
  solid: (color: string) => ({
    className: "", // pas de classes spécifiques
    style: { backgroundColor: color }, // applique la couleur directement
  }),
  gradient: (color: string) => ({
    className: "bg-gradient-to-r from-transparent to-white",
    style: { background: `linear-gradient(to right, ${color}, white)` },
  }),
  blur: (color: string) => ({
    className: "backdrop-blur-md bg-opacity-50",
    style: { backgroundColor: color },
  }),
} as const;

export type BackgroundType = keyof typeof backgrounds;

