import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Home from './pages/Home';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;