import { Button } from "./ui/button";
import { MenuBar } from "./menuBar";
import { Logo } from "./logo";
import { NavLink } from "react-router";

export function Header() {
  return (
    <header>
      <div className="max-w-11/12 w-11/12 bg-white m-auto flex flex-row items-center justify-between h-18 p-4 rounded-2xl">
        <a href="">
          <Logo visibility="hidden md:flex" />
        </a>
        <ul className="hidden md:flex gap-6">
          <li>
            <a href="">Fonctionnalités</a>
          </li>
          <li>
            <a href="">Tarifs</a>
          </li>
        </ul>
        <div className="flex items-center gap-3">
          <NavLink to="login">
              <Button
                variant="outline"
                className="font-medium text-[#1E3A8A] bg-white hover:transition-all"
              >
                <a href="">Login</a>
              </Button>
          </NavLink>
          <NavLink to="signup">
            <Button className="font-normal bg-[#1E3A8A] text-white hover:bg-[#3B57A3] hover:transition-all">
              <a href="">Sign up free</a>
            </Button>
          </NavLink>
          <MenuBar />
        </div>
      </div>
    </header>
  );
}
