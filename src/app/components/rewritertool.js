import { Rewritertooldata } from "../dataset/data";

const RewriterTool = () => {
  return (
    <div className="container-fluid p-0 mt-4">
      {/* Section Title */}
      <div className="flex justify-center items-center text-center mt-6">
        <div className="w-full sm:w-[600px] lg:w-[800px]">
          <div className="mt-5 w-full lg:max-w-[1320px] mx-auto p-4">
            <h1 className="text-2xl sm:text-3xl font-bold text-indigo-600">
              Who Can Use Our AI-Powered Video & Audio Tools?
            </h1>
            <p className="text-md sm:text-lg mt-4 text-gray-700">
              Whether you're a **content creator, podcaster, music producer,** or **business professional**,  
              our AI-driven video and audio tools help you transform and enhance your media with ease.
            </p>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="mt-8 w-full lg:max-w-[1320px] mx-auto p-7">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8">
          {Rewritertooldata.map((el, idx) => (
            <div 
              key={idx} 
              className="p-6 border-l-4 border-indigo-500 bg-white shadow-lg rounded-lg transition-transform duration-300 hover:scale-105"
            >
              <img src={el.image} alt={el.alt} className="w-16 h-16 mb-4" />
              <h5 className="mb-2 text-2xl font-semibold text-gray-900">{el.title}</h5>
              <p className="text-lg text-gray-600">{el.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RewriterTool;
