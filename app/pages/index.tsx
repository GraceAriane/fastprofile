import { Header } from "~/components/header";
import { Footer } from "~/components/footer";
import { Hero } from "./hero";
import { Fonction } from "~/components/fonction";
import { faChartLine, faUsers,faChartSimple } from "@fortawesome/free-solid-svg-icons";
import { Faq } from "~/components/faq";
import { Price } from "~/components/price";
import vector from "../assets/images/blur.svg"


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
                    <section id="" className="py-24 md:py-32 lg:py-30">
                        <div className="w-[90%] mx-auto mb-6">
                            <h2 className="scroll-m-20 pb-2 text-[6.5vw] text-[#1E3A8A] font-bold tracking-tight first:mt-0 text-center md:text-[4.5vw] lg:text-[3.5vw]">
                                Tout ce dont tu as besoin, en un seul lien
                            </h2>
                            <p className="text-[#6B7280] text-lg md:text-xl my-4 text-center">
                                Rassemble tes liens, projets et réseaux sociaux sur une page unique et élégante.
                            </p>
                        </div>

                        <div className="my-10 mx-auto px-4 flex flex-wrap justify-center gap-8 md:w-[90%] lg:w-auto">
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

                    <section className="py-20 md:py-28 lg:py-30">
                        <div className="w-[90%] mx-auto mb-10">
                            <h2 className="scroll-m-20 pb-2 text-[6.5vw] text-[#1E3A8A] font-bold tracking-tight first:mt-0 text-center md:text-[4.5vw] lg:text-[3.5vw]">
                                Choisis ton plan
                            </h2>
                            <p className="text-[#6B7280] text-lg md:text-xl my-4 text-center">
                                Sectionne celui qui te convient et commence une aventure inoubliable.
                            </p> 
                        </div>
                        <div className="my-6 mx-auto p-4 flex flex-col  justify-center items-center gap-8 md:w-[90%] lg:flex-row lg:w-auto">
                            <Price
                                titre="Gratuit"
                                sousTitre="Commencez avec votre propre lien FastProfile facilement"
                                prix="0 $US"
                                infoPrix="Gratuit pour toujours"
                                l1="🔗 1 profil"
                                l2="📎Liens illimités"
                                l3="🎨 1 thème simple"
                                l4="✅ Toujours gratuit"
                                buttonText="Commencer"
                            ></Price>

                            <Price
                                titre="Pro"
                                addcss="flex items-center justify-between mb-[3px]"
                                tag="recommandé"
                                sousTitre="Pour créateurs et solo-entrepreneurs à la recherche d'évolution"
                                prix="4 $US"
                                infoPrix="Par an, ou 5$ par mois"
                                l1="Tout du plan gratuit"
                                l2="🎨 Thèmes premium"
                                l3="📊 Statistiques de clics"
                                l4="📧 Support par email"
                                buttonText="Essayer Premium"
                                
                            ></Price>

                            <Price
                                titre="Premium"
                                sousTitre="Pour le business, équipes voulant zéro limites et des résultats rapides"
                                prix="7 $US"
                                infoPrix="Par an, ou 9$ par mois"
                                l1="Tout du plan Premium"
                                l2="❌ Suppression du branding FastProfile"
                                l3="⚡ Support prioritaire"
                                l4="🎨 Personnalisation avancée"
                                buttonText="Essayer Premium"
                            ></Price>

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