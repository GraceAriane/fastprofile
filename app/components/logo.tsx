import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBoltLightning } from '@fortawesome/free-solid-svg-icons'

type widthProps = {
    width?: string
}
export function Logo({width}: widthProps){
    return(
        <div className={`flex items-center gap-0 ${width}`}>
            <FontAwesomeIcon icon={faBoltLightning} />
            <h1 className="font-semibold text-2xl">FastProfile</h1>
        </div>
    )
}