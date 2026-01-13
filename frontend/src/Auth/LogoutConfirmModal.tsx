import { logoutUser } from "../services/auth.service"

interface LogoutConfirmModalProps {
    isOpen: boolean
    onClose: () => void
}

export default function LogoutConfirmModal({ isOpen, onClose }: LogoutConfirmModalProps) {
    if (!isOpen) return null

    const handleLogout = () => {
        logoutUser()
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
                    
                    {/* Icon */}
                    <div className="flex justify-center mb-4">
                        <div className="w-16 h-16 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                            <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                            </svg>
                        </div>
                    </div>

                    {/* Header */}
                    <div className="text-center mb-6">
                        <h2 className="text-2xl font-bold text-white mb-2">
                            Confirm Logout
                        </h2>
                        <p className="text-white/60 text-sm">
                            Are you sure you want to logout from your account?
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3">
                        <button
                            onClick={onClose}
                            className="flex-1 px-4 py-2.5 rounded-lg border border-white/10 bg-white/5 text-white font-medium hover:bg-white/10 transition"
                        >
                            No, Stay
                        </button>
                        <button
                            onClick={handleLogout}
                            className="flex-1 px-4 py-2.5 rounded-lg bg-red-500 hover:bg-red-600 text-white font-medium transition"
                        >
                            Yes, Logout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}