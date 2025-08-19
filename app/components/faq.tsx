import { Accordion,  
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "./ui/accordion"

export function Faq(){
    return(
        <div className="max-w-11/12 w-11/12 mx-auto my-3.5 py-10">
            <h2 className="scroll-m-20 pb-2 text-[7vw] font-semibold tracking-tight first:mt-0 text-center">
                Avez vous des questions ?
            </h2>
            <div className="flex flex-col gap-2">
                <Accordion type="single" collapsible className="hover:border-[#6486E3] hover:transition-all hover:border-2 hover:border-solid">
                    <AccordionItem value="item-1" className="p-2 bg-[#112F81] rounded-2xl">
                        <AccordionTrigger  className="[&>svg]:text-[#F0F0F0]">Qu’est-ce que FastProfile ?</AccordionTrigger>
                        <AccordionContent className="">
                            FastProfile est une page de profil en ligne simple et élégante qui te permet de regrouper tous tes liens,
                            réseaux sociaux, projets et contacts au même endroit.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1" className="p-2 bg-[#112F81] rounded-2xl">
                        <AccordionTrigger   className="[&>svg]:text-[#F0F0F0]">Est-ce gratuit ?</AccordionTrigger>
                        <AccordionContent>
                            Oui ! FastProfile propose une version gratuite avec toutes les fonctionnalités essentielles. Une
                            version premium sera disponible plus tard avec des options avancées.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1" className="p-2 bg-[#112F81] rounded-2xl">
                        <AccordionTrigger   className="[&>svg]:text-[#F0F0F0]">Ai-je besoin de compétences techniques pour l’utiliser ?</AccordionTrigger>
                        <AccordionContent>
                            Pas du tout. Créer ton profil se fait en quelques clics, sans aucune connaissance en code.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1" className="p-2 bg-[#112F81] rounded-2xl">
                        <AccordionTrigger   className="[&>svg]:text-[#F0F0F0]">Est-ce que je peux personnaliser l’apparence de ma page ?</AccordionTrigger>
                        <AccordionContent>
                            Oui ! Tu peux choisir tes couleurs, ton style et ton image de profil pour créer une page qui te ressemble.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1" className="p-2 bg-[#112F81] rounded-2xl">
                        <AccordionTrigger   className="[&>svg]:text-[#F0F0F0]">Est-ce que mon profil est accessible sur mobile ?</AccordionTrigger>
                        <AccordionContent>
                            Absolument. FastProfile est optimisé pour tous les écrans : smartphone, tablette et ordinateur.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1" className="p-2 bg-[#112F81] rounded-2xl">
                        <AccordionTrigger   className="[&>svg]:text-[#F0F0F0]">Puis-je mettre à jour mes liens facilement ?</AccordionTrigger>
                        <AccordionContent>
                            Oui, tu peux ajouter, modifier ou supprimer tes liens à tout moment, en quelques secondes.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1" className="p-2 bg-[#112F81] rounded-2xl">
                        <AccordionTrigger   className="[&>svg]:text-[#F0F0F0]">Est-ce sécurisé ?</AccordionTrigger>
                        <AccordionContent>
                            La sécurité est une priorité. Tes données sont protégées et seules les informations que tu décides de partager seront visibles publiquement.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    )
}