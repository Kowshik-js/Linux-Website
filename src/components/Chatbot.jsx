import React, { useState } from "react";
import { X } from "lucide-react"; // close icon
import chatbotIcon from "../assets/chatbot.jpg"; // chatbot icon
import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const isLinuxRelated = (query) => {
    const linuxKeywords = ["linux", "ubuntu", "debian", "fedora", "centos", "bash", "shell", "terminal", "command", "grep", "awk", "sed", "chmod", "chown", "apt", "yum", "dnf", "systemctl", "docker", "kubernetes", "fsck", "cron", "ssh", "rsync", "tar", "gzip", "kernel", "filesystem", "unix"];
    return linuxKeywords.some((keyword) => query.toLowerCase().includes(keyword));
  };

  // Function to format text with basic Markdown-like styling
  const formatMessage = (text) => {
    let formatted = text.split("\n").slice(0, 5).join("\n");
    formatted = formatted.replace(/^# (.*)/gm, "<h3 class='text-lg font-bold'>$1</h3>");
    formatted = formatted.replace(/^## (.*)/gm, "<h4 class='text-md font-semibold'>$1</h4>");
    formatted = formatted.replace(/^(\*|-) (.*)/gm, "<li class='ml-4 list-disc'>$2</li>");
    return formatted.split("\n").map((line, index) => <div key={index} dangerouslySetInnerHTML={{ __html: line }} />);
  };

  const handleSend = async () => {
    if (input.trim() === "") return;
    const timestamp = new Date().toLocaleTimeString();
    const userMessage = { text: input.split("\n").slice(0, 5).join("\n"), sender: "user", time: timestamp };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      if (!isLinuxRelated(input)) {
        const botMessage = { text: "Sorry, I only answer Linux-related queries. Please ask something about Linux, such as commands, troubleshooting, or configurations.".split("\n").slice(0, 5).join("\n"), sender: "bot", time: timestamp };
        setMessages((prev) => [...prev, botMessage]);
      } else {
        const result = await model.generateContent(input);
        const botMessage = { text: result.response.text().split("\n").slice(0, 5).join("\n"), sender: "bot", time: timestamp };
        setMessages((prev) => [...prev, botMessage]);
      }
    } catch (error) {
      console.error("Gemini API Error:", error);
      setMessages((prev) => [...prev, { text: "⚠️ Error fetching response.".split("\n").slice(0, 5).join("\n"), sender: "bot", time: timestamp }]);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setMessages([]);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen && (
        <div className={`w-80 sm:w-96 h-96 sm:h-[28rem] shadow-2xl rounded-2xl flex flex-col overflow-hidden ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white'}`}>
          <div className="flex justify-between items-center bg-blue-600 text-white px-4 py-2">
            <h3 className="font-semibold">Linux Chatbot</h3>
            <div>
              <button onClick={toggleDarkMode} className="mr-2">{isDarkMode ? 'Light' : 'Dark'}</button>
              <button onClick={handleClose}><X className="w-5 h-5" /></button>
            </div>
          </div>
          <div className="flex-1 p-3 overflow-y-auto space-y-2 text-sm">
            {messages.length === 0 ? (
              <p className={`text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-400'}`}>Ask me about Linux commands, troubleshooting, or configurations...</p>
            ) : (
              messages.map((msg, i) => (
                <div key={i} className={`p-2 rounded-lg max-w-[75%] break-words flex flex-col ${msg.sender === "user" ? `bg-blue-100 ${isDarkMode ? 'text-black' : 'text-black'} self-end ml-auto` : `bg-gray-100 ${isDarkMode ? 'text-black' : 'text-black'} self-start`}`}>
                  {formatMessage(msg.text)}
                  <span className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>{msg.time}</span>
                </div>
              ))
            )}
            {loading && <p className={`text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-400'} animate-pulse`}>Thinking...</p>}
          </div>
          <div className={`flex items-center ${isDarkMode ? 'border-gray-600' : 'border-t'} p-2`}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask a Linux-related question..."
              className={`flex-1 px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 ${isDarkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white'}`}
            />
            <button onClick={handleSend} disabled={loading} className="ml-2 bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50">Send</button>
          </div>
        </div>
      )}
      {!isOpen && (
        <button onClick={() => setIsOpen(true)} className="bg-white shadow-lg rounded-full p-3 hover:scale-105 transition-transform duration-200">
          <img src={chatbotIcon} alt="Linux Chatbot" className="w-12 h-12 object-contain" />
        </button>
      )}
    </div>
  );
}

export default Chatbot;