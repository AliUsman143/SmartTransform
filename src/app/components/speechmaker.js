"use client";
import React, { useState } from "react";
import Swal from "sweetalert2";
import UploadIcon from "@mui/icons-material/Upload";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";

const speedvalue = [
  { value: "no", label: "Normal" },
  { value: "125", label: "1.25x" },
  { value: "15", label: "1.5x" },
  { value: "175", label: "1.75x" },
  { value: "2", label: "2x" },
];
const languages = [
  { value: "en", label: "English" },
  { value: "es", label: "Spanish" },
  { value: "fr", label: "French" },
];

const GeneratoraudioTool = () => {
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);

  const handleWordLimit = (e) => {
    const inputText = e.target.value;
    const words = inputText.split(/\s+/).filter((word) => word.length > 0);
    if (words.length <= 1500) {
      setText(inputText);
      setWordCount(words.length);
    } else {
      alert("You can only write up to 1500 words.");
    }
  };

  // Voice upload
  const [fileName, setFileName] = useState("");
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && (file.type === "audio/mpeg" || file.type === "audio/wav")) {
      setFileName(file.name);
      Swal.fire({
        icon: "success",
        title: "File uploaded successfully",
        text: `Uploaded: ${file.name}`,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Invalid File",
        text: "Only .mp3 or .wav files are supported!",
      });
    }
  };

  // Voice speed
  const [selectedspeed, setSelectedspeed] = useState("no");
  const handlespeed = (event) => {
    setSelectedspeed(event.target.value);
  };

  // Language to convert
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };
  // convert audio
  const handleConvertAudio = () => {
    alert("Audio conversion is in progress!");
  };
  // download audio
  const handleDownloadAudio = () => {
    const link = document.createElement("a");
    link.href = "/path/to/converted-audio.mp3";
    link.download = "converted-audio.mp3";
    link.click();
  };
  return (
   <>
    <div className="container mx-auto px-4 sm:px-8 mt-28 items-center text-center md:text-4xl text-2xl font-bold ">
        Convert your Text to Audio
      </div>
    <div className="container mx-auto px-4 sm:px-8 mt-4  h-screen  ">
      <div className="border-2 p-4 py-10 bg-gray-100">
        <div className="flex flex-col">
          <textarea
            id="speechArea"
            rows="3"
            className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Start writing your speech here..."
            onChange={handleWordLimit}
            value={text}
          ></textarea>
          <p
            className={`text-sm mt-2 ${
              wordCount > 1500 ? "text-red-500" : "text-gray-500"
            }`}
          >
            {wordCount}/1500 words
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:gap-20 gap-4 mt-2 md:px-6">
          {/* Voice Upload Section */}
          <div className="flex flex-col">
            <label className="text-lg font-semibold text-gray-700 mb-1">
              Voice Upload
            </label>
            <label
              htmlFor="audioUpload"
              className="cursor-pointer flex gap-2 bg-blue-500 text-white px-9 py-4 rounded-md hover:bg-blue-600"
            >
              <UploadIcon />
              Upload
              <input
                id="audioUpload"
                type="file"
                accept=".mp3,.wav"
                className="hidden"
                onChange={handleFileUpload}
              />
            </label>
            {fileName && (
              <p className="mt-4 text-sm text-gray-600">
                Selected File: <span className="font-medium">{fileName}</span>
              </p>
            )}
          </div>

          {/* Voice Speed Section */}
          <div className="flex flex-col">
            <Box
              component="form"
              sx={{ "& .MuiTextField-root": { width: "100%" } }}
              noValidate
              autoComplete="off"
            >
              <label className="text-lg font-semibold text-gray-700 mb-1">
                Voice Speed
              </label>
              <TextField
                id="outlined-select-speed"
                select
                label="Playback Speed"
                value={selectedspeed}
                onChange={handlespeed}
                fullWidth
                className="mt-2"
              >
                {speedvalue.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
          </div>

          {/* Language to Convert Section */}
          <div className="flex flex-col">
            <Box
              component="form"
              sx={{ "& .MuiTextField-root": { m: 1, width: "100%" } }}
              noValidate
              autoComplete="off"
            >
              <label className="text-lg font-semibold text-gray-700 mb-1">
                Select Language
              </label>
              <TextField
                id="outlined-select-language"
                select
                label="Select Language"
                value={selectedLanguage}
                onChange={handleLanguageChange}
                helperText="Please select your language"
                fullWidth
              >
                <MenuItem value="" disabled>
                  Select a language
                </MenuItem>
                {languages.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
          </div>
        </div>
        <div>
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 md:px-6">
            <Button
              variant="contained"
              color="primary"
              onClick={handleConvertAudio}
              className="w-full sm:w-auto py-4 mb-5"
            >
              Convert Audio
            </Button>

            <Button
              variant="outlined"
              color="secondary"
              startIcon={<DownloadIcon />}
              onClick={handleDownloadAudio}
              className="w-full sm:w-auto py-4 mb-5"
            >
              Download Audio
            </Button>
          </div>
        </div>
      </div>
    </div>
   </>
  );
};

export default GeneratoraudioTool;
