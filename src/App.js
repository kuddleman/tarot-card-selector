
import './App.css';
import { Header } from './components/Header'
import {CardHolder} from './components/CardHolder'
import { Card } from './components/Card'
import TAROT_CARDS from './cardsData';

function App() {
  return (
    <div className="App">
      <h1>Hello from App</h1>
      <h1>{TAROT_CARDS[0].title}</h1>
      <h2>{TAROT_CARDS[0].suit}</h2>
      <img src={TAROT_CARDS[21].src} alt="tarot card" height="400px" width="230px" /> 
      <Header />
      <CardHolder />
      <Card />
    </div>
  );
}

export default App;
