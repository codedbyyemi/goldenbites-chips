import React, { useState } from "react";
import "./index.css";

// ====== IMAGE IMPORTS ======
import goldenLogo from "./assets/goldenbiteslogo.jpg";
import plantainBg from "./assets/plantainbg.jpg";
import plantainImg from "./assets/plantain.png";
import plantain2 from "./assets/plantain2.jpg";
import aboutImg from "./assets/about.jpg";
import gallery1 from "./assets/plantain g1.jpg";
import gallery2 from "./assets/plantain g2.jpg";
import gallery3 from "./assets/plantain g3.jpg";
import gallery4 from "./assets/plantainbg.jpg";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showOrderForm, setShowOrderForm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    product: "Classic Salted",
    quantity: 1,
  });

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Menu", href: "#menu" },
    { name: "About", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const chipsMenu = [
    { name: "Classic Salted", price: 500, image: plantainImg },
    { name: "Spicy Pepper", price: 600, image: plantain2 },
    { name: "Honey Glazed", price: 700, image: plantainImg },
    { name: "Cheese Flavored", price: 650, image: plantain2 },
  ];

  const testimonials = [
    {
      name: "Chinedu Okafor",
      text: "Golden Bites Chips are the crispiest I've ever tasted! Highly recommend.",
      image: plantainImg,
    },
    {
      name: "Aisha Bello",
      text: "The flavors are amazing! Spicy Pepper is my favorite.",
      image: plantain2,
    },
  ];

  const galleryImages = [gallery1, gallery2, gallery3, gallery4];

  // =============================
  // 🔥 MONEY CALCULATION FUNCTION
  // =============================
  const getPrice = () => {
    const selected = chipsMenu.find((chip) => chip.name === formData.product);
    return selected ? selected.price : 0;
  };

  const totalAmount = getPrice() * formData.quantity;

  const handleSubmitOrder = (e) => {
    e.preventDefault();

    const message = `Hello! I want to place an order:\n
Name: ${formData.name}\n
Phone: ${formData.phone}\n
Product: ${formData.product}\n
Unit Price: ₦${getPrice()}\n
Quantity: ${formData.quantity}\n
Total Amount: ₦${totalAmount}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/2349073634450?text=${encodedMessage}`;

    window.open(whatsappLink, "_blank");

    setShowOrderForm(false);
    setFormData({ name: "", phone: "", product: "Classic Salted", quantity: 1 });
  };

  return (
    <div className="scroll-smooth font-sans bg-gray-50">

      {/* NAVBAR */}
      <nav className="fixed w-full z-50 bg-yellow-600 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
          <div className="flex items-center">
            <img
              src={goldenLogo}
              alt="Golden Bites Logo"
              className="h-12 w-12 rounded-full mr-3 border-2 border-white object-cover"
            />
            <span className="text-white font-extrabold text-xl">
              Golden Bites Chips
            </span>
          </div>

          <ul className="hidden md:flex space-x-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-white font-semibold hover:text-yellow-200"
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
            ☰
          </button>
        </div>

        {menuOpen && (
          <ul className="md:hidden bg-yellow-600 px-6 pb-4 space-y-4">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>

      {/* HERO SECTION */}
      <section
        id="home"
        className="min-h-screen bg-cover bg-center flex justify-center items-center text-center px-6 relative"
        style={{ backgroundImage: `url(${plantainBg})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 animate-fadeIn">
          <h1 className="text-6xl md:text-7xl font-extrabold text-yellow-300 drop-shadow-lg tracking-wide">
            Golden Bites Chips
          </h1>
          <p className="text-xl md:text-2xl text-white mt-4 font-light drop-shadow-lg">
            Crispy. Fresh. Made with Love.
          </p>
          <button
            onClick={() => setShowOrderForm(true)}
            className="mt-8 bg-yellow-500 hover:bg-yellow-600 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg transition-transform transform hover:scale-105"
          >
            Order Now
          </button>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="py-20 px-6 bg-white text-center">
        <h2 className="text-4xl font-extrabold text-yellow-700 mb-4">Our Menu</h2>
        <p className="text-lg text-gray-700 mb-10">Delicious plantain chips.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {chipsMenu.map((chip, idx) => (
            <div
              key={idx}
              className="bg-yellow-50 rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform"
            >
              <img
                src={chip.image}
                alt={chip.name}
                className="h-40 w-full object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-bold text-yellow-800">{chip.name}</h3>
              <p className="text-lg font-bold text-gray-900 mb-4">₦{chip.price}</p>
              <button
                onClick={() => {
                  setFormData({ name: "", phone: "", product: chip.name, quantity: 1 });
                  setShowOrderForm(true);
                }}
                className="bg-yellow-500 text-white px-4 py-2 rounded-lg"
              >
                Order Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 bg-yellow-50 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
          <div className="md:w-1/2">
            <img
              src={aboutImg}
              alt="About Golden Bites Chips"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </div>

          <div className="md:w-1/2">
            <h2 className="text-4xl font-extrabold text-yellow-700 mb-6">About Us</h2>
            <p className="text-lg text-gray-700 mb-4">
              Golden Bites Chips is dedicated to bringing you the crispiest, freshest, and most flavorful plantain chips.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              From classic salted to spicy pepper, each flavor is carefully crafted to delight your taste buds.
            </p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-20 bg-white px-6 text-center">
        <h2 className="text-4xl font-extrabold text-yellow-700 mb-10">Gallery & Special Offers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {galleryImages.map((img, idx) => (
            <div key={idx} className="rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform">
              <img src={img} alt={`Gallery ${idx}`} className="w-full h-48 object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-20 bg-yellow-50 text-center px-6">
        <h2 className="text-4xl font-extrabold text-yellow-700 mb-10">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-yellow-100 p-6 rounded-2xl shadow-lg">
              <img
                src={t.image}
                alt={t.name}
                className="h-24 w-24 rounded-full mx-auto mb-4 object-cover border-2 border-yellow-400"
              />
              <p className="text-gray-800 italic mb-2">"{t.text}"</p>
              <h4 className="font-bold text-yellow-800">{t.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 bg-yellow-100 text-center px-6">
        <h2 className="text-4xl font-extrabold text-yellow-800 mb-6">Contact Us</h2>
        <a
          href="https://wa.me/2349073634450"
          className="bg-green-600 text-white px-8 py-3 rounded-xl text-lg"
        >
          Message on WhatsApp
        </a>
      </section>

      {/* ORDER FORM MODAL */}
      {showOrderForm && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center p-4 z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md max-h-[90vh] overflow-auto">
            <h2 className="text-2xl font-bold mb-4">Place Your Order</h2>

            <form onSubmit={handleSubmitOrder}>
              <input
                required
                type="text"
                placeholder="Your Name"
                className="w-full p-3 mb-3 border rounded"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />

              <input
                required
                type="tel"
                placeholder="Phone Number"
                className="w-full p-3 mb-3 border rounded"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />

              <label className="block text-left font-semibold mb-1">Product</label>
              <select
                className="w-full p-3 mb-3 border rounded"
                value={formData.product}
                onChange={(e) =>
                  setFormData({ ...formData, product: e.target.value })
                }
              >
                {chipsMenu.map((chip) => (
                  <option key={chip.name}>{chip.name}</option>
                ))}
              </select>

              <label className="block text-left font-semibold mb-1">Quantity</label>
              <input
                required
                type="number"
                min="1"
                className="w-full p-3 mb-3 border rounded"
                value={formData.quantity}
                onChange={(e) =>
                  setFormData({ ...formData, quantity: Number(e.target.value) })
                }
              />

              {/* TOTAL MONEY DISPLAY */}
              <div className="p-3 mb-3 bg-yellow-100 rounded text-center font-bold text-lg">
                Total: ₦{totalAmount}
              </div>

              <button className="bg-yellow-600 text-white px-6 py-3 rounded-lg w-full mt-3">
                Send Order to WhatsApp
              </button>

              <button
                type="button"
                onClick={() => setShowOrderForm(false)}
                className="mt-3 w-full bg-gray-300 py-3 rounded-lg"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}

      <footer className="py-8 bg-yellow-700 text-white text-center mt-20">
        <p className="font-semibold">© {new Date().getFullYear()} Golden Bites Chips</p>
      </footer>
    </div>
  );
}
