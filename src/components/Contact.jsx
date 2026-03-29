import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

function Contact() {
  return (
    <div>

      <h2>Contact</h2>

      <div className="contact-icons">

         <a href="mailto:mukulsharma2512@gmail.com">
          <FaEnvelope />mukulsharma2512@gmail.com
        </a>

        <a href="tel:7351285230">
          <FaPhone /> 7351285230
        </a>


        <a 
          href="https://github.com/mukul25sharma" 
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>

        <a 
          href="https://www.linkedin.com/in/mukul-sharma-794920254" 
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>

       
      </div>

    </div>
  );
}

export default Contact;
