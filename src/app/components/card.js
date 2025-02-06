import { CardDataVideo, CardDataAudio, CardDataExtraction } from "../dataset/data";

const Card = () => {
  return (
    <>
      {/* Section 2 - SmartVidz: Text to Video */}
      <div className="p-4 mt-6">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">SmartVidz: Text to Video</h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6">
          {CardDataVideo?.length > 0 ? (
            CardDataVideo.map((el, idx) => (
              <div
                key={idx}
                className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300"
              >
                <img src={el.image} alt="cards" className="w-16 h-16 mx-auto" />
                <h5 className="mt-5 text-xl font-medium text-gray-900 text-center">{el.title}</h5>
                <p className="mt-3 text-lg font-normal text-gray-600 text-center">{el.content}</p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No video data available.</p>
          )}
        </div>
      </div>

      {/* Section 3 - SmartSpeak: Text to Speech */}
      <div className="p-4 mt-12">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">SmartSpeak: Text to Speech</h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6">
          {CardDataAudio?.length > 0 ? (
            CardDataAudio.map((el, idx) => (
              <div
                key={idx}
                className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300"
              >
                <img src={el.image} alt="cards" className="w-16 h-16 mx-auto" />
                <h5 className="mt-5 text-xl font-medium text-gray-900 text-center">{el.title}</h5>
                <p className="mt-3 text-lg font-normal text-gray-600 text-center">{el.content}</p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No audio data available.</p>
          )}
        </div>
      </div>

      {/* Section 4 - SmartScan: Image to Text Extraction */}
      <div className="p-4 mt-12">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">SmartScan: Image to Text</h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6">
          {CardDataExtraction?.length > 0 ? (
            CardDataExtraction.map((el, idx) => (
              <div
                key={idx}
                className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300"
              >
                <img src={el.image} alt="cards" className="w-16 h-16 mx-auto" />
                <h5 className="mt-5 text-xl font-medium text-gray-900 text-center">{el.title}</h5>
                <p className="mt-3 text-lg font-normal text-gray-600 text-center">{el.content}</p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No extraction data available.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
