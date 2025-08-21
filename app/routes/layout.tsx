import { Link, Outlet } from "react-router"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket, faGear, faChartLine,faUserGroup, faBars } from "@fortawesome/free-solid-svg-icons";
import { Separator } from "~/components/ui/separator";
import { MyfastProfile } from "~/pages/adminFastprofile";
export default function Layout() {
  return (
    <div className="flex flex-col h-[100vh] p-4">
        <div className="self-start h-[95%] w-[100%]">
            <MyfastProfile></MyfastProfile>
        </div>
        
        <div className="self-end w-[100%] h-[10%] pt-[2.5%]">

            <div className="flex w-[90%] m-auto justify-between text-[#6D6D6D]">
                
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
