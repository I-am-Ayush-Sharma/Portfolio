import { RMSCard } from "../components/RMS-Card";
import { ChatbotCard } from "../components/ChatBot-Card"


export function Projects() {
    return (
        <section id="projects" className="hero-container w-screen min-h-screen bg-[#050710] px-4 lg:px-18 py-10 text-white overflow-x-hidden pb-8 flex flex-col items-center pt-20 scroll-mt-10">
            {/* Top Label */}
            <div className="flex items-center gap-4 mb-6">
                <div className="w-16 md:w-24 h-[1px] bg-gradient-to-r from-transparent to-[#EAB354] relative">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#EAB354] rounded-full shadow-[0_0_8px_#EAB354]"></div>
                </div>
                <span className="text-[#EAB354] tracking-[0.2em] font-medium text-sm md:text-base uppercase">Selected Work</span>
                <div className="w-16 md:w-24 h-[1px] bg-gradient-to-l from-transparent to-[#EAB354] relative">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#EAB354] rounded-full shadow-[0_0_8px_#EAB354]"></div>
                </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center tracking-tight">
                <span className="text-[#EAB354]">Projects</span> I've built
            </h1>

            {/* Subtitle */}
            <p className="text-gray-300 text-lg md:text-xl text-center max-w-2xl leading-relaxed mb-10">
                A collection of projects that reflect my learning journey, problem-solving mindset and love for building things.
            </p>

            {/* Bottom Icon */}
            <div className="flex items-center gap-4">
                <div className="w-12 md:w-16 h-[2px] rounded-full bg-gradient-to-r from-transparent via-[#EAB354]/50 to-[#EAB354]"></div>
                <span className="text-[#EAB354] text-xl font-bold tracking-widest">{"</>"}</span>
                <div className="w-12 md:w-16 h-[2px] rounded-full bg-gradient-to-l from-transparent via-[#EAB354]/50 to-[#EAB354]"></div>
            </div>

            <div className="w-full max-w-7xl flex flex-col gap-12 mt-16 px-4 md:px-8">
                {/* Card 1: Restaurant Management System */}
                <RMSCard />

                {/* Card 2: AI Chatbot */}
                <ChatbotCard />

            </div>
        </section>
    )
}