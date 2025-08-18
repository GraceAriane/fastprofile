import { div, h1 } from "motion/react-client";
import { Header } from "~/components/header";
import { Footer } from "~/components/footer";
import { Hero } from "./hero";
import { Error } from "./error";

export function Index(){
    return(
        <> 
            <div>
                <div className="">
                    <div className="mt-4">
                        <Header/>
                    </div>
                    <Error></Error>
                </div>
                <Footer/>
            </div>
        </>
    )
}