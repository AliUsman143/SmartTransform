"use client";
import React, { useState, useEffect } from "react";
import LinkingWithSidebar from "../components/LinkingWithSidebar";
import Header from "../components/Header";

import { FaUsers, FaCamera, FaTicketAlt, FaDatabase } from "react-icons/fa";
function Page() {
  const [data, setData] = useState([]);
  const endpoint = "users";
  const cardData = [
    {
      title: "User",
      count: "500",
      percentage: "60%",
      icon: <FaUsers />,
      color: "bg-purple-500",
    },
    {
      title: "Camera",
      count: "600",
      percentage: "60%",
      icon: <FaCamera />,
      color: "bg-orange-500",
    },
    {
      title: "Submitted Ticket",
      count: "400",
      percentage: "60%",
      icon: <FaTicketAlt />,
      color: "bg-blue-500",
    },
  ];

  return (
    <div className="flex h-screen">
      <LinkingWithSidebar />
      <div className="flex-1 flex flex-col overflow-auto">
        <Header />
        <div className="flex-1 bg-gray-100 mt-12 lg:ml-64 ml-20">
          <div className="min-h-screen bg-gray-100 p-8">
            <h1 className="text-3xl font-bold  mb-8">
              Dashboard
            </h1>

            {/* Cards Container */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 transition-transform scale-105 duration-200">
              {cardData.map((card, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-lg shadow-md ${card.color} text-white`}
                >
                  <div className="flex items-center space-x-4">
                    <div>
                    <div className="text-4xl">{card.icon}</div>
                      <h2 className="text-lg font-bold">{card.title}</h2>
                      <p className="text-2xl font-bold">{card.count}</p>
                      <p className="text-sm">Present user {card.percentage}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
