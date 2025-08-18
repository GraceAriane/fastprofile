import { Header } from "~/components/header";
import { Footer } from "~/components/footer";
import { Hero } from "./hero";
import { Error } from "./error";
import { Fonction } from "~/components/fonction";
import { faChartLine, faUsers,faChartSimple } from "@fortawesome/free-solid-svg-icons";



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
                    <section className="h-[100vh] flex flex-col mt-10">
                        <Fonction iconProp={faChartLine} titre="5min" sTitre="De temps de création"></Fonction>
                        <Fonction iconProp={faChartSimple} titre="10K+" sTitre="Utilisateurs par mois"></Fonction>
                        <Fonction iconProp={faChartSimple} titre="99%" sTitre="Temps de disponibilité"></Fonction>
                    </section>
                </main>
                <Footer/>
            </div>
        </>
    )
}