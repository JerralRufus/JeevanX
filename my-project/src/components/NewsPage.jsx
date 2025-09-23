import React from 'react';
import Navbar from './NavBar';
import newsArticles from './contents.js'; 

const NewsPage = () => {

  const themeBlue = 'blue-700';
  const lightBlue = 'blue-500'; 
  
  const img_url = "https://timesofindia.indiatimes.com/life-style/health-fitness/health-news/" ;

  return (
    <>
      <Navbar /> 
      <div className="bg-gray-50 min-h-screen">
        <div className="container mx-auto p-4 max-w-7xl">
          <h1 className={`text-5xl font-extrabold text-${themeBlue} text-center my-12 animate-fade-in-down`}> 
            Latest Health News
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-8">
            {newsArticles.map((article, index) => (
              <a 
                key={index} 
                href={`${img_url}${article.link}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`bg-white rounded-xl shadow-md overflow-hidden flex flex-col transform hover:scale-105 hover:shadow-lg transition-all duration-300 group`}
              >
                <div className="relative overflow-hidden h-40">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-${themeBlue} via-transparent to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                </div>
                
                <div className="p-4 flex-grow">
                  <h2 className={`text-base font-semibold mb-1 leading-snug text-gray-900 group-hover:text-${lightBlue} transition-colors duration-300`}> {/* DECREASED Title Font Size to text-base, changed to font-semibold (was bold) */}
                    {article.title}
                  </h2>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsPage;