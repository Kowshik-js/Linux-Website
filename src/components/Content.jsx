import React from "react";
import { useParams } from "react-router-dom";

function Content() {
  const { topic } = useParams();
  const decodedTopic = decodeURIComponent(topic || "Unknown Topic");

  // Notes data (You can expand this for other topics)
  const notes = {
    "Introduction to Linux": (
      <div className="text-left space-y-4">
        <h2 className="text-2xl font-semibold text-blue-600">Everyday Examples of Linux</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Airplanes, Smart TVs, Google-based systems</li>
          <li>Websites & Servers</li>
          <li>Smartphones, ATMs, Tablets</li>
          <li>Windows Data Recovery tools</li>
          <li>Applications, Self-driving cars</li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-600">What is an Operating System?</h2>
        <p className="text-gray-700">
          An OS acts as a bridge between computer hardware and the user. It manages resources and provides
          an interface (CLI/GUI) to interact with the system.
        </p>

        <h2 className="text-2xl font-semibold text-blue-600">Types of Operating Systems</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li><strong>Desktop OS:</strong> Windows, macOS, Linux (Ubuntu, Fedora, etc.)</li>
          <li><strong>Server OS:</strong> Windows Server, Linux Server</li>
          <li><strong>Mobile OS:</strong> Android, iOS, Windows Mobile</li>
          <li><strong>Embedded OS:</strong> Routers, Smart TVs, Automobiles, Home Appliances</li>
          <li><strong>Real-Time OS (RTOS):</strong> Aerospace, Medical equipment, Defense systems</li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-600">What is Linux?</h2>
        <p className="text-gray-700">
          Linux is a <strong>free and open-source operating system</strong>. 
          Being open-source means anyone can view, modify, and redistribute the code.
          It is known for its stability, security, and flexibility.
        </p>

        <h2 className="text-2xl font-semibold text-blue-600">Why is Linux Important?</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Widely used in servers & cloud computing</li>
          <li>Free and open-source</li>
          <li>Powerful command-line interface</li>
          <li>Faster processing</li>
          <li>Enhanced security</li>
          <li>Highly customizable</li>
        </ul>
      </div>
    ),
    "Linux vs Unix": (
      <div className="text-left space-y-4">
        <h2 className="text-2xl font-semibold text-blue-600">Linux vs Unix</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Linux Section */}
          <div>
            <h3 className="text-xl font-bold text-green-600">Linux</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Completely free to use and distribute</li>
              <li>Fully open-source with accessible and modifiable code</li>
              <li>Developed collaboratively by a global community and major companies (e.g., Red Hat, CentOS, Debian)</li>
              <li>Highly compatible, supporting a wide variety of hardware platforms</li>
            </ul>
          </div>

          {/* Unix Section */}
          <div>
            <h3 className="text-xl font-bold text-red-600">Unix</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Requires payment as a commercial operating system</li>
              <li>Proprietary with restricted access to source code</li>
              <li>Utilized by specific vendors such as Solaris, HP-UX, and AIX</li>
              <li>Limited compatibility, supporting only a select few file systems</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-blue-600">Different Flavours / Distributions of Linux</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Ubuntu - User-friendly and widely used</li>
          <li>Fedora - Cutting-edge and community-driven</li>
          <li>Debian - Stable and highly customizable</li>
          <li>RedHat Enterprise Linux (RHEL) - Enterprise-grade solution</li>
          <li>CentOS - Reliable and recommended for stability</li>
          <li>Arch Linux - For advanced users seeking full control</li>
          <li>openSUSE - Versatile with strong development tools</li>
          <li>Linux Mint - Easy-to-use with a polished interface</li>
          <li>Gentoo - Highly optimized for performance</li>
          <li>Slackware - Traditional and lightweight</li>
          <li>Alpine Linux - Lightweight and security-focused</li>
          <li>Kali Linux - Specialized for security and penetration testing</li>
        </ul>
      </div>
    ),
    "Linux vs Windows": (
           <div className="text-left space-y-4">
        <h2 className="text-2xl font-semibold text-blue-600">Linux vs Windows</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Linux Section */}
          <div>
            <h3 className="text-xl font-bold text-green-600">Linux</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Completely free to use and distribute</li>
              <li>Fully open-source with customizable code</li>
              <li>Developed collaboratively by a global community and companies (e.g., Red Hat, Canonical)</li>
              <li>Highly versatile, supporting a wide range of hardware platforms</li>
              <li>May perform slowly on poorly optimized or unmanaged systems</li>
              <li>Utilizes robust package managers (e.g., APT, Yum) for software installation</li>
              <li>Requires a learning curve for new users</li>
              <li>Offers exceptional stability and performance for servers and development</li>
            </ul>
          </div>

          {/* Windows Section */}
          <div>
            <h3 className="text-xl font-bold text-red-600">Windows</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Proprietary software owned by Microsoft</li>
              <li>Requires payment for licensing and updates</li>
              <li>Features a user-friendly standard graphical user interface (GUI)</li>
              <li>Includes a Start menu and power options for easy navigation</li>
              <li>Limited flexibility for advanced customization or play</li>
              <li>Python not pre-installed; requires manual setup (e.g., executable installer)</li>
              <li>Limited user control over system processes and configurations</li>
              <li>Stable but may experience performance degradation over time</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">{decodedTopic}</h1>
      <div className="max-w-3xl bg-white shadow-lg rounded-lg p-6">
        {notes[decodedTopic] || (
          <p className="text-lg text-gray-500 animate-pulse">🚧 Content Coming Soon...</p>
        )}
      </div>
    </div>
  );
}

export default Content;
