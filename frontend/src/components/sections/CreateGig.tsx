import { useState } from "react"

const gigTypes = [
    "Frontend",
    "Backend",
    "Database",
    "Social Media",
]

export default function CreateGig() {
    const [gigType, setGigType] = useState("")
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [budget, setBudget] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        const gigData = {
            gigType,
            title,
            description,
            budget,
        }

        console.log("Gig Created:", gigData)
        // Later → send to backend
    }

    return (
        <section className="relative z-10 mx-auto mt-24 max-w-3xl px-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8">
                {/* Header */}
                <h2 className="mb-2 text-3xl font-bold text-white">
                    Create a Gig
                </h2>
                <p className="mb-8 text-sm text-white/70">
                    Post a Gig and find skilled students instantly.
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">

                    {/* Gig Type */}
                    <div>
                        <label className="mb-2 block text-sm font-medium text-white/80">
                            Gig Type
                        </label>
                        <select
                            value={gigType}
                            onChange={(e) => setGigType(e.target.value)}
                            required
                            className="w-full rounded-lg border border-white/30 bg-black/90 px-4 py-3 text-sm text-white outline-none transition focus:border-blue-500"
                        >
                            <option value="" disabled>
                                Select Gig type
                            </option>
                            {gigTypes.map((type) => (
                                <option key={type} value={type} className="bg-black">
                                    {type}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Title */}
                    <div>
                        <label className="mb-2 block text-sm font-medium text-white/80">
                            Gig Title
                        </label>
                        <input
                            type="text"
                            placeholder="e.g. Build a responsive website"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                            className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition focus:border-blue-500"
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="mb-2 block text-sm font-medium text-white/80">
                            Description
                        </label>
                        <textarea
                            placeholder="Describe what you need from the student..."
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                            rows={4}
                            className="w-full resize-none rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition focus:border-blue-500"
                        />
                    </div>

                    {/* Budget */}
                    <div>
                        <label className="mb-2 block text-sm font-medium text-white/80">
                            Budget (₹)
                        </label>
                        <input
                            type="number"
                            placeholder="e.g. 3000"
                            value={budget}
                            onChange={(e) => setBudget(e.target.value)}
                            required
                            className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition focus:border-blue-500"
                        />
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="mt-4 w-full rounded-lg bg-blue-500 py-3 text-sm font-medium text-white transition hover:bg-blue-600"
                    >
                        Publish Gig
                    </button>
                </form>
            </div>
        </section>
    )
}
