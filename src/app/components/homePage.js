import Card from "./card";

const Homepagesection = () => {
  return (
    <>
      {/* Section 1 */}
      <section className="relative h-screen flex flex-col justify-center bg-slate-100">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center">
          {/* Left: Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left px-6 md:px-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
              AI-Powered SmartTransform Tools
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-gray-600">
              Unlock the power of AI with SmartTransform. Convert text into
              speech, generate stunning AI-powered videos, and extract text from
              images with precision. Our advanced tools offer seamless, fast, and
              accurate transformations for content creators, businesses, and
              professionals.
            </p>
          </div>

          {/* Right: Image */}
          <div className="lg:w-1/2 flex justify-center">
            <img src="/img/bg1.jpg" alt="AI Tools" className="w-full max-w-lg rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      {/* Section 2 & 3: Cards */}
      <div className="container-fluid p-0">
        <div className="flex flex-col mt-2 w-full lg:max-w-[1320px] mx-auto">
          <Card />
        </div>
      </div>
    </>
  );
};

export default Homepagesection;
