import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './componentss/Home';
import About from './componentss/About';
import Header from './componentss/Header';
import GetSupport from './componentss/GetSupport';
import ExclusiveOffers from './componentss/ExclusiveOffers';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/getsupport" element={<GetSupport />} />
        <Route path="/exclusiveoffers" element={<ExclusiveOffers />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
