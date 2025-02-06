import React from 'react'
import AiTool from '../components/AItool'
import Homepagesection from '../components/homePage';
import Featured from '../components/featured';
import RewriterTool from '../components/rewritertool';
// import FAQs from '../components/FAQ';
import Footer from '../components/footer';
// import GeneratoraudioTool from '../components/speechmaker';
import Navbar from '../components/navbar';
import Questions from '../components/question';
import GeneratoraudioTool from '../components/speechmaker';
const AudioConvertor = () => {
  return (
    <>
       <Navbar/>
        {/* <AiTool/> */}
        <GeneratoraudioTool/>
        
       <Homepagesection/>
       <Featured/>
       <RewriterTool/>
       {/* <FAQs/> */}
       <Questions/>
       <Footer/>
    </>
  )
}

export default AudioConvertor;
