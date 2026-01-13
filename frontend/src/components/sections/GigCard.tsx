import Devlopment from "../../assets/Banner/Devlopment.jpg"
import Design from "../../assets/Banner/Design.jpg"
import Marketing from "../../assets/Banner/Marketing.jpg"
import Bug from "../../assets/Banner/Bug.jpg"

type Gig = {
    title: string
    description: string
    price: string
    category: string
    clientName: string
    image: string
}

/* Dummy Data */
const gigs: Gig[] = [
    {
        title: "Build a modern landing page",
        description:
            "Looking for a student developer to build a responsive landing page using React and Tailwind CSS.",
        price: "₹3,000",
        category: "Web Development",
        clientName: "Startup Founder",
        image: Devlopment,
    },
    {
        title: "Design a logo for EdTech app",
        description:
            "Need a clean, modern logo for an upcoming EdTech platform.",
        price: "₹1,500",
        category: "Design",
        clientName: "Product Manager",
        image: Design,
    },
    {
        title: "Fix bugs in React project",
        description:
            "Minor UI and state bugs need fixing in an existing React application.",
        price: "₹2,000",
        category: "Frontend",
        clientName: "Digital Agency",
        image: Bug,
    },
    {
        title: "Create social media posts",
        description:
            "Need creative Instagram and LinkedIn post designs for a startup brand.",
        price: "₹1,200",
        category: "Marketing",
        clientName: "Growth Team",
        image: Marketing,
    },
]

export default function GigCardGrid() {
    return (
        <div className="mt-24 px-6 sm:px-10 lg:px-16">
            <h1 className="text-5xl font-bold flex justify-center text-white mb-15">Explore Various Gigs</h1>
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
                {gigs.map((gig, index) => (
                    <div
                        key={index}
                        className="
                          group relative overflow-hidden rounded-2xl
                          border border-white/10 bg-white/5 backdrop-blur-md
                          transition-all duration-300 ease-out
                          hover:-translate-y-2 hover:shadow-2xl
                          hover:border-blue-500/50 hover:bg-white/10
                        "
                    >
                        {/* Image */}
                        <div className="relative h-50 w-full overflow-hidden">
                            <img
                                src={gig.image}
                                alt={gig.title}
                                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                            />
                            {/* Dark overlay */}
                            <div className="absolute inset-0 bg-black/20" />
                        </div>

                        {/* Content */}
                        <div className="relative z-10 flex flex-col gap-4 p-6">
                            {/* Category */}
                            <span className="w-fit rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400">
                                {gig.category}
                            </span>

                            {/* Title */}
                            <h3 className="text-2xl font-semibold text-white">
                                {gig.title}
                            </h3>

                            {/* Description */}
                            <p className="text-sm text-white/70 line-clamp-3">
                                {gig.description}
                            </p>

                            {/* Footer */}
                            <div className="mt-3 flex items-center justify-between">
                                <div>
                                    <p className="text-xs text-white/50">Client</p>
                                    <p className="text-sm text-white">
                                        {gig.clientName}
                                    </p>
                                </div>

                                <div className="text-right">
                                    <p className="text-xs text-white/50">Budget</p>
                                    <p className="text-base font-semibold text-blue-400">
                                        {gig.price}
                                    </p>
                                </div>
                            </div>

                            {/* CTA */}
                            <button className="mt-4 w-full rounded-lg bg-blue-500/90 py-2.5 text-sm font-medium text-white transition hover:bg-blue-500 hover:cursor-pointer">
                                View GiG
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
