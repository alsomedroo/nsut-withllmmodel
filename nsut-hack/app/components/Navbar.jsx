"use client";
import { Bot } from "lucide-react";
import { redirect } from "next/dist/server/api-utils";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/Signup");
  };
  const redirect = (path) => {
    router.push(path);
  };
  return (
    <nav className="bg-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Bot
              size={32}
              className="text-green-500 cursor-pointer"
              onClick={() => redirect("/")}
            />
            <span className="text-white text-xl font-bold ml-2">HealthAI</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-white">
              Home
            </Link>
            <Link
              href="/Generateimage"
              className="text-gray-300 hover:text-white"
            >
              Generate Image
            </Link>
            <Link href="/ChatBot" className="text-gray-300 hover:text-white">
              Chatbot
            </Link>
            
            {/* <Link href="#contact" className="text-gray-300 hover:text-white">
              Contact
            </Link> */}
            <button
              href="#"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(147,51,234,0.3)]"
            >
              Feedback
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
