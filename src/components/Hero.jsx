import React from "react";
import { useNavigate } from "react-router-dom";
// import CheatSheetPDF from "../assets/linux-cheatsheet.pdf"; // Make sure this PDF exists in your assets folder

function Hero() {
  const navigate = useNavigate();

  const topics = [
    "Introduction to Linux",
    "Linux vs Unix",
    "Linux vs Windows",
    "Linux Installation",
    "Important Things to Remember in Linux",
    // "Package Management",
    "Putty",
    "What is root",
    "Introduction to File System",
    "Navigation File System",
    "File System Paths",
    "Creating Files and Directories",
    "Copying the Directories",
    "Finding Files and Directories",
    "Difference between Find and Locate",
    "Wildcards",
    "Linux File types",
    "Types of Links",
    "Command Syntax",
    "Changing file Permissions",
    "Permission using Numeric Methods",
    "File Ownership",
    "Access Control List (ACL)",
    "Help Commands",
    "TAB Completion and up Arrow",
    "Adding texts to Files",
    "Standard output to a File",
    "Pipes",
    "Executing Multiple Commands with ;",
    "File maintenance Commands",
    "File Display Commands",
    "Filters and Text Processing Commands",
    "Compare Files",
    "Compress and Uncompress files",
    "Truncate File Size",
    "Combining and Splitting files",
    "Linux File editor",
    "Vi editor",
    "Difference between vi and vim editor",
    "sed Command",
    "User account Management",
    "Enable Password aging",
    "Switch users and sudo access",
    "Monitor Users",
    "Talking to users",
    "Difference between Active dir, LDAP, IDM, WinBind, OpenLDAP",
    "System utility commands",
    "Processes and Jobs",
    "systemctl Command",
    "ps command",
    "top command",
    "Kill command",
    "Process signals in Linux",
    "crontab command",
    "at command",
    "process management",
    "System Monitoring",
    "log monitoring",
    "System maintenance commands",
    "Changing System hostname",
    "Finding system information",
    "Finding system Architecture",
    "sos Report",
    "Terminal Command",
    "Recover root password",
    "Environmental Variables",
    "scrum command",
    "tmux Command",
    "linux kernel",
    "Shell",
    "types of shell",
    "shell Scripting",
    "Basic Scripts and loops, conditions",
    "check remote servers connection",
    "Aliases",
    "Creating user and Global Aliases",
    "Client and server relationship",
    "Network Components",
    "NIC information (ethtool)",
    "NIC Bonding",
    "SSH Telnet",
    "Configure and secure SSH",
    "Access Remote Server without password",
    "the ss command",
    "Curl and ping command",
    "FTP (File Transfer Protocol)",
    "SCP (Secure copy Protocol)",
    "rsync - Remote synchronization",
    "Download files and Apps",
    "System updates and repos",
    "System updates and patch management",
    "Advanced package management",
    "Rollback updates and patches",
    "DNS (Domain name System)",
    "Host name or IP lookup",
    "Network time Protocol (NTP)",
    "chronyd",
    "New system utility commands",
    "Mail server",
    "web server (https)",
    "Nginx",
    "cockpit",
    "Proxy server in linux (squid)",
    "central logger (RSYSLOG)",
    "Nagios",
    "Linux OS Hardening",
    "openLDAP",
    "Trace Network Traffic (traceroute)",
    "How to open image file",
    "Firewall",
  ];

  const handleTopicClick = (topic) => {
    navigate(`/content/${encodeURIComponent(topic)}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 via-black to-gray-900 p-6">
      {/* Sticky Heading */}
      <div className="py-2 pt-3 z-10">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-blue-200 drop-shadow-md">
            Learn Linux the Fast Way — Pick a Topic & Get Started!
          </h1>
        </div>
      </div>

      {/* Buttons Grid */}
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-6xl mx-auto">
        {topics.map((topic, index) => (
          <button
            key={index}
            onClick={() => handleTopicClick(topic)}
            className="h-20 px-4 
                     bg-gradient-to-r from-blue-200 to-indigo-300 
                     text-gray-900 font-medium rounded-lg shadow-lg
                     hover:from-blue-100 hover:to-indigo-200 hover:scale-105 
                     transition-all duration-200 ease-in-out text-sm md:text-base"
          >
            {topic}
          </button>
        ))}
      </div>

      {/* Download Cheat Sheet */}
      <div className="mt-10 text-center">
  <p className="text-blue-200 text-lg mb-3">
    Want all these commands in one place? Download the complete Linux Cheat Sheet.
  </p>
  <button
    onClick={() => alert("🚀 Coming Soon...")}
    className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-300 transition-all duration-200"
  >
    📥 Download Cheat Sheet
  </button>
</div>

    </div>
  );
}

export default Hero;
