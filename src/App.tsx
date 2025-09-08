import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Hotels from './pages/Hotels';
import Restaurants from './pages/Restaurants';
import Stories from './pages/Stories';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/restaurants" element={<Restaurants />} />
            <Route path="/stories" element={<Stories />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;