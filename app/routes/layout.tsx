import { Link, Outlet } from "react-router"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoltLightning,faArrowUpFromBracket, faGear, faChartLine,faUserGroup, faBars, faUser, faArrowRightFromBracket, faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { MyfastProfile } from "~/pages/adminFastprofile";
import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu"
import { Accordion,  
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "~/components/ui/accordion"


export default function Layout() {
  return (
    <div className="flex flex-col h-[100vh] md:p-0 md:bg-[#1E3A8A] md:text-[16px]">
        <div className="hidden md:flex md:items-center md:justify-between md:p-3 bg-[#1E3A8A]">
            <FontAwesomeIcon icon={faBoltLightning} className="text-[#FACC15] text-2xl"/>
            <Button
            variant="outline"
            className="font-medium text-white  hover:transition-all rounded-3xl"
            >
            <a href="">upgrade</a>
            </Button>
        </div>

        <div className="self-start h-[95%] w-[100%] md:rounded-tl-2xl md:rounded-tr-3xl md:bg-[#F5F5F5] md:flex">

            <div className="sidebar hidden md:flex flex-col gap-3 p-4 bg-[#efefef] w-[30%]">
                <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center gap-1.5">
                        <img src="https://github.com/shadcn.png" alt="" className="w-[25px] rounded-full"/>
                        <h3 className="text-[15px] text-[#373737]">tchoukeugrace</h3>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="rounded-2xl">
                        <DropdownMenuLabel className="flex gap-2 items-center">
                            <img src="https://github.com/shadcn.png" alt="" className="w-[30px] rounded-full"/>
                            <div className="">
                                <h3 className="text-[16px] text-[#373737]">tchoukeugrace</h3>
                                <p className="text-[13px]">fastprofile.com/tchou...</p>
                            </div>
                            <Button className="rounded-3xl border border-[#F5F5F5]">Free</Button>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <FontAwesomeIcon icon={faUser}/>
                            Compte
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <FontAwesomeIcon icon={faBoltLightning}/>
                            Upgrade
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <FontAwesomeIcon icon={faCircleQuestion} />
                            Poser une question
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <FontAwesomeIcon icon={faArrowRightFromBracket} />
                            Se déconnecter
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <div>
                    <Accordion type="single" collapsible className="">
                        <AccordionItem value="item-1" className="pl-2 rounded-[10px]">
                            <AccordionTrigger className="md:text-[15px] hover:no-underline">My FastProfile</AccordionTrigger>
                            <AccordionContent className="ml-2 flex flex-col md:text-[15px] gap-2 border-l-[#c7c7c7] border-l">
                                <a href="" className="p-1 pl-2 rounded-[10px] hover:bg-[#c7c7c7] hover:duration-150 hover:transition-all">Liens</a>
                                <a href="" className="p-1 pl-2 rounded-[10px] hover:bg-[#c7c7c7] hover:duration-150 hover:transition-all">Design</a>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <div className="flex flex-col gap-1">
                        <Link to="" className="flex items-center gap-2 rounded-[10px] p-2 hover:bg-[#c7c7c7] hover:duration-150 hover:transition-all">
                            <FontAwesomeIcon icon={faChartLine} className="text-[15px]"/>
                            <p className="">Insights</p>
                        </Link>

                        <Link to="" className="flex items-center gap-2 rounded-[10px] p-2 hover:bg-[#c7c7c7] hover:duration-150 hover:transition-all">
                            <FontAwesomeIcon icon={faUserGroup} className="text-[15px]"/>
                            <p className="">Audience</p>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="p-4 md:w-[75%] md:p-0">
                <MyfastProfile></MyfastProfile>
            </div>

        </div>
        
        
        <div className="fixed bottom-0 self-end w-[100%] h-[10%] pt-[2%] bg-[#F5F5F5] flex md:hidden">

            <div className="flex w-[90%] m-auto justify-between items-center text-[#6D6D6D]">
                
                <Link to="" className="flex flex-col justify-center items-center gap-2">
                    <FontAwesomeIcon icon={faArrowUpFromBracket} className="text-[25px]"/>
                    <p className="text-[0.645rem]">FastProfile</p>
                </Link>
                
                <Link to="" className="flex flex-col justify-center items-center gap-2">
                    <FontAwesomeIcon icon={faChartLine} className="text-[25px]"/>
                    <p className="text-[0.645rem]">Insights</p>
                </Link>

                <Link to="" className="flex flex-col justify-center items-center gap-2">
                    <FontAwesomeIcon icon={faUserGroup} className="text-[25px]"/>
                    <p className="text-[0.645rem]">Audience</p>
                </Link>
                
                <Link to="" className="flex flex-col justify-center items-center gap-2">
                    <FontAwesomeIcon icon={faBars} className="text-[25px]"/>
                    <p className="text-[0.645rem]">More</p>
                </Link>
            </div>

        </div>


    </div>
  )
}
