import StudentDashboardSidebar from "../../components/StudentDasboard/StudentDashboardSidebar"
import StudentDashboardTopbar from "../../components/StudentDasboard/StudentDashboardTopbar"
import StudentDashboardStatsCard from "../../components/StudentDasboard/StudentStatsCard"
import StudentDashProjectCard from "../../components/StudentDasboard/StudentProjectCard"
import StudentDashboardSkillsPanel from "../../components/StudentDasboard/StudentSkillsPanel"
import StudentDashboardProposalsPanel from "../../components/StudentDasboard/StudentProposalsPanel"


export default function StudentDashboard() {
    // Stats data - only 3 cards
    const stats = [
        {
            title: "Total Earnings",
            value: "₹2,450",
            icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>,
            featured: true,
            trend: "up" as const,
            trendText: "Increased from last month"
        },
        {
            title: "Completed Projects",
            value: "12",
            icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>,
            trend: "up" as const,
            trendText: "Increased from last month"
        },
        {
            title: "Active Proposals",
            value: "3",
            icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>,
            trend: "up" as const,
            trendText: "Increased from last month"
        }
    ]

    // Projects data
    const projects = [
        {
            title: "E-commerce Website Development",
            company: "TechStart Inc.",
            description: "Need a full-stack e-commerce website with payment integration, user authentication, and product management system.",
            budget: "$500 - $800",
            duration: "2-3 weeks",
            applications: 12,
            skills: ["React", "Node.js", "MongoDB"]
        },
        {
            title: "Mobile App UI/UX Design",
            company: "Creative Solutions",
            description: "Design a modern and intuitive UI/UX for a fitness tracking mobile application.",
            budget: "$300 - $500",
            duration: "1-2 weeks",
            applications: 8,
            skills: ["Figma", "UI/UX", "Mobile Design"]
        }
    ]

    return (
        <div className="flex min-h-screen bg-linear-to-br from-gray-900 via-black to-gray-900">
            {/* Left Sidebar */}
            <StudentDashboardSidebar />

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Top Bar */}
                <StudentDashboardTopbar />

                {/* Dashboard Content */}
                <main className="flex-1 p-8 overflow-y-auto">
                    {/* Page Title */}
                    <div className="mb-8">
                        <h1 className="text-4xl font-bold text-white mb-2">Student Dashboard</h1>
                        <p className="text-white/60">Track your projects, proposals, and earnings.</p>
                    </div>

                    {/* Stats Cards - Full Width (3 cards) */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        {stats.map((stat, index) => (
                            <StudentDashboardStatsCard key={index} {...stat} />
                        ))}
                    </div>

                    {/* Two Column Layout */}
                    <div className="flex gap-6">
                        {/* Left Side - Skills + Projects */}
                        <div className="flex-1 space-y-6">
                            {/* Skills Panel */}
                            <StudentDashboardSkillsPanel />

                            {/* Available Projects */}
                            <div className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6">
                                <h2 className="text-2xl font-bold text-white mb-6">Available Projects</h2>
                                
                                <div className="space-y-4">
                                    {projects.map((project, index) => (
                                        <StudentDashProjectCard key={index} {...project} />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Sidebar - Proposals Only */}
                        <aside className="w-80">
                            <StudentDashboardProposalsPanel />
                        </aside>
                    </div>
                </main>
            </div>
        </div>
    )
}