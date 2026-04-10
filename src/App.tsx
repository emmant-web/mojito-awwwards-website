
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

import './index.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cocktails from './components/Cocktails';
import About from './components/About';
import Art from './components/Art';
import Menu from './components/Menu';
import Contact from './components/Contact';

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
        <Navbar />
        <Hero />
        <Cocktails />
        <About />
        <Art />
        <Menu />
        <Contact />
    </main>
  )
}

export default App;