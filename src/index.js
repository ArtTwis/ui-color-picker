import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Base from './Base';
import Home from './Homepage/Home';
import ContrastChecker from './ContrastChecker/ContrastChecker';
import Gradients from './Gradients/Gradients';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router basename='/ui-color-picker'>
    <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/contrast' element={<ContrastChecker />} />
      <Route path='/gradients' element={<Gradients />} />
    </Routes>
  </Router>
);
