import { Header } from "~/components/header";
import { Footer } from "~/components/footer";
import { Hero } from "./hero";
import { Error } from "./error";
import { Fonction } from "~/components/fonction";
import { faChartLine, faUsers,faChartSimple } from "@fortawesome/free-solid-svg-icons";
import { Faq } from "~/components/faq";


export function Index(){
    return(
        <> 
            <div>
                <div className="">
                    <div className="mt-4">
                        <Header/>
                    </div>
                    <Hero></Hero>
                </div>
                <main>
                    <section className="flex flex-col mt-10 gap-5">
                        <Fonction iconProp={faChartLine} titre="5min" sTitre="De temps de création"></Fonction>
                        <Fonction iconProp={faUsers} titre="10K+" sTitre="Utilisateurs par mois"></Fonction>
                        <Fonction iconProp={faChartSimple} titre="99%" sTitre="Temps de disponibilité"></Fonction>
                    </section>
                    <section>

                    </section>
                    <section>

                    </section>
                    <section className="bg-[#153BA3] text-[#F0F0F0] ">
                        <Faq></Faq>
                    </section>
                </main>
                <Footer/>
            </div>
        </>
    )
}