import { Header } from "~/components/header";
import { Footer } from "~/components/footer";
import { Hero } from "./hero";
import { Fonction } from "~/components/fonction";
import { faChartLine, faUsers,faChartSimple } from "@fortawesome/free-solid-svg-icons";
import { Faq } from "~/components/faq";
import { Button } from "~/components/ui/button";


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
                    <section className="py-24 md:py-32 lg:py-40">
                        <div className="w-[90%] mx-auto mb-6">
                            <h2 className="scroll-m-20 pb-2 text-[6.5vw] text-[#1E3A8A] font-bold tracking-tight first:mt-0 text-center md:text-[4.5vw] lg:text-[3.5vw]">
                                Tout ce dont tu as besoin, en un seul lien
                            </h2>
                            <p className="text-[#6B7280] text-lg md:text-xl my-4 text-center">
                                Rassemble tes liens, projets et réseaux sociaux sur une page unique et élégante.
                            </p>
                        </div>

                        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-8">
                            <Fonction iconProp={faChartLine} titre="Un seul lien pour tout" sTitre="Regroupe tes réseaux sociaux, projets et contacts au même endroit."></Fonction>
                            <Fonction iconProp={faUsers} titre="Rapide à configurer" sTitre="Crée ton profil en quelques minutes, sans aucune compétence technique."></Fonction>
                            <Fonction iconProp={faChartSimple} titre="Design moderne" sTitre="Choisis parmi des thèmes élégants qui reflètent ta personnalité."></Fonction> 
                            <Fonction iconProp={faChartSimple} titre="Statistiques utiles" sTitre="Découvre combien de personnes cliquent sur tes liens."></Fonction>         
                        </div>
                    </section>

                    {/* <section>
                        <h2 className="scroll-m-20 pb-2 text-[6.5vw] font-semibold tracking-tight first:mt-0 text-center md:text-[4.5vw] lg:text-[3.5vw]">
                            Un aperçu de ton futur profil.
                        </h2>
                        <p>
                            Ton profil FastProfile est à la fois simple et professionnel.
                            Partage-le partout : sur tes CV, réseaux sociaux, ou cartes de visite.
                        </p>
                        <div>
                            maquettes
                        </div>
                    </section> */}

                    {/* <section>
                        <h2 className="scroll-m-20 pb-2 text-[6.5vw] font-semibold tracking-tight first:mt-0 text-center md:text-[4.5vw] lg:text-[3.5vw]">
                            Pourquoi FastProfile ?
                        </h2>

                    </section> */}

                    <section>
                        <h2 className="scroll-m-20 pb-2 text-[6.5vw] font-semibold tracking-tight first:mt-0 text-center md:text-[4.5vw] lg:text-[3.5vw]">
                            Choisis ton plan
                        </h2>
                        <div>
                            <div>
                                <div>
                                    <h3>Gratuit</h3>
                                </div>
                                
                                <div>
                                    <p>0$US</p>
                                    <p>Gratuit pour toujours</p>
                                </div>
                                <div>
                                    <ul>
                                        <li>🔗 1 profil</li>
                                        <li>📎Liens illimités</li>
                                        <li>🎨 1 thème simple</li>
                                        <li>✅ Toujours gratuit</li>
                                    </ul>
                                </div>
                                <Button>Commencer</Button>
                            </div>

                            <div>
                                <div>
                                    <h3>🌟 Premium</h3>
                                </div>
                                
                                <div>
                                    <div>
                                        <span>4 $US</span>
                                        <span>USD/mo</span>
                                    </div>
                                    <p>Par an, ou 5$ par mois</p>
                                </div>
                                <div>
                                    <ul>
                                        <li>Tout du plan gratuit</li>
                                        <li>🎨 Thèmes premium</li>
                                        <li>📊 Statistiques de clics</li>
                                        <li>📧 Support par email</li>
                                    </ul>
                                </div>
                                <Button>Essayer Premium</Button>
                            </div>

                            <div>
                                <div>
                                    <h3>Pro</h3>
                                </div>
                                
                                <div>
                                    <div>
                                        <span>7£</span>
                                        <span>USD/mo</span>
                                    </div>
                                    <p>Par an, ou 9$ par mois</p>
                                </div>
                                <div>
                                    <ul>
                                        <li>Tout du plan Premium</li>
                                        <li>🎨 Personnalisation avancée</li>
                                        <li>❌ Suppression du branding FastProfile</li>
                                        <li>⚡ Support prioritaire</li>
                                    </ul>
                                </div>
                                <Button>Passer Pro</Button>
                            </div>
                            

                            <div>
                            </div>
                        </div>
                    </section>

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