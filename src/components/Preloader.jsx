import React, { useEffect } from "react";
import "../assets/css/main.css"; // Global CSS import (if applicable)
import "../assets/css/vendors.css"; // Global CSS import (if applicable)
import Logopic from "../assets/img/logo/logo2.png";

function Preloader() {
  useEffect(() => {
    const texts = [
      "Welcome to Event Sphere.",
      // "From local gatherings to grand expos,",
      // "discover events that inspire and connect you,",
      // "anytime, anywhere ",
    ];
    // From local gatherings to grand expos, discover events that inspire and connect you, anytime, anywhere.
    const typedText = document.getElementById("typed-text");
    let index = 0;
    let charIndex = 0;
    let isDeleting = false;

    const typeEffect = () => {
      if (!typedText) return;

      const currentText = texts[index];

      if (isDeleting) {
        // Remove characters
        typedText.innerHTML = currentText.substring(0, charIndex);
        charIndex--;
        if (charIndex < 0) {
          isDeleting = false;
          index = (index + 1) % texts.length; // Move to the next line of text
        }
      } else {
        // Add characters
        typedText.innerHTML = currentText.substring(0, charIndex);
        charIndex++;
        if (charIndex > currentText.length) {
          isDeleting = true;
        }
      }

      // Adjust typing and deleting speed
      const typingSpeed = isDeleting ? 100 : 80;
      setTimeout(typeEffect, typingSpeed);
    };

    typeEffect();
  }, []);

  return (
    <div className="preloader js-preloader" role="status" aria-live="polite">
      <div className="preloader__wrap">
        <div className="preloader__icon">
          <img src={Logopic} alt="Logo" />
        </div>
      </div>
      <div className="preloader__title">
        <span id="typed-text" className="typed-text"></span>
        <span className="cursor">|</span>
      </div>
    </div>
  );
}

export default Preloader;
