"use client";
import Image from "next/image";
import { FaUsers, FaStar, FaTools } from "react-icons/fa";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-r  from-blue-400 to-purple-500 text-white p-6">
        {/* Header Section */}
        <div className="text-center mt-20">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="mt-2 text-lg">Discover who we are and what we do</p>
        </div>

        {/* About Section */}
        <div className="max-w-4xl mx-auto bg-white text-gray-900 p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <FaUsers /> Who We Are
          </h2>
          <p className="mt-4 text-lg">
            We are a team of passionate developers creating innovative and
            user-friendly web applications. Our goal is to deliver high-quality
            digital experiences that make life easier.
          </p>
        </div>

        {/* Features Section */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-900">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <FaStar className="text-4xl text-blue-600 mx-auto" />
            <h3 className="text-xl font-bold mt-2">Quality Work</h3>
            <p className="text-gray-600">
              We ensure high standards in all our projects.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <FaTools className="text-4xl text-blue-600 mx-auto" />
            <h3 className="text-xl font-bold mt-2">Innovative Tools</h3>
            <p className="text-gray-600">
              We use the latest technologies to develop top-tier solutions.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <FaUsers className="text-4xl text-blue-600 mx-auto" />
            <h3 className="text-xl font-bold mt-2">Dedicated Team</h3>
            <p className="text-gray-600">
              Our experts are committed to your success.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
