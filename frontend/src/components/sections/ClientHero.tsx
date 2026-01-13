import { useState } from "react"
import Auth from "../../Auth/Auth"

export default function ClientHero() {
    const [authOpen, setAuthOpen] = useState(false)

    return (
        <>
            <section className="relative min-h-screen overflow-hidden">
                {/* Content */}
                <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8 pt-32 pb-20">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        
                        {/* Left side - Text content */}
                        <div className="space-y-8">

                            <h1 className="text-5xl md:text-6xl lg:text-5xl font-bold text-white leading-tight">
                                Hire Talented{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600">
                                    Students
                                </span>
                                {" "}For Your Projects
                            </h1>

                            <p className="text-[16px] text-white/70 leading-relaxed">
                                Access a pool of skilled, motivated student freelancers ready to bring 
                                fresh perspectives to your projects. Get quality work at competitive 
                                rates while supporting the next generation of talent.
                            </p>

                            {/* Value Props */}
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                                        <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-semibold">Cost-Effective Solutions</h3>
                                        <p className="text-white/60 text-sm">Save up to 60% compared to traditional agencies</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                                        <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-semibold">Fresh Perspectives</h3>
                                        <p className="text-white/60 text-sm">Innovative ideas from digital-native creators</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                                        <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-semibold">Quick Turnaround</h3>
                                        <p className="text-white/60 text-sm">Eager students ready to start immediately</p>
                                    </div>
                                </div>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-wrap gap-4 pt-4">
                                <button 
                                    onClick={() => setAuthOpen(true)}
                                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-blue-500/50"
                                >
                                    Post a Project
                                </button>
                                <button className="bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold px-8 py-4 rounded-lg transition-all backdrop-blur">
                                    Browse Talent
                                </button>
                            </div>

                        </div>

                        {/* Right side - Visual element */}
                        <div className="relative lg:block hidden">
                            <div className="relative">
                                {/* Card 1 - Student Profile */}
                                <div className="absolute top-0 right-0 bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 rounded-2xl p-6 shadow-2xl backdrop-blur w-75 transform rotate-2 hover:rotate-0 transition-transform">
                                    <div className="flex items-center gap-3 mb-8">
                                        <div className="w-18 h-12 rounded-full bg-gradient-to-r from-blue-400 to-blue-600"></div>
                                        <div>
                                            <p className="text-white font-semibold">Aryan Sinha</p>
                                            <p className="text-white/60 text-xs">Web Developer</p>
                                        </div>
                                        <div className="ml-auto">
                                            <div className="flex items-center gap-1">
                                                <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                <span className="text-white text-sm font-bold">4.9</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-2 mb-3">
                                        <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">React</span>
                                        <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">Node.js</span>
                                    </div>
                                    <p className="text-white/80 text-sm">35 projects completed</p>
                                </div>

                                {/* Card 2 - Project Posted */}
                                <div className="absolute bottom-10 left-0 bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 rounded-2xl p-6 shadow-2xl backdrop-blur w-72 transform -rotate-2 hover:rotate-0 transition-transform">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-green-400 text-xs font-semibold bg-green-500/20 px-3 py-1 rounded-full">
                                            5 Proposals
                                        </span>
                                        <span className="text-white/60 text-xs">Posted 2h ago</span>
                                    </div>
                                    <h3 className="text-white font-semibold mb-2">Mobile App UI Design</h3>
                                    <p className="text-white/70 text-sm mb-4">Looking for a creative designer to create modern UI screens...</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-blue-400 font-bold text-lg">$300-500</span>
                                        <button className="bg-blue-500 hover:bg-blue-600 text-white text-xs px-4 py-2 rounded-lg transition">
                                            View
                                        </button>
                                    </div>
                                </div>

                                {/* Center circle */}
                                <div className="relative z-10 mx-auto w-80 h-80 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center backdrop-blur">
                                    <div className="text-center">
                                        <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                                            <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <p className="text-white font-semibold text-lg">Find Your</p>
                                        <p className="text-white/60 text-sm">Perfect Match</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom wave decoration */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 120" className="w-full h-auto">
                        <path fill="rgba(139, 92, 246, 0.05)" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
                    </svg>
                </div>
            </section>

            {/* Auth Modal */}
            <Auth isOpen={authOpen} onClose={() => setAuthOpen(false)} />
        </>
    )
}