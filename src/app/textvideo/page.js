import React from 'react'
import AiTool from '../components/AItool'
import Homepagesection from '../components/homePage';
import Featured from '../components/featured';
import RewriterTool from '../components/rewritertool';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
const VideoConvertor = () => {
  return (
    <>
       <Navbar/>
        <AiTool/>
       <Homepagesection/>
       <Featured/>
       <RewriterTool/>
       <Footer/>
    </>
  )
}

export default VideoConvertor;
