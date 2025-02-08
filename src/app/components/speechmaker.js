'use client';
import { useState } from 'react';

const TextToVoice = () => {
  const [text, setText] = useState('');
  const [voiceType, setVoiceType] = useState('female');
  const maxWords = 3000;

  const handleTextToSpeech = () => {
    if (text.trim() === '') return;
    
    const utterance = new SpeechSynthesisUtterance(text);
    const voices = speechSynthesis.getVoices();
    
    // Select voice based on gender
    utterance.voice = voices.find((voice) =>
      voiceType === 'male' ? voice.name.includes('Male') : voice.name.includes('Female')
    ) || voices[0];

    speechSynthesis.speak(utterance);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-10 min-h-screen bg-gradient-to-r from-purple-800 to-pink-600 text-white p-6">
      {/* Tool Heading */}
      <h2 className="text-3xl font-bold text-white mb-3">🎙️ AI Text-to-Voice Generator</h2>

      {/* Input Section */}
      <div className="w-full max-w-4xl bg-white p-8 rounded-xl shadow-lg text-gray-900">
        <label className="block text-lg font-medium mb-2">
          Enter text to convert into speech:
        </label>
        <textarea
          className="w-full h-40 p-4 rounded-lg bg-gray-100 border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none"
          placeholder={`Type your text here... (Max ${maxWords} words)`}
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>

        {/* Max Word Count Message */}
        <p className="text-gray-500 text-sm mt-2">⚠️ You can enter up to {maxWords} words.</p>

        {/* Voice Selection */}
        <label className="block text-lg font-medium mt-4">Select Voice Type:</label>
        <select
          className="w-full mt-2 p-3 rounded-lg bg-gray-100 border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none"
          value={voiceType}
          onChange={(e) => setVoiceType(e.target.value)}
        >
          <option value="female">Female Voice</option>
          <option value="male">Male Voice</option>
        </select>

        {/* Convert to Voice Button */}
        <button
          onClick={handleTextToSpeech}
          className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-lg transition-all duration-300"
        >
          🎧 Convert to Voice
        </button>
      </div>
    </div>
  );
};

export default TextToVoice;
