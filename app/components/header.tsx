import { div } from "motion/react-client";
import { Button } from "./ui/button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBoltLightning } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export function Header() {
  return (
    <header>
        <div className="max-w-11/12 w-11/12 bg-amber-600 m-auto flex flex-row items-center justify-between h-16 p-4 mt-4">
            <div className="flex items-center gap-0">
                <FontAwesomeIcon icon={faBoltLightning} />
                <h1>FastProfile</h1>
            </div>
            <ul className="hidden">
                <li><a href="">A propos</a></li>
                <li><a href="">Tarifs</a></li>
            </ul>
            <div className="flex items-center gap-3">
                <a href="">Login</a>
                <a href="">Sign up free</a>
                <FontAwesomeIcon icon={faBars} />
            </div>
        </div>
    </header>
  );
}
