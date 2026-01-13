interface Proposal {
    studentName: string
    studentRating: number
    projectTitle: string
    bidAmount: string
    deliveryTime: string
    coverLetter: string
    skills: string[]
    appliedTime: string
    status: "pending" | "accepted" | "rejected"
}

export default function ClientDashboardProposals() {
    const proposals: Proposal[] = [
        {
            studentName: "Aryan Sinha",
            studentRating: 4.9,
            projectTitle: "Website Development",
            bidAmount: "$600",
            deliveryTime: "3 weeks",
            coverLetter: "I have 2 years of experience in React and Next.js development. I've built similar blog platforms and can deliver a high-quality, SEO-optimized website within your timeline.",
            skills: ["React", "Next.js", "TypeScript"],
            appliedTime: "2 days ago",
            status: "pending"
        },
        {
            studentName: "Ansal Pandey",
            studentRating: 4.7,
            projectTitle: "Backend API Development",
            bidAmount: "$450",
            deliveryTime: "2 weeks",
            coverLetter: "I specialize in Node.js and Express for building robust backend APIs. I ensure clean code and efficient database interactions. Looking forward to working on your project.",
            skills: ["Node.js", "Express", "MongoDB"],
            appliedTime: "4 days ago",
            status: "pending"
        },
        {
            studentName: "Aman",
            studentRating: 5.0,
            projectTitle: "E-commerce Platform",
            bidAmount: "$850",
            deliveryTime: "4 weeks",
            coverLetter: "Full-stack developer specializing in e-commerce solutions. I'll implement secure payment processing and modern UI/UX.",
            skills: ["React", "Node.js", "MongoDB"],
            appliedTime: "1 week ago",
            status: "accepted"
        }
    ]

    const getStatusStyle = (status: string) => {
        switch (status) {
            case "pending":
                return "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
            case "accepted":
                return "bg-green-500/10 text-green-400 border-green-500/20"
            case "rejected":
                return "bg-red-500/10 text-red-400 border-red-500/20"
            default:
                return "bg-white/10 text-white/60 border-white/20"
        }
    }

    return (
        <div className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-white">Recent Proposals</h3>
                <span className="text-sm text-white/60">{proposals.length} total applications</span>
            </div>
            
            <div className="space-y-4">
                {proposals.map((proposal, index) => (
                    <div key={index} className="rounded-lg bg-white/5 border border-white/10 p-4">
                        <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-semibold">
                                    {proposal.studentName.split(' ').map(n => n[0]).join('')}
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-white">{proposal.studentName}</h4>
                                    <div className="flex items-center gap-1 text-xs text-yellow-400">
                                        <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        {proposal.studentRating}
                                    </div>
                                </div>
                            </div>
                            <span className={`px-2 py-1 text-xs rounded border capitalize ${getStatusStyle(proposal.status)}`}>
                                {proposal.status}
                            </span>
                        </div>
                        
                        <div className="flex gap-2 flex-wrap mb-3">
                            {proposal.skills.map((skill, idx) => (
                                <span 
                                    key={idx}
                                    className="px-2 py-0.5 bg-blue-500/10 text-blue-400 text-xs rounded border border-blue-500/20"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                        
                        <p className="text-xs text-white/70 mb-3 line-clamp-2">{proposal.coverLetter}</p>
                        
                        <div className="flex items-center justify-between text-xs text-white/60 mb-3">
                            <span className="flex items-center gap-1">
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                {proposal.bidAmount}
                            </span>
                            <span className="flex items-center gap-1">
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                {proposal.deliveryTime}
                            </span>
                            <span>Applied {proposal.appliedTime}</span>
                        </div>
                        
                        {proposal.status === "pending" && (
                            <div className="flex gap-2">
                                <button className="flex-1 px-3 py-2 bg-green-500 hover:bg-green-600 text-white text-sm rounded-lg transition">
                                    Accept
                                </button>
                                <button className="flex-1 px-3 py-2 bg-white/5 hover:bg-white/10 text-white text-sm rounded-lg transition border border-white/10">
                                    Decline
                                </button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}