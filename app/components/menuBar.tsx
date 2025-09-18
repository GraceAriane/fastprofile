import { Button } from "./ui/button";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router";

type cssProps = {
  css?: string;
  ancrePricing: string
  ancreFeatures: string
  ancreFaq: string
};
export function MenuBar({ css, ancreFeatures, ancrePricing, ancreFaq }: cssProps) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`md:hidden ${css}`}>
      <Button
        variant="ghost"
        className="cursor-pointer relative "
        onClick={() => setOpen(!open)}
      >
        <FontAwesomeIcon icon={faBars} className="text-white" />
      </Button>
      <div
        className={`absolute py-3 right-0 mt-2 w-60 mr-8 bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ${open ? "opacity-100" : "opacity-0"}`}
      >
        <ul className="flex flex-col justify-around gap-4">
          <li>
            <a
              href={ancreFeatures}
              
              className="text-[#505050] hover:text-gray-600 hover:transition-all pl-4 pt-4"
            >
              Fonctionnalités
            </a>
          </li>
          <li>
            <a
              href={ancrePricing}
              className="text-[#505050] hover:text-gray-600 hover:transition-all pl-4 pt-5"
            >
              Tarifs
            </a>
          </li>
          <li>
            <a
              href={ancreFaq}
              className="text-[#505050] hover:text-gray-600 hover:transition-all pl-4 pt-5"
            >
              FAQ
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
