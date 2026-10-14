
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import bgVideo from "../assets/Videos/bg-vdo.mp4";
import "./WelcomeScreen.css";

export default function WelcomeScreen({ onEnter }) {
  const [videoReady, setVideoReady] = useState(false);
  const [isEntering, setIsEntering] = useState(false);

  const handleEnter = () => {
    if (!videoReady || isEntering) return;

    setIsEntering(true);

    setTimeout(() => {
      onEnter();
    }, 800);
  };

  return (
    <AnimatePresence>
      {!isEntering && (
        <motion.section
          className="welcome-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <video
            className="welcome-video"
            src={bgVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onCanPlay={() => setVideoReady(true)}
          />

          <div className="welcome-overlay" />

          <div className="welcome-content">
            <p className="welcome-eyebrow">
              AYUSH SHARMA <span>·</span> PORTFOLIO
            </p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Where imagination
              <br />
              meets <span>code.</span>
            </motion.h1>

            <motion.p
              className="welcome-description"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              I turn ideas into interactive digital experiences
              through thoughtful design, creative development,
              and a little imagination.
            </motion.p>

            <motion.button
              className="welcome-cta"
              onClick={handleEnter}
              disabled={!videoReady || isEntering}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {isEntering ? "ENTERING..." : "ENTER MY WORLD"}
              <span aria-hidden="true">↗</span>
            </motion.button>
          </div>

          <div className="welcome-status" role="status">
            <span
              className={`status-dot ${videoReady ? "ready" : ""}`}
            />
            <span>
              {videoReady
                ? "DIGITAL EXPERIENCE READY"
                : "INITIALIZING DIGITAL EXPERIENCE..."}
            </span>
            <span className="status-indicator">
              {videoReady ? "✓" : "LOADING"}
            </span>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
