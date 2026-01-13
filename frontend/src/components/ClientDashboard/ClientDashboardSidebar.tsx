import { useState } from "react"
import { useNavigate } from "react-router-dom"
import LogoutConfirmModal from "../../Auth/LogoutConfirmModal"

export default function ClientDashboardSidebar() {
    const navigate = useNavigate()
    const [activeMenu, setActiveMenu] = useState("dashboard")
    const [logoutModalOpen, setLogoutModalOpen] = useState(false)

    return (
        <>
            <aside className="w-64 border-r border-white/10 bg-white/5 backdrop-blur-md flex flex-col">
                {/* Logo */}
                <div className="p-6 border-b border-white/10">
                    <h1 className="text-2xl font-bold text-white">
                        Grad<span className="text-blue-500">ium</span>
                    </h1>
                </div>

                {/* Menu */}
                <nav className="flex-1 p-4">
                    <p className="text-xs text-white/40 uppercase tracking-wider mb-3 px-3">Menu</p>
                    
                    <button
                        onClick={() => setActiveMenu("dashboard")}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition ${
                            activeMenu === "dashboard" 
                                ? "bg-blue-500/20 text-blue-400 border border-blue-500/30" 
                                : "text-white/70 hover:bg-white/5 hover:text-white"
                        }`}
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                        </svg>
                        Dashboard
                    </button>

                    <button
                        onClick={() => navigate("/gigs")}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 text-white/70 hover:bg-white/5 hover:text-white transition relative"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Browse Projects
                        <span className="absolute right-3 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">4</span>
                    </button>

                    <button
                        onClick={() => setActiveMenu("analytics")}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 text-white/70 hover:bg-white/5 hover:text-white transition"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                        Analytics
                    </button>

                    <p className="text-xs text-white/40 uppercase tracking-wider mb-3 px-3 mt-6">General</p>

                    <button
                        onClick={() => setActiveMenu("settings")}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 text-white/70 hover:bg-white/5 hover:text-white transition"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Settings
                    </button>

                    <button
                        onClick={() => setActiveMenu("help")}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 text-white/70 hover:bg-white/5 hover:text-white transition"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Help
                    </button>

                    <button
                        onClick={() => setLogoutModalOpen(true)}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 text-white/70 hover:bg-red-500/20 hover:text-red-400 transition"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        Logout
                    </button>
                </nav>
            </aside>

            {/* Logout Confirmation Modal */}
            <LogoutConfirmModal isOpen={logoutModalOpen} onClose={() => setLogoutModalOpen(false)} />
        </>
    )
}