import ClientDashboardSidebar from "../../components/ClientDashboard/ClientDashboardSidebar";
import ClientDashboardTopbar from "../../components/ClientDashboard/ClientDashboardTopbar";
import ClientDashboardStatsCard from "../../components/ClientDashboard/ClientDashboardStatsCard";
import ClientDashboardProject from "../../components/ClientDashboard/ClientDashboardProject";
import ClientDashboardProposals from "../../components/ClientDashboard/ClientDashboardProposals";

export default function ClientDashboard() {
    const stats = [
        {
            title: "Total Projects",
            value: "8",
            icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>,
            featured: true,
            trend: "up" as const,
            trendText: "Increased from last month"
        },
        {
            title: "Active Projects",
            value: "3",
            icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>,
            trend: "neutral" as const,
            trendText: "On Discuss"
        },
        {
            title: "Total Proposals",
            value: "15",
            icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>,
            trend: "up" as const,
            trendText: "Increased from last month"
        },
        {
            title: "Completed",
            value: "5",
            icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>,
            trend: "neutral" as const,
            trendText: "Projects delivered"
        }
    ];

    const projects = [
        {
            title: "Blog Website Development",
            description: "Need a responsive blog website with CMS integration and SEO optimization.",
            budget: "$600 - $900",
            duration: "3 weeks",
            proposals: 3,
            skills: ["React", "Next.js", "Tailwind CSS"],
            status: "open" as const,
            postedTime: "5 days ago"
        },
        {
            title: "Brand Identity Design",
            description: "Create a complete brand identity including logo, color palette, and brand guidelines.",
            budget: "$400 - $600",
            duration: "2 weeks",
            proposals: 1,
            skills: ["Figma", "Illustrator", "Branding"],
            status: "in-progress" as const,
            postedTime: "2 weeks ago"
        }
    ];

    return (
        <div className="flex min-h-screen bg-linear-to-br from-gray-900 via-black to-gray-900">
            <ClientDashboardSidebar />

            <div className="flex-1 flex flex-col">
                <ClientDashboardTopbar />

                <main className="flex-1 p-8 overflow-y-auto">
                    {/* Page Title with Add Project Button */}
                    <div className="mb-8 flex items-center justify-between">
                        <div>
                            <h1 className="text-4xl font-bold text-white mb-2">Client Dashboard</h1>
                            <p className="text-white/60">Manage your projects and review student proposals.</p>
                        </div>
                        <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                            Add Project
                        </button>
                    </div>

                    {/* Stats Cards - 4 cards */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                        {stats.map((stat, index) => (
                            <ClientDashboardStatsCard key={index} {...stat} />
                        ))}
                    </div>

                    {/* Two Column Layout */}
                    <div className="flex gap-6">
                        {/* Left Side - My Projects */}
                        <div className="flex-1">
                            <div className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6">
                                <h2 className="text-2xl font-bold text-white mb-6">My Projects</h2>
                                
                                <div className="space-y-4">
                                    {projects.map((project, index) => (
                                        <ClientDashboardProject key={index} {...project} />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Sidebar - Recent Proposals */}
                        <aside className="w-96">
                            <ClientDashboardProposals />
                        </aside>
                    </div>
                </main>
            </div>
        </div>
    );
}