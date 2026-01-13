import { User, FileText, Briefcase } from 'lucide-react'

export default function HowItWorks() {
    return (
        <section className="hidden md:block relative">
            <div className="mx-auto max-w-7xl px-6 py-16">

                {/* Badge */}
                <div className="flex justify-center mb-8">
                    <span className="inline-block rounded-full bg-blue-500/10 border border-blue-400/20 px-4 py-2 text-sm text-blue-400">
                        How it Works
                    </span>
                </div>

                {/* Centered Heading */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-5xl font-semibold text-white">
                        Getting started is <span className="text-blue-400">easy</span>
                    </h2>
                    <p className="mt-4 text-white/70 text-base">
                        Ready to connect with top talent or discover the perfect match for your project? The
                        <br />
                        possibilities are limitless, and the first step is just a click away.
                    </p>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-3 gap-8 relative">
                    
                    {/* Connecting Line */}
                    <div className="absolute top-32 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" style={{ zIndex: 0 }} />

                    <StepCard
                        icon={<User className="w-8 h-8" />}
                        title="Create an Account"
                        description="Register your personal identity on this platform to access features."
                        stepNumber="1"
                    />

                    <StepCard
                        icon={<FileText className="w-8 h-8" />}
                        title="Upload Resume"
                        description="Complete your register and then upload your latest resume."
                        stepNumber="2"
                    />

                    <StepCard
                        icon={<Briefcase className="w-8 h-8" />}
                        title="Search for jobs"
                        description="Look for job vacancies and immediately get your love job."
                        stepNumber="3"
                    />

                </div>
            </div>
        </section>
    )
}

/* ---------------------------------- */
/* Step Card Component                 */
/* ---------------------------------- */

interface StepCardProps {
    icon: React.ReactNode
    title: string
    description: string
    stepNumber: string
}

function StepCard({ icon, title, description, stepNumber }: StepCardProps) {
    return (
        <div className="relative group" style={{ zIndex: 1 }}>
            
            {/* Glow Effect - Softer */}
            <div className="absolute -inset-3 rounded-2xl bg-blue-500/0 group-hover:bg-blue-500/5 blur-lg transition-all duration-500" />

            {/* Card */}
            <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 transition-all duration-300 group-hover:border-blue-400/50 group-hover:bg-white/10 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-blue-500/20">
                
                {/* Icon Container */}
                <div className="w-16 h-16 rounded-xl bg-blue-500 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                    {icon}
                </div>

                {/* Mock UI Preview */}
                <div className="mb-6 rounded-lg bg-white/5 border border-white/10 p-4 min-h-[140px]">
                    {stepNumber === "1" && (
                        <div className="space-y-3">
                            <div className="flex gap-2">
                                <div className="h-8 bg-white/10 rounded px-3 flex items-center flex-1">
                                    <span className="text-white/40 text-xs">First name</span>
                                </div>
                                <div className="h-8 bg-white/10 rounded px-3 flex items-center flex-1">
                                    <span className="text-white/40 text-xs">Last name</span>
                                </div>
                            </div>
                            <div className="h-16 bg-white/10 rounded px-3 pt-2">
                                <span className="text-white/40 text-xs">Description your self...</span>
                            </div>
                        </div>
                    )}
                    {stepNumber === "2" && (
                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="text-white/90 text-sm font-medium">Uploading</span>
                                <span className="text-white/50 text-xs">Resume.pdf • 80% </span>
                            </div>
                            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                <div className="h-full w-4/5 bg-gradient-to-r from-green-400 to-green-500 rounded-full"></div>
                            </div>
                            <div className="flex gap-2 justify-end">
                                <div className="w-5 h-5 bg-blue-500/80 rounded flex items-center justify-center">
                                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                    </svg>
                                </div>
                                <div className="w-5 h-5 bg-red-500/80 rounded flex items-center justify-center">
                                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    )}
                    {stepNumber === "3" && (
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <span className="text-white text-sm font-bold">$ 10</span>
                                </div>
                                <div className="flex-1">
                                    <div className="h-4 bg-white/20 rounded w-3/4 mb-1.5"></div>
                                    <div className="h-3 bg-white/10 rounded w-1/2"></div>
                                </div>
                            </div>
                            <div className="pt-2">
                                <div className="text-white/80 text-sm font-medium mb-2">Frontend Engineer</div>
                                <div className="space-y-1.5">
                                    <div className="h-3 bg-white/10 rounded w-full"></div>
                                    <div className="h-3 bg-white/10 rounded w-4/5"></div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold text-white mb-3">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-white/60 text-sm leading-relaxed mb-6">
                    {description}
                </p>

                {/* Step Number Badge */}
                <div className="flex justify-center">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 border-2 border-blue-400 flex items-center justify-center">
                        <span className="text-blue-400 font-bold text-sm">{stepNumber}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}