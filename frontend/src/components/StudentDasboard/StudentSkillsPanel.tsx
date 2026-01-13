import { useState } from "react"

export default function StudentDashboardSkillsPanel() {
    const [skills, setSkills] = useState(["React", "JavaScript", "Node.js", "MongoDB", "TypeScript"])
    const [newSkill, setNewSkill] = useState("")

    const addSkill = () => {
        if (newSkill.trim() && !skills.includes(newSkill.trim())) {
            setSkills([...skills, newSkill.trim()])
            setNewSkill("")
        }
    }

    const removeSkill = (skillToRemove: string) => {
        setSkills(skills.filter(skill => skill !== skillToRemove))
    }

    return (
        <div className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">Your Skills</h3>
                <button className="text-blue-400 hover:text-blue-300 transition">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                </button>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
                {skills.map((skill, index) => (
                    <span
                        key={index}
                        className="group px-3 py-1.5 bg-blue-500/10 text-blue-400 text-sm rounded-full border border-blue-500/20 flex items-center gap-2"
                    >
                        {skill}
                        <button
                            onClick={() => removeSkill(skill)}
                            className="opacity-0 group-hover:opacity-100 transition"
                        >
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </span>
                ))}
            </div>

            <div className="flex gap-2">
                <input
                    type="text"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && addSkill()}
                    placeholder="Add new skill..."
                    className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
                <button
                    onClick={addSkill}
                    className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition"
                >
                    Add
                </button>
            </div>
        </div>
    )
}