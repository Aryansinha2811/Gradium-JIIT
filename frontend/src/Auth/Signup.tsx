import { useState, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { signupUser } from "../services/auth.service"
import AuthLayout from "./AuthLayout"

export default function Signup() {
    const location = useLocation()
    const navigate = useNavigate()
    const role = location.state?.role || "student"

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
        dob: "", // For students and admins
        course: "", // For students
        batch: "", // For students
        companyName: "", // For companies
        website: "", // For companies
        industry: "" // For companies
    })
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    useEffect(() => {
        // Redirect if no role selected
        if (!location.state?.role) {
            navigate("/")
        }
    }, [location.state, navigate])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError("")

        // Validation
        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match")
            return
        }

        if (formData.password.length < 6) {
            setError("Password must be at least 6 characters long")
            return
        }

        setLoading(true)

        try {
            // Map frontend role to backend role
            let backendRole = "user" // default
            if (role === "student") {
                backendRole = "user"
            } else if (role === "company") {
                backendRole = "company"
            } else if (role === "admin") {
                backendRole = "admin"
            }

            const signupData = {
                name: formData.name,
                email: formData.email,
                password: formData.password,
                role: backendRole, // Backend role: "user", "company", or "admin"
                phone: formData.phone,
                ...(role === "student" && {
                    dob: formData.dob,
                    course: formData.course,
                    batch: formData.batch
                }),
                ...(role === "company" && {
                    companyName: formData.companyName,
                    website: formData.website,
                    industry: formData.industry
                }),
                ...(role === "admin" && {
                    dob: formData.dob
                })
            }

            const response = await signupUser(signupData)
            
            // Store token and user data (from auto-login after registration)
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
        } catch (err: any) {
            setError(err.response?.data?.message || "Signup failed. Please try again.")
        } finally {
            setLoading(false)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <AuthLayout>
            <div className="w-full max-w-md">
                <div className="text-center mb-6">
                    <h2 className="text-3xl font-bold text-white mb-2">
                        Create Your Account
                    </h2>
                    <p className="text-white/60">
                        Join as a {role === "student" ? "Student" : role === "company" ? "Company" : "Admin"}
                    </p>
                </div>

                {/* Error Message */}
                {error && (
                    <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
                        {error}
                    </div>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Full Name */}
                    <div>
                        <label className="block text-white/80 text-sm font-medium mb-1.5">
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            placeholder="Enter your full name"
                        />
                    </div>

                    {/* Email */}
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

                    {/* Phone */}
                    <div>
                        <label className="block text-white/80 text-sm font-medium mb-1.5">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            placeholder="Enter your phone number"
                        />
                    </div>

                    {/* Role-specific fields */}
                    {role === "student" && (
                        <>
                            <div>
                                <label className="block text-white/80 text-sm font-medium mb-1.5">
                                    Date of Birth
                                </label>
                                <input
                                    type="date"
                                    name="dob"
                                    value={formData.dob}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                />
                            </div>
                            <div>
                                <label className="block text-white/80 text-sm font-medium mb-1.5">
                                    Course
                                </label>
                                <input
                                    type="text"
                                    name="course"
                                    value={formData.course}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                    placeholder="e.g., Computer Science"
                                />
                            </div>
                            <div>
                                <label className="block text-white/80 text-sm font-medium mb-1.5">
                                    Batch
                                </label>
                                <input
                                    type="text"
                                    name="batch"
                                    value={formData.batch}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                    placeholder="e.g., 2024"
                                />
                            </div>
                        </>
                    )}

                    {role === "company" && (
                        <>
                            <div>
                                <label className="block text-white/80 text-sm font-medium mb-1.5">
                                    Company Name
                                </label>
                                <input
                                    type="text"
                                    name="companyName"
                                    value={formData.companyName}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                    placeholder="Enter your company name"
                                />
                            </div>
                            <div>
                                <label className="block text-white/80 text-sm font-medium mb-1.5">
                                    Website (Optional)
                                </label>
                                <input
                                    type="url"
                                    name="website"
                                    value={formData.website}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                    placeholder="https://yourcompany.com"
                                />
                            </div>
                            <div>
                                <label className="block text-white/80 text-sm font-medium mb-1.5">
                                    Industry (Optional)
                                </label>
                                <input
                                    type="text"
                                    name="industry"
                                    value={formData.industry}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                    placeholder="e.g., Technology, Finance"
                                />
                            </div>
                        </>
                    )}

                    {role === "admin" && (
                        <div>
                            <label className="block text-white/80 text-sm font-medium mb-1.5">
                                Date of Birth
                            </label>
                            <input
                                type="date"
                                name="dob"
                                value={formData.dob}
                                onChange={handleChange}
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            />
                        </div>
                    )}

                    {/* Password */}
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
                            placeholder="Create a password"
                        />
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label className="block text-white/80 text-sm font-medium mb-1.5">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            placeholder="Confirm your password"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2.5 px-4 rounded-lg transition mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? "Creating Account..." : "Create Account"}
                    </button>
                </form>

                {/* Login Link */}
                <div className="text-center mt-6">
                    <p className="text-white/60 text-sm">
                        Already have an account?{" "}
                        <button
                            onClick={() => navigate("/")}
                            className="text-blue-500 hover:text-blue-400 font-medium transition"
                        >
                            Login
                        </button>
                    </p>
                </div>
            </div>
        </AuthLayout>
    )
}