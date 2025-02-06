"use client";

import * as React from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import UploadFileSharpIcon from "@mui/icons-material/UploadFileSharp";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";

const languages = [
  {
    value: "en",
    label: "English",
  },
  {
    value: "es",
    label: "Spanish",
  },
  {
    value: "fr",
    label: "French",
  },
];

const AiTool = () => {
  const [file, setFile] = useState(null);

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];

    if (uploadedFile && uploadedFile.type === "video/mp4") {
      setFile(uploadedFile);
      Swal.fire({
        icon: "success",
        title: "File uploaded successfully",
        text: `Uploaded: ${uploadedFile.name}`,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Invalid File",
        text: "Only .mp4 files are allowed!",
      });
    }
  };

  const [selectedLanguage, setSelectedLanguage] = useState("");

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const handleConvertVideo = () => {
    alert("Video conversion is in progress!");
  };

  const handleDownloadVideo = () => {
    const link = document.createElement("a");
    link.href = "/sample-video.mp4";
    link.download = "converted-video.mp4";
    link.click();
  };

  return (
    <>
      <div className="container mx-auto px-4 sm:px-8 mt-32 items-center text-center md:text-4xl text-2xl font-bold mb-6 ">
        Convert your Video
      </div>
      <div className="container mx-auto px-4 sm:px-8  xl:px-14 h-screen ">
        <div className="border-2 lg:p-4 md:p-3 p-2 lg:py-10 md:py-7 py-5 h-auto bg-gray-100">
          {/* File upload and size info */}
          <div className="flex justify-between">
            <div className="text-gray-500 text-sm">Max size: 30MB</div>
            <div className="text-gray-500 text-sm">Only .mp4 is allowed</div>
          </div>

          {/* File upload icon and status */}
          <div className="flex flex-col justify-center items-center">
            <label
              htmlFor="videoUpload"
              className="flex items-center justify-center cursor-pointer shadow-lg"
            >
              <UploadFileSharpIcon className="md:h-16 md:w-16 h-10 w-10" />
              <input
                id="videoUpload"
                type="file"
                accept=".mp4"
                className="hidden"
                onChange={handleFileUpload}
              />
            </label>
            <div className="mt-2">Upload Video</div>
            {file && (
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-700">Selected File:</p>
                <p className="text-sm font-bold">{file.name}</p>
              </div>
            )}
          </div>

          <div className="text-gray-500 text-sm mt-2">Max length: 1:00 min</div>
        </div>

        {/* Language selector and buttons */}
        <div className="mt-6 flex flex-col lg:flex-row justify-between gap-4 lg:gap-10">
          {/* Language Selector */}
          <div>
            <Box
              component="form"
              sx={{ "& .MuiTextField-root": { m: 1, width: "100%" } }}
              noValidate
              autoComplete="off"
            >
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

          <div>
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button
                variant="contained"
                color="primary"
                onClick={handleConvertVideo}
                className="w-full sm:w-auto py-4 mb-5"
              >
                Convert Video
              </Button>

              <Button
                variant="outlined"
                color="secondary"
                startIcon={<DownloadIcon />}
                onClick={handleDownloadVideo}
                className="w-full sm:w-auto py-4 mb-5"
              >
                Download Video
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiTool;
