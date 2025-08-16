import { useState } from "react";
import { Menu, X } from "lucide-react";
import KowshikLogo from "../assets/Kowshik-logo3.jpg";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Contact", id: "contact" },
  ];

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="bg-gradient-to-r from-black via-emerald-900 to-emerald-700 text-emerald-300 fixed w-full z-50 shadow-lg border-b border-emerald-500">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src={KowshikLogo}
            alt="Kowshik Logo"
            className="h-14 w-auto object-contain rounded-lg p-1 bg-white/20 backdrop-blur-sm shadow-lg"
          />
          <span className="text-2xl font-extrabold tracking-wider drop-shadow-md">
            Kowshik
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-12 text-lg absolute left-1/2 transform -translate-x-1/2">
          {menuItems.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => handleScroll(id)}
              className="relative group scroll-smooth"
            >
              <span className="transition-colors duration-300 group-hover:text-yellow-300">
                {label}
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none hover:scale-110 transition-transform"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-b from-emerald-900 to-emerald-700 px-6 py-4 space-y-4 animate-slideDown">
          {menuItems.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => handleScroll(id)}
              className="block text-lg hover:text-yellow-300 transition-colors scroll-smooth w-full text-left"
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
