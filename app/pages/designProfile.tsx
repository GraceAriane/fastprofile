import { Button } from "~/components/ui/button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faArrowRotateRight, faCircleUser, faLayerGroup, faPaintRoller, faRotateLeft, faSliders, faXmark } from "@fortawesome/free-solid-svg-icons";
import { UserPage } from "./linkPage";
import type { User } from "~/types/user";
import { Link } from "react-router";

import { useState } from "react";
import { themes } from "~/config/themes";

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
    const [open,setOpen] = useState(false)
    const [theme, setTheme] = useState<keyof typeof themes>("light")
    

    return(
        <div className="">
            <div className="min-h-screen grid grid-cols-1 grid-rows-[85px_1fr]">
                <div className="flex items-center justify-between p-4">
                    <h2 className="flex items-center gap-1 scroll-m-20 font-semibold tracking-tight first:mt-0 text-center">
                        <Link to="/admin" className="px-2 py-1 rounded-full hover:bg-[#d3d3d3]">
                            <FontAwesomeIcon icon={faAngleLeft} className="text-xs"/>
                        </Link>
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

                <div className={`border-1 rounded-tl-3xl rounded-tr-3xl relative transition-all duration-500 ${open ? "scale-70 -translate-y-22 w-9/12 mx-auto" : "scale-100"}`}>

                    <UserPage user={mockUser} variant="design" theme={theme}></UserPage>

                </div>

                <div className="fixed z-50 rounded-[24px] left-1/2 -translate-x-1/2 bottom-3.5 p-4 shadow-lg flex items-center justify-center bg-[#fff]">
                    <Button variant="ghost" className="flex flex-col justify-center">
                        <FontAwesomeIcon icon={faCircleUser} />
                        Profil
                    </Button>
                    <Button variant="ghost" className="flex flex-col justify-center" onClick={()=>setOpen(!open)}>
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

                <div className={`grid grid-cols-1 grid-rows-[40px_40px_1fr] h-[60%] p-4 absolute bottom-0 left-0 right-0 ${open ? "translate-y-0" : "translate-y-full"} z-1000 shadow-2xl rounded-tl-2xl rounded-tr-2xl bg-white transition-transform duration-500`}>
                    <div className="flex justify-between">
                        <h4 className="text-[18px]">Thème</h4>
                        <Button className="bg-[#cecece] rounded-full" onClick={()=>{setOpen(!open)}}>
                            <FontAwesomeIcon icon={faXmark} />
                        </Button>
                    </div>
                    <div className="flex justify-around">
                        <Button className="text-xl" variant="ghost">Customisable</Button>
                        <Button className="text-xl" variant="ghost">Curated</Button>
                    </div>

                    <div className="border-2 overflow-y-auto">
                        <Button onClick={()=>setTheme("dark")}>black</Button>
                        <Button onClick={()=>setTheme("light")}>light</Button>
                        <Button onClick={()=>setTheme("fancy")}>fancy</Button>

                    </div>
                </div>

            </div>
        </div>
    )
}