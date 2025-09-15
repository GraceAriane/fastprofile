import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"
import { Button } from "~/components/ui/button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket,faCircleExclamation, faGear, faChartLine,faUserGroup, faBars, faPlus, faCamera, faEnvelope, faBoltLightning, faBoxArchive, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { UserPage } from "./linkPage";
import { Separator } from "~/components/ui/separator";
import type { User } from "~/types/user";
import { Link } from "react-router";

  const mockUser: User = {
    name: "tchoukeu grace" ,
    avatar: "https://i.pravatar.cc/150?img=3",
    description: "Entrepreneur",
    links: [
      { title: "Mon GitHub", url: "https://github.com/" },
      { title: "Mon LinkedIn", url: "https://linkedin.com/" },
    ],
  };


export function MyfastProfile(){
    
    return(
        <div className=" bg-[#F9FAFB]">

            <div className="md:hidden">
                <div className="flex justify-between px-4 pt-4">
                    <div className="flex items-center justify-between w-[70%]">
                        <img src="https://github.com/shadcn.png" alt="" className="w-[60px] rounded-full"/>
                        <Button
                            variant="outline"
                            className="p-4 font-medium text-[#1E3A8A] bg-white hover:transition-all"
                        >
                            <a href="">Try Pro for free</a>
                        </Button>
                    </div>
                    <div className="flex items-center w-[30%] justify-around text-[#373737]">
                        <FontAwesomeIcon icon={faArrowUpFromBracket} className="text-[20px]"/>
                        <FontAwesomeIcon icon={faGear} className="text-[20px]"/>
                    </div>
                </div>
                <div className=" my-5 flex flex-col gap-2.5 px-4">
                    <h3 className="text-4xl font-bold text-[#373737]">tchoukeugrace</h3>
                    <p>fastprofile.com/tchoukeugrace</p>
                </div>

                <div className="flex gap-5 px-4">
                    <Button className="rounded-2xl shadow-none py-4 px-6 text-[16px] bg-[#9C9C9C] text-white font-semibold">Pages</Button>
                    <Button className="rounded-2xl shadow-none py-4 px-6 text-[16px] bg-[#E8E8E8]">Archives</Button>
                </div>
            </div>

            <div className="md:flex md:flex-col">

                <div className="hidden md:flex justify-between items-center px-4 py-4 sticky top-0 bg-[#F9FAFB] z-20">
                    <h2>Mon FastProfile</h2>
                    <div className="flex gap-2.5">
                        <Link to="design" >
                            <Button className="bg-white rounded-xl p-4 border border-[#9C9C9C]">
                                <FontAwesomeIcon icon={faArrowUpFromBracket} className=""/>
                                Design
                            </Button>
                        </Link>
                        <Button className="bg-white rounded-xl p-4 border border-[#9C9C9C]">
                            <FontAwesomeIcon icon={faArrowUpFromBracket} className=""/>
                            Partager
                        </Button>
                        <Button className="bg-white rounded-xl p-4 border border-[#9C9C9C]">
                            <FontAwesomeIcon icon={faGear} className=""/>
                        </Button>
                    </div>
                </div>

                <div className="gap-6 md:grid grid md:gap-4 md:grid-cols-[minmax(314px,1fr)_minmax(180px,280px)] lg:grid-cols-[minmax(484px,1fr)_minmax(200px,400px)] xl:grid-cols-[minmax(570px,1fr)_minmax(200px,460px)]">

                    <div className="hidden md:flex flex-col gap-8 pl-4">

                        <div className="flex gap-3 border-2 border-blue-400 mt-6 p-4 rounded-[15px] bg-blue-100 lg:mt-4">
                            <FontAwesomeIcon icon={faCircleExclamation} className="mt-2 text-[17px]"/>
                            <div className="flex flex-col">
                                <p className="lg:text-[14px]">
                                    🔥Votre FastProfile est créé ! : <span className="font-semibold">FastProfile.com/Tchoukeugrace</span> 
                                </p>
                                <a href="" className="underline">Copier votre lien FastProfile</a>
                            </div>
                        </div>

                        <div className="hidden md:flex flex-col gap-1 self-center w-10/12">

                            <div className="flex items-center gap-4 mb-2.5">
                                <img src="https://github.com/shadcn.png" alt="" className="w-[60px] rounded-full"/>
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-[20px] font-black">@tchoukeugrace</h3>
                                    <a href="" className="text-[#9C9C9C]">Ajouter une bio</a>

                                    <div className="text-[#9C9C9C] flex gap-1">
                                        <FontAwesomeIcon icon={faEnvelope} />
                                        <FontAwesomeIcon icon={faCamera} />
                                        <FontAwesomeIcon icon={faInstagram} />
                                        <FontAwesomeIcon icon={faTiktok} />
                                    </div>
                                </div>
                            </div>

                            <Button
                            className="p-7 text-[17px] font-medium bg-[#3B57A3] text-white hover:transition-all rounded-4xl md:p-6 mb-2"
                            >
                            <a href="">Ajouter</a>
                            </Button>
                        </div>

                        <div className="loader text-[#b1b1b1] flex flex-col items-center justify-center gap-2 mb-14">
                            <p>
                                <FontAwesomeIcon icon={faBoltLightning} className="text-[60px] text-2xl"/>
                            </p>
                            <p className="w-1/2 text-center">
                                Montrez qui vous êtes en partageant des liens.
                                Ajoutez un lien.
                            </p>
                        </div>

                    </div>
                    
                    <div className="flex flex-col gap-2 pl-4 md:m-auto md:w-full md:pl-0 md:max-w-[220px] lg:max-w-[250px]">
                        <UserPage user={mockUser} variant="admin"></UserPage>
                        <div className="flex items-center gap-2 md:hidden">
                            <p className="font-semibold ml-2 text-[18px]">Liens</p>
                            <FontAwesomeIcon icon={faChevronRight} className="text-[10px]"/>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}