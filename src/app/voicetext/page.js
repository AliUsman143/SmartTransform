import React from 'react'
import Homepagesection from '../components/homePage';
import Featured from '../components/featured';
import RewriterTool from '../components/rewritertool';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import Questions from '../components/question';
import VoiceToText from '../components/voicetotext';
const AudioConvertor = () => {
  return (
    <>
       <Navbar/>
       <VoiceToText/>
       <Homepagesection/>
       <Featured/>
       <RewriterTool/>
       <Questions/>
       <Footer/>
    </>
  )
}

export default AudioConvertor;
