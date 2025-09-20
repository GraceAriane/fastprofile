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
    style: {backgroundColor: "#F2F2F2"},
    container: " text-black",
    police: "",
    link: `${styles.rounded} `,
  },
  dark: {
    style: {backgroundColor: "#212121"},
    container: "text-white",
    police:"font-purple",
    link: styles.full,
  },
  fancy: {
    style: {background: "linear-gradient(to right, #a855f7, #ec4899)"},
    container: "text-white",
    link: styles.transparent,
    police: "font-montserrat"
  }
}