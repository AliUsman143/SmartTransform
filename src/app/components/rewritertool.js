import { Rewritertooldata } from "../dataset/data";

const RewriterTool = () => {
  return (
    <div className="container-fluid p-0 mt-4">
      {/* Section Title */}
      <div className="flex justify-center items-center text-center mt-6">
        <div className="w-full sm:w-[600px] lg:w-[800px]">
          <div className="mt-5 w-full lg:max-w-[1320px] mx-auto p-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-indigo-600 mb-4">
              Who Can Use Our AI-Powered Video & Audio Tools?
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Whether you're a <strong>content creator</strong>, <strong>podcaster</strong>, <strong>music producer</strong>, or <strong>business professional</strong>,  
              our AI-driven video and audio tools help you transform and enhance your media with ease.
            </p>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="mt-12 w-full lg:max-w-[1320px] mx-auto px-4">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8">
          {Rewritertooldata.map((el, idx) => (
            <div 
              key={idx} 
              className="p-8 bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center space-x-6">
                <img src={el.image} alt={el.alt} className="w-20 h-20" />
                <div>
                  <h5 className="text-2xl font-bold text-gray-900 mb-2">{el.title}</h5>
                  <p className="text-lg text-gray-600">{el.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RewriterTool;