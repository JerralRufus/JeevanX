import React, { useState } from "react";

const GetStartedPage = () => {
  const whatsappNumber = "+919566623729";
  const [language, setLanguage] = useState("en");

  const translations = {
    en: {
      displayName: "English",
      title: "Multilingual AI Healthcare Chatbot",
      subtitle:
        "Your trusted guide to preventive healthcare, disease information, and timely alerts.",
      getStarted: "Chat on WhatsApp",
      explore: "Explore More",
      footer:
        "Bridging healthcare gaps for rural & semi-urban communities with AI & inclusivity.",
    },
    hi: {
      displayName: "हिंदी",
      title: "बहुभाषी एआई स्वास्थ्य चैटबॉट",
      subtitle:
        "आपकी विश्वसनीय मार्गदर्शिका, रोकथाम स्वास्थ्य, रोग जानकारी और समय पर अलर्ट के लिए।",
      getStarted: "व्हाट्सएप पर चैट करें",
      explore: "और जानें",
      footer:
        "ग्रामीण और अर्ध-शहरी समुदायों के लिए एआई और समावेशिता के साथ स्वास्थ्य अंतर को पाटना।",
    },
    bn: {
      displayName: "বাংলা",
      title: "বহুভাষিক AI স্বাস্থ্য চ্যাটবট",
      subtitle:
        "নিরাপত্তা স্বাস্থ্য, রোগের তথ্য এবং সময়মতো সতর্কতার জন্য আপনার বিশ্বস্ত গাইড।",
      getStarted: "WhatsApp-এ চ্যাট করুন",
      explore: "আরও দেখুন",
      footer:
        "গ্রামীণ ও অর্ধ-নগর সম্প্রদায়ের জন্য AI ও অন্তর্ভুক্তি সহ স্বাস্থ্য ব্যবধান কমানো।",
    },
    te: {
      displayName: "తెలుగు",
      title: "బహుభాషా AI ఆరోగ్య చాట్‌బాట్",
      subtitle:
        "ముందస్తు ఆరోగ్య పరిరక్షణ, వ్యాధి సమాచారం మరియు సమయానుకూల హెచ్చరికలకు మీ నమ్మకమైన మార్గదర్శకుడు.",
      getStarted: "WhatsApp లో చాట్ చేయండి",
      explore: "మరిన్ని అన్వేషించండి",
      footer:
        "గ్రామీణ మరియు అర్ధ-నగర సముదాయాల కోసం AI మరియు సమానత్వంతో ఆరోగ్య తేడాలను తగ్గించడం.",
    },
    mr: {
      displayName: "मराठी",
      title: "बहुभाषिक AI हेल्थकेअर चॅटबॉट",
      subtitle: "आपला विश्वासार्ह मार्गदर्शक, रोग माहिती आणि वेळेवर अलर्ट.",
      getStarted: "WhatsApp वर चॅट करा",
      explore: "अधिक शोधा",
      footer:
        "ग्रामीण आणि अर्ध-शहरी समुदायांसाठी AI आणि समावेशासह आरोग्य अंतर कमी करणे.",
    },
    ta: {
      displayName: "தமிழ்",
      title: "பல்மொழி AI சுகாதார சாட்பாட்",
      subtitle:
        "முந்தைய சுகாதார பராமரிப்பு, நோய் தகவல் மற்றும் நேரத்திற்குரிய அறிவிப்புகளுக்கான உங்கள் நம்பகமான வழிகாட்டி.",
      getStarted: "WhatsApp-ல் செய்தி அனுப்பு",
      explore: "மேலும் ஆராய்க",
      footer:
        "AI மற்றும் உள்ளடக்கத்துடன் கிராமப்புற மற்றும் அரைநகர சமூகங்களுக்கு சுகாதார இடைவெளிகளை குறைக்கும்.",
    },
    ur: {
      displayName: "اردو",
      title: "کثیر لسانی AI ہیلتھ کیئر چیٹ بوٹ",
      subtitle: "آپ کا قابل اعتماد رہنما، بیماری کی معلومات اور وقت پر الرٹس۔",
      getStarted: "WhatsApp پر چیٹ کریں",
      explore: "مزید دیکھیں",
      footer:
        "دیہی اور نیم شہری کمیونٹیز کے لیے AI اور شمولیت کے ساتھ صحت کے فرق کو کم کرنا۔",
    },
    gu: {
      displayName: "ગુજરાતી",
      title: "બહુભાષી AI હેલ્થકેર ચેટબોટ",
      subtitle:
        "પ્રિવેન્ટિવ હેલ્થકેર, રોગની માહિતી અને સમયસર એલર્ટ માટે તમારી વિશ્વસનીય માર્ગદર્શિકા.",
      getStarted: "WhatsApp પર ચેટ કરો",
      explore: "વધુ શોધો",
      footer:
        "ગ્રામીણ અને અર્ધ-શહેરી સમુદાય માટે AI અને સમાવેશ સાથે આરોગ્ય ખાઈઓ ભરો.",
    },
    kn: {
      displayName: "ಕನ್ನಡ",
      title: "ಬಹುಭಾಷಾ AI ಆರೋಗ್ಯ ಚಾಟ್‌ಬಾಟ್",
      subtitle:
        "ನೀವು ನಂಬಬಹುದಾದ ಮಾರ್ಗದರ್ಶಕ, ತಡೆಹಿಡಿತ ಆರೋಗ್ಯ, ರೋಗ ಮಾಹಿತಿ ಮತ್ತು ಸಮಯೋಚಿತ ಎಚ್ಚರಿಕೆಗಳಿಗೆ.",
      getStarted: "WhatsApp ನಲ್ಲಿ ಚಾಟ್ ಮಾಡಿ",
      explore: "ಹೆಚ್ಚು ಅನ್ವೇಷಿಸಿ",
      footer:
        "ಗ್ರಾಮೀಣ ಮತ್ತು ಅರ್ಧ-ನಗರ ಸಮುದಾಯಗಳಿಗಾಗಿ AI ಮತ್ತು ಒಳಗೊಂಡಿಕೆಯನ್ನು ಬಳಸಿಕೊಂಡು ಆರೋಗ್ಯ ಅಂತರವನ್ನು ಕಡಿಮೆ ಮಾಡುವುದು.",
    },
    ml: {
      displayName: "മലയാളം",
      title: "ബഹുഭാഷാ AI ഹെൽത്ത് ചാറ്റ്‌ബോട്ട്",
      subtitle:
        "നിങ്ങളുടെ വിശ്വാസയോഗ്യമായ മാർഗ്ഗദർശകൻ, മുൻകരുതൽ ആരോഗ്യസംരക്ഷണം, രോഗ വിവരങ്ങൾ, സമയബന്ധിത മുന്നറിയിപ്പുകൾ.",
      getStarted: "WhatsApp-ൽ ചാറ്റ് ചെയ്യുക",
      explore: "കൂടുതൽ പരിശോധിക്കുക",
      footer:
        "ഗ്രാമീണവും അർദ്ധനഗര സമുദായങ്ങൾക്കും AI & ഉൾപ്പെടുത്തലോടെ ആരോഗ്യ ഇടവേളകൾ കുറയ്ക്കുന്നു.",
    },
    or: {
      displayName: "ଓଡ଼ିଆ",
      title: "ବହୁଭାଷୀ AI ସ୍ୱାସ୍ଥ୍ୟ ଚାଟ୍‌ବଟ୍",
      subtitle:
        "ପୂର୍ବରୁ ହେବା ଯୋଗ୍ୟ ସ୍ୱାସ୍ଥ୍ୟ ସୁରକ୍ଷା, ରୋଗ ସୂଚନା ଏବଂ ସମୟସୂଚୀ ଅଲର୍ଟ ପାଇଁ ଆପଣଙ୍କର ବିଶ୍ୱସନୀୟ ଗାଇଡ୍।",
      getStarted: "WhatsApp ରେ ଚାଟ୍ କରନ୍ତୁ",
      explore: "ଅଧିକ ଏକ୍ସପ୍ଲୋର୍ କରନ୍ତୁ",
      footer:
        "ଗ୍ରାମୀଣ ଓ ଅର୍ଧ-ସହର ସମୁଦାୟଙ୍କ ପାଇଁ AI ଏବଂ ସାମିଲିତ ସହଯୋଗରେ ସ୍ୱାସ୍ଥ୍ୟ ଅନ୍ତରାଳକୁ ହ୍ରାସ କରନ୍ତୁ।",
    },
    pa: {
      displayName: "ਪੰਜਾਬੀ",
      title: "ਬਹੁਭਾਸ਼ੀ AI ਹੈਲਥਕੇਅਰ ਚੈਟਬੌਟ",
      subtitle:
        "ਪੂਰਕ ਸਿਹਤ ਸੇਵਾਵਾਂ, ਬਿਮਾਰੀ ਜਾਣਕਾਰੀ ਅਤੇ ਸਮੇਂ-ਸਿਰ ਚੇਤਾਵਨੀਆਂ ਲਈ ਤੁਹਾਡਾ ਭਰੋਸੇਯੋਗ ਮਾਰਗਦਰਸ਼ਕ।",
      getStarted: "WhatsApp 'ਤੇ ਚੈਟ ਕਰੋ",
      explore: "ਹੋਰ ਜਾਣੋ",
      footer:
        "ਪਿੰਡਾਂ ਅਤੇ ਅਰਧ-ਸ਼ਹਿਰੀ ਸਮੁਦਾਇ ਲਈ AI ਅਤੇ ਸਮਾਵੇਸ਼ ਨਾਲ ਸਿਹਤ ਖਾਈਆਂ ਨੂੰ ਪੂਰਾ ਕਰਨਾ।",
    },
    as: {
      displayName: "অসমীয়া",
      title: "বহুভাষী AI স্বাস্থ্য চ্যাটবট",
      subtitle:
        "আপোনাৰ বিশ্বাসযোগ্য পথপ্ৰদৰ্শক, ৰোগৰ তথ্য আৰু সময়মতে সতর্কতা।",
      getStarted: "WhatsApp-ত চেট কৰক",
      explore: "বেছি জানক",
      footer:
        "গ্ৰাম্য আৰু অৰ্ধ-নগৰীয় সম্প্ৰদায়ৰ বাবে AI আৰু অন্তৰ্ভুক্তিৰ সৈতে স্বাস্থ্য অন্তৰক কমাওক।",
    },
    mni: {
      displayName: "মণিপুরী",
      title: "বহুভাষী AI স্বাস্থ্য চ্যাটবট",
      subtitle: "আপনার বিশ্বস্ত গাইড, রোগের তথ্য এবং সময়মতো সতর্কতা।",
      getStarted: "WhatsApp-এ চ্যাট করুন",
      explore: "আরও জানুন",
      footer:
        "গ্রামীণ ও অর্ধ-নগর সম্প্রদায়ের জন্য AI ও অন্তর্ভুক্তি সহ স্বাস্থ্য ব্যবধান কমানো।",
    },
    sd: {
      displayName: "سنڌي",
      title: "ٻه ٻوليءَ وارو AI صحت چيٽ بوٽ",
      subtitle: "توهانجو قابل اعتماد گائيڊ، بيماري جي ڄاڻ ۽ وقت سر الرٽس.",
      getStarted: "WhatsApp تي چيٽ ڪريو",
      explore: "وڌيڪ ڏسو",
      footer:
        "ديہاتي ۽ اڌ-شهري ڪميونٽيز لاءِ AI ۽ شموليت سان صحت جو فرق گهٽائڻ.",
    },
    sa: {
      displayName: "संस्कृतम्",
      title: "बहुभाषा एआई स्वास्थ्य चैटबोट",
      subtitle: "आपली विश्वासार्ह मार्गदर्शक, रोग माहिती आणि वेळेवर अलर्ट.",
      getStarted: "WhatsApp वर चॅट करा",
      explore: "अधिक शोधा",
      footer:
        "ग्रामीण आणि अर्ध-शहरी समुदायांसाठी AI आणि समावेशासह आरोग्य अंतर कमी करणे.",
    },
    kok: {
      displayName: "कोंकणी",
      title: "बहुभाषी AI हेल्थकेअर चॅटबॉट",
      subtitle: "तुमच्या विश्वासार्ह मार्गदर्शक, रोग माहिती आणि वेळेवर सूचना.",
      getStarted: "WhatsApp वर चॅट करा",
      explore: "अधिक शोधा",
      footer:
        "ग्रामीण आणि अर्ध-शहरी समुदायांसाठी AI आणि समावेशासह आरोग्य अंतर कमी करणे.",
    },
    doi: {
      displayName: "डोगरी",
      title: "बहुभाषा AI हेल्थकेअर चॅटबॉट",
      subtitle: "आपके भरोसेमंद मार्गदर्शक, रोग जानकारी और समय पर अलर्ट।",
      getStarted: "WhatsApp पर चैट करें",
      explore: "और खोजें",
      footer:
        "ग्रामीण और अर्ध-शहरी समुदायों के लिए AI और समावेश के साथ स्वास्थ्य अंतर को कम करना।",
    },
    brx: {
      displayName: "बोडो",
      title: "बहुभाषा AI स्वास्थ्य चॅटबोट",
      subtitle: "आपन विश्वासयोग्य मार्गदर्शक, रोग जानकारी आर समय पर अलर्ट।",
      getStarted: "WhatsApp पर चैट करु",
      explore: "अधिक अन्वेषण करु",
      footer:
        "ग्रामीण आ अर्ध-शहरी समुदाय खातिर AI आर समावेश संगे स्वास्थ्य अंतर घटाउ।",
    },
    ks: {
      displayName: "कश्मीरी",
      title: "کثیر لسانی AI ہیلتھ کیئر چیٹ بوٹ",
      subtitle: "آپ کا قابل اعتماد رہنما، بیماری کی معلومات اور وقت پر الرٹس۔",
      getStarted: "WhatsApp پر چیٹ کریں",
      explore: "مزید دریافت کریں",
      footer:
        "دیہی اور نیم شہری کمیونٹیز کے لیے AI اور شمولیت کے ساتھ صحت کے فرق کو کم کرنا۔",
    },
    mai: {
      displayName: "मैथिली",
      title: "बहुभाषी AI हेल्थकेअर चॅटबॉट",
      subtitle: "आपके भरोसेमंद मार्गदर्शक, रोग जानकारी और समय पर अलर्ट।",
      getStarted: "WhatsApp पर चैट करें",
      explore: "और खोजें",
      footer:
        "ग्रामीण और अर्ध-शहरी समुदायों के लिए AI और समावेश के साथ स्वास्थ्य अंतर को कम करना।",
    },
    ne: {
      displayName: "नेपाली",
      title: "बहुभाषी AI स्वास्थ्य च्याटबोट",
      subtitle: "तपाईंको विश्वसनीय मार्गदर्शक, रोग जानकारी र समयमै चेतावनी।",
      getStarted: "WhatsApp मा च्याट गर्नुहोस्",
      explore: "अझ अन्वेषण गर्नुहोस्",
      footer:
        "ग्रामीण र अर्ध-शहरी समुदायको लागि AI र समावेशीसँग स्वास्थ्य अन्तर घटाउनु।",
    },
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden p-6">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-teal-50 to-white animate-gradient bg-[length:400%_400%]"></div>

      {/* Soft Blobs Overlay */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-purple-200 rounded-full opacity-30 top-10 left-10 animate-blob"></div>
        <div className="absolute w-72 h-72 bg-pink-200 rounded-full opacity-30 bottom-20 right-20 animate-blob animation-delay-2000"></div>
      </div>

      {/* Language Selector */}
      <div className="absolute top-6 right-6 z-20">
        <div className="flex items-center space-x-2 bg-white/70 backdrop-blur-md px-4 py-2 rounded-full shadow-md border border-gray-200">
          <span className="text-sm font-medium text-gray-700">
            🌐 Language:
          </span>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-transparent border-none focus:ring-0 text-gray-800 font-semibold cursor-pointer max-w-xs"
          >
            {Object.keys(translations).map((lang) => (
              <option key={lang} value={lang}>
                {translations[lang].displayName}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Hero Section */}
      <div className="text-center max-w-4xl mx-auto py-16 px-6 relative z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold text-indigo-900 mb-6 leading-tight drop-shadow-lg animate-fade-in-down">
          🏥 {translations[language].title}
        </h1>

        <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up">
          {translations[language].subtitle}
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 animate-bounce-in">
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center justify-center px-10 py-4 text-lg font-semibold rounded-full shadow-xl text-white bg-green-600 hover:bg-green-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp Icon"
              className="w-7 h-7 mr-3"
            />
            {translations[language].getStarted}
            <span className="absolute inset-0 rounded-full border-2 border-green-400 animate-ping opacity-30 scale-90"></span>
          </a>

          <a
            href="/home"
            className="inline-flex items-center justify-center px-10 py-4 border-2 border-blue-500 text-lg font-semibold rounded-full text-blue-700 bg-white hover:bg-blue-50 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 shadow-lg"
          >
            {translations[language].explore}
          </a>
        </div>

        <p className="mt-12 text-sm text-gray-600 animate-fade-in-up drop-shadow-sm">
          {translations[language].footer}
        </p>
      </div>

      {/* Tailwind Animations */}
      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 15s ease infinite;
        }
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 12s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default GetStartedPage;
