import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"
import { Button } from "~/components/ui/button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket, faGear, faChartLine,faUserGroup, faBars } from "@fortawesome/free-solid-svg-icons";

export function MyfastProfile(){
    return(
        <div>
            <div className="flex justify-between">
                <div className="flex items-center justify-between w-[70%] ">
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
                <Button className="rounded-2xl shadow-none py-4 px-6 text-[17px] bg-[#9C9C9C] text-white font-semibold">Pages</Button>
                <Button className="rounded-2xl shadow-none py-4 px-6 text-[17px] bg-[#E8E8E8]">Archives</Button>
            </div>

            <div>

                
            </div>

        </div>
    )
}