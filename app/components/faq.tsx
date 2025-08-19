import { Accordion,  
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "./ui/accordion"

export function Faq(){
    return(
        <div className="max-w-11/12 w-11/12 mx-auto my-3.5 py-10 flex flex-col gap-[3vw] lg:gap-[2.5vw]">
            <h2 className="scroll-m-20 pb-2 text-[7vw] font-semibold tracking-tight first:mt-0 text-center md:text-[4.5vw] lg:text-[3.5vw]">
                Avez vous des questions ?
            </h2>
            <div className="flex flex-col gap-[2vw] lg:gap-[1vw]">
                <Accordion type="single" collapsible className="hover:border-[#6486E3] hover:transition-all hover:border-2 hover:border-solid">
                    <AccordionItem value="item-1" className="p-3 bg-[#112F81] rounded-2xl">
                        <AccordionTrigger className="[&>svg]:text-[#F0F0F0] md:text-[2vw] lg:text-[1.5vw]">Qu’est-ce que FastProfile ?</AccordionTrigger>
                        <AccordionContent className="md:text-[1.5vw] lg:text-[1.4vw]">
                            FastProfile est une page de profil en ligne simple et élégante qui te permet de regrouper tous tes liens,
                            réseaux sociaux, projets et contacts au même endroit.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1" className="p-3 bg-[#112F81] rounded-2xl">
                        <AccordionTrigger className="[&>svg]:text-[#F0F0F0] md:text-[2vw] lg:text-[1.5vw]">Est-ce gratuit ?</AccordionTrigger>
                        <AccordionContent className="md:text-[1.5vw] lg:text-[1.4vw]">
                            Oui ! FastProfile propose une version gratuite avec toutes les fonctionnalités essentielles. Une
                            version premium sera disponible plus tard avec des options avancées.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1" className="p-3 bg-[#112F81] rounded-2xl">
                        <AccordionTrigger className="[&>svg]:text-[#F0F0F0] md:text-[2vw] lg:text-[1.5vw]">Ai-je besoin de compétences techniques pour l’utiliser ?</AccordionTrigger>
                        <AccordionContent className="md:text-[1.5vw] lg:text-[1.4vw]">
                            Pas du tout. Créer ton profil se fait en quelques clics, sans aucune connaissance en code.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1" className="p-3 bg-[#112F81] rounded-2xl">
                        <AccordionTrigger className="[&>svg]:text-[#F0F0F0] md:text-[2vw] lg:text-[1.5vw]">Est-ce que je peux personnaliser l’apparence de ma page ?</AccordionTrigger>
                        <AccordionContent className="md:text-[1.5vw] lg:text-[1.4vw]">
                            Oui ! Tu peux choisir tes couleurs, ton style et ton image de profil pour créer une page qui te ressemble.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1" className="p-3 bg-[#112F81] rounded-2xl">
                        <AccordionTrigger className="[&>svg]:text-[#F0F0F0] md:text-[2vw] lg:text-[1.5vw]">Est-ce que mon profil est accessible sur mobile ?</AccordionTrigger>
                        <AccordionContent className="md:text-[1.5vw] lg:text-[1.4vw]">
                            Absolument. FastProfile est optimisé pour tous les écrans : smartphone, tablette et ordinateur.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1" className="p-3 bg-[#112F81] rounded-2xl">
                        <AccordionTrigger className="[&>svg]:text-[#F0F0F0] md:text-[2vw] lg:text-[1.5vw]">Puis-je mettre à jour mes liens facilement ?</AccordionTrigger>
                        <AccordionContent className="md:text-[1.5vw] lg:text-[1.4vw]">
                            Oui, tu peux ajouter, modifier ou supprimer tes liens à tout moment, en quelques secondes.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1" className="p-3 bg-[#112F81] rounded-2xl">
                        <AccordionTrigger className="[&>svg]:text-[#F0F0F0] md:text-[2vw] lg:text-[1.5vw]">Est-ce sécurisé ?</AccordionTrigger>
                        <AccordionContent className="md:text-[1.5vw] lg:text-[1.4vw]">
                            La sécurité est une priorité. Tes données sont protégées et seules les informations que tu décides de partager seront visibles publiquement.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    )
}