import { Button } from "~/components/ui/button"
import valerie from "../assets/images/Doudou_valerie.svg"
import arnold from "../assets/images/arnold_Dombou.svg"
import grace from "../assets/images/tchoukeu_grace.svg"
import { Link } from "react-router"


export function Hero(){
    return(
       <div className="max-w-11/12 w-11/12 m-auto flex flex-col justify-center items-center gap-[50px] pt-10 md:flex-row md:gap-[30px] md:pt-15 lg:pt-40 xl:pt-0 xl:min-h-screen">
            <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-5 self-center">
                    <h1 className="text-[9.6vw] text-center mt-24 leading-[107%] text-[#1E3A8A] font-black md:text-[6vw] lg:text-[4vw] md:text-left">Crée ton profil <span className="text-[#FACC15]">en ligne</span>  en un clin d’œil.</h1>
                    <p className="text-[#505050] text-center text-[4vw] md:text-[2.5vw] lg:text-[1.2rem] md:text-left">
                        Rassemble tous tes liens, projets et réseaux sociaux 
                        sur une page unique, élégante et rapide à partager.
                    </p>
                </div>
                <div className="flex flex-col gap-3 items-center md:items-start min-[1190px]:flex-row">
                    <input placeholder="fastProfile.com/" className="h-14 w-full  bg-[#fff] placeholder:font-semibold placeholder:text-[#969696] border-1 border-solid border-[#3B57A3] outline-none rounded-2xl px-3 focus:shadow-md focus:shadow-[#4867BE] focus:transition-shadow md:w-auto"/>
                    <Link to="admin" className="self-center md:self-start xl:self-center">
                        <Button className="w-[200px] py-6 text-[4vw] bg-[#1E3A8A] text-white hover:bg-[#3B57A3] hover:transition-all md:text-[2.5vw] lg:text-[1.2rem]">Créer</Button>
                    </Link>
                </div>
            </div>
            <div className="flex p-2 xl:pt-18">
                {/* border-2 border-solid border-amber-600 */}
                <div className="perspective-distant rotate-[-5deg] animate-floatXg">
                    <img src={valerie} alt="" />
                </div>
                <div className="perspective-distant z-10 animate-floatY">
                    <img src={grace} alt="" />
                </div>
                <div className="perspective-distant rotate-[5deg] animate-floatXd">
                    <img src={arnold} alt="" />
                </div>
            </div>
       </div> 
    )
}