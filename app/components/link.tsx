import { faChartLine, faChartSimple, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "~/components/ui/tooltip"
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";


export function LinkButton(){
    return(
        <form action="" className="shadow-xs flex border-[#acacac81] border bg-white rounded-2xl p-4">
            <div className=" flex flex-col gap-3 w-[60%] lg:w-[80%]">
                <h4 className="font-semibold text-[17px] truncate">Github</h4>
                <p className="truncate">https://github.com/tchoukeu grace</p>
            </div>
            <div className="text-[#787C71] flex flex-col w-[40%] lg:[20%]">
                <Tooltip>
                    <TooltipTrigger className="self-end">
                        <Button className="rounded-xl shadow-none hover:transition-all hover:duration-300 hover:bg-[#BBBBBB]">
                            <FontAwesomeIcon icon={faChartSimple} />
                            <span>0</span>Clics
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                        <p>Nombre de clics</p>
                    </TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger className="self-end">
                        <Button className="shadow-none hover:transition-all hover:duration-300 hover:bg-[#BBBBBB]">
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