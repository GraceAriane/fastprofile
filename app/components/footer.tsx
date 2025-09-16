import { Logo } from "./logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Separator } from "./ui/separator";
import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="max-w-11/12 w-11/12 m-auto">
      <div className="p-2.5 flex flex-col gap-7 2xl:m-w-[90%]">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between max-w-[1100px] 2xl:max-w-[80%]">
          <Link to="/" className="md:self-start">
            <Logo css="md:self-start" />
          </Link>
          <div className="flex flex-col items-center gap-5 max-w-[520px] md:flex-row md:items-start">
            <div className="flex flex-col items-center gap-3.5 md:content-baseline md:items-start">
              <h2 className="font-medium">À Propos</h2>
              <p className="text-center md:text-left">
                FastProfile est une plateforme moderne qui vous permet de créer
                un profil unique, simple et professionnel en quelques minutes
              </p>
            </div>
            <div className="flex flex-col items-center gap-3.5 md:content-baseline md:items-start">
              <h2 className="font-medium">Contact</h2>
              <div className="flex items-center gap-1 hover:text-[#FACC15] hover:transition-all">
                <FontAwesomeIcon icon={faEnvelope} />
                <a href="" className="">
                  support@fastProfile.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2.5 items-center">
          <Separator className=""></Separator>
          <div>
            <ul className="flex justify-center gap-2">
              <li>
                <a href="">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="text-[23px] hover:text-[#FACC15] hover:transition-all"
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="text-[23px] hover:text-[#FACC15] hover:transition-all"
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <FontAwesomeIcon
                    icon={faTiktok}
                    className="text-[23px] hover:text-[#FACC15] hover:transition-all"
                  />
                </a>
              </li>
            </ul>
          </div>
          <p>© 2025 FastProfile, Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
