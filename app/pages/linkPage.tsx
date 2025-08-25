
import type { User } from "~/types/user";

interface UserPageProps{
    user: User,
    variant?: "admin" | "design"
}

export function UserPage({user, variant = "admin"}: UserPageProps){
    const base ="flex flex-col items-center justify-center "
    const variants ={
        admin:"w-[48%] bg-[#f7f9fe] border-[#E1E3E8] border-1 rounded-2xl gap-2 p-5 md:w-[100%] md:h-[400px] md:max-w-[350px] md:shadow-lg xl:h-[450px] lg:shadow-2xl lg:border-2 lg:border-black",
        design:"gap-3"
    }
    const defaultImg = 'rounded-full'
    const p = "opacity-80 text-center"
    const h1 ="font-semibold mt-2"
    
    return(
        <div className={`${base} ${variants[variant]}`}>
            {/* Header */}
            {
                variant === "admin" ?
                (<img src={user.avatar} className={`${defaultImg} w-11`} alt={user.name} />)
             
                : (<img src={user.avatar} className={`${defaultImg} w-22 mt-3`} alt={user.name} />)
            }
            {
                variant === "admin" ?
                (<div>
                <h1 className={`text-[12px] ${h1}`}>{user.name}</h1>
                <p className={`text-[8px] ${p}`}>{user.description}</p>
                </div>)
             
                : (<div>
                <h1 className={`text-[20px] ${h1}`}>{user.name}</h1>
                <p className={`${p}`}>{user.description}</p>
                </div>)
            }
           
            {
                variant === "admin" ?
                (<div className="text-[8px] mt-2 ">
                <ul className="flex flex-col gap-2">
                    {user.links.map((link, idx) => (
                    <li key={idx} className="text-center bg-blue-300 py-1 px-2 rounded-[5px]">
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                        {link.title}
                        </a>
                    </li>
                    ))}
                </ul>
                </div>)
             
                : (<div className="text-[18px] mt-2 w-11/12">
                <ul className="flex flex-col gap-3 ">
                    {user.links.map((link, idx) => (
                    <li key={idx} className="text-center bg-blue-300 py-3 px-2 rounded-[5px]">
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                        {link.title}
                        </a>
                    </li>
                    ))}
                </ul>
            </div>)
            }
            {/* Footer */}
            {
                variant === "admin" ?
                (<p className="mt-[65%] text-[5px]">Made with ❤️ by FastProfile</p>)
             
                :(<p className="mt-[40%] ">Made with ❤️ by FastProfile</p>)
            }

            
        </div>

    )
}