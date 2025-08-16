import { Link } from "react-router-dom";
import About from "./About";
import Contact from "./Contact"; // ✅ Import Contact
import linuxBg from "../assets/linux-bg.jpg";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section
        id="home"
        className="flex flex-col items-center justify-center text-center min-h-screen text-white px-6"
        style={{
          backgroundImage: `url(${linuxBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
          Welcome to <span className="text-yellow-300">Linux Docs</span>
        </h1>
        <p className="max-w-xl text-lg md:text-xl mb-8 opacity-90 drop-shadow-md">
          Linux is freedom — the power to control, customize, and create without limits.
        </p>
        <Link to="/Hero">
          <button className="bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-300 transition-transform transform hover:scale-105">
            Let us Start
          </button>
        </Link>
      </section>

      {/* About Section */}
      <About />

      {/* Contact Section ✅ added */}
      <Contact />
    </div>
  );
}
