import full from "../assets/images/buttonFull.svg"
import rounded from "../assets/images/buttonWhite.svg"
import transparent from "../assets/images/buttonTransparent.svg"
export const stylesImages = {
    full,
    rounded,
    transparent
} as const

export const styles = {
  rounded: "rounded-lg px-4 py-2 text-black bg-white hover:bg-blue-600",
  full: "bg-gray-700 text-white",
  transparent: "bg-white/20 text-white rounded-4xl",
} as const;
