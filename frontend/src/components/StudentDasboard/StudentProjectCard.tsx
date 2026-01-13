interface ProjectCardProps {
    title: string
    company: string
    description: string
    budget: string
    duration: string
    applications: number
    skills: string[]
}

export default function StudentDashProjectCard({
    title,
    company,
    description,
    budget,
    duration,
    applications,
    skills
}: ProjectCardProps) {
    return (
        <div className="rounded-xl bg-white/5 border border-white/10 p-5 hover:border-blue-500/30 transition">
            <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
                    <p className="text-sm text-white/60 mb-3">by {company}</p>
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
                        <span className="text-white/40">• {applications} applications</span>
                    </div>

                    <div className="flex gap-2 flex-wrap">
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
                
                <button className="ml-4 px-6 py-2.5 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition whitespace-nowrap">
                    Apply Now
                </button>
            </div>
        </div>
    )
}