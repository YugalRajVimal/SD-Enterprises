import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export const Footer = () => {
    return (
      <footer className="bg-[#0f1a23] text-white">
        {/* Newsletter */}
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-16 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h2 className="text-3xl font-bold">Newsletter Signup</h2>
            <p className="text-gray-400">Get notified about updates</p>
          </div>
          <div className="flex w-full md:w-auto">
            <input
              placeholder="Your email address"
              className="px-6 py-3 w-full md:w-80 rounded-l-full bg-transparent border border-gray-600 outline-none"
            />
            <button className="px-6 py-3 bg-gray-700 rounded-r-full">SUBSCRIBE</button>
          </div>
        </div>
  
        {/* Footer Links */}
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-12 grid md:grid-cols-4 gap-8 border-t border-gray-700">
          <div>
            <h3 className="font-bold text-lg mb-4">SD Enterprises</h3>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Office</h4>
            <p className="text-gray-400 text-sm">+91 XXXXX XXXXX</p>
            <p className="text-gray-400 text-sm">info@sd.com</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>Home</li><li>About</li><li>Services</li><li>Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Social</h4>
            <div className="flex gap-4 text-gray-400">
              <FaFacebookF /><FaTwitter /><FaLinkedinIn />
            </div>
          </div>
        </div>
  
        <div className="text-center text-gray-500 text-sm py-6 border-t border-gray-700">
          © {new Date().getFullYear()} SD Enterprises
        </div>
      </footer>
    );
  };