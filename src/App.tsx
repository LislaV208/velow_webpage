import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Music from './pages/Music';
import Tour from './pages/Tour';
import Gallery from './pages/Gallery';
import Merch from './pages/Merch';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Navigation />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/music" element={<Music />} />
            <Route path="/tour" element={<Tour />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/merch" element={<Merch />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;