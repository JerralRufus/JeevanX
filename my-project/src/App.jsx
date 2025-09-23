import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import DiseaseTrackerPage from './components/DiseaseTrackerPage';
import BroadcastPage from './components/BroadcastPage';
import GetStartedPage from './components/GetStartedPage';
import NewsPage from './components/NewsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GetStartedPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/disease-tracker" element={<DiseaseTrackerPage />} />
        <Route path="/broadcast" element={<BroadcastPage />} />
        <Route path="/news" element={<NewsPage />} />
      </Routes>
    </Router>
  );
}

export default App;