"use client";
import React, { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebarr";
import Header from "../../components/header/Header";
import { FaFileImage, FaFileAlt, FaVideo, FaMicrophone, FaFileAudio } from "react-icons/fa";

const tools = [
  { name: "Image to Text Users", icon: <FaFileImage size={40} />, bg: "bg-blue-100", text: "text-blue-600" },
  { name: "Text to Image Users", icon: <FaFileAlt size={40} />, bg: "bg-green-100", text: "text-green-600" },
  { name: "Text to Video Users", icon: <FaVideo size={40} />, bg: "bg-purple-100", text: "text-purple-600" },
  { name: "Text to Voice Users", icon: <FaMicrophone size={40} />, bg: "bg-yellow-100", text: "text-yellow-600" },
  { name: "Voice to Text Users", icon: <FaFileAudio size={40} />, bg: "bg-red-100", text: "text-red-600" },
];

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      <div className="flex flex-1">
        <Sidebar isSidebarOpen={isSidebarOpen} />
        <main className="flex-1 p-6 overflow-y-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <div key={index} className={`p-6 rounded-lg shadow-md flex items-center space-x-4 ${tool.bg}`}>
                <div className={`p-4 rounded-full bg-white ${tool.text}`}>{tool.icon}</div>
                <h2 className={`text-xl font-semibold ${tool.text}`}>{tool.name}</h2>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
