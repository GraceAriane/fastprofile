import { Header } from "~/components/header";
import { Footer } from "~/components/footer";
import { Hero } from "./hero";
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
                    {/* <section className="flex flex-col items-center" style={{ background: `url(${waves}) no-repeat center`, backgroundSize: "cover" }}>
                        <div className="flex flex-col mt-10 gap-5 py-25 md:flex-row mx-auto w-[90%]">
                            <Fonction iconProp={faChartLine} titre="5min" sTitre="De temps de création"></Fonction>
                            <Fonction iconProp={faUsers} titre="10K+" sTitre="Utilisateurs par mois"></Fonction>
                            <Fonction iconProp={faChartSimple} titre="99%" sTitre="Temps de disponibilité"></Fonction>
                        </div>

                    </section> */}
                    <section>

                    </section>
                    <section>

                    </section>
                    <section className="bg-[#FFFFFF] text-[#1E3A8A] ">
                        <Faq></Faq>
                    </section>
                </main>
                <footer className="py-3 bg-[#1E3A8A] text-white">
                    <Footer/>
                </footer>
            </div>
        </>
    )
}