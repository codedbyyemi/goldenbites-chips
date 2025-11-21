import React from "react";
import "../Styles/Menu.css";

function Menu() {
  const chipsMenu = [
    { name: "Classic Salted", price: "₦500" },
    { name: "Spicy Pepper", price: "₦600" },
    { name: "Honey Glazed", price: "₦700" },
    { name: "Cheese Flavored", price: "₦650" },
  ];

  const whatsappNumber = "2348012345678"; // Replace with your number
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello! I want to place an order for Golden Bites Chips.`;

  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <div className="menu-items">
        {chipsMenu.map((chip, index) => (
          <div key={index} className="chip-card">
            <h3>{chip.name}</h3>
            <p>{chip.price}</p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              Order Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
