import { faChartLine, faChartSimple, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "~/components/ui/tooltip"
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

interface dataProps{
    name: string,
    link: string
}

export function LinkButton({name, link}: dataProps){
    return(
        <form action="" className="shadow-xs flex border-[#acacac81] border bg-white rounded-2xl p-4 md:gap-2 lg:gap-0">
            <div className=" flex flex-col gap-3 w-[60%] lg:w-[80%]">
                <h4 className="font-semibold text-[17px] truncate">{name}</h4>
                <p className="truncate">{link}</p>
            </div>
            <div className="text-[#787C71] flex flex-col justify-end items-end w-[40%] lg:w-[20%]">
                <Tooltip>
                    <TooltipTrigger className="self-end">
                        <Button className="rounded-xl shadow-none hover:transition-all hover:duration-300 hover:bg-[#E6E6E6]">
                            <FontAwesomeIcon icon={faChartSimple} />
                            <span>0</span>Clics
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                        <p>Nombre de clics</p>
                    </TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger className="">
                        <Button className="shadow-none hover:transition-all hover:duration-300 hover:bg-[#E6E6E6]">
                            <FontAwesomeIcon icon={faTrashCan} />
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                        <p>Supprimer</p>
                    </TooltipContent>
                </Tooltip>
            </div>
        </form>
    )
}