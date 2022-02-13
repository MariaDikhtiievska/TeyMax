
import './App.css';
import News from './components/News'
import Accordion from './components/Accordion'
import someone from './components/TSComponent.tsx';

function App() {
  return (
    <div className="App" id='App'>
      <News />
      <Accordion></Accordion>

      <div>
        <span>
          <p>{someone.name}</p>
          <p>{someone.height}</p>
          <p>{someone.mass}</p>
        </span>

        <span>
          <p>{someone.hair_color.R}</p>
          <p>{someone.hair_color.G}</p>
          <p>{someone.hair_color.B}</p>
          <p>{someone.hair_color.A}</p>
        </span>
        
        <span>
          <p>{someone.films}</p>
          <p>{someone.species.id}</p>
          <p>{someone.species.url}</p>
          <p>{someone.species.name}</p>
          <p>{someone.created}</p>
        </span>
      </div>

    </div>

  );


}


export default App;
