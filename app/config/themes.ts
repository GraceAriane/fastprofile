import dark from "../assets/images/dark.svg"
import light from "../assets/images/light.svg"
import fancy from "../assets/images/fancy.svg"

export const themeImages = {
  dark,
  light,
  fancy,
} as const

export const themes = {
  light: {
    container: "bg-[#F2F2F2] text-black",
    police: "",
    link: "bg-white text-black rounded-[15px]",
  },
  dark: {
    container: "bg-gray-900 text-white",
    police:"font-purple",
    link: "bg-gray-700 text-white",
  },
  fancy: {
    container: "bg-gradient-to-r from-purple-400 to-pink-500 text-white",
    link: "bg-white/20 text-white rounded-4xl",
    police: "font-montserrat"
  }
}