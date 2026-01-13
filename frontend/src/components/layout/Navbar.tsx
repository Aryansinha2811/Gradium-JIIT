import { useState, useEffect } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import LoginModal from "../../Auth/LoginModal"
import RoleSelectionModal from "../../Auth/RoleSelectionModal"
import { isAuthenticated, getUserRole } from "../../services/auth.service"

export default function Navbar() {
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)
    const [loginOpen, setLoginOpen] = useState(false)
    const [signupOpen, setSignupOpen] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [userRole, setUserRole] = useState<string | null>(null)

    useEffect(() => {
        // Check authentication status
        setIsLoggedIn(isAuthenticated())
        setUserRole(getUserRole())
    }, [])

    const getDashboardRoute = () => {
        if (userRole === "user") return "/student-dashboard"
        if (userRole === "company") return "/client-dashboard"
        if (userRole === "admin") return "/admin-dashboard"
        return "/student-dashboard"
    }

    const navItem = "transition hover:text-white"
    const active = "text-white"
    const inactive = "text-white/80"

    return (
        <>
            <header className="sticky top-5 z-50 w-full">
                <div className="w-full">
                    <div className="mx-auto max-w-10xl px-10">
                        <div className="flex h-16 items-center justify-between">

                            {/* Logo */}
                            <NavLink
                                to="/"
                                className="text-2xl font-bold text-white ml-4"
                            >
                                Grad<span className="text-blue-500">ium</span>
                            </NavLink>

                            {/* Desktop Navigation */}
                            <nav className="hidden md:flex items-center gap-8 text-[16px] font-medium ml-6">
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `${navItem} ${isActive ? active : inactive}`
                                    }
                                >
                                    Home
                                </NavLink>

                                <NavLink
                                    to="/gigs"
                                    className={({ isActive }) =>
                                        `${navItem} ${isActive ? active : inactive}`
                                    }
                                >
                                    Explore Gigs
                                </NavLink>

                                <NavLink
                                    to="/students"
                                    className={({ isActive }) =>
                                        `${navItem} ${isActive ? active : inactive}`
                                    }
                                >
                                    For Students
                                </NavLink>

                                <NavLink
                                    to="/clients"
                                    className={({ isActive }) =>
                                        `${navItem} ${isActive ? active : inactive}`
                                    }
                                >
                                    For Clients
                                </NavLink>
                            </nav>

                            {/* Actions */}
                            <div className="hidden md:flex items-center gap-3">
                                {isLoggedIn ? (
                                    // Show "My Dashboard" when logged in
                                    <button 
                                        onClick={() => navigate(getDashboardRoute())}
                                        className="rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 transition"
                                    >
                                        My Dashboard
                                    </button>
                                ) : (
                                    // Show Login & Sign Up when not logged in
                                    <>
                                        <button 
                                            onClick={() => setLoginOpen(true)}
                                            className="rounded-lg border border-white/20 px-4 py-2 text-sm font-medium text-white hover:bg-white/10 transition"
                                        >
                                            Login
                                        </button>
                                        <button 
                                            onClick={() => setSignupOpen(true)}
                                            className="rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 transition"
                                        >
                                            Sign Up
                                        </button>
                                    </>
                                )}
                            </div>

                            {/* Mobile Menu Button */}
                            <button
                                onClick={() => setOpen(!open)}
                                className="md:hidden text-white text-xl"
                            >
                                ☰
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {open && (
                    <div className="md:hidden w-full border-t border-white/10 bg-black/40 backdrop-blur">
                        <div className="mx-auto max-w-7xl px-6 py-4 flex flex-col gap-4 text-sm">

                            {[
                                { label: "Home", to: "/" },
                                { label: "Explore Gigs", to: "/gigs" },
                                { label: "For Students", to: "/students" },
                                { label: "For Clients", to: "/clients" },
                            ].map((item) => (
                                <NavLink
                                    key={item.to}
                                    to={item.to}
                                    onClick={() => setOpen(false)}
                                    className={({ isActive }) =>
                                        `transition ${isActive ? "text-white" : "text-white/80"}`
                                    }
                                >
                                    {item.label}
                                </NavLink>
                            ))}

                            {isLoggedIn ? (
                                // Show "My Dashboard" when logged in
                                <button 
                                    onClick={() => {
                                        setOpen(false)
                                        navigate(getDashboardRoute())
                                    }}
                                    className="mt-2 rounded-lg bg-blue-500 py-2 font-medium text-white"
                                >
                                    My Dashboard
                                </button>
                            ) : (
                                // Show Login & Sign Up when not logged in
                                <>
                                    <button 
                                        onClick={() => {
                                            setOpen(false)
                                            setLoginOpen(true)
                                        }}
                                        className="mt-2 rounded-lg border border-white/20 py-2 font-medium text-white"
                                    >
                                        Login
                                    </button>
                                    
                                    <button 
                                        onClick={() => {
                                            setOpen(false)
                                            setSignupOpen(true)
                                        }}
                                        className="rounded-lg bg-blue-500 py-2 font-medium text-white"
                                    >
                                        Sign Up
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                )}
            </header>

            {/* Modals */}
            <LoginModal isOpen={loginOpen} onClose={() => setLoginOpen(false)} />
            <RoleSelectionModal isOpen={signupOpen} onClose={() => setSignupOpen(false)} />
        </>
    )
}