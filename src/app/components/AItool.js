'use client';
import { useState } from 'react';

const TextToVideo = () => {
  const [text, setText] = useState('');
  const [showVideo, setShowVideo] = useState(false);
  const maxWords = 3000;

  const handleGenerateVideo = () => {
    if (text.trim() !== '') {
      setShowVideo(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      {/* Tool Heading */}
      <h2 className="text-3xl font-bold text-blue-400 mb-4">🎥 AI Text-to-Video Generator</h2>

      {/* Text Input Section */}
      <div className="w-full max-w-6xl bg-gray-800 p-6 rounded-lg shadow-lg">
        <label className="block text-lg mb-2">
          Give me a topic, premise, and detailed instructions in any language:
        </label>
        <textarea
          className="w-full h-32 p-4 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
          placeholder={`Type your text here... (Max ${maxWords} words)`}
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>

        {/* Max Word Count Message */}
        <p className="text-gray-400 text-sm mt-2">⚠️ You can enter up to {maxWords} words.</p>

        {/* Generate Button */}
        <button
          onClick={handleGenerateVideo}
          className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-all duration-300"
        >
          Generate a video ✨
        </button>
      </div>

      {/* Video Preview (Appears When Text is Typed) */}
      {showVideo && (
        <div className="mt-8 w-full max-w-2xl p-4 bg-gray-800 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Generated Video Preview:</h3>
          <div className="relative w-full">
            <video
              className="w-full h-auto rounded-lg border border-gray-600"
              controls
            >
              <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default TextToVideo;
