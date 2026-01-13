interface StatsCardProps {
    title: string
    value: string | number
    subtitle?: string
    icon: React.ReactNode
    featured?: boolean
    trend?: "up" | "down" | "neutral"
    trendText?: string
}

export default function ClientDashboardStatsCard({
    title,
    value,
    subtitle,
    icon,
    featured = false,
    trend = "neutral",
    trendText
}: StatsCardProps) {
    if (featured) {
        return (
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 p-6 border border-blue-500/30">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="relative">
                    <div className="flex items-center justify-between mb-4">
                        <p className="text-blue-100 text-sm font-medium">{title}</p>
                        <div className="text-blue-200">{icon}</div>
                    </div>
                    <h2 className="text-4xl font-bold text-white mb-2">{value}</h2>
                    {trendText && (
                        <div className="flex items-center gap-1 text-blue-100 text-sm">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                            {trendText}
                        </div>
                    )}
                </div>
            </div>
        )
    }

    return (
        <div className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6 hover:border-blue-500/30 transition">
            <div className="flex items-center justify-between mb-4">
                <p className="text-white/70 text-sm font-medium">{title}</p>
                <div className="text-white/40">{icon}</div>
            </div>
            <h2 className="text-4xl font-bold text-white mb-2">{value}</h2>
            {trendText && (
                <div className={`flex items-center gap-1 text-sm ${
                    trend === "up" ? "text-green-400" : trend === "down" ? "text-red-400" : "text-white/60"
                }`}>
                    {trend === "up" && (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                    )}
                    {trend === "down" && (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17H5m0 0V9m0 8l8-8 4 4 6-6" />
                        </svg>
                    )}
                    {trendText}
                </div>
            )}
            {subtitle && !trendText && (
                <p className="text-white/60 text-sm">{subtitle}</p>
            )}
        </div>
    )
}
