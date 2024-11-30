import Logo from './Logo';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Logo className="h-10 w-auto text-white" />
            <p className="text-gray-400 text-sm sm:text-base">
              Premium quality paints for your home and business needs.
            </p>
            <div className="flex space-x-4">
              {/* Social Media Icons */}
              <SocialIcon href="#" icon="facebook" />
              <SocialIcon href="#" icon="instagram" />
              <SocialIcon href="#" icon="twitter" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Products', 'Services', 'About Us', 'Contact'].map((link) => (
                <li key={link}>
                  <Link
                    to={`/${link.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm sm:text-base"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
              <li>Sri Shantheri Paints</li>
              <li>S J Arcade, Main Road</li>
              <li>Karkala, Karnataka 574104</li>
              <li className="pt-2">Contact: Gurji Vineeth Kini</li>
              <li>Phone: +91 988 038 0286</li>
              <li>Email: gurjivineethkini3@gmail.com</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Stay Updated</h3>
            <p className="text-gray-400 text-sm sm:text-base">
              Subscribe to our newsletter for updates and special offers.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-secondary transition-colors duration-200 text-sm sm:text-base"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Sri Shantheri Paints. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Social Icon Component
const SocialIcon = ({ href, icon }) => {
  return (
    <a
      href={href}
      className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors duration-200"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="sr-only">{icon}</span>
      {/* Add your social media icons here */}
    </a>
  );
};

export default Footer; 