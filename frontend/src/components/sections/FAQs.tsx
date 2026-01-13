import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

interface FAQItem {
    id: number
    question: string
    answer: string
}

const faqs: FAQItem[] = [
    {
        id: 1,
        question: "How do I find the right freelance engineer for my project?",
        answer: "Start by clearly defining your project requirements, timeline, and budget. Browse through our talented student profiles, review their portfolios and ratings, and check their skill sets. You can also post your project and receive proposals from interested freelancers who match your needs."
    },
    {
        id: 2,
        question: "What should I include in a project brief?",
        answer: "A project brief should include the project's scope, objectives, deliverables, timeline, budget, required skills, and any specific tools or technologies that need to be used. The clearer and more detailed the brief, the better the chance of finding the right freelancer."
    },
    {
        id: 3,
        question: "How do I ensure the quality of work?",
        answer: "Review the freelancer's portfolio, ratings, and past client feedback. Start with a small test project or milestone-based payment structure. Maintain clear communication throughout the project, set specific milestones, and request regular progress updates to ensure quality standards are met."
    },
    {
        id: 4,
        question: "How do I find freelance engineering projects?",
        answer: "Create a comprehensive profile showcasing your skills, experience, and portfolio. Browse available projects that match your expertise, submit compelling proposals, and maintain a strong rating by delivering quality work on time. Engage actively with the community and keep your profile updated."
    },
    {
        id: 5,
        question: "How do I manage client expectations?",
        answer: "Set clear expectations from the start by discussing project scope, deliverables, timelines, and communication frequency. Document all agreements, provide regular updates, be transparent about any challenges, and always deliver on your commitments. Clear communication is key to managing expectations effectively."
    },
    {
        id: 6,
        question: "What should I do if a client requests additional work?",
        answer: "Assess whether the request falls within the original project scope. If it's additional work, communicate this professionally to the client and provide a revised timeline and cost estimate. Always document scope changes and get agreement before proceeding with extra work."
    },
    {
        id: 7,
        question: "How are payments typically handled?",
        answer: "Payments are typically handled through our secure platform using milestone-based or project completion methods. Clients fund the project upfront, and payments are released upon milestone completion or project approval. This ensures both parties are protected throughout the engagement."
    }
]

export default function FAQ() {
    const [openId, setOpenId] = useState<number | null>(2)

    const toggleFAQ = (id: number) => {
        setOpenId(openId === id ? null : id)
    }

    return (
        <section className="relative py-16 px-6">
            <div className="mx-auto max-w-4xl">
                
                {/* Badge */}
                <div className="flex justify-center mb-8">
                    <span className="inline-block rounded-full bg-blue-500/10 border border-blue-400/20 px-4 py-2 text-sm text-blue-400">
                        FAQs
                    </span>
                </div>

                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-5xl font-semibold text-white">
                        What can we <span className="text-blue-400">help</span> you find?
                    </h2>
                    <p className="mt-4 text-white/70 text-base">
                        Tips and Tools for Effective Project Management with
                        <br />
                        Freelancers and Clients.
                    </p>
                </div>

                {/* FAQ Items */}
                <div className="space-y-4">
                    {faqs.map((faq) => (
                        <div
                            key={faq.id}
                            className="relative group"
                        >
                            {/* Subtle Glow on Open */}
                            {openId === faq.id && (
                                <div className="absolute -inset-2 rounded-xl bg-blue-500/10 blur-xl transition-all duration-500" />
                            )}

                            {/* FAQ Card */}
                            <div
                                className={`relative rounded-xl border bg-white/5 backdrop-blur-sm transition-all duration-300 ${
                                    openId === faq.id
                                        ? 'border-blue-400/50 bg-white/10'
                                        : 'border-white/10 hover:border-white/20'
                                }`}
                            >
                                {/* Question Button */}
                                <button
                                    onClick={() => toggleFAQ(faq.id)}
                                    className="w-full flex items-center justify-between px-6 py-5 text-left"
                                >
                                    <span className="text-white font-medium text-base pr-8">
                                        {faq.question}
                                    </span>
                                    <ChevronDown
                                        className={`w-5 h-5 text-white/60 flex-shrink-0 transition-transform duration-300 ${
                                            openId === faq.id ? 'rotate-180 text-blue-400' : ''
                                        }`}
                                    />
                                </button>

                                {/* Answer */}
                                <div
                                    className={`overflow-hidden transition-all duration-300 ${
                                        openId === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                                >
                                    <div className="px-6 pb-5 text-white/70 text-sm leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}