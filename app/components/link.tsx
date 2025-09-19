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
        <form action="" className="border bg-white rounded-2xl p-4">
            <div >
                <h4>Github</h4>
                <p>https://github.com/tchoukeu grace</p>
            </div>
            <div>
                <Tooltip>
                    <TooltipTrigger>
                        <Button>
                            <FontAwesomeIcon icon={faTrashCan} />
                            Supprimer
                        </Button>

                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                        <p>Add to library</p>
                    </TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger>
                        <Button>
                            <FontAwesomeIcon icon={faChartSimple} />
                            Clics
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                        <p>Add to library</p>
                    </TooltipContent>
                </Tooltip>
            </div>
        </form>
    )
}