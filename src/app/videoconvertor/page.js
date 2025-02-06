import React from 'react'
import AiTool from '../components/AItool'
import Homepagesection from '../components/homePage';
import Featured from '../components/featured';
import RewriterTool from '../components/rewritertool';
// import FAQs from '../components/FAQ';
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
       {/* <FAQs/> */}
       <Footer/>
    </>
  )
}

export default VideoConvertor;
