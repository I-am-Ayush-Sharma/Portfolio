import { useEffect, useRef } from "react";
import { RMSCard } from "../components/RMS-Card";
import { ChatbotCard } from "../components/ChatBot-Card"

export function Projects() {
    const startMarkerRef = useRef(null);
    const projectViewportRef = useRef(null);
    const projectTrackRef = useRef(null);
    const scrollSpacerRef = useRef(null);

    useEffect(() => {
        const marker = startMarkerRef.current;
        const viewport = projectViewportRef.current;
        const track = projectTrackRef.current;
        const spacer = scrollSpacerRef.current;

        if (!marker || !viewport || !track || !spacer) {
            return;
        }

        let animationFrame = 0;
        let pinStart = 0;
        let cardScrollThreshold = 0;
        let cardOffsets = [];
        let activeCardIndex = -1;
        let headerHeight = 0;
        let restoreTransitionFrame = 0;
        const header = document.querySelector("header");

        const measure = () => {
            window.cancelAnimationFrame(restoreTransitionFrame);
            track.style.transition = "none";
            track.style.transform = "translate3d(0, 0, 0)";
            const viewportLeft = viewport.getBoundingClientRect().left;
            const hasHorizontalLayout = window.matchMedia("(min-width: 1024px)").matches;
            const cards = Array.from(track.children);
            cardOffsets = hasHorizontalLayout
                ? cards.map((card) => card.getBoundingClientRect().left - viewportLeft)
                : [];
            cardScrollThreshold = hasHorizontalLayout ? window.innerHeight * 0.8 : 0;
            headerHeight = header?.getBoundingClientRect().height ?? 0;
            const stickyTop = headerHeight + 8;
            track.style.setProperty("--project-sticky-top", `${stickyTop}px`);
            spacer.style.height = `${cardScrollThreshold * cardOffsets.length}px`;
            pinStart = marker.getBoundingClientRect().top + window.scrollY - stickyTop;
            activeCardIndex = -1;
            updateTrack();
            restoreTransitionFrame = window.requestAnimationFrame(() => {
                track.style.removeProperty("transition");
            });
        };

        const updateTrack = () => {
            animationFrame = 0;
            if (cardOffsets.length === 0) {
                return;
            }

            const scrollProgress = Math.max(0, window.scrollY - pinStart);
            const nextCardIndex = Math.min(
                cardOffsets.length - 1,
                Math.floor(scrollProgress / cardScrollThreshold),
            );

            if (nextCardIndex !== activeCardIndex) {
                activeCardIndex = nextCardIndex;
                track.style.transform = `translate3d(-${cardOffsets[activeCardIndex]}px, 0, 0)`;
            }
        };

        const scheduleUpdate = () => {
            if (!animationFrame) {
                animationFrame = window.requestAnimationFrame(updateTrack);
            }
        };

        const resizeObserver = new ResizeObserver(measure);
        resizeObserver.observe(viewport);
        resizeObserver.observe(track);
        Array.from(track.children).forEach((card) => resizeObserver.observe(card));
        if (header) {
            resizeObserver.observe(header);
        }

        window.addEventListener("scroll", scheduleUpdate, { passive: true });
        window.addEventListener("resize", measure);
        measure();

        return () => {
            window.removeEventListener("scroll", scheduleUpdate);
            window.removeEventListener("resize", measure);
            resizeObserver.disconnect();
            window.cancelAnimationFrame(animationFrame);
            window.cancelAnimationFrame(restoreTransitionFrame);
        };
    }, []);

    return (
        <section id="projects" className="hero-container w-screen min-h-screen bg-[#050710] px-4 lg:px-18 py-10 text-white pb-8 flex flex-col items-center pt-20 scroll-mt-10">
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
                <div className="w-12 md:w-16 h-0.5 rounded-full bg-linear-to-r from-transparent via-[#EAB354]/50 to-[#EAB354]"></div>
                <span className="text-[#EAB354] text-xl font-bold tracking-widest">{"</>"}</span>
                <div className="w-12 md:w-16 h-0.5 rounded-full bg-linear-to-l from-transparent via-[#EAB354]/50 to-[#EAB354]"></div>
            </div>

            <div ref={startMarkerRef} className="w-full" aria-hidden="true" />
            <div className="relative w-full">
                <div
                    className="lg:sticky lg:z-10 w-full"
                    style={{ top: "var(--project-sticky-top, 6rem)" }}
                >
                    <div
                        ref={projectViewportRef}
                        className="mt-5 w-full overflow-hidden"
                    >
                        <div
                            ref={projectTrackRef}
                            className="project-track flex w-full flex-col gap-8 sm:gap-12 lg:flex-row lg:gap-8"
                        >
                            <div className="w-full shrink-0 lg:w-[90vw] lg:px-20 px-0 md:max-w-7xl">
                                <RMSCard />
                            </div>
                            <div className="w-full shrink-0 lg:w-[90vw] lg:px-20 px-0 md:max-w-7xl">
                                <ChatbotCard />
                            </div>
                        </div>
                    </div>
                </div>
                <div ref={scrollSpacerRef} aria-hidden="true" />
            </div>
        </section>
    )
}