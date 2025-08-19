import type { Url } from "url"
import { Button } from "./ui/button"

type dataPrice ={
    titre: string,
    sousTitre:string,
    prix: string,
    infoPrix:string,
    l1:string,
    l2:string,
    l3:string,
    l4:string,
    buttonText: string
    bg?:Url,
    tag?:string

}

export function Price({titre,sousTitre, prix, infoPrix, l1, l2,l3,l4,buttonText,bg,tag}: dataPrice){
    return(
        <div className="bg-white rounded-3xl flex flex-col m-auto md:w-[60%] lg:w-[300px]" style={{background: `${bg} no-repeat center`}}>
            <div className="bg-[rgb(227,228,230)] rounded-tl-3xl rounded-tr-3xl px-3 py-5">
                <div className="">
                    <h3 className="scroll-m-20 text-[25px] text-[#505050] font-bold tracking-tight first:mt-0 md:text-3xl lg:text-[32px]">{titre}</h3>
                    <span>{tag}</span>
                </div>
                <span className="text-[14px]">{sousTitre}</span>
            </div>
            <div className="px-3 py-5 flex flex-col gap-6">
                <div className="flex flex-col">
                    <p className="text-[#000] text-3xl font-extrabold">{prix}</p>
                    <p className="text-[#727272]">{infoPrix}</p>
                </div>
                <div>
                    <ul className="text-[18px] flex flex-col gap-4 font-medium">
                        <li>{l1}</li>
                        <li>{l2}</li>
                        <li>{l3}</li>
                        <li>{l4}</li>
                    </ul>
                </div>
            </div>

            <Button className="bg-[#1E3A8A] text-white mb-8 mx-5 rounded-3xl p-7">{buttonText}</Button>
        </div>
    )
}