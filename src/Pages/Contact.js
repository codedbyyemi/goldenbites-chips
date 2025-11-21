import React from "react";
import "../Styles/Contact.css";

function Contact() {
  const whatsappNumber = "2349073634450"; // Replace with your number
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello! I want to place an order for Golden Bites Chips.`;

  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <p>
        For orders or inquiries, click below to message us on WhatsApp:
      </p>
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
        Message on WhatsApp
      </a>
    </div>
  );
}

export default Contact;
