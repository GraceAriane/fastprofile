import { div, h1 } from "motion/react-client";
import { Header } from "~/components/header";
import { Footer } from "~/components/footer";
import { LandingPage } from "./landing_page";

export function Index(){
    return(
        <> 
            <div className="max-w-11/12 w-11/12 m-auto">
                <Header/>
                <main>
                    <LandingPage></LandingPage>
                </main>
                <Footer/>
            </div>
        </>
    )
}