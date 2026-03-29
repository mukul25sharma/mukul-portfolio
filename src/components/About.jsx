import Resume from "../assets/resume/autoCV.pdf";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiMongodb, SiExpress, SiJavascript } from "react-icons/si";


function About() { 
  return (
    <div className="about-container">

      <h2>About Me</h2>

      <p className="about-text">
        I am a passionate <b>MERN Stack Developer</b> with a strong interest in
        building modern, responsive, and user-friendly web applications.
        I enjoy solving real-world problems and continuously improving my skills.
        I have experience working with <b>React, Node.js, MongoDB, and Express</b>,
        and I love creating clean and scalable solutions.
        I am eager to contribute my skills and collaborate on exciting projects
      </p>

      {/* Skills Highlight */}

      <div className="skills-tags">
        <span><FaReact className="logo" title="React" />React</span>
        <span><FaNodeJs className="logo" title="Node.js" />Node.js</span>
        <span><SiMongodb className="logo" title="MongoDB" />MongoDB</span>
        <span><SiJavascript className="logo" title="JavaScript" />JavaScript</span>
        <span><FaHtml5 className="logo" title="HTML" />HTML</span>
        <span><FaCss3Alt className="logo" title="CSS" />CSS</span>
      </div>

      {/* Resume Buttons */}

      <div className="resume-btn">

        <a href={Resume} target="_blank" className="btn view-btn">
          View Resume
        </a>
        <br />  

        <a href={Resume} download className="btn download-btn">
          Download Resume
        </a>

      </div>

    </div>
  );
}

export default About;

