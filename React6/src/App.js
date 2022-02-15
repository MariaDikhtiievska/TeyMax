
import './App.css';
import News from './components/News'
import Accordion from './components/Accordion'
import someone from './components/TSComponent.tsx';
import styles from './tsStyles.module.scss'
function App() {
  return (
    <div className="App" id='App'>
      <News />
      <Accordion></Accordion>

      <div className={styles.list}>
        <p>Description</p>
        <span>
          <p>{someone.name}</p>
          <p>{someone.height}</p>
          <p>{someone.mass}</p>
        </span>
        <p>Hair color</p>
        <span>
          <p>{someone.hair_color.R}</p>
          <p>{someone.hair_color.G}</p>
          <p>{someone.hair_color.B}</p>
          <p>{someone.hair_color.A}</p>
        </span>
        <p>Films</p>
        <span className={styles.films}>
          <div>{someone.films.map((item, key) => {
            return <p>{key = { key }, item}</p>
          })}</div>
        </span>

        <p>Species</p>
        <span className={styles.species}>{someone.species.map((item, key) => {
          return <div>
            <p>ID {key = { key }, item.id}</p>
            <p>URL {key = { key }, item.url}</p>
            <p>{key = { key }, item.name}</p>
          </div>
        })}
        </span>
      </div >

    </div >

  );


}


export default App;
