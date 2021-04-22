import './App.scss';
import Header from './components/Header/Header'
import CardsWrapper from './components/CardsWrapper/CardsWrapper';

function App() {
  return (
    <div className="App">
      <Header title="Gists" />
      <CardsWrapper />
    </div>
  );
}

export default App;
