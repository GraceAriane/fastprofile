import dark from "../assets/images/dark.svg"
import light from "../assets/images/light.svg"
import fancy from "../assets/images/fancy.svg"
import { styles } from "./styles"
export const themeImages = {
  dark,
  light,
  fancy,
} as const

export const themes = {
  light: {
    container: "bg-[#F2F2F2] text-black",
    police: "",
    link: `${styles.rounded} `,
  },
  dark: {
    container: "bg-gray-900 text-white",
    police:"font-purple",
    link: styles.full,
  },
  fancy: {
    container: "bg-gradient-to-r from-purple-400 to-pink-500 text-white",
    link: styles.transparent,
    police: "font-montserrat"
  }
}