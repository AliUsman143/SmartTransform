import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-slate-100 mt-5 py-8">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-10 justify-between">
          {/* Logo & Description */}
          <div className="lg:w-2/5">
            <Link href="/" className="flex items-center space-x-3">
              <img src="/img/logo.png" className="h-[90px] w-[90px]" alt="Logo" />
            </Link>
            <p className="mt-6 text-lg text-gray-700 leading-relaxed">
              Our platform offers a user-friendly interface supporting formats like MP4, MP3, and WAV.
              Easily extract audio, convert files, or batch process multiple uploads securely, ensuring
              fast, high-quality results every time.
            </p>
          </div>

          {/* Information Links */}
          <div className="lg:w-1/5">
            <h2 className="text-xl font-semibold text-gray-800">Information</h2>
            <ul className="mt-4 space-y-2 text-lg text-gray-700">
              <li>
                <Link href="/aboutpage" className="hover:text-blue-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-blue-600">
                  Privacy & Policy
                </Link>
              </li>
              <li>
                <Link href="/videoconvertor" className="hover:text-blue-600">
                  Video Revoice
                </Link>
              </li>
              <li>
                <Link href="/audioconvertor" className="hover:text-blue-600">
                  Speech Maker
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="lg:w-1/5">
            <h2 className="text-xl font-semibold text-gray-800">Follow Us</h2>
            <ul className="mt-4 space-y-2 text-lg text-gray-700">
              <li>
                <Link href="#" className="flex items-center space-x-3 hover:text-blue-600">
                  <i className="fa-brands fa-twitter text-xl"></i>
                  <span>Twitter</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center space-x-3 hover:text-blue-600">
                  <i className="fa-brands fa-instagram text-xl"></i>
                  <span>Instagram</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center space-x-3 hover:text-blue-600">
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
