import { div, h1 } from "motion/react-client";
import { Header } from "~/components/header";
import { Footer } from "~/components/footer";
import { Hero } from "./hero";

export function Index(){
    return(
        <> 
            <div className="max-w-11/12 w-11/12 m-auto">
                <Header/>
                <main>
                    <Hero></Hero>
                </main>
                <Footer/>
            </div>
        </>
    )
}