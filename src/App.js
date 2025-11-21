import React, { useState } from "react";
import "./index.css"; // Tailwind CSS imported here

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Menu", href: "#menu" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const chipsMenu = [
    { name: "Classic Salted", price: "₦500" },
    { name: "Spicy Pepper", price: "₦600" },
    { name: "Honey Glazed", price: "₦700" },
    { name: "Cheese Flavored", price: "₦650" },
  ];

  const whatsappNumber = "2348012345678";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello! I want to place an order for Golden Bites Chips.`;

  return (
    <div className="scroll-smooth">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-yellow-500 shadow-md">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
          <div className="flex items-center">
            <img
              src="https://images.unsplash.com/photo-1623243616342-177ac6e8b1e8?auto=format&fit=crop&w=64&h=64&q=80"
              alt="Golden Bites Logo"
              className="h-12 w-12 rounded-full mr-3"
            />
            <span className="text-white font-bold text-xl">Golden Bites Chips</span>
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

          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
              {menuOpen ? (
                <svg
                  className="w-6 h-6"
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
                  className="w-6 h-6"
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
        </div>

        {menuOpen && (
          <ul className="md:hidden bg-yellow-500 px-6 pb-4 space-y-4">
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

      {/* Hero/Home Section */}
      <section
        id="home"
        className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-center px-4"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/5938/food-plantain-snack-chips.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-lg">
          <h1 className="text-4xl md:text-6xl font-bold text-yellow-300 mb-4">
            Welcome to Golden Bites Chips
          </h1>
          <p className="text-lg md:text-2xl text-white mb-6">
            Crispy plantain chips made with love — savour every bite!
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-colors"
          >
            Order Now
          </a>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-yellow-50 px-4">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Menu</h2>
          <p className="text-lg md:text-xl text-gray-700">
            Choose your favourite flavour of Golden Bites Chips.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {chipsMenu.map((chip, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold mb-2">{chip.name}</h3>
                <p className="text-lg font-bold mb-4">{chip.price}</p>
              </div>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded-lg transition-colors"
              >
                Order Now
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 flex flex-col md:flex-row items-center px-4 bg-white"
      >
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src="https://cdn.pixabay.com/photo/2020/06/27/09/06/plantain-chips-5349921_1280.jpg"
            alt="Plantain chips"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>
        <div className="md:w-1/2 md:pl-12 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            About Golden Bites Chips
          </h2>
          <p className="text-lg md:text-xl mb-4">
            Golden Bites Chips is a premium plantain chips brand. We hand‑slice our
            plantains to ensure crispiness, and use only the freshest plantains and
            quality ingredients.
          </p>
          <p className="text-lg md:text-xl">
            Our mission is to bring you a snack that is not just tasty but also made
            with care. Whether you're relaxing at home or sharing with friends,
            Golden Bites Chips is the perfect companion.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-yellow-100 flex flex-col items-center px-4 text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Get in Touch</h2>
        <p className="text-lg md:text-xl mb-6">
          For orders, custom requests, or just to say hi — message us on WhatsApp!
        </p>
        <a
          href={`https://wa.me/2349073634450?text=Hello! I want to place an order for Golden Bites Chips.`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Message on WhatsApp
        </a>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-yellow-500 text-white text-center">
        <p className="mb-2">&copy; {new Date().getFullYear()} Golden Bites Chips</p>
        <p>All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
