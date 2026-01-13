export default function Footer() {
    return (
        <footer className="mt-32 bg-gradient-to-b from-[#1a284b] to-[#0d1429]">
            <div className="mx-auto max-w-7xl px-6 pt-20">

                {/* Top Grid */}
                <div className="grid grid-cols-4 gap-16 pb-16">

                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 text-white">
                            <span className="text-xl font-semibold">
                                Grad<span className="text-blue-400">ium</span>
                            </span>
                        </div>

                        <p className="mt-4 text-sm leading-relaxed text-white/60 max-w-xs">
                            Empowering college students through real-world freelancing
                            opportunities and meaningful projects.
                        </p>
                    </div>

                    {/* For Students */}
                    <div>
                        <h4 className="text-sm font-semibold text-white mb-5">
                            For Students
                        </h4>
                        <ul className="space-y-3 text-sm text-white/60">
                            <li className="hover:text-white transition cursor-pointer">
                                How it Works
                            </li>
                            <li className="hover:text-white transition cursor-pointer">
                                Find Projects
                            </li>
                            <li className="hover:text-white transition cursor-pointer">
                                Success Stories
                            </li>
                            <li className="hover:text-white transition cursor-pointer">
                                Resources
                            </li>
                        </ul>
                    </div>

                    {/* For Clients */}
                    <div>
                        <h4 className="text-sm font-semibold text-white mb-5">
                            For Clients
                        </h4>
                        <ul className="space-y-3 text-sm text-white/60">
                            <li className="hover:text-white transition cursor-pointer">
                                Post a Project
                            </li>
                            <li className="hover:text-white transition cursor-pointer">
                                Browse Talent
                            </li>
                            <li className="hover:text-white transition cursor-pointer">
                                Pricing
                            </li>
                            <li className="hover:text-white transition cursor-pointer">
                                Enterprise
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-sm font-semibold text-white mb-5">
                            Company
                        </h4>
                        <ul className="space-y-3 text-sm text-white/60">
                            <li className="hover:text-white transition cursor-pointer">
                                About Us
                            </li>
                            <li className="hover:text-white transition cursor-pointer">
                                Careers
                            </li>
                            <li className="hover:text-white transition cursor-pointer">
                                Contact
                            </li>
                            <li className="hover:text-white transition cursor-pointer">
                                Blog
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 py-6 text-center">
                    <p className="text-sm text-white/50">
                        © {new Date().getFullYear()} Gradium. All rights reserved.
                    </p>
                </div>

            </div>
        </footer>
    )
}
