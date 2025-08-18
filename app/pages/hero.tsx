import { Button } from "~/components/ui/button"
import { Input} from "~/components/ui/input"
import kameni from "../assets/images/sarah_kameni.svg"
import alin from "../assets/images/alin_woong.svg"
import mary from "../assets/images/marry_portman.svg"


export function Hero(){
    return(
       <div className="flex flex-col items-center gap-[50px]">
            <div className="flex flex-col gap-10">
                <div className="mt-28 flex flex-col gap-5">
                    <h1 className="text-[9.6vw] md:text-[6vw] leading-[107%] text-[#1E3A8A] font-black">Crée ton profil <span className="text-[#FACC15]">en ligne</span>  en un clin d’œil.</h1>
                    <p className="text-[#6B7280]">
                        Rassemble tous tes liens, projets et réseaux sociaux 
                        sur une page unique, élégante et rapide à partager.
                    </p>
                </div>
                <div className="flex flex-col gap-4">
                    <input placeholder="fastProfile.com/" className="h-19 placeholder:font-semibold border-2 border-solid border-[#3B559C] outline-none rounded-2xl px-3 focus:shadow-md focus:shadow-[#4867BE] focus:transition-shadow"/>
                    <Button className="w-[200px] p-7 text-[5vw] bg-[#8F58E8] text-white hover:bg-[#8451D6] hover:transition-all">Créer</Button>
                </div>
            </div>
            <div className="flex">
                <div className="perspective-distant rotate-[-5deg] animate-floatXg">
                    <img src={kameni} alt="" />
                </div>
                <div className="perspective-distant z-10 animate-floatY">
                    <img src={alin} alt="" />
                </div>
                <div className="perspective-distant rotate-[5deg] animate-floatXd">
                    <img src={mary} alt="" />
                </div>
            </div>
       </div> 
    )
}