import React from 'react';
import { Link } from 'react-router-dom'; // Optional: if you need internal navigation within the contact page

function Contact() {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>We'd love to hear from you!</p>

      <div className="contact-info">
        <h3>Our Information</h3>
        <p>Email: info@example.com</p>
        <p>Phone: +1 (123) 456-7890</p>
        <p>Address: 123 Main Street, Anytown USA</p>
      </div>

      <div className="contact-form">
        <h3>Send us a message</h3>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message"></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>

      {/* Example of internal navigation using Link */}
    </div>
  );
}

export default Contact;