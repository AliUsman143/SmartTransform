"use client";
import Featured from "./components/featured";
import RewriterTool from "./components/rewritertool";
// import FAQs from "./components/FAQ";
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
      {/* <AiTool/> */}
      <RewriterTool />
      {/* <FAQs /> */}
      <Questions/>
      <Footer />
    </>
  );
};
export default Index;
