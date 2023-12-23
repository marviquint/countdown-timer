// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Nav';
import Home from './components/Home/Home';
import NewYear from './components/NewYear/NewYear';
import Christmas from './components/Christmas/Christmas';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/christmas" element={<Christmas />} />
          <Route path="/newyear" element={<NewYear />} />
          
        </Routes>

      </div>
    </Router>
  );
}

export default App;
