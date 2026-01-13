import Aryan from '../../assets/Avatars/Aryan.jpg'
import Ansal from '../../assets/Avatars/Ansal.jpg'
import Ankit from '../../assets/Avatars/Ankit.jpg'

import { Palette, Code, Server, PenTool } from 'lucide-react'

export default function FeaturedProfiles() {
    return (
        <section className="hidden md:block relative opacity-100 top-0">
            <div className="mx-auto max-w-7xl px-6 py-24">

                {/* Centered Headline */}
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-5xl font-semibold text-white">
                        Talented Students. <span className="text-blue-400">Real Skills.</span>
                    </h2>
                    <p className="mt-4 text-[15px] text-white/90">
                        Discover students who are already building real-world projects
                        and delivering value to clients.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="mt-16 grid grid-cols-3 gap-8">

                    {/* Card 1 */}
                    <ProfileCard
                        name="Aryan Sinha"
                        role="Frontend Developer"
                        skills={["React", "JavaScript", "Node.js", "APIs"]}
                        projects="12+"
                        rating="4.8"
                        avatar= {Aryan}
                    />

                    {/* Card 2 */}
                    <ProfileCard
                        name="Ansal Pandey"
                        role="Backend Developer"
                        skills={["Node.js", "Express", "MongoDB"]}
                        projects="9+"
                        rating="4.9"
                        avatar= {Ansal}
                    />

                    {/* Card 3 */}
                    <ProfileCard
                        name="Aman"
                        role="UI / UX Designer"
                        skills={["Figma", "UI Design", "Prototyping"]}
                        projects="15+"
                        rating="4.4"
                        avatar= {Ankit}
                    />

                </div>

                {/* Mini Category Cards */}
                <div className="mt-16 grid grid-cols-4 gap-6">
                    <CategoryCard
                        title="UI/UX Design"
                        description="Create stunning interfaces and seamless user experiences"
                        icon={<Palette className="w-8 h-8" />}
                    />
                    <CategoryCard
                        title="Frontend Dev"
                        description="Build responsive and interactive web applications"
                        icon={<Code className="w-8 h-8" />}
                    />
                    <CategoryCard
                        title="Backend Dev"
                        description="Develop robust APIs and server-side solutions"
                        icon={<Server className="w-8 h-8" />}
                    />
                    <CategoryCard
                        title="Content Creation"
                        description="Craft engaging content that tells your story"
                        icon={<PenTool className="w-8 h-8" />}
                    />
                </div>
            </div>
        </section>
    )
}

            

/* ---------------------------------- */
/* Category Card Component             */
/* ---------------------------------- */

function CategoryCard({ 
    title, 
    description,
    icon 
}: { 
    title: string
    description: string
    icon: React.ReactNode
}) {
    return (
        <div className="relative group cursor-pointer">
            {/* Glow on hover */}
            <div className="absolute -inset-2 rounded-xl bg-blue-500/0 group-hover:bg-blue-500/20 blur-xl transition-all duration-500" />
            
            {/* Card */}
            <div className="relative rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 text-center transition-all duration-300 group-hover:border-blue-400/50 group-hover:bg-white/10 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-blue-500/20">
                <div className="text-blue-400 mb-4 flex justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                    {icon}
                </div>
                <h4 className="text-base font-semibold text-white mb-2">{title}</h4>
                <p className="text-xs text-white/60 leading-relaxed">{description}</p>
            </div>
        </div>
    )
}

/* ---------------------------------- */
/* Profile Card Component              */
/* ---------------------------------- */

function ProfileCard({
    name,
    role,
    skills,
    projects,
    rating,
    avatar,
}: {
    name: string
    role: string
    skills: string[]
    projects: string
    rating: string
    avatar: string
}) {
    return (
        <div className="relative group">

            {/* Glow */}
            <div className="absolute -inset-4 rounded-2xl bg-blue-500/10 group-hover:bg-blue-500/20 blur-2xl transition-all duration-500" />

            {/* Card */}
            <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 transition-all duration-300 group-hover:border-blue-400/50 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-blue-500/20">
                <div className="space-y-5">

                    {/* Avatar */}
                    <div className="flex justify-center">
                        <div className="relative">
                            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-75 blur-sm group-hover:opacity-100 transition-opacity duration-300"></div>
                            <img 
                                src={avatar} 
                                alt={name}
                                className="relative w-20 h-20 rounded-full object-cover border-2 border-white/20"
                            />
                        </div>
                    </div>

                    {/* Header */}
                    <div className="flex justify-center flex-col items-center">
                        <h3 className="text-2xl font-semibold text-white">
                            {name}
                        </h3>
                        <p className="text-sm text-white/60 mt-1">{role}</p>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 justify-center">
                        {skills.map((skill) => (
                            <span
                                key={skill}
                                className="rounded-md bg-blue-500/20 px-2 py-1 text-xs text-blue-400 transition-all duration-300 hover:bg-blue-500/30 hover:scale-105"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>

                    {/* Stats */}
                    <div className="grid-cols-2 gap-14 pt-2 flex justify-center">
                        <div>
                            <p className="text-xs text-white/50">Projects</p>
                            <p className="text-sm font-medium text-white">{projects}</p>
                        </div>
                        <div>
                            <p className="text-xs text-white/50">Rating</p>
                            <p className="text-sm font-medium text-white">⭐ {rating}</p>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="pt-4 flex gap-3">
                        <button className="flex-1 rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50">
                            View Profile
                        </button>
                        <button className="rounded-lg border border-white/20 px-4 py-2 text-sm text-white/80 hover:text-white hover:border-white/40 transition-all duration-300 hover:scale-105">
                            Hire
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}