import './App.css';
import Header from './components/Header/Header';
import PufiRain from './components/PufiRain/PufiRain';
import PufiPuff from './components/PufiPuff/PufiPuff';
import PufiCart from './components/PufiCart/PufiCart';
import PufiNap from './components/PufiNap/PufiNap';
import Collage from './components/Collage/Collage';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <PufiPuff/>
      <PufiRain/>
      <PufiCart/>
      <PufiNap/>
      <Collage/>
      <Footer/>
    </div>
  );
}

export default App;
