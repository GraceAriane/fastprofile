import { Header } from "~/components/header"
import error from "../assets/images/error.svg"
import { Footer } from "~/components/footer"

export function ErrorPage(){
    return(
        <>
            <Header></Header>
            <div className="w-[70%] mt-[10px] mb-[30px] mx-auto max-w-[80%]  md:w-[45%]">
                <img src={error} alt="" />
            </div>
            <Footer></Footer>
        </>

    )
}