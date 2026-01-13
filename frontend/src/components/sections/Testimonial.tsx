import { ChevronLeft, ChevronRight, Play } from 'lucide-react'
import { useState } from 'react'
import Ansal from '../../assets/Avatars/Ansal.jpg'
import Aryan from '../../assets/Avatars/Aryan.jpg'
import Ankit from '../../assets/Avatars/Ankit.jpg'
import Thumbnail1 from '../../assets/Video/Thumbnail1.jpg'
import Thumbnail2 from '../../assets/Video/Thumbnail2.jpg'
import Thumbnail3 from '../../assets/Video/Thumbnail3.jpg'


interface Testimonial {
    id: number
    quote: string
    author: string
    role: string
    image: string
    videoThumbnail?: string
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        quote: "This platform facilitated our connection with an outstanding engineer who consistently delivered work of the highest quality, always meeting deadlines. The seamless experience and exceptional support offered by the platform truly made a remarkable difference in the successful completion of our project.",
        author: "Ansal Pandey",
        role: "Founder & CEO",
        image: Ansal,
        videoThumbnail: Thumbnail1
    },
    {
        id: 2,
        quote: "Working with talented students through this platform has been incredible. The quality of work exceeded our expectations and the communication was seamless throughout the entire project.",
        author: "Ankit Kumar",
        role: "Product Manager",
        image: Ankit,
        videoThumbnail: Thumbnail2
    },
    {
        id: 3,
        quote: "As a freelancer, this platform connected me with amazing clients who value quality work. The project management tools and support made collaboration effortless and professional.",
        author: "Aryan Sinha",
        role: "Full Stack Developer",
        image: Aryan,
        videoThumbnail: Thumbnail3
    }
]

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const handlePrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
    }

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    }

    const currentTestimonial = testimonials[currentIndex]

    return (
        <section className="relative py-18 px-6">
            <div className="mx-auto max-w-7xl">
                
                {/* Badge */}
                <div className="flex justify-center mb-8">
                    <span className="inline-block rounded-full bg-blue-500/10 border border-blue-400/20 px-4 py-2 text-sm text-blue-400">
                        Testimonials
                    </span>
                </div>

                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-semibold text-white">
                        What Our <span className="text-blue-400">Clients</span> and{' '}
                        <span className="text-blue-400">Freelancers</span> Say
                    </h2>
                </div>

                {/* Testimonial Card */}
                <div className="relative">
                    {/* Background Glow */}
                    <div className="absolute -inset-8 rounded-3xl bg-blue-500/10 blur-3xl" />

                    {/* Main Card */}
                    <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8 md:p-12">
                        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                            
                            {/* Video/Image Section */}
                            <div className="relative group cursor-pointer">
                                <div className="relative rounded-xl overflow-hidden aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                                    {/* Placeholder for video thumbnail */}
                                    <img 
                                        src={currentTestimonial.videoThumbnail} 
                                        alt="Testimonial video"
                                        className="w-full h-full object-cover"
                                    />
                                    
                                    {/* Play Button Overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-all duration-300">
                                        <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                                            <Play className="w-6 h-6 text-blue-600 ml-1" fill="currentColor" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="space-y-4">
                                {/* Quote Icon */}
                                <div className="text-5xl text-blue-400 font-serif leading-none">"</div>

                                {/* Testimonial Text */}
                                <p className="text-white/90 text-lg leading-relaxed">
                                    {currentTestimonial.quote}
                                </p>

                                {/* Author Info */}
                                <div className="flex items-center gap-4 pt-4">
                                    <img 
                                        src={currentTestimonial.image} 
                                        alt={currentTestimonial.author}
                                        className="w-12 h-12 rounded-full border-2 border-blue-400/50"
                                    />
                                    <div>
                                        <h4 className="text-white font-semibold text-lg">
                                            {currentTestimonial.author}
                                        </h4>
                                        <p className="text-white/60 text-sm">
                                            {currentTestimonial.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navigation Controls */}
                <div className="flex justify-center items-center gap-4 mt-12">
                    <button
                        onClick={handlePrevious}
                        className="w-12 h-12 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center text-white hover:border-blue-400/50 hover:bg-white/10 transition-all duration-300 hover:scale-110"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>

                    {/* Dots Indicator */}
                    <div className="flex gap-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                    index === currentIndex
                                        ? 'bg-blue-400 w-8'
                                        : 'bg-white/30 hover:bg-white/50'
                                }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={handleNext}
                        className="w-12 h-12 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center text-white hover:border-blue-400/50 hover:bg-white/10 transition-all duration-300 hover:scale-110"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </section>
    )
}