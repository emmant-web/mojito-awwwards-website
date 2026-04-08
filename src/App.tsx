
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

import Navbar from './components/Navbar';
import './index.css'

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
        <Navbar />
    </main>
  )
}

export default App;