import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Projects } from "./sections/Projects"
import { Contact } from "./sections/Contact"
import { Footer } from "./sections/Footer"
import JetCursor from "./components/JetCursor";

function App() {
  return (
    <div className="grand-container overflow-x-clip">
       <JetCursor />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;