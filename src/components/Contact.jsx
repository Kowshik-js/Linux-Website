import linuxBg from "../assets/linux-bg3.jpg"; // make sure path is correct

export default function Contact() {
  return (
    <div
      id="contact"
      className="min-h-screen flex items-center justify-center p-6 scroll-mt-24"
      style={{
        backgroundImage: `url(${linuxBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="shadow-lg rounded-xl p-8 max-w-lg w-full"
        style={{ backgroundColor: "rgba(255,255,255,0.6)" }} // 80% opacity
      >
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Contact Me
        </h1>

        <div className="space-y-4 text-gray-700">
          <p>
            <span className="font-semibold">Name:</span> Kowshik J S
          </p>
          <p>
            <span className="font-semibold">Email:</span> kowshikjs487@gmail.com
          </p>
          <p>
            <span className="font-semibold">Phone:</span> +91 91410 47589
          </p>
          <p>
            <span className="font-semibold">Address:</span> SDM Institute of Technology, Ujire
          </p>
        </div>

        <div className="mt-8">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
