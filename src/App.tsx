import React from 'react';
import './App.css'

import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Experiences from './components/Experiences';
const App: React.FC = () => {
  return (
    <div className="font-sans bg-gray-50 text-gray-900 ">
        <Header/>
        <Hero/>
        <Projects />
        <Experiences/>
        {/* <Footer/> */}
    </div>
  );
};

export default App;
