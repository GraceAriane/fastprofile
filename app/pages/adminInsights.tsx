import { faEye, faGear, faLink, faPercent, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChartAreaAxes } from "~/components/chart";

export function InsightPage(){
    return(
        <div className="">
            {/* titre */}
            <div className="bg-[#F2F1ED] flex justify-between items-center p-4 py-6 sticky top-0 left-0 right-0 md:bg-[#F9FAFB] z-20 md:rounded-tr-2xl">
                <h2 className="text-2xl scroll-m-20 font-semibold tracking-tight first:mt-0 text-center">Insights</h2>
                <FontAwesomeIcon icon={faGear} className="text-[20px] text-[#656565]"/>
            </div>

            {/* statistique du lien */}
            <div className="mx-4 mt-5 p-4 bg-white rounded-2xl flex flex-col gap-4 border-[#d6d6d4] border">
                <h3 className="text-xl font-semibold">
                    Lifetime
                </h3>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4 ">
                    <div className="flex items-center gap-2.5">
                        <FontAwesomeIcon icon={faEye} className="p-2 bg-[#DEDDDC] text-[#919190] rounded-[8px]"/>
                        <p><span className="font-bold text-[18px]">5</span> Vues</p>
                    </div>
                    <div className="flex items-center gap-2.5">
                        <FontAwesomeIcon icon={faPercent} className="p-2 bg-[#DEDDDC] text-[#919190] rounded-[8px]"/>
                        <p><span className="font-bold text-[18px]">0%</span> de Clics</p>
                    </div>
                    <div className="flex items-center gap-2.5">
                        <FontAwesomeIcon icon={faLink} className="p-2 bg-[#DEDDDC] text-[#919190] rounded-[8px]"/>
                        <p><span className="font-bold text-[18px]">0 </span>Clicks</p>
                    </div>
                    <div className="flex items-center gap-2.5">
                        <FontAwesomeIcon icon={faUserPlus} className="p-2 bg-[#DEDDDC] text-[#919190] rounded-[8px]"/>
                        <p><span className="font-bold text-[18px]">5</span> Abonnés</p>
                    </div>
                </div>
            </div>

            {/* graphique */}
            <div className="px-4 pt-4 pb-25">
                <ChartAreaAxes></ChartAreaAxes>
            </div>
        </div>
    )
}