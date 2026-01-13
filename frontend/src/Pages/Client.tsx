import Navbar from "../components/layout/Navbar"
import ClientHero from "../components/sections/ClientHero"
import WhyHireStudents from "../components/sections/WhyHireStudent"
import FAQ from "../components/sections/FAQs"
import Footer from "../components/layout/Footer"

const Client = () => {
    return (
            <div>
                <Navbar />
                <ClientHero />
                <WhyHireStudents />
                <FAQ />
                <Footer />
            </div>
    )
    
};

export default Client;