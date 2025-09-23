
import type { User } from "~/types/user";
import { themes } from "~/config/themes";
import { styles } from "~/config/styles";
import { backgrounds, type BackgroundType } from "~/config/backgrounds";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoltLightning } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";
interface UserPageProps{
    user: User
    variant?: "admin" | "design" | "preview"
    theme?: keyof typeof themes
    style?: keyof typeof styles
    backgroundColor?: string; // couleur choisie
    backgroundType?: BackgroundType; // solid, gradient ou blur
}
import { Button } from "~/components/ui/button";

export function UserPage({user, variant = "admin", theme = "light", style="rounded", backgroundColor, backgroundType}: UserPageProps){
    const base ="md:max-w-[394px] md:h-auto md:rounded-3xl md:shadow-2xl lg:max-w-[450px] "
    const variants ={
        admin:"justify-center w-[48%] border-[#848484] border rounded-2xl gap-2 p-5 mt-3 md:w-[100%] md:max-w-[350px] md:px-1 md:py-4 md:border-black xl:w-[280px]",
        design:"gap-3 h-[100%] rounded-tl-4xl rounded-tr-4xl md:w-[250px] md:max-w-[394px] lg:max-w-[450px] xl:w-[280px] md:border-black md:border",
        preview: "h-screen flex flex-col justify-between md:shadow-none md:h-full md:mt-20 md:w-[100%] md:max-w-[450px] md:rounded-bl-none md:rounded-br-none md:border-none lg:max-w-[600px]"
    }
    // bg-[#f7f9fe]
    const selectedTheme=themes[theme]
    const selectedStyle= styles[style]
    const selectedBackground = backgroundType && backgroundColor ? backgrounds[backgroundType](backgroundColor) : null ;

    return(
        <div className={`
            ${base}
            ${variants[variant]}
            ${selectedTheme.container}
            ${selectedBackground?.className  || ""} 
            `} 
            style={{
                ...(selectedBackground?.style || {}),
                ...(selectedTheme.style ),
                
            }
                // selectedBackground ? selectedBackground.style : {}
            }
            
        >
            <div className={`flex flex-col items-center ${variant=="preview"? "": ""}`}>
                <Button className={`cursor-pointer ${variant=="preview" ? "self-start m-4 p-3 rounded-full bg-white shadow-md":"hidden"}`}>
                    <FontAwesomeIcon icon={faBoltLightning} className="text-xl"></FontAwesomeIcon>
                </Button>
                
                {/* Header */}
                <img src={user.avatar} className={`rounded-full ${variant === "admin" ? "w-11 md:w-18" : variant=="design" ? "w-22 mt-4 md:w-18" : "w-24"}`} alt={user.name} />
                
                <div className={`${variant=="preview" ? "flex flex-col gap-1" : ""}`}>
                    <h1 className={`font-semibold mt-2 ${selectedTheme.police} ${variant === "admin" ? "text-[12px] md:text-[18px]": variant=="design" ? "text-[24px] md:text-[18px]" : "text-2xl md:text-[25px]"}`}>{user.name}</h1>
                    <p className={`text-center ${selectedTheme.police} ${variant === "admin" ? "text-[8px] md:text-[12px]" : variant=="design" ?  "md:text-[12px]": "md:text-[16px]"}`}>{user.description}</p>
                </div>
                            
                <div className={`mt-2 ${variant === "admin" ? "text-[8px] md:text-[14px] md:w-11/12" : "text-[18px] w-11/12 md:text-[14px]" } ${variant=="preview" ? "mt-5" : ""}`}>
                    <ul className={`flex flex-col ${variant === "admin" ? "gap-2 md:gap-3" : variant=="design" ? "gap-3": "gap-3 md:gap-5"}`}>
                        {user.links.map((link, idx) => (
                        <li key={idx} className={`${selectedTheme.link} ${selectedStyle} ${selectedTheme.police} text-center ${variant === "admin" ? "py-1 px-2 md:py-4.5 md:px-2" : "py-4.5 px-2"} ${variant=="preview" ? "text-[15px] md:p-6" : ""}`}>
                            <a href={link.url} target="_blank" rel="noopener noreferrer">
                            {link.title}
                            </a>
                        </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className={`flex flex-col items-center ${variant=="preview"? "mb-8": ""}`}>
                {/* Footer */}
                <p className={`${selectedTheme.police} ${variant === "admin" ? "mt-[65%] text-[5px] md:text-[8px]": variant=="design" ? "mt-[30%] gap-y-8 md:p-8 md:text-[8px] md:mt-[40%] ": "mb-0 mt-0"}`}>
                    Fait par ❤️ avec <Link to="/" className="cursor-pointer">FastProfile</Link>
                </p>    
            </div>
        
        </div>

    )
}