import { Link } from "react-router"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBoltLightning } from "@fortawesome/free-solid-svg-icons"
import { Button } from "./ui/button"


export function Pub(){
    return(
        <div className="hidden md:flex md:items-center md:justify-between md:p-3 bg-[#1E3A8A]">
            <Link to="/">
                <FontAwesomeIcon icon={faBoltLightning} className="text-[#FACC15] text-2xl"/>
            </Link>

            <div className="lg:flex lg:items-center lg:gap-4 lg:text-white">
                <p className="md:hidden text-[13px] lg:block">
                    <span className="font-semibold">Essayez Pro gratuitement !</span> -
                    Notre plan le plus populaire et le plus utilisés par les créateurs de contenus
                </p>
                <Button
                variant="outline"
                className="font-medium text-white  hover:transition-all rounded-3xl"
                >
                <a href="">upgrade</a>
                </Button>
            </div>
        </div>
    )
}