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
    tag?:string,
    addcss?:string

}


export function Price({titre,sousTitre, prix, infoPrix, l1, l2,l3,l4,buttonText,tag,addcss}: dataPrice){
    let contentClass,buttonClass,fond,textcolor,withScale;
    if(tag){
        contentClass="text-black bg-[#FACC15] px-4 py-1 rounded-3xl text-[14px] font-sbold md:text-[15px]"
        buttonClass="bg-[#FACC15] font-bold hover:bg-[#FCD34D] hover:transition-all hover:duration-300"
        fond="bg-[#1E3A8A] text-white"
        textcolor="text-white"
        withScale=" lg:scale-100 xl:scale-110"
    }else{
        buttonClass="bg-[#1E3A8A] text-white hover:bg-[#3B57A3] hover:transition-all hover:duration-500"
        fond="bg-[rgb(227,228,230)]"
        textcolor="text-[#505050]"
    }
    return(
        <div className={`bg-white rounded-3xl flex flex-col m-auto w-[100%] md:w-[400px] shadow-md hover:-translate-y-1.5 hover:transition-all hover:duration-300 ${withScale}`}>
            <div className={`${fond} rounded-tl-3xl rounded-tr-3xl px-4.5 py-8`}>
                <div className={`${addcss}`}>
                    <h3 className={`scroll-m-20 text-[25px] ${textcolor} font-bold tracking-tight first:mt-0 md:text-3xl lg:text-[32px]`}>{titre}</h3>
                    <span className={contentClass}>{tag}</span> 
                    
                </div>
                <span className="text-[14px]">{sousTitre}</span>
            </div>
            <div className="px-4.5 py-8 flex flex-col gap-6">
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

            <Button className={`mb-8 mx-5 rounded-3xl p-7 cursor-pointer ${buttonClass}`}>{buttonText}</Button>
        </div>
    )
}