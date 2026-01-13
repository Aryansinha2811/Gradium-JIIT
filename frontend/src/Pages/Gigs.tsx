import { useState } from "react"
import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"
import Devlopment from "../assets/Banner/Devlopment.jpg"
import Design from "../assets/Banner/Design.jpg"
import Marketing from "../assets/Banner/Marketing.jpg"
import Bug from "../assets/Banner/Bug.jpg"

type Gig = {
    title: string
    description: string
    price: number
    category: string
    clientName: string
    image: string
    rating: number
    reviews: number
}

const gigs: Gig[] = [
    {
        title: "Build a modern landing page",
        description: "Looking for a student developer to build a responsive landing page using React and Tailwind CSS.",
        price: 3000,
        category: "Frontend",
        clientName: "Startup Founder",
        image: Devlopment,
        rating: 4.8,
        reviews: 24
    },
    {
        title: "Design a logo for EdTech app",
        description: "Need a clean, modern logo for an upcoming EdTech platform.",
        price: 1500,
        category: "Design",
        clientName: "Product Manager",
        image: Design,
        rating: 4.9,
        reviews: 15
    },
    {
        title: "Fix bugs in React project",
        description: "Minor UI and state bugs need fixing in an existing React application.",
        price: 2000,
        category: "Frontend",
        clientName: "Digital Agency",
        image: Bug,
        rating: 4.7,
        reviews: 18
    },
    {
        title: "Create social media posts",
        description: "Need creative Instagram and LinkedIn post designs for a startup brand.",
        price: 1200,
        category: "Social Media",
        clientName: "Growth Team",
        image: Marketing,
        rating: 5.0,
        reviews: 32
    },
    {
        title: "Build REST API with Node.js",
        description: "Need a backend developer to create a REST API for our mobile app.",
        price: 4500,
        category: "Backend",
        clientName: "Tech Startup",
        image: Devlopment,
        rating: 4.6,
        reviews: 12
    },
    {
        title: "Database design and optimization",
        description: "Looking for someone to design and optimize our PostgreSQL database.",
        price: 3500,
        category: "Database",
        clientName: "SaaS Company",
        image: Bug,
        rating: 4.8,
        reviews: 20
    },
]

const categories = ["All", "Frontend", "Backend", "Database", "Social Media", "Design"]

