import { useState } from "react";
import "./App.css";
import Mukul from "./assets/images/Mukul.jpeg";

import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {

  const [section, setSection] = useState("about");

  return (
    <div className="container">

      <div className="left">

        <img src={Mukul} alt="profile" className="profile" />

        <h1>Mukul Sharma</h1>
        <p>Full Stack Developer</p>

        <nav>
          <button onClick={() => setSection("about")}>About</button>
          <button onClick={() => setSection("skills")}>Skills</button>
          <button onClick={() => setSection("projects")}>Projects</button>
          <button onClick={() => setSection("contact me")}>Contact</button>
        </nav>

      </div>

      <div className="right">

        {section === "about" && <About />}
        {section === "skills" && <Skills />}
        {section === "projects" && <Projects />}
        {section === "contact me" && <Contact />}

      </div>

    </div>
  );
}

export default App;
