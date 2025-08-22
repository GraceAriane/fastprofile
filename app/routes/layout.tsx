import { Link, Outlet } from "react-router"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoltLightning,faArrowUpFromBracket, faGear, faChartLine,faUserGroup, faBars } from "@fortawesome/free-solid-svg-icons";
import { Separator } from "~/components/ui/separator";
import { MyfastProfile } from "~/pages/adminFastprofile";
import { Button } from "~/components/ui/button";


export default function Layout() {
  return (
    <div className="flex flex-col h-[100vh] md:p-0 md:bg-[#1E3A8A]">
        <div className="hidden md:flex md:items-center md:justify-between md:p-3 bg-[#1E3A8A]">
            <FontAwesomeIcon icon={faBoltLightning} className="text-[#FACC15] text-2xl"/>
            <Button
            variant="outline"
            className="font-medium text-white  hover:transition-all rounded-3xl"
            >
            <a href="">upgrade</a>
            </Button>
        </div>

        <div className="self-start h-[95%] w-[100%] md:rounded-tl-3xl md:rounded-tr-3xl md:bg-[#F5F5F5] md:flex">

            <div className="sidebar hidden md:flex bg-[#efefef] w-[30%]">
                
            </div>
            <div className="p-4 md:w-[75%]">
                <MyfastProfile></MyfastProfile>
            </div>

        </div>
        
        
        <div className="self-end w-[100%] h-[10%] pt-[2%] bg-[#F5F5F5] flex md:hidden">

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
