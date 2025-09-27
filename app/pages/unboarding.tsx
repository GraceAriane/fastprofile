import { themes } from "~/config/themes";
import { Button } from "~/components/ui/button";
import { themeImages } from "~/config/themes";

export default function Unboarding(){
    return(
        <div className="flex flex-col items-center ">
            {/* cette partie va permettre de selectionner un thème */}
            <h2 className="text-2xl py-7 font-semibold xl:text-3xl">
                Choisissez un thème
            </h2>
            <main className="py-10 gap-8 md:flex-row md:w-[95%] grid grid-rows-[1fr] grid-cols-3 md:grid-cols-[repeat(auto-fit,minmax(120px,1fr))] xl:max-w-[1024px]">
                {(Object.keys(themes) as (keyof typeof themes)[]).map((name) => (
                    <div
                        key={name}
                        className=" grid grid-rows-[1fr_25px] focus:border-2 rounded-2xl "
                    >
                        <Button
                        // onClick={() => setTheme(name)}
                        variant="ghost"
                        className="p-0 h-full w-full focus:border-2 rounded-2xl"
                        >
                        <img
                            src={themeImages[name]}
                            alt=""
                            className={`h-full w-full rounded-2xl hover:transition-all hover:duration-300 hover:scale-[1.1]`}
                        />
                        </Button>
                        <span className="text-center mt-1 md:text-[24px]">{name}</span>
                    </div>
                ))}

            </main>
            <div className="self-end md:text-[22px] xl:pr-10">
                <Button variant="ghost" className="text-[16px] hover:underline md:text-xl">Passer {">>"}</Button>
            </div>
        </div>
    )
}