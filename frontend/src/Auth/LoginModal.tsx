import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { loginUser } from "../services/auth.service"
import Google from "../assets/Banner/Google.png"

interface LoginModalProps {
    isOpen: boolean
    onClose: () => void
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        role: "user" // Default to "user" (student) - backend value
    })
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    if (!isOpen) return null

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError("")
        setLoading(true)

        try {
            const response = await loginUser(formData.email, formData.password, formData.role)
            
            // Store token and user data
            localStorage.setItem("token", response.token)
            localStorage.setItem("user", JSON.stringify(response.user))
            
            // Redirect based on backend role
            if (response.user.role === "user") {
                navigate("/student-dashboard")
            } else if (response.user.role === "company") {
                navigate("/client-dashboard")
            } else if (response.user.role === "admin") {
                navigate("/admin-dashboard")
            }
            
            onClose()
        } catch (err: any) {
            setError(err.response?.data?.message || "Login failed. Please try again.")
        } finally {
            setLoading(false)
        }
    }

    const handleGoogleAuth = () => {
        // Add your Google OAuth logic here
        console.log("Google authentication clicked")
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
                            Welcome Back
                        </h2>
                        <p className="text-white/60 text-sm">
                            Login to continue to Gradium
                        </p>
                    </div>

                    {/* Error Message */}
                    {error && (
                        <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
                            {error}
                        </div>
                    )}

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-3">
                        <div>
                            <label className="block text-white/80 text-sm font-medium mb-1.5">
                                I am a
                            </label>
                            <select
                                title="Role"
                                name="role"
                                value={formData.role}
                                onChange={handleChange}
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            >
                                <option value="user" className="bg-gray-900">Student</option>
                                <option value="company" className="bg-gray-900">Company</option>
                                <option value="admin" className="bg-gray-900">Admin</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-white/80 text-sm font-medium mb-1.5">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
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
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                placeholder="Enter your password"
                            />
                        </div>

                        <div className="flex justify-end">
                            <button
                                type="button"
                                className="text-blue-500 hover:text-blue-400 text-sm transition"
                            >
                                Forgot password?
                            </button>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2.5 px-4 rounded-lg transition mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? "Logging in..." : "Login"}
                        </button>

                    </form>
                </div>
            </div>
        </div>
    )
}