import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';

const App: React.FC = () => {
  return (
    <Router>
      {/* <Menu /> */}
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
};

export default App;
