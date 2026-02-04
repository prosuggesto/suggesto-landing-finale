import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import OfferSAAPage from './pages/OfferSAAPage';
import OfferRetailPage from './pages/OfferRetailPage';
import OfferCustomPage from './pages/OfferCustomPage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/offre-saa" element={<OfferSAAPage />} />
        <Route path="/offre-retail-os" element={<OfferRetailPage />} />
        <Route path="/offre-sur-mesure" element={<OfferCustomPage />} />
      </Routes>
    </Router>
  );
}

export default App;
