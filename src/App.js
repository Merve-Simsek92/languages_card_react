import logo from './logo.svg';
import './App.css';

import Card from "./components/card/Card"
import ReactSvg from "./assets/react.svg"
function App() {
  return (
    <div className="App">
    <img className='reactSvg' src={ReactSvg}/>
   <Card/>
    </div>
  );
}

export default App;
