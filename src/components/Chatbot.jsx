import React, { useState } from "react";
import { X } from "lucide-react"; // close icon
import chatbotIcon from "../assets/chatbot.jpg"; // chatbot icon

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;
    setMessages([...messages, { text: input, sender: "user" }]);
    setInput("");
  };

  const handleClose = () => {
    setIsOpen(false);
    setMessages([]); // clear chat on close
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chatbot Box */}
      {isOpen && (
        <div className="w-80 h-96 bg-white shadow-2xl rounded-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex justify-between items-center bg-blue-600 text-white px-4 py-2">
            <h3 className="font-semibold">Chatbot</h3>
            <button onClick={handleClose}>
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto space-y-2 text-sm">
            {messages.length === 0 ? (
              <p className="text-gray-400 text-center">Start chatting...</p>
            ) : (
              messages.map((msg, i) => (
                <div
                  key={i}
                  className={`p-2 rounded-lg max-w-[75%] ${
                    msg.sender === "user"
                      ? "bg-blue-100 self-end ml-auto"
                      : "bg-gray-100 self-start"
                  }`}
                >
                  {msg.text}
                </div>
              ))
            )}
          </div>

          {/* Input */}
          <div className="flex items-center border-t p-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type a message..."
              className="flex-1 px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              onClick={handleSend}
              className="ml-2 bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Send
            </button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-white shadow-lg rounded-full p-3 hover:scale-105 transition-transform duration-200"
        >
          <img
            src={chatbotIcon}
            alt="Chatbot"
            className="w-12 h-12 object-contain"
          />
        </button>
      )}
    </div>
  );
}

export default Chatbot;
