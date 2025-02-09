import React from 'react'
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import GeneratoraudioTool from '../components/speechmaker';
const AudioConvertor = () => {
  return (
    <>
       <Navbar/>
        <GeneratoraudioTool/>
       <Footer/>
    </>
  )
}

export default AudioConvertor;
