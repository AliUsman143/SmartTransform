import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3">
              <img src="/img/logo.png" className="h-[90px] w-[90px]" alt="Logo" />
            </Link>
            <p className="mt-6 text-lg text-gray-100 leading-relaxed">
              Our platform offers a user-friendly interface supporting formats like MP4, MP3, and WAV.
              Easily extract audio, convert files, or batch process multiple uploads securely, ensuring
              fast, high-quality results every time.
            </p>
          </div>

          {/* Information Links */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Information</h2>
            <ul className="space-y-2 font-semibold">
              <li>
                <Link href="/aboutpage" className="text-gray-200 hover:text-white transition duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/textvideo" className="text-gray-200 hover:text-white transition duration-300">
                Text-to-Video
                </Link>
              </li>
              <li>
                <Link href="/textspeak" className="text-gray-200 hover:text-white transition duration-300">
                Text-to-Voice
                </Link>
              </li>
              <li>
                <Link href="/imgtext" className="text-gray-200 hover:text-white transition duration-300">
                Image-to-Text
                </Link>
              </li>
              <li>
                <Link href="/voicetext" className="text-gray-200 hover:text-white transition duration-300">
                Voice-to-Text
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Follow Us</h2>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="flex items-center space-x-3 text-gray-200 hover:text-white transition duration-300">
                  <i className="fa-brands fa-twitter text-xl"></i>
                  <span>Twitter</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center space-x-3 text-gray-200 hover:text-white transition duration-300">
                  <i className="fa-brands fa-instagram text-xl"></i>
                  <span>Instagram</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center space-x-3 text-gray-200 hover:text-white transition duration-300">
                  <i className="fa-brands fa-facebook text-xl"></i>
                  <span>Facebook</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

       
      </div>
    </footer>
  );
};

export default Footer;