import logo from './logo.svg';
import './App.css';
import Navigationbar from './components/navbar/Navigationbar';
import HeroBanner from './components/HeroBanner/HeroBanner';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Navigationbar />
      <HeroBanner/>
    </div>
  );
}

export default App;
