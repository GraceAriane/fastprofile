import { HexColorPicker } from "react-colorful"
import { useState } from "react"

export default function Color() {
  const [color, setColor] = useState("#ff0000");
  


  return (
    <div className="relative">
      <div
        className="w-8 h-8 rounded-full border cursor-pointer"
        style={{ backgroundColor: color }}
      />
      <HexColorPicker color={color} onChange={setColor} className="absolute w-1.5"/>
    </div>
  )
}
