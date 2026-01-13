import Navbar from "../components/layout/Navbar"
import Hero from "../components/sections/Hero"
import FeaturedProfiles from "../components/sections/FeaturedProfile"
import HowItWorks from "../components/sections/HowGradiumWorks"
import Testimonials from "../components/sections/Testimonial"
import FAQ from "../components/sections/FAQs"
import Footer from "../components/layout/Footer"

export default function Home() {
    return (
        <>
            <div className="relative z-10">
                <Navbar />
                <Hero />
                <FeaturedProfiles />
                <HowItWorks />
                <Testimonials />
                <FAQ />
                <Footer />
            </div>

        </>
    )
}