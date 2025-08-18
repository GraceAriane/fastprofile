import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";


type data ={
    titre: string,
    sTitre: string,
    iconProp: IconProp
}

export function Fonction({titre, sTitre, iconProp}: data){
    return(
        <div className="w-[90%] m-auto p-3 gap-6 flex flex-col items-center border-solid border-amber-700 border-2 rounded-2xl">
            
            <FontAwesomeIcon icon={iconProp} className="text-[] bg-amber-300 p-3.5 rounded-[5px]"/>
            <h2 className="text-[7vw]">{titre}</h2>
            <p className="text-[4.5vw]">{sTitre}</p>
        </div>
    )
}