export const backgrounds = {
  solid: (color: string) => ({
    className: "",
    style: { backgroundColor: color },
    label: "Rempli",
  }),
  gradient: (color: string) => ({
    className: "",
    style: { background: `linear-gradient(135deg, ${color}, #ffffff)` },
    label: "Dégradé",
  }),
  blur: (color: string) => ({
    className: "backdrop-blur-md bg-opacity-60",
    style: { backgroundColor: color },
    label: "Blur",
  }),
} as const;

export type BackgroundType = keyof typeof backgrounds;

