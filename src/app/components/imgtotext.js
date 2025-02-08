'use client';
import { useState } from 'react';
import Tesseract from 'tesseract.js';

const TextExtraction = () => {
  const [image, setImage] = useState(null);
  const [extractedText, setExtractedText] = useState('');
  const [loading, setLoading] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      setExtractedText(''); // Reset previous text
    }
  };

  const handleExtractText = async () => {
    if (!image) return;
    
    setLoading(true);
    try {
      const { data } = await Tesseract.recognize(image, 'eng');
      setExtractedText(data.text);
    } catch (error) {
      setExtractedText('Failed to extract text. Try again.');
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-700 to-blue-500 text-white p-6">
      {/* Tool Heading */}
      <h2 className="text-3xl font-bold text-white mb-6">🖼️ AI Text Extraction Tool</h2>

      {/* Upload & Extract Section */}
      <div className="w-full max-w-6xl bg-white p-12 rounded-xl shadow-lg text-gray-900">
        <label className="block text-lg font-medium mb-2">Upload an Image:</label>
        <input
          type="file"
          accept="image/*"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          onChange={handleImageUpload}
        />

        {/* Display Image Preview */}
        {image && (
          <div className="mt-4">
            <img src={image} alt="Uploaded" className="w-full rounded-lg shadow-md" />
          </div>
        )}

        {/* Extract Text Button */}
        <button
          onClick={handleExtractText}
          className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-all duration-300"
          disabled={loading}
        >
          {loading ? 'Extracting Text...' : 'Extract Text 📝'}
        </button>

        {/* Display Extracted Text */}
        {extractedText && (
          <div className="mt-6 p-4 bg-gray-100 rounded-lg border border-gray-300">
            <h3 className="text-lg font-semibold mb-2">Extracted Text:</h3>
            <p className="text-gray-800 whitespace-pre-wrap">{extractedText}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TextExtraction;
