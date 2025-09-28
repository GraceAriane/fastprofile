import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpFromBracket,
  faCircleExclamation,
  faGear,
  faChartLine,
  faUserGroup,
  faBars,
  faPlus,
  faCamera,
  faEnvelope,
  faBoltLightning,
  faBoxArchive,
  faChevronRight,
  faBrush,
  faCopy,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { UserPage } from "./userPage";
import { Separator } from "~/components/ui/separator";
import type { User } from "~/types/user";
import { Link } from "react-router";
import { Popover, PopoverContent, PopoverTrigger } from "~/components/ui/popover";
import globe from "../assets/images/globe.png"
import { DialogBio } from "~/components/dialog-bio";
import { useRef } from "react";
import { Dialog } from "~/components/ui/dialog";
import { LinkButton } from "~/components/link";
import { DialogLink } from "~/components/dialog-link";

const mockUser: User = {
  name: "tchoukeu grace",
  avatar: "https://i.pravatar.cc/150?img=3",
  description: "Entrepreneur",
  links: [
    { title: "Mon GitHub", url: "https://github.com/" },
    { title: "Mon LinkedIn", url: "https://linkedin.com/" },
  ],
};

export function MyfastProfile() {


  return (
    <div className="md:overflow-hidden md:h-full">
      {/* rendu responsive */}
      <div className="md:hidden">
        {/* barre avec photo et bouton */}
        <div className="flex justify-between px-4 pt-4">
          <div className="flex items-center justify-between w-[70%]">
            <img
              src="https://github.com/shadcn.png"
              alt=""
              className="w-[60px] rounded-full"
            />
            <Button
              variant="outline"
              className="p-4 font-medium text-[#1E3A8A] bg-white hover:transition-all"
            >
              <a href="">Try Pro for free</a>
            </Button>
          </div>
          <div className="flex items-center w-[30%] justify-around text-[#373737]">
            <FontAwesomeIcon
              icon={faArrowUpFromBracket}
              className="text-[20px]"
            />
            <FontAwesomeIcon icon={faGear} className="text-[20px]" />
          </div>
        </div>

        {/* nom d'utilisateur et lien personnalisé */}
        <div className=" my-5 flex flex-col gap-2.5 px-4">
          <h3 className="text-4xl font-bold text-[#373737]">tchoukeugrace</h3>
          <p>fastprofile.com/tchoukeugrace</p>
        </div>

        {/* bouton pour la page */}
        <div className="flex gap-5 px-4">
          <Button className="rounded-2xl shadow-none py-4 px-6 text-[16px] bg-[#9C9C9C] text-white font-semibold">
            Pages
          </Button>
          {/* <Button className="rounded-2xl shadow-none py-4 px-6 text-[16px] bg-[#E8E8E8]">
            Archives
          </Button> */}
        </div>
      </div>

      {/* barre de navigation */}
      <div className="md:flex md:flex-col md:h-full">
        <div className="hidden border-b border-b-[#acacac81] md:flex justify-between items-center px-4 py-4 sticky top-0 bg-[#F9FAFB] z-20">
          <h2>Mon FastProfile</h2>
          <div className="flex gap-2.5">
            <Link to="design">
              <Button className="bg-white rounded-xl p-4 border border-[#9C9C9C] hover:bg-[#f5f2f2] hover:duration-300 hover:transition-all">
                <FontAwesomeIcon icon={faBrush} />
                Design
              </Button>
            </Link>
            {/* boutons partager et copier */}
            <Popover>
              <PopoverTrigger >
                <Button className="bg-white rounded-xl p-4 border border-[#9C9C9C] hover:bg-[#f5f2f2] hover:duration-300 hover:transition-all">
                  <FontAwesomeIcon icon={faArrowUpFromBracket} className="" />
                  Partager
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] left-20 flex flex-col gap-3 items-start">
                <Button className="shadow-none w-full justify-start hover:bg-[#DEDEDE] hover:duration-300 hover:transition-all">
                  <FontAwesomeIcon icon={faCopy} />
                  copier
                </Button>
                <a href="/tchoukeugrace" target="_blank" rel="noopener noreferrer" className=" w-full">
                  <Button className=" w-full shadow-none justify-start hover:bg-[#DEDEDE] hover:duration-300 hover:transition-all">
                      <FontAwesomeIcon icon={faGlobe} />
                      Ouvrir
                  </Button>
                </a>
              </PopoverContent>
            </Popover>
          </div>
        </div>
        
        {/* rendu à partir de tablette */}
        <div className="h-full gap-6 md:grid grid md:gap-4 md:grid-cols-[minmax(314px,1fr)_minmax(180px,280px)] lg:grid-cols-[minmax(484px,1fr)_minmax(200px,400px)] xl:grid-cols-[minmax(570px,1fr)_minmax(200px,460px)]">
          <div className="border-r border-r-[rgba(172,172,172,0.51)] pr-3 overflow-y-auto hidden md:flex flex-col gap-8 pl-4">
            {/* Publicité */}
            <div className="mt-4 w-10/12 mx-auto">
              <div className="flex gap-2 border-2 border-blue-400 py-4 pl-2 rounded-[15px] bg-blue-100 lg:mt-4">
                <FontAwesomeIcon
                  icon={faCircleExclamation}
                  className="mt-2 text-[17px]"
                />
                <div className="flex flex-col ">
                  <p className="lg:text-[14px] md:text-[12px]">
                    🔥Votre FastProfile est créé ! :{" "}
                    <span className="font-semibold">
                      FastProfile.com/Tchoukeugrace
                    </span>
                  </p>
                  <a href="" className="underline xl">
                    Copier votre lien FastProfile
                  </a>
                </div>
              </div>
            </div>

            {/* contenu pour ajouter les liens  */}
            <div className="hidden md:flex flex-col gap-1 self-center w-10/12">
              <div className="flex items-center gap-4 mb-2.5">
                <img
                  src="https://github.com/shadcn.png"
                  alt=""
                  className="w-[60px] rounded-full"
                />
                <div className="flex flex-col gap-1">

                  <DialogBio></DialogBio>

                  <div className="text-[#9C9C9C] flex gap-1">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <FontAwesomeIcon icon={faCamera} />
                    <FontAwesomeIcon icon={faInstagram} />
                    <FontAwesomeIcon icon={faTiktok} />
                  </div>
                </div>
              </div>

              <div className="w-full">
                <DialogLink></DialogLink>

              </div>
            </div>

            <div className="flex flex-col items-center">
              {/* <div className="loader text-[#b1b1b1] flex flex-col items-center justify-center gap-2 mb-14">
                <p>
                  <FontAwesomeIcon
                    icon={faBoltLightning}
                    className="text-[60px] text-2xl"
                  />
                </p>
                <p className="w-1/2 text-center">
                  Montrez qui vous êtes en partageant des liens. Ajoutez un lien.
                </p>
              </div> */}
              <div className="w-10/12 flex flex-col gap-4 lg:mb-22">
                <LinkButton name="Mon GitHub" link="https://github.com/tchoukeugrace"></LinkButton>
                <LinkButton name="Mon LinkedIn" link="https://LinkedIn.com/tchoukeugrace"></LinkButton>
              </div>
            </div>

          </div>

          {/* Page de l'utilisateur */}
          <div className="flex flex-col gap-2 pl-4 md:m-auto md:w-full md:pl-0 md:max-w-[220px] [@media(max-width:1024px)_and_(max-height:600px)]:scale-[0.85] [@media(max-width:1024px)_and_(max-height:600px)]:my-0 lg:max-w-[250px] xl:mx-auto xl:my-0 xl:pt-5 xl:h-full xl:pb-15">

            <UserPage user={mockUser} variant="admin"></UserPage>
            <div className="flex items-center gap-2 md:hidden">
              <p className="font-semibold ml-2 text-[18px]">Liens</p>
              <FontAwesomeIcon icon={faChevronRight} className="text-[10px]" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
