import { Accordion,  
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "./ui/accordion"

export function Faq(){
    return(
        <div className="max-w-11/12 w-11/12 mx-auto my-3.5 py-10 flex flex-col gap-[3vw] lg:gap-[2.5vw]">
            <h2 className="scroll-m-20 pb-2 text-[6.5vw] font-semibold tracking-tight first:mt-0 text-center md:text-[4.5vw] lg:text-[3.5vw]">
                Avez vous des questions ?
            </h2>
            <div className="flex flex-col gap-[2vw] lg:gap-[1vw] lg:w-[65%] lg:m-auto">
                <Accordion type="single" collapsible className="bg-[#F3F4F6] rounded-2xl border-1 border-solid border-[#3B57A3]">
                    <AccordionItem value="item-1" className="p-3 rounded-2xl">
                        <AccordionTrigger className="[&>svg]:text-[#1E3A8A] md:text-[2vw] lg:text-[1.5vw] hover:no-underline">Qu’est-ce que FastProfile ?</AccordionTrigger>
                        <AccordionContent className="md:text-[1.5vw] lg:text-[1.4vw] text-[#374151]">
                            FastProfile est une page de profil en ligne simple et élégante qui te permet de regrouper tous tes liens,
                            réseaux sociaux, projets et contacts au même endroit.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible className="bg-[#F3F4F6] rounded-2xl border-1 border-solid border-[#3B57A3]">
                    <AccordionItem value="item-1" className="p-3 rounded-2xl">
                        <AccordionTrigger className="[&>svg]:text-[#1E3A8A] md:text-[2vw] lg:text-[1.5vw] hover:no-underline">Est-ce gratuit ?</AccordionTrigger>
                        <AccordionContent className="md:text-[1.5vw] lg:text-[1.4vw] text-[#374151]">
                            Oui ! FastProfile propose une version gratuite avec toutes les fonctionnalités essentielles. Une
                            version premium sera disponible plus tard avec des options avancées.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible className="bg-[#F3F4F6] rounded-2xl border-1 border-solid border-[#3B57A3]">
                    <AccordionItem value="item-1" className="p-3 rounded-2xl">
                        <AccordionTrigger className="[&>svg]:text-[#1E3A8A] md:text-[2vw] lg:text-[1.5vw] hover:no-underline">Ai-je besoin de compétences techniques pour l’utiliser ?</AccordionTrigger>
                        <AccordionContent className="md:text-[1.5vw] lg:text-[1.4vw] text-[#374151]">
                            Pas du tout. Créer ton profil se fait en quelques clics, sans aucune connaissance en code.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible className="bg-[#F3F4F6] rounded-2xl border-1 border-solid border-[#3B57A3]">
                    <AccordionItem value="item-1" className="p-3 rounded-2xl">
                        <AccordionTrigger className="[&>svg]:text-[#1E3A8A] md:text-[2vw] lg:text-[1.5vw] hover:no-underline">Est-ce que je peux personnaliser l’apparence de ma page ?</AccordionTrigger>
                        <AccordionContent className="md:text-[1.5vw] lg:text-[1.4vw] text-[#374151]">
                            Oui ! Tu peux choisir tes couleurs, ton style et ton image de profil pour créer une page qui te ressemble.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible className="bg-[#F3F4F6] rounded-2xl border-1 border-solid border-[#3B57A3]">
                    <AccordionItem value="item-1" className="p-3 rounded-2xl">
                        <AccordionTrigger className="[&>svg]:text-[#1E3A8A] md:text-[2vw] lg:text-[1.5vw] hover:no-underline">Est-ce que mon profil est accessible sur mobile ?</AccordionTrigger>
                        <AccordionContent className="md:text-[1.5vw] lg:text-[1.4vw] text-[#374151]">
                            Absolument. FastProfile est optimisé pour tous les écrans : smartphone, tablette et ordinateur.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible className="bg-[#F3F4F6] rounded-2xl border-1 border-solid border-[#3B57A3]">
                    <AccordionItem value="item-1" className="p-3 rounded-2xl">
                        <AccordionTrigger className="[&>svg]:text-[#1E3A8A] md:text-[2vw] lg:text-[1.5vw] hover:no-underline">Puis-je mettre à jour mes liens facilement ?</AccordionTrigger>
                        <AccordionContent className="md:text-[1.5vw] lg:text-[1.4vw] text-[#374151]">
                            Oui, tu peux ajouter, modifier ou supprimer tes liens à tout moment, en quelques secondes.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible className="bg-[#F3F4F6] rounded-2xl border-1 border-solid border-[#3B57A3]">
                    <AccordionItem value="item-1" className="p-3 rounded-2xl">
                        <AccordionTrigger className="[&>svg]:text-[#1E3A8A] md:text-[2vw] lg:text-[1.5vw] hover:no-underline">Est-ce sécurisé ?</AccordionTrigger>
                        <AccordionContent className="md:text-[1.5vw] lg:text-[1.4vw] text-[#374151]">
                            La sécurité est une priorité. Tes données sont protégées et seules les informations que tu décides de partager seront visibles publiquement.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    )
}