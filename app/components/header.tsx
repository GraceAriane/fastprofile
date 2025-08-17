import { div } from "motion/react-client";
import { Button } from "./ui/button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBoltLightning } from '@fortawesome/free-solid-svg-icons'
import { MenuBar } from "./menuBar";
import { Logo } from "./logo";

export function Header() {
  return (
    <header>
        <div className="max-w-11/12 w-11/12 bg-white m-auto flex flex-row items-center justify-between h-18 p-4 mt-4 rounded-2xl">
            <Logo/>
            <ul className="hidden md:flex gap-6">
                <li><a href="">Fonctionnalités</a></li>
                <li><a href="">Tarifs</a></li>
            </ul>
            <div className="flex items-center gap-3">
                <Button  variant="ghost" className="font-medium text-[#FACC15]"><a href="">Login</a></Button>
                <Button className="font-normal bg-[#1E3A8A] text-white"><a href="">Sign up free</a></Button>
                <MenuBar/>
            </div>
            
        </div>
    </header>
  );
}
