import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";


type data ={
    titre: string,
    sTitre: string,
    iconProp: IconProp
}

export function Fonction({titre, sTitre, iconProp}: data){
    return(
        <div className="">
            <FontAwesomeIcon icon={iconProp} className=""/>
            <h2 className="">{titre}</h2>
            <p className="">{sTitre}</p>
        </div>
    )
}