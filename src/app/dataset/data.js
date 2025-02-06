import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import HighlightIcon from '@mui/icons-material/Highlight';
import SchoolIcon from '@mui/icons-material/School';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import FlareIcon from '@mui/icons-material/Flare';





// Cards data for Text to Video (SmartVidz)
const CardDataVideo = [
  {
    id: 1,
    image: "https://cdn-icons-png.flaticon.com/512/4843/4843094.png",
    title: "Enter Text",
    content: "Provide the text or script you want to transform into a video.",
  },
  {
    id: 2,
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    title: "Select Visuals & Voice",
    content: "Choose AI-generated visuals, voiceovers, and background settings.",
  },
  {
    id: 3,
    image: "https://cdn-icons-png.flaticon.com/512/1828/1828919.png",
    title: "Generate Video",
    content: "Click 'Generate' and let AI convert your text into an engaging video.",
  },
  {
    id: 4,
    image: "https://cdn-icons-png.flaticon.com/512/4436/4436481.png",
    title: "Download & Share",
    content: "Download the AI-generated video and share it anywhere instantly.",
  },
];

// Cards data for Text to Speech (SmartSpeak)
const CardDataAudio = [
  {
    id: 1,
    image: "https://cdn-icons-png.flaticon.com/512/1665/1665735.png",
    title: "Enter or Upload Text",
    content: "Type or upload a text file to convert into natural-sounding speech.",
  },
  {
    id: 2,
    image: "https://cdn-icons-png.flaticon.com/512/3461/3461335.png",
    title: "Select Language & Voice",
    content: "Pick from multiple AI-generated voices and languages.",
  },
  {
    id: 3,
    image: "https://cdn-icons-png.flaticon.com/512/1046/1046841.png",
    title: "Generate Speech",
    content: "Click 'Convert' and instantly hear your text in lifelike speech.",
  },
  {
    id: 4,
    image: "https://cdn-icons-png.flaticon.com/512/2913/2913974.png",
    title: "Download Audio",
    content: "Save your speech as an MP3 file and use it anywhere.",
  },
];

// Cards data for Text Extraction from Image (SmartScan)
const CardDataExtraction = [
  {
    id: 1,
    image: "https://cdn-icons-png.flaticon.com/512/1829/1829586.png",
    title: "Upload Image",
    content: "Select an image containing text that you want to extract.",
  },
  {
    id: 2,
    image: "https://cdn-icons-png.flaticon.com/512/2910/2910766.png",
    title: "AI Scanning",
    content: "Our AI scans the image and detects the text with high accuracy.",
  },
  {
    id: 3,
    image: "https://cdn-icons-png.flaticon.com/512/1828/1828970.png",
    title: "Extract & Preview",
    content: "View the extracted text and make necessary edits.",
  },
  {
    id: 4,
    image: "https://cdn-icons-png.flaticon.com/512/1828/1828919.png",
    title: "Copy or Download",
    content: "Copy the extracted text or download it as a document.",
  },
];



// Featured Cards
const FeaturedCardData=[
    {
        id: "01",
        type: "Video",
        labelColor: "#FF8343",
        style: { color: "#FF8343" },
        title: "Fast and Accurate",
        content: "Get instant and accurate results for all your video needs with our cutting-edge platform.",
      },
      {
        id: "02",
        type: "Audio",
        labelColor: "green",
        style: { color: "green" },
        title: "Free to Use",
        content: "Access premium-quality audio features without spending a single penny.",
      },
      {
        id: "03",
        type: "Video",
        labelColor: "#CC2B52",
        style: { color: "#CC2B52" },
        title: "Customizable Settings",
        content: "Adjust playback speed, quality, and captions to enhance your viewing experience.",
      },
      {
        id: "04",
        type: "Audio",
        labelColor: "#4C4B16",
        style: { color: "#4C4B16" },
        title: "Background Playback",
        content: "Listen to your favorite tracks while multitasking with other applications.",
      },
      {
        id: "05",
        type: "Video",
        labelColor: "#EB5B00",
        style: { color: "#EB5B00" },
        title: "High-Quality Result",
        content: "Enjoy videos with crystal-clear resolution and exceptional quality every time.",
      },
      {
        id: "06",
        type: "Audio",
        labelColor: "#50B498",
        style: { color: "#50B498" },
        title: "Connected With Other Tools",
        content: "Integrate seamlessly with other tools to enhance productivity and workflow efficiency.",
      },
];



const Rewritertooldata = [
    {
      id: 1,
      image: "https://cdn-icons-png.flaticon.com/512/354/354637.png", // Video Icon
      alt: "Video Content Creators",
      title: "Video Content Creators",
      content: "Video content creators can use our tool to convert videos into various formats or extract audio from videos. This helps in repurposing content for different platforms, making it easier to share and edit.",
    },
    {
      id: 2,
      image: "https://cdn-icons-png.flaticon.com/512/445/445218.png", // Audio Converter Icon
      alt: "Audio Editors",
      title: "Audio Editors",
      content: "Audio editors can use our tool to convert audio files into different formats or enhance audio quality. Whether you’re working on podcasts, interviews, or music tracks, our tool makes it easy to manage your audio files.",
    },
    {
      id: 3,
      image: "https://cdn-icons-png.flaticon.com/512/3662/3662314.png", // Podcast Icon
      alt: "Podcasters",
      title: "Podcasters",
      content: "Podcasters can use our platform to convert video content into audio, making it easier to upload and share episodes across different audio platforms. The tool also helps in editing and refining the audio quality for a better listener experience.",
    },
    {
      id: 4,
      image: "https://cdn-icons-png.flaticon.com/512/3318/3318177.png", // Audio Recording Icon
      alt: "Music Producers",
      title: "Music Producers",
      content: "Music producers can take advantage of our tool to convert, edit, and enhance various audio tracks. Whether it’s mixing tracks or converting audio files, our platform helps producers streamline their audio workflow.",
    },
  ];
  


// faqs data video and audio 
const FAQsData = [
    {
      id: 1,
      questionNo: "Q1: ",
      question: "How do I convert my video to audio?",
      answer: "To convert your video to audio, simply upload the video file to our platform. The converter will extract the audio and provide you with a downloadable audio file in your preferred format."
    },
    {
      id: 2,
      questionNo: "Q2: ",
      question: "Can I convert audio to video?",
      answer: "Yes, you can convert your audio file into a video. Just upload your audio file, and choose an image or video background, and our converter will generate a video for you with the audio."
    },
    {
      id: 3, 
      questionNo: "Q3: ",
      question: "What formats do you support for video and audio conversion?",
      answer: "We support a wide range of formats including MP4, MP3, WAV, AVI, and more. You can easily convert your files into the desired format using our platform."
    },
    {
      id: 4,
      questionNo: "Q4: ",
      question: "Is it safe to use the converter tool?",
      answer: "Yes, our platform ensures the safety and privacy of your files. We do not store any of your uploaded or converted files beyond the session. You can use the tool securely and with confidence."
    },
    {
      id: 5,
      questionNo: "Q5: ",
      question: "Can I batch convert multiple files at once?",
      answer: "Yes, you can batch convert multiple audio or video files at once. Simply upload all your files, and our tool will process them simultaneously, saving you time."
    }
  ];
  




export {CardDataVideo, CardDataAudio, CardDataExtraction,FeaturedCardData,Rewritertooldata,FAQsData};