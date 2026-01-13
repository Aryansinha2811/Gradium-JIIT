import Navbar from "../components/layout/Navbar"
import StudentsHero from "../components/sections/StudentHero";
import BenefitsSection from "../components/sections/StudentBenefit"
import SuccessStories from "../components/sections/StudentTestimonial"
import Footer from "../components/layout/Footer"

const Students = () => {
    return (
            <div className="">
                <Navbar />
                <StudentsHero />
                <BenefitsSection />
                <SuccessStories />
                <Footer />
            </div>
    )
    
};

export default Students;