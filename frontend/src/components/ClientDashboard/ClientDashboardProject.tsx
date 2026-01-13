interface ProjectCardProps {
    title: string
    description: string
    budget: string
    duration: string
    proposals: number
    skills: string[]
    status: "open" | "in-progress" | "completed"
    postedTime: string
}

export default function ClientDashboardProject({
    title,
    description,
    budget,
    duration,
    proposals,
    skills,
    status,
    postedTime
}: ProjectCardProps) {
    const getStatusStyle = (status: string) => {
        switch (status) {
            case "open":
                return "bg-green-500/10 text-green-400 border-green-500/20"
            case "in-progress":
                return "bg-blue-500/10 text-blue-400 border-blue-500/20"
            case "completed":
                return "bg-purple-500/10 text-purple-400 border-purple-500/20"
            default:
                return "bg-white/10 text-white/60 border-white/20"
        }
    }

    return (
        <div className="rounded-xl bg-white/5 border border-white/10 p-5 hover:border-blue-500/30 transition">
            <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-white">{title}</h3>
                        <span className={`px-2 py-1 text-xs rounded border capitalize ${getStatusStyle(status)}`}>
                            {status.replace('-', ' ')}
                        </span>
                    </div>
                    <p className="text-sm text-white/70 mb-4">{description}</p>
                    
                    <div className="flex items-center gap-4 text-sm text-white/60 mb-3">
                        <span className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {budget}
                        </span>
                        <span className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {duration}
                        </span>
                        <span className="text-white/40">• Posted {postedTime}</span>
                    </div>

                    <div className="flex gap-2 flex-wrap mb-3">
                        {skills.map((skill, index) => (
                            <span 
                                key={index}
                                className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full border border-blue-500/20"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            
            <div className="flex items-center justify-between pt-3 border-t border-white/10">
                <button className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    View Proposals
                    {proposals > 0 && (
                        <span className="bg-blue-500 text-white text-xs rounded-full px-2 py-0.5">
                            {proposals} new
                        </span>
                    )}
                </button>
                <button className="text-sm text-white/60 hover:text-white transition">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                </button>
            </div>
        </div>
    )
}