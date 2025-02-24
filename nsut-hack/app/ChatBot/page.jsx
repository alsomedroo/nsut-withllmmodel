"use client";
import axios from "axios";
import { useState } from "react";
import { Send, Bot, User, MessageSquare } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/ImageGenerate";
import { PropertyMixer } from "three";
import ProtectedRoute from "../components/ProtectedRoutes";

function ChatBot() {
  const [messages, setMessages] = useState([
    {
      text: "Hello! I'm HealthAI, your health assistant. How can I help you with your health-related queries today?",
      sender: "bot",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (input.trim()) {
      const userMessage = { text: input, sender: "user" };
      setMessages([...messages, userMessage]);
      setInput("");

      try {
        const response = await axios.post(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyDctjMQ8ORaXzwgWBc8RL_BwY3i6-LD6gc`,
          {
            contents: [{ parts: [{ text: input }] }],
          }
        );

        const botMessage =
          response.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
          "I'm here to help! Let me know your health concerns in simple terms.";

        setMessages((prev) => [...prev, { text: botMessage, sender: "bot" }]);
      } catch (error) {
        console.error("Error fetching response:", error);
        setMessages((prev) => [
          ...prev,
          { text: "Sorry, something went wrong. Please try again.", sender: "bot" },
        ]);
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <ProtectedRoute>
    <div className="relative">
      {/* Navbar stays fixed at the top */}
      <Navbar className="z-50 fixed top-0 left-0 right-0 w-full" />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex pt-16"> {/* Added padding-top to prevent content overlap */}
        <div className="w-1/2 p-12 flex flex-col justify-center items-center fixed left-0 top-16 h-screen"> {/* Adjusted for navbar height */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-blue-600 rounded-full blur opacity-75 animate-pulse"></div>
            <div className="relative bg-gray-800 p-8 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <MessageSquare size={48} className="text-green-500 mb-6" />
              <h1 className="text-4xl font-bold text-white mb-4">HealthAI - Your Health Assistant</h1>
              <p className="text-gray-300 text-lg">Get simple and easy-to-understand answers to your health questions.</p>
            </div>
          </div>
        </div>

        <div className="w-1/2 bg-gray-800 shadow-2xl overflow-y-auto fixed right-0 top-0 h-screen">
          <div className="absolute inset-0 bg-gradient-to-b from-green-500/10 via-transparent to-blue-500/10 pointer-events-none"></div>
          <div className="relative h-full flex flex-col">
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((message, index) => (
                <div key={index} className={`flex items-start gap-3 ${message.sender === "user" ? "flex-row-reverse" : ""}`}>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${message.sender === "user" ? "bg-green-500" : "bg-gray-600"}`}>
                    {message.sender === "user" ? <User size={18} className="text-white" /> : <Bot size={18} className="text-white" />}
                  </div>
                  <div className={`px-4 py-3 rounded-2xl max-w-[80%] ${message.sender === "user" ? "bg-green-600 text-white ml-auto rounded-tr-sm shadow-lg" : "bg-gray-700 text-gray-100 rounded-tl-sm shadow-lg"}`}>
                    {message.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gray-700/50 p-4 border-t border-gray-600">
              <div className="flex items-end gap-4">
                <div className="flex-grow relative">
                  <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask me anything about health..."
                    className="w-full bg-gray-800/50 text-gray-100 rounded-lg pl-4 pr-10 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none h-[50px] max-h-[200px]"
                  />
                </div>
                <button onClick={handleSend} className="bg-green-600 hover:bg-green-700 text-white rounded-lg p-3 transition-all duration-300 transform hover:scale-110">
                  <Send size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    </ProtectedRoute>

  );
}

export default ChatBot;
