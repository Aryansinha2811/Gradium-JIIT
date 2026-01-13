import Eve from '../../assets/Avatars/Eve.jpg'
import Pikachu from '../../assets/Avatars/Pikachu.jpg'
import Gengar from '../../assets/Avatars/Gengar.jpg'
import Mew from '../../assets/Avatars/Mew.jpg'
import JigglyPuff from '../../assets/Avatars/JigglyPuff.jpg'


export default function Hero() {
    return (
        <section className="hidden md:block relative top-8">
            <div className="mx-auto max-w-7xl px-6 pt-32 pb-28">

                {/* Centered Content */}
                <div className="flex flex-col items-center text-center">

                    {/* Heading */}
                    <h1 className="text-6xl font-semibold leading-tight text-white max-w-4xl">
                        Immediately connect with <br />
                        the perfect freelance{" "}
                        <span className="text-blue-400">
                            engineer
                        </span>
                    </h1>

                    {/* Subtext */}
                    <p className="mt-6 text-base text-white/70 max-w-2xl">
                        Connect with the best freelance engineers and streamline your projects
                        <br />
                        with our integrated management tools.
                    </p>

                    {/* CTA Buttons */}
                    <div className="mt-10 flex items-center gap-4">
                        <button className="rounded-full border border-blue-500 bg-transparent px-8 py-3 text-sm font-medium text-blue-400 hover:bg-blue-500/10 transition-all duration-300">
                            Find Projects
                        </button>

                        <button className="rounded-full bg-blue-500 px-8 py-3 text-sm font-medium text-white hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-blue-500/30">
                            Hire Engineers
                        </button>
                    </div>

                    {/* Profile Cards Grid */}
                    <div className="mt-18 relative w-full max-w-6xl">
                        {/* Connection Lines - Decorative */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
                            {/* Line from card 1 to card 2 */}
                            <path
                                d="M 200 180 Q 280 220 350 200"
                                stroke="rgba(59, 130, 246, 0.2)"
                                strokeWidth="2"
                                fill="none"
                                strokeDasharray="5,5"
                            />
                            {/* Line from card 2 to center */}
                            <path
                                d="M 400 220 Q 480 280 550 260"
                                stroke="rgba(59, 130, 246, 0.2)"
                                strokeWidth="2"
                                fill="none"
                                strokeDasharray="5,5"
                            />
                            {/* Line from center to card 4 */}
                            <path
                                d="M 650 280 Q 720 240 780 220"
                                stroke="rgba(59, 130, 246, 0.2)"
                                strokeWidth="2"
                                fill="none"
                                strokeDasharray="5,5"
                            />
                            {/* Line from card 4 to card 5 */}
                            <path
                                d="M 830 200 Q 900 180 960 180"
                                stroke="rgba(59, 130, 246, 0.2)"
                                strokeWidth="2"
                                fill="none"
                                strokeDasharray="5,5"
                            />
                        </svg>

                        {/* Cards Container */}
                        <div className="relative grid grid-cols-5 gap-6 items-end" style={{ zIndex: 1 }}>
                            {/* Card 1 - Top Left */}
                            <div className="transform translate-y-0">
                                <ProfileCard
                                    name="Pikachu Yadav"
                                    role="Electrical Engineer"
                                    bgColor="bg-gradient-to-br from-blue-300 to-blue-400"
                                    image={Pikachu}
                                />
                            </div>

                            {/* Card 2 - Mid Left */}
                            <div className="transform translate-y-8">
                                <ProfileCard
                                    name="Gengar Chaudhary"
                                    role="Tantrik"
                                    bgColor="bg-gradient-to-br from-yellow-200 to-yellow-300"
                                    image= {Gengar}
                                />
                            </div>

                            {/* Card 3 - Center (Larger) */}
                            <div className="transform translate-y-4 scale-110">
                                <ProfileCard
                                    name="Evee Kumari"
                                    role="Cutie Pie"
                                    bgColor="bg-gradient-to-br from-teal-200 to-teal-300"
                                    image={Eve}
                                    isLarge
                                />
                            </div>

                            {/* Card 4 - Mid Right */}
                            <div className="transform translate-y-8">
                                <ProfileCard
                                    name="Mew Jaat"
                                    role="Mogger"
                                    bgColor="bg-gradient-to-br from-pink-200 to-pink-300"
                                    image={Mew}
                                />
                            </div>

                            {/* Card 5 - Top Right */}
                            <div className="transform translate-y-0">
                                <ProfileCard
                                    name="JigglyPuff Singh"
                                    role="Singer"
                                    bgColor="bg-gradient-to-br from-purple-200 to-purple-300"
                                    image={JigglyPuff}
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

/* ---------------------------------- */
/* Profile Card Component              */
/* ---------------------------------- */

interface ProfileCardProps {
    name: string
    role: string
    bgColor: string
    image: string
    isLarge?: boolean
}

function ProfileCard({ name, role, bgColor, image, isLarge = false }: ProfileCardProps) {
    return (
        <div className="group cursor-pointer">
            {/* Card Container */}
            <div
                className={`rounded-2xl ${bgColor} p-4 transition-all duration-300 hover:scale-103 hover:shadow-2xl ${
                    isLarge ? 'pb-6' : 'pb-4'
                }`}
            >
                {/* Image */}
                <div className="rounded-xl overflow-hidden bg-white/20 backdrop-blur-sm">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-auto object-cover"
                    />
                </div>
            </div>

            {/* Name and Role - Outside card */}
            <div className="mt-4 text-center">
                <h3 className="text-white font-bold text-lg">{name}</h3>
                <p className="text-white/80 text-xs mt-1">{role}</p>
            </div>
        </div>
    )
}