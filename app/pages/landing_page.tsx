import { Button } from "~/components/ui/button"
import { Input} from "~/components/ui/input"
import kameni from "../assets/images/sarah_kameni.svg"
import alin from "../assets/images/alin_woong.svg"
import mary from "../assets/images/marry_portman.svg"


export function LandingPage(){
    return(
       <div className="flex flex-col items-center border-2 border-amber-950 border-solid ">
            <div className="flex flex-col gap-10 border-2 border-amber-950 border-solid ">
                <div className="mt-28 flex flex-col gap-5">
                    <h1 className="text-[9.6vw] leading-[107%] text-[#1E3A8A] font-black">Crée ton profil <span className="text-[#FACC15]">en ligne</span>  en un clin d’œil.</h1>
                    <p className="text-[#6B7280]">
                        Rassemble tous tes liens, projets et réseaux sociaux 
                        sur une page unique, élégante et rapide à partager.
                    </p>
                </div>
                <div className="flex flex-col gap-4">
                    <Input placeholder="fastProfile.com/" className="h-19"/>
                    <Input type="submit" value="Créer"/>
                </div>
            </div>
            <div className="border-2 border-amber-950 border-solid">
                <div className="">
                    <img src={kameni} alt="" />
                </div>
                <div className="">
                    <img src={alin} alt="" />
                </div>
                <div className="">
                    <img src={mary} alt="" />
                </div>
            </div>
       </div> 
    )
}