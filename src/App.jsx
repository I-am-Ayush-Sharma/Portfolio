import { useState } from "react";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Projects } from "./sections/Projects";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";
import JetCursor from "./components/JetCursor";
import WelcomeScreen from "./components/WelcomeScreen";

function App() {
  const [showWelcome, setShowWelcome] = useState(
    () => sessionStorage.getItem("portfolioEntered") !== "true",
  );

  return (
    <div className="grand-container overflow-x-clip">
      <div
        className={
          showWelcome
            ? "portfolio-content portfolio-hidden"
            : "portfolio-content"
        }
      >
        <JetCursor />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>

      {showWelcome && (
        <WelcomeScreen
          onEnter={() => {
            sessionStorage.setItem("portfolioEntered", "true");
            setShowWelcome(false);
          }}
        />
      )}
    </div>
  );
}

export default App;
