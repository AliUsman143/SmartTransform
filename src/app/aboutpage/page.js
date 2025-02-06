import Image from "next/image";

import Footer from '../components/footer';
import Navbar from "../components/navbar";
const AboutUs = () => {
  return (
    <>
  <Navbar/>
    <section className=" py-16 mt-16 px-6 md:px-12">
      <div className="container mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">About Us</h2>
        
        {/* Intro Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Who We Are</h3>
            <p className="text-gray-600 leading-relaxed">
              We are a team of passionate developers dedicated to building tools that make life easier. Our mission is to empower individuals and businesses to communicate effectively across languages and mediums.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              By leveraging cutting-edge technologies, we break down barriers and connect the world in ways never imagined before.
            </p>
          </div>
          <div className="relative h-64 w-full">
            <Image
              src="/img/aboutus1.jpg" // Replace this with your image path
              alt="Who We Are"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-16">
          <div className="relative h-64 w-full">
            <Image
              src="/img/aboutus2.jpg" // Replace this with your image path
              alt="Our Vision"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-md"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              Our vision is to empower people to connect globally by eliminating language barriers. Through innovation, we make tools that help anyone, anywhere communicate effectively and share ideas with ease.
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-700 text-center mb-8">What We Offer</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 shadow-md rounded-lg">
              <h4 className="text-lg font-semibold text-gray-700 mb-3">Video Dubbing Tool</h4>
              <p className="text-gray-600">
                Convert videos into multiple languages effortlessly, reaching a global audience with ease.
              </p>
            </div>
            <div className="bg-white p-6 shadow-md rounded-lg">
              <h4 className="text-lg font-semibold text-gray-700 mb-3">Text-to-Speech Tool</h4>
              <p className="text-gray-600">
                Transform written text into high-quality, natural voice output in various languages and accents.
              </p>
            </div>
            <div className="bg-white p-6 shadow-md rounded-lg">
              <h4 className="text-lg font-semibold text-gray-700 mb-3">Custom Solutions</h4>
              <p className="text-gray-600">
                Tailor our tools to your specific needs with features like voice styles, accents, and more.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Our Mission</h3>
          <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
            To create tools that break language barriers, allowing everyone to communicate and share ideas effectively, no matter where they are.
          </p>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default AboutUs;
