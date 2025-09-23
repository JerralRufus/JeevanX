import React, { useState } from "react";
import Navbar from "./NavBar";
import Footer from "./Footer";
import img from "../assets/chatbot.png" ;

// Translations object for different languages
const translations = {
  en: {
    heroTitle: "Empowering Health Through AI",
    heroDesc: "Your trusted multilingual AI chatbot for accessible, reliable, and instant healthcare information.",
    aboutTitle: "About Our Multilingual AI Healthcare Chatbot",
    aboutDesc: "The Multilingual AI Healthcare Chatbot is an innovative solution designed to empower rural and semi-urban communities with accessible, accurate, and reliable healthcare information. By breaking language barriers, the chatbot ensures that people can interact in their own local languages, making health guidance more inclusive and easy to understand. Its primary goal is to bridge the knowledge gap between healthcare providers and underserved populations by delivering instant answers to common health queries, preventive healthcare tips, and vaccination reminders, while also issuing critical real-time alerts during outbreaks. Unlike traditional sources of information, the chatbot provides 24/7 availability, ensuring that users receive timely guidance without the need to visit a clinic or rely on limited local resources. With its simple design and integration through platforms like WhatsApp and SMS, it prioritizes ease of access, even for individuals with low digital literacy, while promoting awareness, prevention, and healthier communities.",
    missionTitle: "Our Mission",
    missionPoints: [
      "Enhance health literacy in underserved areas.",
      "Provide timely information on disease symptoms and prevention.",
      "Facilitate vaccination schedule reminders.",
      "Disseminate real-time outbreak alerts."
    ],
    approachTitle: "Our Approach",
    approachDesc: "Leveraging advanced AI and natural language processing, our chatbot offers personalized, multilingual health guidance. This platform complements the chatbot by providing an overview of its capabilities and key information.",
    impactTitle: "Impact & Vision",
    impactPoints: [
      "Improved public health outcomes.",
      "Reduced spread of preventable diseases.",
      "Enhanced community engagement in health initiatives.",
      "Empowered individuals to make informed health decisions."
    ],
  },
  hi: {
    heroTitle: "एआई के माध्यम से स्वास्थ्य सशक्तिकरण",
    heroDesc: "आपका विश्वसनीय बहुभाषी एआई चैटबॉट, जो सुलभ, विश्वसनीय और त्वरित स्वास्थ्य जानकारी प्रदान करता है।",
    aboutTitle: "हमारे बहुभाषी एआई स्वास्थ्य चैटबॉट के बारे में",
    aboutDesc: "बहुभाषी एआई स्वास्थ्य चैटबॉट ग्रामीण और अर्ध-शहरी समुदायों को सुलभ, सटीक और विश्वसनीय स्वास्थ्य जानकारी प्रदान करने के लिए डिज़ाइन किया गया एक अभिनव समाधान है। भाषा की बाधाओं को तोड़कर, यह सुनिश्चित करता है कि लोग अपनी स्थानीय भाषा में बातचीत कर सकें, जिससे स्वास्थ्य मार्गदर्शन अधिक समावेशी और समझने में आसान हो जाता है। इसका मुख्य लक्ष्य स्वास्थ्य प्रदाताओं और अंडरसेव्ड समुदायों के बीच ज्ञान अंतर को पाटना है, आम स्वास्थ्य प्रश्नों के त्वरित उत्तर, रोकथाम स्वास्थ्य सुझाव और टीकाकरण अनुस्मारक प्रदान करना, साथ ही प्रकोप के दौरान महत्वपूर्ण वास्तविक समय चेतावनी जारी करना। पारंपरिक स्रोतों की तुलना में, चैटबॉट 24/7 उपलब्धता प्रदान करता है, यह सुनिश्चित करता है कि उपयोगकर्ता समय पर मार्गदर्शन प्राप्त करें। WhatsApp और SMS जैसे प्लेटफ़ॉर्म के माध्यम से सरल डिज़ाइन और एकीकरण के साथ, यह कम डिजिटल साक्षरता वाले व्यक्तियों के लिए भी आसानी से पहुंच सुनिश्चित करता है और जागरूकता, रोकथाम और स्वस्थ समुदायों को बढ़ावा देता है।",
    missionTitle: "हमारा मिशन",
    missionPoints: [
      "अविकसित क्षेत्रों में स्वास्थ्य साक्षरता बढ़ाना।",
      "बीमारी के लक्षण और रोकथाम पर समय पर जानकारी प्रदान करना।",
      "टीकाकरण अनुसूची की याद दिलाना।",
      "रियल-टाइम प्रकोप अलर्ट वितरित करना।"
    ],
    approachTitle: "हमारा दृष्टिकोण",
    approachDesc: "उन्नत एआई और प्राकृतिक भाषा प्रसंस्करण का उपयोग करके, हमारा चैटबॉट व्यक्तिगत, बहुभाषी स्वास्थ्य मार्गदर्शन प्रदान करता है।",
    impactTitle: "प्रभाव और दृष्टि",
    impactPoints: [
      "सार्वजनिक स्वास्थ्य परिणामों में सुधार।",
      "रोकथाम योग्य रोगों के प्रसार को कम करना।",
      "स्वास्थ्य पहलों में समुदाय की भागीदारी बढ़ाना।",
      "व्यक्तियों को सूचित स्वास्थ्य निर्णय लेने में सशक्त बनाना।"
    ],
  },
  bn: {
    heroTitle: "এআই-এর মাধ্যমে স্বাস্থ্য ক্ষমতায়ন",
    heroDesc: "আপনার বিশ্বস্ত বহু-ভাষী এআই চ্যাটবট, যা সহজলভ্য, নির্ভরযোগ্য এবং তাৎক্ষণিক স্বাস্থ্য তথ্য প্রদান করে।",
    aboutTitle: "আমাদের বহু-ভাষী এআই স্বাস্থ্য চ্যাটবট সম্পর্কে",
    aboutDesc: "বহু-ভাষী এআই স্বাস্থ্য চ্যাটবট গ্রামীণ ও অর্ধ-শহুরে সম্প্রদায়কে সহজলভ্য, সঠিক এবং নির্ভরযোগ্য স্বাস্থ্য তথ্য প্রদান করার জন্য ডিজাইন করা একটি উদ্ভাবনী সমাধান। ভাষার বাধা ভেঙে, এটি নিশ্চিত করে যে মানুষ তাদের নিজস্ব ভাষায় যোগাযোগ করতে পারে, স্বাস্থ্য নির্দেশিকা আরও অন্তর্ভুক্তিমূলক এবং সহজবোধ্য হয়। এর মূল লক্ষ্য স্বাস্থ্য প্রদানকারীদের এবং সেবা বঞ্চিত সম্প্রদায়ের মধ্যে জ্ঞান খালি স্থান পূরণ করা, সাধারণ স্বাস্থ্য প্রশ্নের তাৎক্ষণিক উত্তর, প্রতিরোধমূলক স্বাস্থ্য পরামর্শ এবং টিকাদান স্মারক প্রদান করা, পাশাপাশি প্রাদুর্ভাবের সময় গুরুত্বপূর্ণ রিয়েল-টাইম সতর্কতা প্রদান করা।",
    missionTitle: "আমাদের লক্ষ্য",
    missionPoints: [
      "সেবা বঞ্চিত অঞ্চলে স্বাস্থ্য সাক্ষরতা বৃদ্ধি করা।",
      "রোগের লক্ষণ এবং প্রতিরোধ সম্পর্কে সময়মতো তথ্য প্রদান।",
      "টিকাদানের সময়সূচী স্মরণ করানো।",
      "রিয়েল-টাইম প্রাদুর্ভাব সতর্কতা বিতরণ।"
    ],
    approachTitle: "আমাদের পদ্ধতি",
    approachDesc: "উন্নত AI এবং প্রাকৃতিক ভাষা প্রক্রিয়াকরণ ব্যবহার করে, আমাদের চ্যাটবট ব্যক্তিগতকৃত, বহু-ভাষী স্বাস্থ্য নির্দেশিকা প্রদান করে।",
    impactTitle: "প্রভাব ও দৃষ্টি",
    impactPoints: [
      "সার্বজনীন স্বাস্থ্য ফলাফলে উন্নতি।",
      "প্রতিরোধযোগ্য রোগের বিস্তার হ্রাস।",
      "স্বাস্থ্য উদ্যোগে সম্প্রদায়ের অংশগ্রহণ বৃদ্ধি।",
      "ব্যক্তিদের তথ্যভিত্তিক স্বাস্থ্য সিদ্ধান্ত নেওয়ার ক্ষমতায়ন।"
    ],
  },
  ta: {
    heroTitle: "ஏ.ஐ மூலம் ஆரோக்கிய சக்தியூட்டல்",
    heroDesc: "உங்களுக்கான நம்பகமான பலமொழி ஏ.ஐ சந்தைப்படுத்தல் உதவியாளர், எளிதில் கிடைக்கும், நம்பகமான மற்றும் உடனடி சுகாதார தகவல்களை வழங்குகிறது.",
    aboutTitle: "எங்கள் பலமொழி ஏ.ஐ சுகாதார சந்தைப்படுத்தல் உதவியாளர் பற்றி",
    aboutDesc: "பலமொழி ஏ.ஐ சுகாதார சந்தைப்படுத்தல் உதவியாளர் கிராமப்புற மற்றும் பகுதி நகர சமூகங்களுக்கு எளிதில் கிடைக்கும், துல்லியமான மற்றும் நம்பகமான சுகாதாரத் தகவல்களை வழங்க உருவாக்கப்பட்ட ஒரு நவீன தீர்வாகும். மொழி தடைகளை உடைத்து, மக்கள் தங்கள் சொந்த மொழியில் தொடர்பு கொள்ள முடியும், இதனால் சுகாதார வழிகாட்டுதல் மேலும் சேர்க்கப்பட்டதும், புரிந்துகொள்ள எளிதானதாகும். முக்கிய நோக்கம் சுகாதார வழங்குநர்கள் மற்றும் சேவை அடிமைப்படுத்தப்பட்ட மக்களிடையேயான அறிவுத்திறன் இடைவெளியை நிரப்புவது, பொதுவான சுகாதார கேள்விகளுக்கான உடனடி பதில்கள், தடுப்பு சுகாதார குறிப்புகள் மற்றும் தடுப்பூசி நினைவூட்டல்கள் வழங்குவது, அதேசமயம் பரவலின் போது முக்கிய நேர உணர்வுப்பெறும் எச்சரிக்கைகள் வழங்குவது.",
    missionTitle: "எங்கள் நோக்கம்",
    missionPoints: [
      "சேவை அடிமைப்படுத்தப்பட்ட பகுதிகளில் சுகாதார அறிவுத்திறன் மேம்படுத்தல்.",
      "நோய் அறிகுறிகள் மற்றும் தடுப்புகளின் பற்றிய நேரத்திலான தகவல்களை வழங்குதல்.",
      "தடுப்பூசி அட்டவணை நினைவூட்டல்கள்.",
      "நேர உணர்வு பரவல் எச்சரிக்கைகள் வழங்குதல்."
    ],
    approachTitle: "எங்கள் அணுகுமுறை",
    approachDesc: "மேம்பட்ட ஏ.ஐ மற்றும் இயற்கை மொழி செயலாக்கத்தை பயன்படுத்தி, எங்கள் சந்தைப்படுத்தல் உதவியாளர் தனிப்பட்ட, பலமொழி சுகாதார வழிகாட்டுதலை வழங்குகிறது.",
    impactTitle: "பாதிப்பு மற்றும் கண்ணோட்டம்",
    impactPoints: [
      "சர்வதேச சுகாதார முடிவுகளில் மேம்பாடு.",
      "தடுப்பு நோய்களின் பரவலை குறைத்தல்.",
      "சுகாதார முயற்சிகளில் சமூக பங்களிப்பு அதிகரித்தல்.",
      "தகவல் அடிப்படையிலான சுகாதார முடிவுகளை எடுக்க நபர்களை சக்திவாய்ந்தது."
    ],
  },
  te: {
    heroTitle: "ఏ.ఐ ద్వారా ఆరోగ్య సాధన",
    heroDesc: "మీ నమ్మకమైన బహుభాషా ఏ.ఐ చాట్‌బాట్, సులభంగా అందుబాటులో, నమ్మకమైన మరియు తక్షణ ఆరోగ్య సమాచారాన్ని అందిస్తుంది.",
    aboutTitle: "మా బహుభాషా ఏ.ఐ ఆరోగ్య చాట్‌బాట్ గురించి",
    aboutDesc: "బహుభాషా ఏ.ఐ ఆరోగ్య చాట్‌బాట్ గ్రామీణ మరియు సబర్-అర్బన్ సమాజాలకు సులభంగా అందుబాటులో, ఖచ్చితమైన మరియు నమ్మకమైన ఆరోగ్య సమాచారాన్ని అందించడానికి రూపొందించబడిన ఒక వినూత్న పరిష్కారం. భాషా అడ్డంకులను తొలగించడం ద్వారా, ప్రజలు వారి స్థానిక భాషలో మర్చిపోయి మాట్లాడగలరు, ఆరోగ్య మార్గదర్శకత మరింత సమగ్రం మరియు సులభంగా అర్థమయ్యేలా ఉంటుంది. ప్రధాన లక్ష్యం ఆరోగ్య సేవాప్రదాతలు మరియు సేవల రహిత సమాజాల మధ్య జ్ఞాన గ్యాప్‌ను భర్తీ చేయడం, సాధారణ ఆరోగ్య ప్రశ్నలకు తక్షణ సమాధానాలు, నివారణ ఆరోగ్య సూచనలు మరియు టీకా రిమైండర్‌లను అందించడం, మరియు వ్యాప్తి సమయంలో ముఖ్యమైన రియల్-టైమ్ హెచ్చరికలను ఇస్తుంది.",
    missionTitle: "మా లక్ష్యం",
    missionPoints: [
      "సేవల లభ్యత లేని ప్రాంతాల్లో ఆరోగ్య సాక్షరతను పెంపొందించండి.",
      "రోగ లక్షణాలపై మరియు నివారణపై సమయోచిత సమాచారం అందించండి.",
      "టీకా షెడ్యూల్ రిమైండర్‌లను సులభతరం చేయండి.",
      "రియల్-టైమ్ వ్యాప్తి హెచ్చరికలను పంపిణీ చేయండి."
    ],
    approachTitle: "మా దృష్టికోణం",
    approachDesc: "అధునాతన ఏ.ఐ మరియు సహజ భాషా ప్రాసెసింగ్‌ను ఉపయోగిస్తూ, మా చాట్‌బాట్ వ్యక్తిగత, బహుభాషా ఆరోగ్య మార్గదర్శకతను అందిస్తుంది.",
    impactTitle: "ప్రభావం & దృష్టి",
    impactPoints: [
      "పబ్లిక్ హెల్త్ ఫలితాలను మెరుగుపరిచింది.",
      "నివారణ రోగాల వ్యాప్తిని తగ్గించడం.",
      "ఆరోగ్య కార్యక్రమాలలో సమాజపు పాల్గొనడం పెంచడం.",
      "వాడుకరులను సమాచారాధారిత ఆరోగ్య నిర్ణయాలను తీసుకోవడానికి శక్తివంతం చేయడం."
    ],
  },
  mr: {
    heroTitle: "एआय द्वारे आरोग्य सक्षमीकरण",
    heroDesc: "आपला विश्वासू बहुभाषिक एआय चॅटबॉट, जो प्रवेशयोग्य, विश्वासार्ह आणि तात्काळ आरोग्य माहिती प्रदान करतो.",
    aboutTitle: "आमच्या बहुभाषिक एआय आरोग्य चॅटबॉटबद्दल",
    aboutDesc: "बहुभाषिक एआय आरोग्य चॅटबॉट ग्रामीण आणि अर्ध-शहरी समुदायांना प्रवेशयोग्य, अचूक आणि विश्वासार्ह आरोग्य माहिती प्रदान करण्यासाठी डिझाइन केलेले एक नाविन्यपूर्ण समाधान आहे. भाषा अडथळे तोडून, हे सुनिश्चित करते की लोक त्यांच्या स्थानिक भाषेत संवाद साधू शकतात, ज्यामुळे आरोग्य मार्गदर्शन अधिक समावेशी आणि समजण्यास सोपे होते. याचे मुख्य उद्दीष्ट आरोग्य प्रदात्यांमध्ये आणि कमी सेवा मिळणाऱ्या लोकांमध्ये ज्ञानाचा अंतर भरणे, सामान्य आरोग्य प्रश्नांची त्वरित उत्तरे देणे, प्रतिबंधक आरोग्य टिप्स आणि लसीकरण स्मरणपत्रे प्रदान करणे, तसेच प्रादुर्भावांच्या वेळी महत्वाच्या वास्तविक वेळ चेतावण्या देणे आहे.",
    missionTitle: "आमचे मिशन",
    missionPoints: [
      "सेवा नसलेल्या भागांमध्ये आरोग्य साक्षरता वाढवणे.",
      "रोग लक्षणे आणि प्रतिबंधांवर वेळेवर माहिती प्रदान करणे.",
      "लसीकरणाच्या वेळापत्रकाची आठवण देणे.",
      "रियल-टाइम प्रादुर्भाव चेतावण्या वितरीत करणे."
    ],
    approachTitle: "आमचा दृष्टिकोन",
    approachDesc: "प्रगत एआय आणि नैसर्गिक भाषा प्रक्रिया वापरून, आमचा चॅटबॉट वैयक्तिकृत, बहुभाषिक आरोग्य मार्गदर्शन प्रदान करतो.",
    impactTitle: "प्रभाव & दृष्टि",
    impactPoints: [
      "सार्वजनिक आरोग्य परिणाम सुधारले.",
      "प्रतिबंधनीय रोगांचे प्रसार कमी केले.",
      "आरोग्य उपक्रमांमध्ये समुदाय सहभाग वाढवला.",
      "वैयक्तिकांना माहितीवर आधारित आरोग्य निर्णय घेण्यास सक्षमीकरण केले."
    ],
  },
};
  // other languages (hi, bn, ta, te, mr) remain same as your code

