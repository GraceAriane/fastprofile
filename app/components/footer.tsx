import { Logo } from "./logo"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTiktok } from '@fortawesome/free-brands-svg-icons'
import { Separator } from "./ui/separator"
import { Button } from "./ui/button"


export function Footer(){
    return(
        <footer className="">
            <div className="max-w-11/12 w-11/12 m-auto p-2.5 flex flex-col gap-7">
                <Logo width="self-center"/>
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col items-center gap-3.5">
                        <h2 className="text-[20px]">À Propos</h2>
                        <p className="text-center">
                            FastProfile est une plateforme moderne qui vous permet de créer
                            un profil unique, simple et professionnel en quelques minutes
                        </p>
                    </div>
                    <Separator className=""></Separator>
                    <div>
                        <ul className="flex justify-center gap-2">
                            <li><Button variant="ghost"><a href=""><FontAwesomeIcon icon={faInstagram} className="text-[21px]"/></a></Button></li>
                            <li><Button variant="ghost"><a href=""><FontAwesomeIcon icon={faFacebook} className="text-[21px]"/></a></Button></li>
                            <li><Button variant="ghost"><a href=""><FontAwesomeIcon icon={faTiktok} className="text-[21px]"/></a></Button></li>
                        </ul>
                    </div>
                    <p className="self-center">© 2025 FastProfile, Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    )
}