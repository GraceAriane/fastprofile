import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button } from "~/components/ui/button"


export function Parameter(){
    return(
        <div>
            <div className="bg-[#fbfaf9] flex justify-between items-center p-4 py-6 sticky top-0 left-0 right-0 md:bg-[#F2F1ED] md:rounded-tr-2xl">
                <h2 className="text-2xl scroll-m-20 font-semibold tracking-tight first:mt-0 text-center">More</h2>
                <Button
                    variant="outline"
                    className="p-4 font-medium text-[#1E3A8A] bg-white hover:transition-all"
                >
                    <a href="">Try Pro for free</a>
                </Button>
            </div>

        </div>
    )
}