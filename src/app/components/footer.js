import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="container-fluid mt-5 p-0 bg-slate-100">
        <div className="w-full lg:max-w-[1320px] mx-auto p-5">
          <div className="flex flex-col lg:flex-row gap-10 justify-center mx-auto lg:max-w-[1200px] p-3">
            <div className="w-full lg:w-[900px]">
              <a
                href="/"
                className="flex items-center space-x-3 rtl:space-x-reverse"
              >
                <img
                  src="/img/logo.png"
                  className="h-[90px] w-[90px]"
                  alt="Logo"
                />
              </a>
              <div className="mt-6 w-full lg:w-[500px]">
                <p className="text-lg leading-relaxed">
                  Our platform is a
                  user-friendly interface, supporting various formats like MP4,
                  MP3, and WAV. Easily extract audio, convert files, or batch
                  process multiple uploads securely, ensuring fast, high-quality
                  results every time.
                </p>
              </div>
            </div>
            {/* Information Section */}
            <div className="w-full lg:w-[300px] mt-4">
              <div>
                <h1 className="text-lg lg:text-xl font-bold">Information</h1>
              </div>
              <div className="mt-6 space-y-2 text-lg">
               
                <Link href="/aboutpage" className="block hover:text-blue-600">
                  About Us
                </Link>
                <Link href="/privacy" className="block hover:text-blue-600">
                  Privacy & Policy
                </Link>
                <Link href="/videoconvertor" className="block hover:text-blue-600">
              	Video Revoice
                </Link>
                <Link href="/audioconvertor" className="block hover:text-blue-600">
                Speech Maker
                </Link>
              </div>
            </div>
            {/* Contact Us Section */}
            <div className="w-full lg:w-[300px] mt-4">
              <div>
                <h1 className="text-lg lg:text-xl font-bold">Social Media</h1>
              </div>
              <div className="mt-6 space-y-2 text-lg">
                <Link
                  href="/privacy"
                  className="flex items-center group hover:text-blue-600"
                >
                  <i className="fa-brands fa-twitter text-black text-xl group-hover:text-blue-600"></i>
                  <span className="ml-3 group-hover:text-blue-600">Twitter</span>
                </Link>
                <Link
                  href="/privacy"
                  className="flex items-center group hover:text-blue-600"
                >
                  <i className="fa-brands fa-instagram text-black text-xl group-hover:text-blue-600"></i>
                  <span className="ml-3 group-hover:text-blue-600">Instagram</span>
                </Link>
                <Link
                  href="/privacy"
                  className="flex items-center group hover:text-blue-600"
                >
                  <i className="fa-brands fa-facebook text-black text-xl group-hover:text-blue-600"></i>
                  <span className="ml-3 group-hover:text-blue-600">Facebook</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom copyright section
        <div className="bg-slate-800">
          <div className="flex p-4 text-center justify-center items-center">
            <h1 className="text-white text-sm lg:text-lg">
              Copyright © 2024 Paragraph Rewriter
            </h1>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Footer;







