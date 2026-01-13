import { useState } from "react"
import Auth from "../../Auth/Auth"
import Aryan from "../../assets/Avatars/Aryan.jpg"
import Ansal from "../../assets/Avatars/Ansal.jpg"
import Ankit from "../../assets/Avatars/Ankit.jpg"
import Aman from "../../assets/Avatars/Aman.jpg"

export default function StudentsPage() {
    const [authOpen, setAuthOpen] = useState(false)

    return (
        <>
            <section className="relative min-h-screen overflow-hidden">

                {/* Content */}
                <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pt-32 pb-20">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        
                        {/* Left side - Text content */}
                        <div className="space-y-8">

                            <h1 className="text-4xl md:text-6xl lg:text-5xl font-bold text-white leading-tight">
                                Turn Your Skills Into{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600">
                                    Income
                                </span>
                                {" "}While Studying
                            </h1>

                            <p className="text-[16px] text-white/70 leading-relaxed">
                                Start your freelancing journey with Gradium. Work on real projects, 
                                build your portfolio, and earn money on your own schedule—all while 
                                gaining valuable experience for your future career.
                            </p>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-6 pt-4">
                                <div>
                                    <h3 className="text-3xl font-bold text-white">10K+</h3>
                                    <p className="text-white/60 text-sm">Active Students</p>
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold text-white">50K+</h3>
                                    <p className="text-white/60 text-sm">Gigs Completed</p>
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold text-white">$2M+</h3>
                                    <p className="text-white/60 text-sm">Earned Total</p>
                                </div>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-wrap gap-4 pt-4">
                                <button 
                                    onClick={() => setAuthOpen(true)}
                                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-blue-500/50"
                                >
                                    Get Started Free
                                </button>
                                <button className="bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold px-8 py-4 rounded-lg transition-all backdrop-blur">
                                    Learn More
                                </button>
                            </div>

                            {/* Trust indicators */}
                            <div className="flex items-center gap-6 pt-6">
                                <div className="flex items-center gap-2">
                                    <div className="flex -space-x-2">
                                        <img 
                                            src={Aryan} 
                                            alt="Student 1" 
                                            className="w-8 h-8 rounded-full border-2 border-gray-900 object-cover"
                                        />
                                        <img 
                                            src={Ansal} 
                                            alt="Student 2" 
                                            className="w-8 h-8 rounded-full border-2 border-gray-900 object-cover"
                                        />
                                        <img 
                                            src={Ankit} 
                                            alt="Student 3" 
                                            className="w-8 h-8 rounded-full border-2 border-gray-900 object-cover"
                                        />
                                        <img 
                                            src={Aman}
                                            alt="Student 4" 
                                            className="w-8 h-8 rounded-full border-2 border-gray-900 object-cover"
                                        />
                                    </div>
                                    <p className="text-white/60 text-sm">
                                        Join thousands of students
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right side - Visual element */}
                        <div className="relative lg:block hidden">
                            <div className="relative">
                                {/* Card 1 - Floating */}
                                <div className="absolute top-0 right-0 bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 rounded-2xl p-6 shadow-2xl backdrop-blur w-64 transform rotate-3 hover:rotate-0 transition-transform">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-400 to-green-600"></div>
                                        <div>
                                            <p className="text-white font-semibold text-sm">New Gig Available</p>
                                            <p className="text-white/60 text-xs">Website Design</p>
                                        </div>
                                    </div>
                                    <p className="text-white/80 text-sm mb-3">Create a modern logo for a tech startup</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-green-400 font-bold">$150</span>
                                        <span className="text-white/60 text-xs">2 days</span>
                                    </div>
                                </div>

                                {/* Card 2 - Floating */}
                                <div className="absolute bottom-10 left-0 bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 rounded-2xl p-6 shadow-2xl backdrop-blur w-60 transform -rotate-3 hover:rotate-0 transition-transform">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold">
                                            ✓
                                        </div>
                                        <div>
                                            <p className="text-white font-semibold text-sm">Payment Received</p>
                                            <p className="text-white/60 text-xs">Just now</p>
                                        </div>
                                    </div>
                                    <p className="text-white/80 text-sm mb-3">Content writing project completed</p>
                                    <span className="text-green-400 font-bold text-lg">+$200</span>
                                </div>

                                {/* Center illustration placeholder */}
                                <div className="relative z-10 mx-auto w-80 h-80 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center backdrop-blur">
                                    <div className="text-center">
                                        <div className="w-28 h-28 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                                            <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                            </svg>
                                        </div>
                                        <p className="text-white font-semibold text-lg">Start Learning</p>
                                        <p className="text-white/60 text-sm">& Earning Today</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom wave decoration */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 120" className="w-full h-auto">
                        <path fill="rgba(59, 130, 246, 0.05)" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
                    </svg>
                </div>
            </section>

            {/* Auth Modal */}
            <Auth isOpen={authOpen} onClose={() => setAuthOpen(false)} />
        </>
    )
}