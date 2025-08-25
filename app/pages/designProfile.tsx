import { Button } from "~/components/ui/button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faArrowRotateRight, faCircleUser, faLayerGroup, faPaintRoller, faRotateLeft, faSliders } from "@fortawesome/free-solid-svg-icons";
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

export function Design(){
    return(
        <div className="">
            <div className="min-h-screen grid grid-cols-1 grid-rows-[85px_1fr]">
                <div className="flex items-center justify-between p-4">
                    <h2 className="flex items-center gap-1 scroll-m-20 font-semibold tracking-tight first:mt-0 text-center">
                        <FontAwesomeIcon icon={faAngleLeft} className="text-xs"/>
                        <span className="text-2xl">Design</span>
                    </h2>
                    <div className="flex items-center gap-1">
                        <Button variant="ghost">
                            <FontAwesomeIcon icon={faRotateLeft} />
                        </Button>
                        <Button variant="ghost">
                            <FontAwesomeIcon icon={faArrowRotateRight} />
                        </Button>
                        <Button className="py-2 px-3 rounded-3xl bg-[#3B57A3] text-white">
                            Enregistrer
                        </Button>
                    </div>
                </div>
                <div className="hidden">

                    <div>

                    </div>

                    <div>

                    </div>

                    <div>

                    </div>
                </div>

                <div className="border-1 rounded-tl-3xl rounded-tr-3xl">

                    <UserPage user={mockUser} variant="design"></UserPage>

                    <div className="fixed z-50 rounded-[24px] translate-x-[20%] bottom-3.5 p-4 shadow-lg flex items-center justify-center bg-[#fff]">
                        <Button variant="ghost" className="flex flex-col justify-center">
                            <FontAwesomeIcon icon={faCircleUser} />
                            Profil
                        </Button>
                        <Button variant="ghost" className="flex flex-col justify-center">
                            <FontAwesomeIcon icon={faSliders} />
                            Thème
                        </Button>
                        <Button variant="ghost" className="flex flex-col justify-center">
                            <FontAwesomeIcon icon={faLayerGroup} />
                            Fond
                        </Button>
                        <Button variant="ghost" className="flex flex-col justify-center">
                            <FontAwesomeIcon icon={faPaintRoller} />
                            Style
                        </Button>
                    </div>
                </div>


            </div>
        </div>
    )
}