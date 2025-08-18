import error from "../assets/images/error.svg"

export function Error(){
    return(
        <div className="w-[70%] mt-[10px] mb-[30px] mx-auto max-w-[80%]  md:w-[45%]">
            <img src={error} alt="" />
        </div>
    )
}