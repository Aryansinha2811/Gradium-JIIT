import { type ReactNode } from "react"
import { NavLink } from "react-router-dom"
import Book from "../assets/Banner/Book.png"
import Brand from "../assets/Banner/Brand.png"

interface AuthLayoutProps {
    children: ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex">
            {/* Left Side - Banner */}
            <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 z-10"></div>
                
                {/* Animated Background */}
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
                </div>

                {/* Content */}
                <div className="relative z-20 flex flex-col justify-start items-center w-full p-12 pt-15 text-white">
                    <img 
                    className="w-60 mb-6"
                    src={Brand} 
                    alt="Brand" />
                    <div className="max-w-lg">
                        <h1 className="text-5xl font-bold mb-6">
                            Welcome to <span className="text-blue-400">Gradium</span>
                        </h1>
                        <p className="text-xl text-white/90 mb-10">
                            Connect talented students with exciting opportunities and build the future together.
                        </p>
                        
                        {/* Features */}
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-1">Real-World Experience</h3>
                                    <p className="text-white/60 text-sm">Gain practical skills through meaningful projects</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-1">Flexible Opportunities</h3>
                                    <p className="text-white/60 text-sm">Work on projects that fit your schedule</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-1">Build Your Portfolio</h3>
                                    <p className="text-white/60 text-sm">Showcase your work to future employers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side - Form */}
            <div className="w-full lg:w-1/2 flex flex-col">
                {/* Logo */}
                <div className="p-8">
                    <NavLink to="/" className="text-2xl font-bold text-white">
                        Grad<span className="text-blue-500">ium</span>
                    </NavLink>
                </div>

                {/* Form Container */}
                <div className="flex-1 flex items-center justify-center p-8">
                    <div className="w-full max-w-md">
                        {children}
                    </div>
                </div>

                {/* Footer */}
                <div className="p-8 text-center text-white/40 text-sm">
                    © 2026 Gradium. All rights reserved.
                </div>
            </div>
        </div>
    )
}