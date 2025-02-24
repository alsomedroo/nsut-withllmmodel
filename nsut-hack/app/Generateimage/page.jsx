"use client";

import { useState } from "react";
import {
  Activity,
  Brain,
  Heart,
  Trees as Lungs,
  Microscope,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/ImageGenerate";
import ProtectedRoute from "../components/ProtectedRoutes";

export default function Generate() {
  const [prompt, setPrompt] = useState("");
  const [responseData, setResponseData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("general");

  const fetchData = async () => {
    setLoading(true);
    setResponseData(null);
    try {
      const res = await fetch("http://localhost:5000/api/generate-image", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();
      console.log("API Response:", data);

      if (data.image) {
        setResponseData(`data:image/jpeg;base64,${data.image}`);
      } else {
        console.error("Image data not found in API response:", data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  };

  const tabContent = {
    general: "Describe any general symptoms or conditions.",
    brain: "Focus on neurological symptoms or brain-related conditions.",
    heart: "Describe cardiovascular symptoms or heart-related issues.",
    lungs: "Detail respiratory symptoms or lung-related conditions.",
    microscopic: "Describe symptoms related to cellular or microscopic issues.",
  };

  return (
    <ProtectedRoute>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white p-4">
        <div className="w-full max-w-3xl bg-gray-900 rounded-xl shadow-2xl p-8">
          <h1 className="text-3xl font-bold mb-6 text-blue-400 text-center">
            Medical Image Generator
          </h1>
          <p className="text-gray-400 mb-6 text-center">
            Describe your symptoms or condition to generate a medical image
          </p>

          <div className="mb-6">
            <div className="flex justify-center space-x-4 mb-4">
              {Object.entries({
                general: <Activity size={24} />,
                brain: <Brain size={24} />,
                heart: <Heart size={24} />,
                lungs: <Lungs size={24} />,
                microscopic: <Microscope size={24} />,
              }).map(([key, icon]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`p-2 rounded-full ${
                    activeTab === key
                      ? "bg-blue-500 text-white"
                      : "bg-gray-700 text-gray-400"
                  } hover:bg-blue-400 hover:text-white transition-colors`}
                >
                  {icon}
                </button>
              ))}
            </div>
            <p className="text-sm text-gray-400 text-center">
              {tabContent[activeTab]}
            </p>
          </div>

          <input
            type="text"
            placeholder="Enter a description of your symptoms..."
            className="w-full p-3 rounded-lg border border-gray-600 bg-gray-800 text-white mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <button
            onClick={fetchData}
            className={`w-full bg-blue-500 text-white px-4 py-3 rounded-lg font-semibold transition-colors ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
            }`}
            disabled={loading}
          >
            {loading ? "Generating..." : "Generate Medical Image"}
          </button>

          {responseData && (
            <div className="mt-8 p-4 bg-gray-800 rounded-lg">
              <img
                src={responseData || "/placeholder.svg"}
                alt="Generated Medical Image"
                className="w-full rounded-lg shadow-md"
              />
            </div>
          )}
        </div>
      </div>
      <Footer />
    </ProtectedRoute>
  );
}
