import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="Contact">
      <p>Email: rosegabriely14@gmail.com</p>
      <p>Phone Number: 857-707-0062</p>
      <p>
        Linkedin:{" "}
        <a
          href="https://www.linkedin.com/in/rosegabriely/"
          target="_blank"
          rel="noreferrer"
        >
          www.linkedin.com/in/rosegabriely/
        </a>
      </p>
      <p>
        Github:{" "}
        <a
          href="https://github.com/RoseGabriely"
          target="_blank"
          rel="noreferrer"
        >
          https://github.com/RoseGabriely
        </a>
      </p>
    </div>
  );
}

export default Contact;
