import { useNavigate } from "react-router-dom"

interface RoleSelectionModalProps {
    isOpen: boolean
    onClose: () => void
}

export default function RoleSelectionModal({ isOpen, onClose }: RoleSelectionModalProps) {
    const navigate = useNavigate()

    if (!isOpen) return null

    const handleRoleSelect = (role: string) => {
        onClose()
        navigate("/signup", { state: { role } })
    }

    return (
        <div 
            onClick={onClose}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
        >
            <div 
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-2xl"
            >
                <div className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl shadow-2xl p-8">
                    
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-white/60 hover:text-white transition text-2xl"
                    >
                        ×
                    </button>

                    {/* Header */}
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-white mb-2">
                            Join Gradium
                        </h2>
                        <p className="text-white/60 text-base">
                            Choose how you want to get started
                        </p>
                    </div>

                    {/* Role Cards */}
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Student Card */}
                        <button
                            onClick={() => handleRoleSelect("student")}
                            className="group relative p-6 bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/20 rounded-xl hover:border-blue-500/40 transition-all duration-300 text-left"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
                            
                            <div className="relative">
                                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                </div>
                                
                                <h3 className="text-xl font-bold text-white mb-2">
                                    I'm a Student
                                </h3>
                                <p className="text-white/60 text-sm mb-4">
                                    Find gigs, build your portfolio, and gain real-world experience
                                </p>
                                
                                <div className="flex items-center text-blue-400 text-sm font-medium group-hover:translate-x-1 transition-transform">
                                    Get Started
                                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </button>

                        {/* Company Card */}
                        <button
                            onClick={() => handleRoleSelect("company")}
                            className="group relative p-6 bg-gradient-to-br from-purple-500/10 to-purple-600/5 border border-purple-500/20 rounded-xl hover:border-purple-500/40 transition-all duration-300 text-left"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
                            
                            <div className="relative">
                                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                </div>
                                
                                <h3 className="text-xl font-bold text-white mb-2">
                                    I'm a Company
                                </h3>
                                <p className="text-white/60 text-sm mb-4">
                                    Hire talented students for your projects and build your team
                                </p>
                                
                                <div className="flex items-center text-purple-400 text-sm font-medium group-hover:translate-x-1 transition-transform">
                                    Get Started
                                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </button>
                    </div>

                    {/* Footer */}
                    <div className="text-center mt-6">
                        <p className="text-white/60 text-sm">
                            Already have an account?{" "}
                            <button
                                onClick={onClose}
                                className="text-blue-500 hover:text-blue-400 font-medium transition"
                            >
                                Login instead
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}