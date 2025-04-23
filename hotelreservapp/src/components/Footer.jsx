import { FiFacebook, FiTwitter, FiInstagram, FiMapPin, FiPhone, FiMail} from 'react-icons/fi';
import { FaCcVisa, FaCcMastercard, FaCcPaypal   } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Information Hotel Paradise*/}
          <div>
            <h3 className="text-xl font-bold mb-4">Hotel Paradise</h3>
            <p className="mb-4">We offer unique lodging experiences with premium services.</p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/" className="hover:text-secondary"><FiFacebook /></a>
              <a href="https://x.com/?lang=en" className="hover:text-secondary"><FiTwitter /></a>
              <a href="https://www.instagram.com/" className="hover:text-secondary"><FiInstagram /></a>
            </div>
          </div>

          {/* Links Pages */}
          <div>
            <h3 className="text-xl font-bold mb-4">Page links</h3>
            <ul className="grid grid-cols-2 gap-2"> 
              <li><a href="#" className="hover:text-secondary">Home</a></li>
              <li><a href="#" className="hover:text-secondary">About</a></li>
              <li><a href="#" className="hover:text-secondary">Rooms</a></li>
              <li><a href="#" className="hover:text-secondary">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FiMapPin className="mr-2" /> Av. Parra 423, New York
              </li>
              <li className="flex items-center">
                <FiPhone className="mr-2" /> +51 234 567 890
              </li>
              <li className="flex items-center">
                <FiMail className="mr-2" /> info@hotelparadise.com
              </li>
            </ul>
          </div>

          {/* Payment methods  */}
          <div>
            <h3 className="text-xl font-bold mb-4">We accept</h3>
            <div className="flex flex-wrap items-center gap-2">   
            <FaCcVisa className="text-2xl text-[#f2f2f4]" />
            <span>Visa</span>      
            <FaCcMastercard className="text-2xl text-[#f2f2f4]" />
            <span>Mastercard</span>   
            <FaCcPaypal className="text-2xl text-[#f2f2f4]" />
            <span>PayPal</span>                          
          </div>
        </div>
                 
      </div>

        {/* Footer */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} Hotel Paradise. All rights reserved.</p>
          <div className="mt-2 text-sm text-gray-400">
            <a href="#" className="hover:text-white">Terms and Conditions</a> | 
            <a href="#" className="hover:text-white ml-2">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;