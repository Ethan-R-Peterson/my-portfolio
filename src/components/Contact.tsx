import React from 'react';
import '../assets/styles/Contact.scss';

function Contact() {
  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Get In Touch</h1>
          <p>Have a project in mind or want to collaborate? I'd love to hear from you!</p>
          <a href="mailto:ethpet@umich.edu" className="contact-email-button">
            Send me an email
          </a>
          <p className="contact-email">ethpet@umich.edu</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;

// export {};