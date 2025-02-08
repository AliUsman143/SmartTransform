import React from 'react'
import Homepagesection from '../components/homePage';
import Featured from '../components/featured';
import RewriterTool from '../components/rewritertool';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import Questions from '../components/question';
import TextExtraction from '../components/imgtotext';
const AudioConvertor = () => {
  return (
    <>
       <Navbar/>
        <TextExtraction/>
        
       <Homepagesection/>
       <Featured/>
       <RewriterTool/>
       <Questions/>
       <Footer/>
    </>
  )
}

export default AudioConvertor;
