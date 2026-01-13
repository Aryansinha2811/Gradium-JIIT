interface Proposal {
    title: string
    timeAgo: string
    status: "pending" | "accepted" | "rejected"
}

export default function StudentDashboardProposalsPanel() {
    const proposals: Proposal[] = [
        {
            title: "Blog Website Development",
            timeAgo: "3 days ago",
            status: "pending"
        },
        {
            title: "Logo Design for Startup",
            timeAgo: "5 days ago",
            status: "accepted"
        },
        {
            title: "Social Media Campaign",
            timeAgo: "1 week ago",
            status: "rejected"
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
            <h3 className="text-lg font-semibold text-white mb-4">My Proposals</h3>
            
            <div className="space-y-3">
                {proposals.map((proposal, index) => (
                    <div key={index} className="rounded-lg bg-white/5 border border-white/10 p-4">
                        <h4 className="text-sm font-semibold text-white mb-1">{proposal.title}</h4>
                        <p className="text-xs text-white/60 mb-2">{proposal.timeAgo}</p>
                        <span className={`inline-block px-2 py-1 text-xs rounded border capitalize ${getStatusStyle(proposal.status)}`}>
                            {proposal.status}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}