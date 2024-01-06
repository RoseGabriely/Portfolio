import React from "react";
import "./Contact.css";
import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="Resume"
    >
      <div className="embed">
        <p>
          <span style={{ fontWeight: "bold" }}>Resume:</span>
        </p>
        <iframe
          title="resume"
          src="https://docs.google.com/document/d/e/2PACX-1vQChpVAGeg0E_wu_jNniXfWC01hkUgBwDsWNupTd145JyH-5l1-uXpbWF5p37VGTML15vbouKe87BZR/pub?embedded=true"
        ></iframe>
      </div>
    </motion.div>
  );
}

export default Contact;
