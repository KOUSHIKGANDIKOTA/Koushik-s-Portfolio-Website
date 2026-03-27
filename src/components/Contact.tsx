import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const LINKEDIN_URL =
  "https://www.linkedin.com/in/koushik-gandikota-117211283";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:koushikgandikota@gmail.com" data-cursor="disable">
                koushikgandikota@gmail.com
              </a>
            </p>
            <h4>Education</h4>
            <p>M.Sc Artificial Intelligence</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/KOUSHIKGANDIKOTA"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              <span className="contact-social-icon" aria-hidden>
                <FaGithub />
              </span>
              <span className="contact-social-label">Github</span>
              <MdArrowOutward />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              <span className="contact-social-icon" aria-hidden>
                <FaLinkedinIn />
              </span>
              <span className="contact-social-label">LinkedIn</span>
              <MdArrowOutward />
            </a>
            <a
              href="#"
              data-cursor="disable"
              className="contact-social contact-social--disabled"
              onClick={(e) => e.preventDefault()}
              aria-label="Twitter (link coming soon)"
            >
              <span className="contact-social-icon" aria-hidden>
                <FaXTwitter />
              </span>
              <span className="contact-social-label">Twitter</span>
              <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/i3eing_koushikkk___"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              <span className="contact-social-icon" aria-hidden>
                <FaInstagram />
              </span>
              <span className="contact-social-label">Instagram</span>
              <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Sai Koushik</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
