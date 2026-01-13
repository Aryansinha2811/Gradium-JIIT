import Client from "../../assets/Avatars/Client.jpg"

export default function ClientDashboardTopbar() {
    // Get user data from localStorage
    const user = JSON.parse(localStorage.getItem("user") || "{}")

    return (
        <header className="border-b border-white/10 bg-white/5 backdrop-blur-md p-4">
            <div className="flex items-center justify-between">
                {/* Search */}
                <div className="flex-1 max-w-xl">
                    <div className="relative">
                        <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Search projects..."
                            className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        />
                    </div>
                </div>

                {/* Right Icons */}
                <div className="flex items-center gap-4 ml-6">
                    <button className="text-white/70 hover:text-white transition">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </button>

                    <button className="relative text-white/70 hover:text-white transition">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                        <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                    </button>

                    <div className="flex items-center gap-3 pl-4 border-l border-white/10">
                        <div className="text-right">
                            <p className="text-sm font-medium text-white">{user.name || "Student"}</p>
                            <p className="text-xs text-white/60">{user.email || "student@gradium.com"}</p>
                        </div>
                        {/* Profile Avatar Image */}
                        <img 
                            src={Client} 
                            alt={user.name || "User"}
                            className="w-10 h-10 rounded-full object-cover border-2 border-blue-500/30"
                        />
                    </div>
                </div>
            </div>
        </header>
    )
}