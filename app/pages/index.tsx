import { div, h1 } from "motion/react-client";
import { Header } from "~/components/header";
import { Footer } from "~/components/footer";
import { Hero } from "./hero";

export function Index(){
    return(
        <> 
            <div className="">
                <div className="bg-linear-to-l from-[] to-[]">
                    <div className="mt-4">
                        <Header/>
                    </div>
                    <Hero></Hero>
                </div>
                <Footer/>
            </div>
        </>
    )
}