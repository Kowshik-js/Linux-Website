import { Routes, Route, useLocation } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Content from "./components/Content";


export default function App() {
  const location = useLocation();

  
  const showNavPages = ["/"];

  return (
    <div className="flex flex-col min-h-screen font-sans bg-gray-50 text-gray-800">
      {showNavPages.includes(location.pathname) && <Nav />}

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/hero" element={<Hero />} />
          <Route path="/content/:topic" element={<Content />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
