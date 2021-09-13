import React, { useState } from 'react'
import Topbar from './components/topbar/Topbar'
import Intro from './components/intro/Intro'
import Portfolio from './components/portfolio/Porfolio'
import Works from './components/works/Works'
import Testimonial from './components/testimonial/Testimonial'
import Contact from './components/contact/Contact'
import Menu from './components/menu/Menu'
import './App.css'


function App() {

  const [menuOpen, setmenuOpen] = useState(false)

  return (
    <div className="app">
      <Topbar setmenuOpen={setmenuOpen} menuOpen={menuOpen} />
      <Menu setmenuOpen={setmenuOpen} menuOpen={menuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonial />
        <Contact />
      </div>
    </div>
  );
}

export default App;
