import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Gallery from './components/Gallery';
import About from './components/About';
import './App.css';



function App() {
  return (
    <Router>
      <Layout>
        {/* Define routes */}
        <Routes>
          <Route path="/" element={<Gallery />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
