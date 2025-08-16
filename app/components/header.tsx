import { div } from "motion/react-client";
import { Button } from "./ui/button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBoltLightning } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export function Header() {
  return (
    <header>
        <div className="max-w-11/12 w-11/12 bg-white m-auto flex flex-row items-center justify-between h-16.5 p-4 mt-4 rounded-2xl">
            <div className="flex items-center gap-0">
                <FontAwesomeIcon icon={faBoltLightning} />
                <h1 className="font-semibold">FastProfile</h1>
            </div>
            <ul className="hidden">
                <li><a href="">A propos</a></li>
                <li><a href="">Tarifs</a></li>
            </ul>
            <div className="flex items-center gap-3">
                <Button  variant="ghost" className="font-medium text-[#FACC15]"><a href="">Login</a></Button>
                <Button className="font-normal bg-[#1E3A8A] text-white"><a href="">Sign up free</a></Button>
                <FontAwesomeIcon icon={faBars} className="text-[#6B7280]" />
            </div>
        </div>
    </header>
  );
}
