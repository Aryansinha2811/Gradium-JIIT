import Aryan from "../../assets/Avatars/Aryan.jpg"
import Ankit from "../../assets/Avatars/Ankit.jpg"
import Aman from "../../assets/Avatars/Aman.jpg"

export default function SuccessStories() {
    const testimonials = [
        {
            name: "Aryan Sinha",
            role: "Artificial Intelligence Student",
            university: "ADGIPS",
            image: Aryan,
            earnings: "$12,500",
            projects: "47",
            skills: ["Web Development", "React", "Node.js"],
            testimonial: "Gradium helped me turn my coding skills into real income while studying. I've worked with amazing clients and built projects that actually matter. The flexibility is perfect for my class schedule!",
            highlight: "Paid off student loans"
        },
        {
            name: "Ankit Kumar",
            role: "Graphic Design Student",
            university: "DSEU",
            image: Ankit,
            earnings: "$8,300",
            projects: "32",
            skills: ["Logo Design", "Branding", "Illustration"],
            testimonial: "I started with zero clients and basic skills. Now I have a portfolio full of real work and steady income. Gradium gave me the confidence to launch my freelance career before graduation.",
            highlight: "Built professional portfolio"
        },
        {
            name: "Aman",
            role: "Computer Science Student",
            university: "BPIT",
            image: Aman,
            earnings: "$9,800",
            projects: "56",
            skills: ["Content Writing", "Social Media", "Marketing"],
            testimonial: "As an international student, earning money was challenging. Gradium changed everything. I can work remotely, manage my time, and I've learned more practical skills here than in any classroom.",
            highlight: "Gained real marketing experience"
        }
    ]

    return (
        <section className="relative py-10 px-4 lg:px-8">
            <div className="mx-auto max-w-7xl">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Real Students,{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600">
                            Real Success
                        </span>
                    </h2>
                    <p className="text-white/70 text-lg max-w-2xl mx-auto">
                        See how students just like you are building their careers and earning money with Gradium
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((story, index) => (
                        <div
                            key={index}
                            className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur border border-white/10 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300"
                        >
                            {/* Profile Section */}
                            <div className="flex items-start gap-4 mb-6">
                                <img
                                    src={story.image}
                                    alt={story.name}
                                    className="w-16 h-16 rounded-full object-cover border-2 border-blue-500"
                                />
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold text-white">
                                        {story.name}
                                    </h3>
                                    <p className="text-white/60 text-sm">
                                        {story.role}
                                    </p>
                                    <p className="text-white/40 text-xs mt-1">
                                        {story.university}
                                    </p>
                                </div>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-white/5 rounded-xl border border-white/10">
                                <div>
                                    <p className="text-2xl font-bold text-green-400">
                                        {story.earnings}
                                    </p>
                                    <p className="text-white/60 text-xs">Total Earned</p>
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-blue-400">
                                        {story.projects}
                                    </p>
                                    <p className="text-white/60 text-xs">Projects Done</p>
                                </div>
                            </div>

                            {/* Testimonial */}
                            <div className="mb-6">
                                <p className="text-white/80 text-sm leading-relaxed italic">
                                    "{story.testimonial}"
                                </p>
                            </div>

                            {/* Skills Tags */}
                            <div className="mb-4">
                                <p className="text-white/60 text-xs mb-2">Skills Gained:</p>
                                <div className="flex flex-wrap gap-2">
                                    {story.skills.map((skill, idx) => (
                                        <span
                                            key={idx}
                                            className="bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs px-3 py-1 rounded-full"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Highlight Badge */}
                            <div className="flex items-center gap-2 text-sm">
                                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <span className="text-white/70 text-xs font-medium">
                                    {story.highlight}
                                </span>
                            </div>

                            {/* Decorative gradient overlay on hover */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 transition-all duration-300 pointer-events-none"></div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-14 text-center bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl py-8 mb-2">
                    <h3 className="text-3xl font-bold text-white mb-3">
                        Ready to Write Your Success Story ?
                    </h3>
                    <p className="text-white/70 mb-2 max-w-xl mx-auto">
                        Join thousands of students who are already earning, learning, and building their future with Gradium
                    </p>
                    
                </div>
            </div>
        </section>
    )
}