import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Base from './Base';
import Home from './Homepage/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Router>
        <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/gradients' element={<Base />} />
        </Routes>
    </Router>
);
