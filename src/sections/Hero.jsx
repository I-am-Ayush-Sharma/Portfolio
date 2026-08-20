import "./Hero.css";
import {Header} from "../components/Header";

export function Hero() {
    return (
        <div className="hero-container w-screen h-screen bg-[radial-gradient(circle_at_75%_50%,rgba(4,3,6,0.68),rgb(52,52,52)_60%)] pl-4 pr-4 md:pl-15 md:pr-15 text-white">
            <Header />
        </div>
    )
}