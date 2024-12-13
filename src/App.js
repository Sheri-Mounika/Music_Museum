import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Welcome from './components/Welcome';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} /> {/* Login page */}
        <Route path="/welcome" element={<Welcome />} /> {/* Dashboard */}
      </Routes>
    </Router>
  );
}

export default App;