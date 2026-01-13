import Google from "../assets/Banner/Google.png"
import { useState } from "react"

interface AuthProps {
    isOpen: boolean
    onClose: () => void}

export default function Auth({ isOpen, onClose }: AuthProps) {
    const [isLogin, setIsLogin] = useState(true)
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        name: ""
    })

    if (!isOpen) return null

    const handleSubmit = () => {
        // Add your authentication logic here
        console.log("Form submitted:", formData)
    }

    const handleGoogleAuth = () => {
        // Add your Google OAuth logic here
        console.log("Google authentication clicked")
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div 
            onClick={onClose}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
        >
            <div 
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-md"
            >
                <div className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl shadow-2xl p-6">
                    
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-3 right-3 text-white/60 hover:text-white transition text-2xl"
                    >
                        ×
                    </button>

                    {/* Header */}
                    <div className="text-center mb-6">
                        <h2 className="text-2xl font-bold text-white mb-1">
                            {isLogin ? "Welcome Back" : "Create Account"}
                        </h2>
                        <p className="text-white/60 text-sm">
                            {isLogin 
                                ? "Login to continue to Gradium" 
                                : "Sign up to get started with Gradium"
                            }
                        </p>
                    </div>

                    {/* Form Fields */}
                    <div className="space-y-3">
                        {!isLogin && (
                            <div>
                                <label className="block text-white/80 text-sm font-medium mb-1.5">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                    placeholder="Enter your name"
                                />
                            </div>
                        )}

                        <div>
                            <label className="block text-white/80 text-sm font-medium mb-1.5">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div>
                            <label className="block text-white/80 text-sm font-medium mb-1.5">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                placeholder="Enter your password"
                            />
                        </div>

                        {isLogin && (
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    className="text-blue-500 hover:text-blue-400 text-sm transition"
                                >
                                    Forgot password?
                                </button>
                            </div>
                        )}

                        <button
                            onClick={handleSubmit}
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2.5 px-4 rounded-lg transition mt-4"
                        >
                            {isLogin ? "Login" : "Sign Up"}
                        </button>

                        {/* Divider */}
                        <div className="flex items-center gap-4 my-4">
                            <div className="flex-1 h-px bg-white/10"></div>
                            <span className="text-white/40 text-sm">or</span>
                            <div className="flex-1 h-px bg-white/10"></div>
                        </div>

                        {/* Google Sign In Button */}
                        <button
                            onClick={handleGoogleAuth}
                            className="w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-gray-900 font-medium py-2.5 px-4 rounded-lg transition"
                        >
                            <img 
                                src= {Google} 
                                alt="Google" 
                                className="w-7 h-7"
                            />
                            {isLogin ? "Login" : "Sign up"} with Google
                        </button>
                    </div>

                    {/* Toggle Login/Signup */}
                    <div className="text-center mt-5">
                        <p className="text-white/60 text-sm">
                            {isLogin ? "Don't have an account? " : "Already have an account? "}
                            <button
                                onClick={() => setIsLogin(!isLogin)}
                                className="text-blue-500 hover:text-blue-400 font-medium transition"
                            >
                                {isLogin ? "Sign up" : "Login"}
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}