import { Link } from "react-router"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleLeft, faArrowRotateRight, faRotateLeft } from "@fortawesome/free-solid-svg-icons"
import { Button } from "./ui/button"

export function DNavbar(){
    return(
        <div className="flex items-center justify-between p-4">
            <h2 className="flex items-center gap-1 scroll-m-20 font-semibold tracking-tight first:mt-0 text-center">
                <Link to="/admin" className="px-2 py-1 rounded-full hover:bg-[#d3d3d3]">
                    <FontAwesomeIcon icon={faAngleLeft} className="text-xs"/>
                </Link>
                <span className="text-2xl">Design</span>
            </h2>
            <div className="flex items-center gap-1">
                <Button variant="ghost">
                    <FontAwesomeIcon icon={faRotateLeft} />
                </Button>
                <Button variant="ghost">
                    <FontAwesomeIcon icon={faArrowRotateRight} />
                </Button>
                <Button className="py-2 px-3 rounded-3xl bg-[#3B57A3] text-white">
                    Enregistrer
                </Button>
            </div>
        </div>
    )
}