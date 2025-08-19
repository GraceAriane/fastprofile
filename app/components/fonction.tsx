import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";


type data ={
    titre: string,
    sTitre: string,
    iconProp: IconProp
}

export function Fonction({titre, sTitre, iconProp}: data){
    return(
        <div className="w-[85%] h-[220px] m-auto p-3 gap-4 flex flex-col text-white bg-[#501FA1] justify-center border-white border-2 items-center rounded-2xl">
            <FontAwesomeIcon icon={iconProp} className="text-[#241B33] bg-[#FACC15] p-4 rounded-[8px]"/>
            <h2 className="text-[7vw] md:text-[4vw] lg:text-[3vw] font-medium">{titre}</h2>
            <p className="text-[4.5vw] md:text-[2.5vw] lg:text-[1.5vw] text-center w-[50%]">{sTitre}</p>
        </div>
    )
}