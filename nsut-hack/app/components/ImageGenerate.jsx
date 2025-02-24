"use client"

import React, { useState } from 'react';
import { Mail, Lock, User, ArrowRight, UserPlus, Send, Github, Linkedin, Instagram, MessageSquare } from 'lucide-react';

export default function Footer() {
  const [feedback, setFeedback] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFeedback('');
    setEmail('');
  };

  return (
    <footer className="relative  bg-gradient-to-b from-gray-900 to-black py-16 overflow-hidden">
      {/* Animated Background Elements */}
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-[50%] opacity-30">
          <div className="w-full h-full relative">
            <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-2xl animate-float"></div>
            <div className="absolute top-0 right-1/4 w-[250px] h-[250px] bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-xl animate-pulse"></div>
          </div>
        </div>
      </div> */}

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Feedback Form Section */}
          <div className="relative">
            <div className="bg-gray-800/50 backdrop-blur-xl p-8 rounded-2xl shadow-2xl transform hover:translate-y-[-2px] transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6 animate-fade-in">Send us your feedback</h3>
              <form onSubmit={handleFeedbackSubmit} className="space-y-4">
                <div className="relative group">
                  <Mail className="absolute left-3 top-4 text-gray-400 group-focus-within:text-blue-500 transition-colors" size={20} />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    className="w-full bg-gray-700/50 text-white pl-12 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all backdrop-blur-sm"
                    required
                  />
                </div>
                <div className="relative group">
                  <MessageSquare className="absolute left-3 top-4 text-gray-400 group-focus-within:text-blue-500 transition-colors" size={20} />
                  <textarea
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    placeholder="Your feedback"
                    className="w-full bg-gray-700/50 text-white pl-12 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all backdrop-blur-sm min-h-[120px]"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                >
                  <span>Send Feedback</span>
                  <Send size={20} className="animate-bounce-x" />
                </button>
                {isSubmitted && (
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500/90 text-white px-4 py-2 rounded-full animate-fade-in">
                    Thank you for your feedback!
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Footer Links & Info Section */}
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-white mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors transform hover:translate-x-1 inline-block">About Us</a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors transform hover:translate-x-1 inline-block">Services</a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors transform hover:translate-x-1 inline-block">Blog</a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors transform hover:translate-x-1 inline-block">Contact</a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white mb-4">Legal</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors transform hover:translate-x-1 inline-block">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors transform hover:translate-x-1 inline-block">Terms of Service</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-white mb-4">Contact Us</h4>
                <ul className="space-y-2">
                  <li className="text-gray-400">aadijain363@gmail.com</li>
                  <li className="text-gray-400">+91 9580689822</li>
                  <li className="text-gray-400">Kiet Group of Institutions</li>
                  <li className="text-gray-400">Ghaziabad - 210206</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="https://www.instagram.com/alsomedroo/" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
                    <Instagram size={24} />
                  </a>
                  <a href="https://www.linkedin.com/in/dhruv-jain-79617a305/" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
                    <Linkedin size={24} />
                  </a>
                  <a href="https://www.linkedin.com/in/dhruv-jain-79617a305/" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
                    <Github size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

