"use client";
import { useState } from "react";

const TextToImage = () => {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);

  const generateImage = () => {
    if (!text) return;
    setImage("https://via.placeholder.com/400x300?text=Generated+Image");
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-700 p-6">
      <h1 className="text-2xl md:text-3xl font-bold pt-24 text-white lg:mb-10 mb-6 flex items-center">
        📄 AI Text-to-Image Generator
      </h1>

      <div className="shadow-lg rounded-lg p-6 w-full max-w-5xl bg-white  border-2 border-dashed border-gray-300">
        <textarea
          className="w-full p-3 border border-gray-300 rounded-lg text-black"
          placeholder="Enter text to generate image..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows="7" // Set textarea height to 7 rows
        ></textarea>

        <button
          onClick={generateImage}
          className="mt-4 w-52 mx-auto block py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Generate Image
        </button>

        {image && (
          <div className="mt-6">
            <img src={image} alt="Generated" className="w-full rounded-lg shadow-lg" />
          </div>
        )}
      </div>
    </div>
  );
};

export default TextToImage;
