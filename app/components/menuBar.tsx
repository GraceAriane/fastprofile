import { Button } from "./ui/button"
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from "react"

export function MenuBar(){
    const [open, setOpen] = useState(false)
    return (
        <div className="md:hidden">
            <Button variant="ghost" className="cursor-pointer relative" onClick={()=>setOpen(!open)}><FontAwesomeIcon icon={faBars} className="text-[#6B7280]"/></Button>
            <div className={`absolute right-0 mt-2 w-60 mr-8 bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ${open ? "opacity-100" : "opacity-0" }`}>
                <ul className="flex h-22 flex-col justify-around">
                    <li><a href="" className="hover:text-gray-600 hover:transition-all pl-4 pt-4">Fonctionnalités</a></li>
                    <li><a href="" className="hover:text-gray-600 hover:transition-all pl-4 pt-5">Tarifs</a></li>
                </ul>
            </div>
        </div>
    )
}