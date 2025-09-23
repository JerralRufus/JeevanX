import React from "react";
import { Link } from "react-router-dom";
import {
  FaWhatsapp,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    { icon: <FaWhatsapp />, url: "https://wa.me/YOUR_NUMBER" },
    { icon: <FaFacebookF />, url: "https://facebook.com" },
    { icon: <FaTwitter />, url: "https://twitter.com" },
    { icon: <FaInstagram />, url: "https://instagram.com" },
  ];

  return (
    <footer className="bg-blue-50 text-gray-800 py-12 px-4 md:px-8 mt-auto">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">
          Multilingual AI Healthcare Chatbot
        </h2>
        <p className="mb-6 text-gray-600 max-w-xl mx-auto">
          Providing accessible, reliable, and instant healthcare guidance in
          multiple languages.
        </p>

        {/* Links */}
        <div className="flex justify-center space-x-6 mb-6">
          <Link to="/home" className="hover:text-blue-600 transition-colors">
            Home
          </Link>
          <Link
            to="/disease-tracker"
            className="hover:text-blue-600 transition-colors"
          >
            Disease Tracker
          </Link>
          <Link to="/news" className="hover:text-blue-600 transition-colors">
            News
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-4 mb-6">
          {socialLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-900 transition-colors text-xl"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} All Rights Reserved. Designed with
          ❤️ by JeevanX
        </p>
      </div>
    </footer>
  );
};

export default Footer;
