
import type { User } from "~/types/user";
import { themes } from "~/config/themes";

interface UserPageProps{
    user: User,
    variant?: "admin" | "design",
    theme?: keyof typeof themes
}

export function UserPage({user, variant = "admin", theme = "light"}: UserPageProps){
    const base ="flex flex-col items-center"
    const variants ={
        admin:"justify-center w-[48%] border-[#E1E3E8] border-4 rounded-2xl gap-2 p-5 md:w-[100%] md:h-[400px] md:max-w-[350px] md:shadow-lg xl:h-[450px] lg:shadow-2xl lg:border-2 lg:border-black",
        design:"gap-3 h-[100%] rounded-tl-4xl rounded-tr-4xl md:w-[250px] md:max-w-[394px] md:border-3 md:h-auto md:rounded-3xl md:shadow-2xl "
    }
    // bg-[#f7f9fe]
    const selectedTheme=themes[theme]
    
    return(
        <div className={`${base} ${variants[variant]} ${selectedTheme.container}`}>

            {/* Header */}
            <img src={user.avatar} className={`rounded-full ${variant === "admin" ? "w-11":"w-22 mt-4 md:w-18"}`} alt={user.name} />
            
            <div>
                <h1 className={`font-semibold mt-2 ${selectedTheme.police} ${variant === "admin" ? "text-[12px]":"text-[24px] md:text-[18px]"}`}>{user.name}</h1>
                <p className={`text-center ${selectedTheme.police} ${variant === "admin" ? "text-[8px]":"md:text-[12px]"}`}>{user.description}</p>
            </div>
                          
            <div className={`mt-2 ${variant === "admin" ? "text-[8px]" : "text-[18px] w-11/12 md:text-[14px]"}`}>
                <ul className={`flex flex-col ${variant === "admin" ? "gap-2" : "gap-3"}`}>
                    {user.links.map((link, idx) => (
                    <li key={idx} className={`${selectedTheme.link} ${selectedTheme.police} text-center ${variant === "admin" ? "py-1 px-2" : "py-4.5 px-2"}`}>
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                        {link.title}
                        </a>
                    </li>
                    ))}
                </ul>
            </div>
            
            {/* Footer */}
            <p className={`rounded-full ${selectedTheme.police} ${variant === "admin" ? "mt-[65%] text-[5px]":"mt-[30%] gap-y-8 md:p-8 md:text-[8px]"} `}>Made with ❤️ by FastProfile</p>            
        </div>

    )
}