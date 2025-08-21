import { Link, Outlet } from "react-router"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket, faGear, faChartLine,faUserGroup, faBars } from "@fortawesome/free-solid-svg-icons";
export default function Layout() {
  return (
    <div className="flex flex-col bg-amber-500 h-[100vh]">
        <div className="self-start bg-amber-950 h-[95%]">
            <Outlet></Outlet>
        </div>
        <div className="self-end bg-blue-800 w-[100%] h-[10%] p-auto">
            <div className="flex bg-amber-200 w-[95%] m-auto justify-between">
                
                <Link to="" className="flex flex-col justify-center items-center">
                    <FontAwesomeIcon icon={faArrowUpFromBracket} />
                    <p className="text-[0.625rem]">Mon FastProfile</p>
                </Link>
                
                <Link to="" className="flex flex-col justify-center items-center">
                    <FontAwesomeIcon icon={faChartLine} />
                    <p className="text-[0.625rem]">Insights</p>
                </Link>

                <Link to="" className="flex flex-col justify-center items-center">
                    <FontAwesomeIcon icon={faUserGroup} />
                    <p className="text-[0.625rem]">Audience</p>
                </Link>
                
                <Link to="" className="flex flex-col justify-center items-center">
                    <FontAwesomeIcon icon={faBars} />
                    <p className="text-[0.625rem]">More</p>
                </Link>
            </div>

        </div>
    </div>
  )
}
