export default function WhyHireStudents() {
    const benefits = [
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "Budget-Friendly Rates",
            description: "Get professional quality work at student-friendly prices. Save 40-60% compared to traditional agencies while still receiving excellent results.",
            stat: "60%",
            statLabel: "Cost Savings"
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            ),
            title: "Fresh & Innovative Ideas",
            description: "Students bring the latest trends, techniques, and perspectives from their current studies. They're digital natives who understand modern audiences.",
            stat: "95%",
            statLabel: "Innovation Rate"
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            title: "Quick & Responsive",
            description: "Students are eager to prove themselves and build their portfolios. Expect fast turnarounds, prompt communication, and dedication to your project.",
            stat: "24hr",
            statLabel: "Avg Response"
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
            ),
            title: "Latest Skills & Tools",
            description: "Students are actively learning cutting-edge technologies and tools. Get access to current expertise in AI, modern frameworks, and trending platforms.",
            stat: "100+",
            statLabel: "Skills Available"
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "Flexible Availability",
            description: "Many students can work evenings, weekends, and adapt to your schedule. Perfect for projects with tight deadlines or specific timing needs.",
            stat: "24/7",
            statLabel: "Available"
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            ),
            title: "Passion & Dedication",
            description: "Students view every project as a learning opportunity and portfolio piece. They're motivated to deliver their best work and exceed expectations.",
            stat: "4.8/5",
            statLabel: "Client Rating"
        }
    ]

    return (
        <section className="relative py-20 px-4 lg:px-8">
            <div className="mx-auto max-w-7xl">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Why Hire{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600">
                            Student Freelancers
                        </span>
                    </h2>
                    <p className="text-white/70 text-lg max-w-2xl mx-auto">
                        Get quality work, fresh perspectives, and cost-effective solutions by working with talented students
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="group relative bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-purple-500/50"
                        >
                            {/* Icon & Stat Badge */}
                            <div className="flex items-start justify-between mb-4">
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                                    {benefit.icon}
                                </div>
                                <div className="text-right">
                                    <div className="text-2xl font-bold text-blue-400">
                                        {benefit.stat}
                                    </div>
                                    <div className="text-xs text-white/60">
                                        {benefit.statLabel}
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-white mb-2">
                                {benefit.title}
                            </h3>
                            <p className="text-white/70 text-sm leading-relaxed">
                                {benefit.description}
                            </p>

                            {/* Decorative gradient on hover */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/5 group-hover:to-blue-500/5 transition-all duration-300 pointer-events-none"></div>
                        </div>
                    ))}
                </div>

                {/* Comparison Card */}
                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur border border-white/10 rounded-2xl p-8 lg:p-12">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                        Student Freelancers vs Traditional Agencies
                    </h3>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Student Freelancers */}
                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </div>
                            <h4 className="text-lg font-bold text-white mb-3">Student Freelancers</h4>
                            <div className="space-y-2 text-sm">
                                <p className="text-green-400 flex items-center justify-center gap-2">
                                    <span>✓</span> $20-50/hr average
                                </p>
                                <p className="text-green-400 flex items-center justify-center gap-2">
                                    <span>✓</span> 24-48hr response
                                </p>
                                <p className="text-green-400 flex items-center justify-center gap-2">
                                    <span>✓</span> Fresh perspectives
                                </p>
                                <p className="text-green-400 flex items-center justify-center gap-2">
                                    <span>✓</span> Direct communication
                                </p>
                                <p className="text-green-400 flex items-center justify-center gap-2">
                                    <span>✓</span> Flexible & eager
                                </p>
                            </div>
                        </div>

                        {/* VS Divider */}
                        <div className="flex items-center justify-center">
                            <div className="text-white/40 font-bold text-2xl">VS</div>
                        </div>

                        {/* Traditional Agencies */}
                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-gray-600 to-gray-700 flex items-center justify-center">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <h4 className="text-lg font-bold text-white mb-3">Traditional Agencies</h4>
                            <div className="space-y-2 text-sm">
                                <p className="text-red-400 flex items-center justify-center gap-2">
                                    <span>✗</span> $100-300/hr average
                                </p>
                                <p className="text-red-400 flex items-center justify-center gap-2">
                                    <span>✗</span> 3-7 days response
                                </p>
                                <p className="text-red-400 flex items-center justify-center gap-2">
                                    <span>✗</span> Traditional approach
                                </p>
                                <p className="text-red-400 flex items-center justify-center gap-2">
                                    <span>✗</span> Multiple middlemen
                                </p>
                                <p className="text-red-400 flex items-center justify-center gap-2">
                                    <span>✗</span> Rigid processes
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}