const HomePage = () => {
  const [lang, setLang] = useState("en"); // default language
  const t = translations[lang];

  return (
    <div className="bg-white text-gray-900 min-h-screen flex flex-col font-sans">
      <Navbar language={lang} setLanguage={setLang} />


      <main className="flex-grow">
  {/* Hero Section */}
  <section className="relative bg-gradient-to-br from-blue-50 to-blue-200 text-gray-900 py-20 px-4 md:px-8 overflow-hidden flex items-center justify-center min-h-[50vh]">
    <div className="container mx-auto max-w-7xl relative z-10 flex flex-col md:flex-row items-center md:justify-between text-center md:text-left gap-8">
      {/* Left: Text */}
      <div className="md:w-1/2 mb-12 md:mb-0 pr-0 md:pr-8">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-700 animate-fade-in-down drop-shadow-lg">
          {t.heroTitle}
        </h1>
        <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-xl text-gray-700 animate-fade-in-up">
          {t.heroDesc}
        </p>
        <a
          href="/"
          className="inline-flex items-center justify-center px-10 py-4 border border-transparent text-lg font-semibold rounded-full shadow-xl text-white bg-cyan-600 hover:bg-cyan-700 transition duration-300 ease-in-out transform hover:scale-105 animate-bounce-in focus:outline-none focus:ring-4 focus:ring-cyan-300 focus:ring-opacity-75"
        >
          Get Started Now
        </a>
      </div>

      {/* Right: Image */}
      <div className="md:w-1/2 flex justify-center md:justify-end animate-fade-in-right">
        <img
          src={img}
          alt="Hero Placeholder"
          className="w-full h-auto max-h-[500px] object-cover "
        />
      </div>
    </div>
  </section>



        {/* About Section */}
        <section
          id="about"
          className="py-20 px-4 md:px-8 bg-white text-gray-900"
        >
          <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl font-bold text-blue-600 mb-8 leading-tight">
                {t.aboutTitle}
              </h2>
              <p className="text-xl leading-relaxed max-w-2xl text-gray-700">
                {t.aboutDesc}
              </p>
            </div>

            <div className="space-y-8">
              {/* Mission */}
              <div className="p-8 bg-blue-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-200">
                <h3 className="text-2xl font-semibold text-green-600 mb-4 flex items-center">
                  💡 {t.missionTitle}
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-3 pl-2">
                  {t.missionPoints.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>

              {/* Approach */}
              <div className="p-8 bg-blue-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-200">
                <h3 className="text-2xl font-semibold text-blue-600 mb-4 flex items-center">
                  ⚙ {t.approachTitle}
                </h3>
                <p className="text-gray-700 leading-relaxed pl-2">
                  {t.approachDesc}
                </p>
              </div>

              {/* Impact */}
              <div className="p-8 bg-blue-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-200">
                <h3 className="text-2xl font-semibold text-orange-600 mb-4 flex items-center">
                  📈 {t.impactTitle}
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-3 pl-2">
                  {t.impactPoints.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
