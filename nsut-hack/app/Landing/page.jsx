"use client";
import React, { useState, useEffect } from "react";
import { Bot } from "lucide-react";
// import { redirect } from "next/dist/server/api-utils";
// import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  Heart,
  Activity,
  Users,
  Calendar,
  Menu,
  X,
  Stethoscope,
  Clock,
  Award,
  Phone,
  Star,
  Send,
  MessageSquare,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/ImageGenerate";

function Landing() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/Signup");
  };
  const redirect = (path) => {
    router.push(path);
  };
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoveredStar, setHoveredStar] = useState(0);
  const [feedbackForm, setFeedbackForm] = useState({
    name: "",
    email: "",
    message: "",
    rating: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Feedback submitted:", feedbackForm);
    // Reset form
    setFeedbackForm({
      name: "",
      email: "",
      message: "",
      rating: 0,
    });
    setRating(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-gray-100">
      {/* Previous sections remain unchanged */}
      {/* Navbar */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/80 backdrop-blur-lg border-b border-gray-800 shadow-[0_4px_30px_rgba(0,0,0,0.5)] transform-gpu"
            : "bg-transparent"
        }`}
      >
        <Navbar />

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900 border-b border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <MobileNavLink href="#home">Home</MobileNavLink>
              <MobileNavLink href="/Generateimage">
                Generate Image
              </MobileNavLink>
              <MobileNavLink href="/Chatbot">Chatbot</MobileNavLink>
              <MobileNavLink href="#feedback">Feedback</MobileNavLink>
              <MobileNavLink href="#contact">Contact</MobileNavLink>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4" id="home">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-20 h-20 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <h1 className="text-5xl font-bold leading-tight mb-6 relative">
              Your Health Is Our
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                {" "}
                Top Priority
              </span>
            </h1>
            <p className="text-gray-400 text-lg mb-8">
              Providing exceptional healthcare services with cutting-edge
              technology and compassionate care. Your wellness journey starts
              here.
            </p>
            <div className="flex space-x-4">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(147,51,234,0.3)]">
                Get Started
              </button>
              <button className="border-2 border-purple-500 text-purple-500 px-8 py-3 rounded-full hover:bg-purple-500/10 transform hover:scale-105 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative">
              <img
                src="https://plus.unsplash.com/premium_photo-1739258662666-208c45bb667b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Medical Professional"
                className="rounded-2xl shadow-2xl transform group-hover:scale-105 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section with 3D Cards */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatCard icon={<Users />} number="10k+" text="Happy Patients" />
          <StatCard icon={<Award />} number="15+" text="Years Experience" />
          <StatCard icon={<Stethoscope />} number="100+" text="Specialists" />
          <StatCard icon={<Activity />} number="24/7" text="Emergency Care" />
        </div>
      </section>

      {/* Services Section with Enhanced 3D Cards */}
      <section className="py-20 px-4" id="services">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Heart className="w-12 h-12 text-purple-500" />}
              title="Personalised Treatment Plan"
              description="Expert heart care with advanced diagnostic and treatment options."
            />
            <ServiceCard
              icon={<Activity className="w-12 h-12 text-purple-500" />}
              title="Multimodal ImageText-Text"
              description="Multimodel diagnostics for accurate and timely results."
            />
            <ServiceCard
              icon={<Clock className="w-12 h-12 text-purple-500" />}
              title="Synthetic Data Generation"
              description="Virtual healthcare from the comfort of your home."
            />
            <ServiceCard
              icon={<Clock className="w-12 h-12 text-purple-500" />}
              title="ChatBot"
              description="Virtual healthcare from the comfort of your home."
            />
            <ServiceCard
              icon={<Clock className="w-12 h-12 text-purple-500" />}
              title="TB detection"
              description="Virtual healthcare from the comfort of your home."
            />
          </div>
        </div>
      </section>

      {/* New Feedback Section */}
      

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Book your appointment today and take the first step towards better
            health.
          </p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-full hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            Book Appointment
          </button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

// Component for desktop navigation links
function NavLink({ href, children }) {
  return (
    <a
      href={href}
      className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
    >
      {children}
    </a>
  );
}

// Component for mobile navigation links
function MobileNavLink({ href, children }) {
  return (
    <a
      href={href}
      className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
    >
      {children}
    </a>
  );
}

// Component for statistics cards
function StatCard({ icon, number, text }) {
  return (
    <div className="text-center p-6 bg-gray-900/50 rounded-xl shadow-[0_4px_30px_rgba(0,0,0,0.3)] backdrop-blur-sm border border-gray-800 transform hover:scale-105 transition-all duration-300 group">
      <div className="text-purple-500 flex justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div className="text-2xl font-bold text-white mb-2">{number}</div>
      <div className="text-gray-400">{text}</div>
    </div>
  );
}

// Component for service cards
function ServiceCard({ icon, title, description }) {
  return (
    <div className="group bg-gray-900/50 p-8 rounded-xl shadow-[0_4px_30px_rgba(0,0,0,0.3)] backdrop-blur-sm border border-gray-800 transform hover:scale-105 transition-all duration-300 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative">
        <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-4 text-white">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
}

export default Landing;
