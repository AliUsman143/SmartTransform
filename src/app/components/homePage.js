import Card from "./card";
const Homepagesection = () => {
  return (
    <>
      {/* Section 1 */}
      <section
        className="relative h-screen flex flex-col justify-center items-center bg-cover bg-center text-white"
        style={{
          backgroundImage: "url('/img/bg1.jpg')", // Replace with your image URL
        }}
      >
        <div className="text-center px-6 md:px-12 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            AI-Powered SmartTransform Tools
          </h1>
          <p className="text-lg md:text-xl leading-relaxed">
            Unlock the power of AI with SmartTransform. Convert text into
            speech, generate stunning AI-powered videos, and extract text from
            images with precision. Our advanced tools offer seamless, fast, and
            accurate transformations for content creators, businesses, and
            professionals.
          </p>
        </div>
      </section>

      {/* section 2,3 video and audio */}
      <div className="container-fluid p-0">
        {/* Cards Section Start */}
        <div className="flex flex-col mt-2 w-full lg:max-w-[1320px] mx-auto">
          <Card />
        </div>
      </div>
    </>
  );
};
export default Homepagesection;
