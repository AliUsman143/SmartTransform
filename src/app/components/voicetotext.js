'use client';
import { useState } from 'react';
import axios from 'axios';

const VoiceToText = () => {
  const [text, setText] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [file, setFile] = useState(null);
  let recognition;

  // Browser-based speech recognition
  if (typeof window !== 'undefined' && 'webkitSpeechRecognition' in window) {
    recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    recognition.onresult = (event) => {
      let transcript = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        transcript += event.results[i][0].transcript;
      }
      setText(transcript); // Show text when user speaks
    };
  }

  // Start listening from mic
  const handleStartListening = () => {
    if (!recognition) {
      alert('Speech recognition is not supported in this browser.');
      return;
    }
    setIsListening(true);
    setText(''); // Clear previous text
    recognition.start();
  };

  // Stop listening
  const handleStopListening = () => {
    if (recognition) {
      setIsListening(false);
      recognition.stop();
    }
  };

  // Handle File Upload
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Convert Audio File to Text (API Call)
  const handleConvertFile = async () => {
    if (!file) {
      alert('Please upload an audio file.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('model', 'whisper-1'); // OpenAI Whisper model

    try {
      const response = await axios.post('https://api.openai.com/v1/audio/transcriptions', formData, {
        headers: {
          'Authorization': `Bearer YOUR_OPENAI_API_KEY`,
          'Content-Type': 'multipart/form-data',
        },
      });

      setText(response.data.text); // Show text when file is transcribed
    } catch (error) {
      console.error('Error converting audio:', error);
      alert('Error converting audio file.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      {/* Tool Heading */}
      <h2 className="text-3xl font-bold text-blue-400 mb-4">🎙️ Voice-to-Text Converter</h2>

      {/* Voice Input Section */}
      <div className="w-full max-w-6xl bg-gray-800 p-6 rounded-lg shadow-lg">
        <label className="block text-lg mb-2">
          Speak into your microphone or upload an audio file:
        </label>

        {/* Show textarea only if text exists */}
        {text && (
          <textarea
            className="w-full h-40 p-4 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Your spoken words or transcribed text will appear here..."
            value={text}
            readOnly
            rows={10}
          ></textarea>
        )}

        {/* Buttons for Recording */}
        <div className="flex justify-center gap-4 mt-4">
          {!isListening ? (
            <button
              onClick={handleStartListening}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
            >
              🎤 Start Listening
            </button>
          ) : (
            <button
              onClick={handleStopListening}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
            >
              ⏹️ Stop Listening
            </button>
          )}
        </div>

        {/* File Upload */}
        <div className="mt-6">
          <input
            type="file"
            accept="audio/*"
            onChange={handleFileChange}
            className="block w-full text-white bg-gray-800 border border-gray-600 p-2 rounded-lg"
          />
          <button
            onClick={handleConvertFile}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg mt-4 transition-all duration-300"
          >
            🔄 Convert Audio File to Text
          </button>
        </div>
      </div>
    </div>
  );
};

export default VoiceToText;