export default function Gigs() {
    const [selectedCategory, setSelectedCategory] = useState("All")
    const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000])
    const [sortBy, setSortBy] = useState("newest")

    // Filter gigs
    const filteredGigs = gigs
        .filter(gig => selectedCategory === "All" || gig.category === selectedCategory)
        .filter(gig => gig.price >= priceRange[0] && gig.price <= priceRange[1])
        .sort((a, b) => {
            if (sortBy === "price-low") return a.price - b.price
            if (sortBy === "price-high") return b.price - a.price
            if (sortBy === "rating") return b.rating - a.rating
            return 0 // newest (default order)
        })

    return (
        <div>
            <Navbar />
            
            <div className="min-h-screen px-6 sm:px-10 lg:px-16 py-12">
                {/* Header */}
                <div className="mb-10 mt-7">
                    <h1 className="text-5xl flex justify-center font-bold text-white mb-2">Explore Gigs</h1>
                    <p className="text-white/60 flex justify-center mb-12">Find the perfect opportunity for your skills</p>
                </div>

                <div className="flex gap-8">
                    {/* Left Sidebar - Filters */}
                    <aside className="hidden lg:block w-64 flex-shrink-0 border-r border-white/10 pr-8">
                        <div className="sticky top-24 space-y-6">
                            
                            {/* Categories */}
                            <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-5">
                                <h3 className="text-lg font-semibold text-white mb-4">Categories</h3>
                                <div className="space-y-2">
                                    {categories.map((category) => (
                                        <button
                                            key={category}
                                            onClick={() => setSelectedCategory(category)}
                                            className={`w-full text-left px-4 py-2.5 rounded-lg transition ${
                                                selectedCategory === category
                                                    ? "bg-blue-500 text-white"
                                                    : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
                                            }`}
                                        >
                                            {category}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Price Range */}
                            <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-5">
                                <h3 className="text-lg font-semibold text-white mb-4">Price Range</h3>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-white/70">Min: ₹{priceRange[0]}</span>
                                        <span className="text-white/70">Max: ₹{priceRange[1]}</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="0"
                                        max="10000"
                                        step="500"
                                        value={priceRange[1]}
                                        onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                                        className="w-full accent-blue-500"
                                    />
                                    <button
                                        onClick={() => setPriceRange([0, 10000])}
                                        className="text-xs text-blue-400 hover:text-blue-300 transition"
                                    >
                                        Reset
                                    </button>
                                </div>
                            </div>

                            {/* Sort By */}
                            <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-5">
                                <h3 className="text-lg font-semibold text-white mb-4">Sort By</h3>
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="w-[180px] rounded-lg border border-white/10 bg-black/40 px-2 py-2.5 text-sm text-white outline-none transition focus:border-blue-500"
                                >
                                    <option value="newest">Newest First</option>
                                    <option value="price-low">Price: Low to High</option>
                                    <option value="price-high">Price: High to Low</option>
                                    <option value="rating">Highest Rated</option>
                                </select>
                            </div>
                        </div>
                    </aside>

                    {/* Right Side - Gig List */}
                    <main className="flex-1">
                        {/* Results count */}
                        <div className="mb-6 flex items-center justify-between">
                            <p className="text-white/60">
                                {filteredGigs.length} {filteredGigs.length === 1 ? "gig" : "gigs"} available
                            </p>
                        </div>

                        {/* Gigs List */}
                        <div className="space-y-4">
                            {filteredGigs.length === 0 ? (
                                <div className="text-center py-16">
                                    <p className="text-white/40 text-lg">No gigs found matching your filters</p>
                                </div>
                            ) : (
                                filteredGigs.map((gig, index) => (
                                    <div
                                        key={index}
                                        className="group rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-5 hover:border-blue-500/50 hover:bg-white/10 transition-all duration-300"
                                    >
                                        <div className="flex gap-5">
                                            {/* Image */}
                                            <div className="relative w-48 h-32 flex-shrink-0 rounded-lg overflow-hidden">
                                                <img
                                                    src={gig.image}
                                                    alt={gig.title}
                                                    className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                                                />
                                                <div className="absolute inset-0 bg-black/20" />
                                            </div>

                                            {/* Content */}
                                            <div className="flex-1 flex flex-col justify-between">
                                                <div>
                                                    {/* Category Badge */}
                                                    <span className="inline-block mb-2 rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400">
                                                        {gig.category}
                                                    </span>

                                                    {/* Title */}
                                                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition">
                                                        {gig.title}
                                                    </h3>

                                                    {/* Description */}
                                                    <p className="text-sm text-white/70 line-clamp-2 mb-3">
                                                        {gig.description}
                                                    </p>

                                                    {/* Client & Rating */}
                                                    <div className="flex items-center gap-4 text-sm">
                                                        <div className="flex items-center gap-1">
                                                            <span className="text-white/50">By</span>
                                                            <span className="text-white font-medium">{gig.clientName}</span>
                                                        </div>
                                                        <div className="flex items-center gap-1">
                                                            <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                                                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                                            </svg>
                                                            <span className="text-white font-medium">{gig.rating}</span>
                                                            <span className="text-white/50">({gig.reviews})</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Price & CTA */}
                                            <div className="flex flex-col items-end justify-between">
                                                <div className="text-right">
                                                    <p className="text-xs text-white/50 mb-1">Starting at</p>
                                                    <p className="text-2xl font-bold text-blue-400">₹{gig.price.toLocaleString()}</p>
                                                </div>
                                                <button className="px-6 py-2.5 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 transition">
                                                    View Details
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </main>
                </div>
            </div>

            <Footer />
        </div>
    )
}