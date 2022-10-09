import './App.css';
import Header from './components/Header/Header';
import PufiRain from './components/PufiRain/PufiRain';
import PufiPuff from './components/PufiPuff/PufiPuff';

function App() {
  return (
    <div className="App">
      <Header/>
      <PufiPuff/>
      <PufiRain/>
    </div>
  );
}

export default App;
