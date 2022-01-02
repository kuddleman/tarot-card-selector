
import './App.css';
import { Header } from './components/Header'
import {CardHolder} from './components/CardHolder'
import { Card } from './components/Card'

function App() {
  return (
    <div className="App">
      <h1>Hello from App</h1>
      <Header />
      <CardHolder />
      <Card />
    </div>
  );
}

export default App;
