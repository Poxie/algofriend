import { About } from "./about"
import { Footer } from "./footer"
import { HomeHeader } from "./header/HomeHeader"
import { Replacement } from "./replacement"

export const Home = () => {
    return(
        <>
        <HomeHeader />
        <About />
        <Replacement />
        <Footer />
        </>
    )
}