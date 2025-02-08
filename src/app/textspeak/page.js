import React from 'react'
import Homepagesection from '../components/homePage';
import Featured from '../components/featured';
import RewriterTool from '../components/rewritertool';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import Questions from '../components/question';
import GeneratoraudioTool from '../components/speechmaker';
const AudioConvertor = () => {
  return (
    <>
       <Navbar/>
        <GeneratoraudioTool/>
       <Homepagesection/>
       <Featured/>
       <RewriterTool/>
       <Questions/>
       <Footer/>
    </>
  )
}

export default AudioConvertor;
