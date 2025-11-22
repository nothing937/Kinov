import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home.jsx';
import Layout from './layout.jsx';
import Videos from './videos.jsx';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<Videos />} />
      </Route>
    </Routes>
  );
}
