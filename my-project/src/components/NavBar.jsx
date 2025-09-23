import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ language, setLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappNumber = "+919566623729";

  // Translation strings for Navbar
  const navTranslations = {
    en: {
      home: "Home",
      tracker: "Disease Tracker",
      news: "News",
      chatbot: "Chatbot",
    },
    hi: {
      home: "मुख्य पृष्ठ",
      tracker: "रोग ट्रैकर",
      news: "समाचार",
      chatbot: "चैटबॉट",
    },
    bn: {
      home: "হোম",
      tracker: "রোগ ট্র্যাকার",
      news: "সংবাদ",
      chatbot: "চ্যাটবট",
    },
    ta: {
      home: "முகப்பு",
      tracker: "நோய் டிராக்கர்",
      news: "செய்திகள்",
      chatbot: "சாட்பாட்",
    },
    te: {
      home: "హోమ్",
      tracker: "రోగ ట్రాకర్",
      news: "సమాచారం",
      chatbot: "చాట్‌బాట్",
    },
    mr: {
      home: "मुख्यपृष्ठ",
      tracker: "रोग ट्रॅकर",
      news: "बातम्या",
      chatbot: "चॅटबॉट",
    },
    // Add more languages as needed
  };

  const t = navTranslations[language] || navTranslations.en;

  const languages = {
    en: "English",
    hi: "हिन्दी",
    bn: "বাংলা",
    ta: "தமிழ்",
    te: "తెలుగు",
    mr: "मराठी",
    gu: "ગુજરાતી",
    kn: "ಕನ್ನಡ",
    ml: "മലയാളം",
    or: "ଓଡ଼ିଆ",
    pa: "ਪੰਜਾਬੀ",
    as: "অসমীয়া",
    ur: "اردو",
    ks: "कॉशुर / كٲشُर‎",
    sd: "सिन्धी / سنڌي‎",
    sa: "संस्कृतम्",
    doi: "डोगरी",
    mni: "ꯃꯤꯇꯩ ꯂꯣꯟ (Manipuri)",
    ne: "नेपाली",
    bho: "भोजपुरी",
    ma: "मैथिली",
    sat: "ᱥᱟᱱᱛᱟᱲᱤ (Santali)",
  };

  return (
    <nav className="relative sticky top-0 z-50 overflow-hidden">
      {/* 🔹 Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-blue-50 to-blue-100 animate-shimmer opacity-70"></div>

      <div className="relative z-10 container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <Link
          to="/home"
          className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent hover:scale-110 transform transition duration-300"
        >
          JeevanX
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6">
          <Link className="nav-link" to="/home">
            {t.home}
          </Link>
          <Link className="nav-link" to="/disease-tracker">
            {t.tracker}
          </Link>
          <Link className="nav-link" to="/news">
            {t.news}
          </Link>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
              className="w-4 h-4 mr-2"
            />
            {t.chatbot}
          </a>

          {/* Language Selector */}
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="lang-select"
          >
            {Object.keys(languages).map((key) => (
              <option key={key} value={key}>
                {languages[key]}
              </option>
            ))}
          </select>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 hover:text-blue-700 focus:outline-none"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white/90 backdrop-blur-md shadow-lg relative z-10 animate-fadeIn">
          <Link
            to="/home"
            className="mobile-link"
            onClick={() => setIsOpen(false)}
          >
            {t.home}
          </Link>
          <Link
            to="/disease-tracker"
            className="mobile-link"
            onClick={() => setIsOpen(false)}
          >
            {t.tracker}
          </Link>
          <Link
            to="/news"
            className="mobile-link"
            onClick={() => setIsOpen(false)}
          >
            {t.news}
          </Link>

          {/* WhatsApp Mobile */}
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn-mobile"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
              className="w-4 h-4 mr-2"
            />
            {t.chatbot}
          </a>

          {/* Language Selector Mobile */}
          <div className="px-4 py-3">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="lang-select w-full"
            >
              {Object.keys(languages).map((key) => (
                <option key={key} value={key}>
                  {languages[key]}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}

      {/* 🔹 Inline Styles for Animations */}
      <style>{`
        /* Background shimmer */
        @keyframes shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }
        .animate-shimmer { background-size: 200% 100%; animation: shimmer 6s infinite linear; }

        /* Mobile menu fade-in */
        @keyframes fadeIn { from { opacity: 0; transform: translateY(-5px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeIn { animation: fadeIn 0.3s ease-in-out; }

        /* Desktop nav links */
        .nav-link { color: #374151; font-weight: 500; transition: all 0.3s; }
        .nav-link:hover { color: #1d4ed8; text-decoration: underline; }

        /* Mobile links */
        .mobile-link { display: block; padding: 0.75rem 1rem; color: #374151; font-weight: 500; transition: all 0.3s; }
        .mobile-link:hover { background: #eff6ff; color: #1e40af; }

        /* WhatsApp buttons */
        .whatsapp-btn, .whatsapp-btn-mobile { display: inline-flex; align-items: center; justify-content: center; padding: 0.5rem 1rem; background: #22c55e; color: white; border-radius: 9999px; box-shadow: 0px 2px 6px rgba(0,0,0,0.15); transition: all 0.3s; }
        .whatsapp-btn:hover, .whatsapp-btn-mobile:hover { background: #16a34a; transform: scale(1.05); }

        /* Language selector */
        .lang-select { border: 1px solid #d1d5db; border-radius: 0.5rem; padding: 0.25rem 0.75rem; color: #374151; background: rgba(255, 255, 255, 0.8); backdrop-filter: blur(6px); box-shadow: 0px 2px 4px rgba(0,0,0,0.05); transition: all 0.3s; }
        .lang-select:focus { outline: none; border-color: #60a5fa; box-shadow: 0 0 0 2px #93c5fd; }
      `}</style>
    </nav>
  );
};

export default Navbar;
