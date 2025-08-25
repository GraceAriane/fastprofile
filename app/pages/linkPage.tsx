
import type { User } from "~/types/user";

interface UserPageProps{
    user: User,
    variant?: "admin" | "design"
}

export function UserPage({user, variant = "admin"}: UserPageProps){
    const base ="flex flex-col items-center justify-center "
    const variants ={
        admin:"w-[48%] bg-[#f7f9fe] border-[#E1E3E8] border-1 rounded-2xl gap-2 p-5 md:w-[100%] md:h-[400px] md:max-w-[350px] md:shadow-lg xl:h-[450px] lg:shadow-2xl lg:border-2 lg:border-black",
        design:""
    }
    
    return(
        <div className={`${base} ${variants[variant]}`}>
            {/* Header */}
            <img src={user.avatar} className="w-11 rounded-full" alt={user.name} />
            <div>
                <h1 className="text-[12px] font-semibold mt-2">{user.name}</h1>
                <p className="text-[8px] opacity-80 text-center">{user.description}</p>
            </div>

            {/* Links Entrepreneur • Developer • Dreamer*/}
            <div className="text-[8px] mt-2 ">
                <ul className="flex flex-col gap-2">
                    {user.links.map((link, idx) => (
                    <li key={idx} className="text-center bg-blue-300 py-1 px-2 rounded-[5px]">
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                        {link.title}
                        </a>
                    </li>
                    ))}
                </ul>
            </div>

            {/* Footer */}
            <p className="mt-[65%] text-[5px] opacity-70">Made with ❤️ by FastProfile</p>
        </div>

    )
}