import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"
import { Button } from "~/components/ui/button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket,faCircleExclamation, faGear, faChartLine,faUserGroup, faBars, faPlus, faCamera, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { UserPage } from "./linkPage";
import type { User } from "~/types/user";
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
        <div>
            <div className="md:hidden">
                <div className="flex justify-between">
                    <div className="flex items-center justify-between w-[70%]">
                        <img src="https://github.com/shadcn.png" alt="" className="w-[60px] rounded-full"/>
                        <Button
                            variant="outline"
                            className="p-4 font-medium text-[#1E3A8A] bg-white hover:transition-all"
                        >
                            <a href="">Try Pro for free</a>
                        </Button>
                    </div>
                    <div className="flex items-center gap-2 w-[30%] justify-center text-[#373737]">
                        <FontAwesomeIcon icon={faArrowUpFromBracket} className="text-2xl"/>
                        <FontAwesomeIcon icon={faGear} className="text-2xl"/>
                    </div>
                </div>
                <div className=" my-5 flex flex-col gap-2.5">
                    <h3 className="text-4xl font-bold text-[#373737]">tchoukeugrace</h3>
                    <p>fastprofile.com/tchoukeugrace</p>
                </div>

                <div className="flex gap-5">
                    <Button className="rounded-2xl shadow-none py-4 px-6 text-[16px] bg-[#9C9C9C] text-white font-semibold">Pages</Button>
                    <Button className="rounded-2xl shadow-none py-4 px-6 text-[16px] bg-[#E8E8E8]">Archives</Button>
                </div>
            </div>
            <div className="">
                <div className="hidden md:flex justify-between items-center">
                    <h2>Mon FastProfile</h2>
                    <div>
                        <Button>
                            <FontAwesomeIcon icon={faArrowUpFromBracket} className=""/>
                            Design
                        </Button>
                        <Button>
                            <FontAwesomeIcon icon={faArrowUpFromBracket} className=""/>
                            Share
                        </Button>
                        <Button>
                            <FontAwesomeIcon icon={faGear} className=""/>
                        </Button>
                    </div>
                </div>

                <div className="md:flex border border-amber-600">
                    <div className="hidden md:flex flex-col">
                        <div>
                            <div>
                                <FontAwesomeIcon icon={faCircleExclamation} />
                                <p>
                                    Vous avez créé votre FastProfile !🔥
                                    FastProfile.com/Tchoukeugrace
                                </p>
                            </div>
                            <a href="" className="underline">Copier votre lien FastProfile</a>
                        </div>

                        <div>
                            <div>
                                <img src="https://github.com/shadcn.png" alt="" className="w-[60px] rounded-full"/>
                                <div>
                                    <h3>@tchoukeugrace</h3>
                                    <p>ajoute une bio</p>

                                    <div>
                                        <FontAwesomeIcon icon={faEnvelope} />
                                        <FontAwesomeIcon icon={faCamera} />
                                        <FontAwesomeIcon icon={faPlus} />
                                        <FontAwesomeIcon icon={faInstagram} />
                                        <FontAwesomeIcon icon={faTiktok} />
                                    </div>
                                </div>
                            </div>
                            <Button>
                                Ajouter
                            </Button>
                        </div>
                    </div>

                    <div className=" mt-4 md:mt-0">
                        <UserPage user={mockUser}></UserPage>
                    </div>
                </div>


            </div>


        </div>
    )
}