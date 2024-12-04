import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import Home from './pages/Home';
import Work from './pages/Wisest';
import Project from './pages/Servicer';


const App: React.FC = () => {
  return (
    <Router>
      <TopBar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
