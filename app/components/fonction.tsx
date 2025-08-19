import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";


type data ={
    titre: string,
    sTitre: string,
    iconProp: IconProp
}

export function Fonction({titre, sTitre, iconProp}: data){
    return(
        <div className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center text-center gap-2.5 hover:scale-105 hover:shadow-2xl transition-all duration-300 md:w-[60%] lg:w-[300px]">
            <FontAwesomeIcon icon={iconProp} className="text-[#FACC15] text-4xl"/>
            <h2 className="text-[#1E3A8A] font-semibold text-[20px] md:text-[22px] lg:text-[1.4vw]">{titre}</h2>
            <p className="text-[#6B7280]  md:text-[18px]">{sTitre}</p>
        </div>
    )
}