import React, { useState } from 'react';
import Navbar from './NavBar'; 
import Footer from './Footer'; 

const BroadcastPage = () => {
  const [message, setMessage] = useState('');
  const [city, setCity] = useState('');
  const [submissionStatus, setSubmissionStatus] = useState(null); 

  const handleSubmit = (e) => {
    e.preventDefault(); 


    console.log('--- Broadcast Message Attempt ---');
    console.log('Message:', message);
    console.log('City/Village:', city);
    console.log('-------------------------------');
   
    setSubmissionStatus('success');

    setTimeout(() => {
      setMessage('');
      setCity('');
      setSubmissionStatus(null);
    }, 3000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans">
      <div className="fixed top-0 left-0 w-full z-50 shadow-lg">
        <Navbar />
      </div>

      <main className="flex-grow p-4 md:p-8 bg-gradient-to-br from-blue-50 to-indigo-100 mt-[72px] relative z-0">
        <div className="container mx-auto max-w-2xl bg-white p-8 rounded-xl shadow-2xl border border-blue-200">
          <h1 className="text-4xl md:text-4xl font-extrabold text-center mb-6 leading-tight text-blue-800 drop-shadow-md">
            Send Broadcast Alert
          </h1>
          <p className="text-lg text-gray-700 text-center mb-8">
            Send important messages to specific cities or villages.
            (This is a simulated broadcast; messages are only logged to console.)
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="message" className="block text-lg font-medium text-gray-800 mb-2">
                Message:
              </label>
              <textarea
                id="message"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-500 transition duration-150 ease-in-out resize-y min-h-[120px]"
                placeholder="Enter your broadcast message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>

            <div>
              <label htmlFor="city" className="block text-lg font-medium text-gray-800 mb-2">
                City / Village:
              </label>
              <input
                type="text"
                id="city"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-500 transition duration-150 ease-in-out"
                placeholder="e.g., Mumbai, Delhi, Village A"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-md text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out transform hover:scale-105"
            >
              Broadcast Message
            </button>

            {submissionStatus === 'success' && (
              <div className="mt-4 p-4 rounded-lg bg-green-100 text-green-800 border border-green-200 flex items-center justify-center">
                <svg className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="font-medium">Broadcast message has been sent successfully!</p>
              </div>
            )}
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BroadcastPage;