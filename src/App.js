import React, { useState } from "react";
import "./index.css";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Menu", href: "#menu" },
    { name: "About", href: "#about" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const chipsMenu = [
    {
      name: "Classic Salted",
      price: "₦500",
      image:
        "https://images.unsplash.com/photo-1617196032774-1a15c3c1633c?auto=format&fit=crop&w=600",
    },
    {
      name: "Spicy Pepper",
      price: "₦600",
      image:
        "https://images.unsplash.com/photo-1614906203811-88505f30734a?auto=format&fit=crop&w=600",
    },
    {
      name: "Honey Glazed",
      price: "₦700",
      image:
        "https://images.unsplash.com/photo-1599785209707-fd09c63b7f61?auto=format&fit=crop&w=600",
    },
    {
      name: "Cheese Flavored",
      price: "₦650",
      image:
        "https://images.unsplash.com/photo-1627999831570-5c6fca0c9fd5?auto=format&fit=crop&w=600",
    },
  ];

  const testimonials = [
    {
      name: "Amaka",
      review:
        "These plantain chips are insanely good! Crispy, tasty, and fresh every time.",
      image:
        "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Chinedu",
      review:
        "Golden Bites Chips are my favorite snack. I can't stop eating them!",
      image:
        "https://randomuser.me/api/portraits/men/46.jpg",
    },
    {
      name: "Fatima",
      review:
        "I love the variety of flavors. The honey glazed chips are amazing!",
      image:
        "https://randomuser.me/api/portraits/women/68.jpg",
    },
  ];

  const whatsappNumber = "2349073634450";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello! I want to place an order for Golden Bites Chips.`;

  return (
    <div className="scroll-smooth font-sans bg-gray-50">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-yellow-600 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
          <div className="flex items-center">
            <img
              src="https://images.unsplash.com/photo-1623243616342-177ac6e8b1e8?auto=format&fit=crop&w=64&h=64&q=80"
              alt="Golden Bites Logo"
              className="h-12 w-12 rounded-full mr-3 border-2 border-white"
            />
            <span className="text-white font-extrabold text-xl tracking-wide">
              Golden Bites Chips
            </span>
          </div>

          <ul className="hidden md:flex space-x-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-white hover:text-yellow-200 font-semibold transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {menuOpen && (
          <ul className="md:hidden bg-yellow-600 px-6 pb-4 space-y-4">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="block text-white font-semibold hover:text-yellow-200"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-center px-6"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1599785209707-fd09c63b7f61?auto=format&fit=crop&w=1260&h=750&dpr=2')",
        }}
      >
        <div className="bg-black bg-opacity-60 p-10 rounded-2xl shadow-2xl max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-yellow-400 mb-4 drop-shadow-xl">
            Golden Bites Chips
          </h1>
          <p className="text-lg md:text-2xl text-gray-100 mb-6 font-medium">
            Crispy, fresh, premium plantain chips — always made with love.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-8 py-3 rounded-xl shadow-xl text-lg transition"
          >
            Order Now
          </a>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-yellow-700">
            Our Menu
          </h2>
          <p className="text-lg md:text-xl text-gray-700">
            Explore our delicious range of fresh plantain chips.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {chipsMenu.map((chip, idx) => (
            <div
              key={idx}
              className="bg-yellow-50 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform"
            >
              <img
                src={chip.image}
                alt={chip.name}
                className="h-40 w-full object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-yellow-800 mb-2">
                  {chip.name}
                </h3>
                <p className="text-lg font-bold text-gray-900 mb-4">
                  {chip.price}
                </p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg font-semibold shadow-md"
                >
                  Order Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 flex flex-col md:flex-row items-center px-6 bg-yellow-50"
      >
        <div className="md:w-1/2 mb-10 md:mb-0">
          <img
            src="https://images.unsplash.com/photo-1599785209707-fd09c63b7f61?auto=format&fit=crop&w=600"
            alt="Plantain chips"
            className="rounded-2xl shadow-xl w-full object-cover"
          />
        </div>

        <div className="md:w-1/2 md:pl-12 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-extrabold text-yellow-700 mb-6">
            About Us
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-4 leading-relaxed">
            Golden Bites Chips is dedicated to delivering fresh, crispy, and tasty
            plantain chips. Each batch is made from high‑quality plantains sourced
            locally.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Our mission is to provide a premium snacking experience for everyone —
            anytime, anywhere.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section
        id="testimonials"
        className="py-20 px-6 bg-yellow-100 text-center"
      >
        <h2 className="text-3xl md:text-5xl font-extrabold text-yellow-800 mb-10">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform"
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <p className="text-gray-700 italic mb-2">"{t.review}"</p>
              <h4 className="font-bold text-yellow-700">{t.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-yellow-50 flex flex-col items-center px-6 text-center"
      >
        <h2 className="text-3xl md:text-5xl font-extrabold text-yellow-800 mb-6">
          Contact Us
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-6">
          Have questions or want to place an order? Chat with us on WhatsApp.
        </p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-xl shadow-lg text-lg transition"
        >
          Message on WhatsApp
        </a>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-yellow-700 text-white text-center">
        <p className="mb-1 font-semibold">
          &copy; {new Date().getFullYear()} Golden Bites Chips
        </p>
        <p className="text-sm tracking-wide">All Rights Reserved.</p>
      </footer>
    </div>
  );
}
