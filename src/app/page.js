"use client";
import Featured from "./components/featured";
import RewriterTool from "./components/rewritertool";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Questions from "./components/question";
import Homepagesection from "./components/homePage";

const Index = () => {
  return (
    <>
      <Navbar />
      <Homepagesection/>
      <Featured />
      <RewriterTool />
      <Questions/>
      <Footer />
    </>
  );
};
export default Index;
