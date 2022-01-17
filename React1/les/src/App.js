import arr from './source.json';
import './App.css';
import Card from './components/Card'
import style from '../src/components/cards.module.scss';
function App() {
  return (


      <div className={style.container}>
        {
          <Card title={arr[0].title}  img={arr[0].image} tags={arr[0].tags} description={arr[0].description} likes={arr[0].likes} comments={arr[0].comments} published={arr[0].published} />}
        { <Card title={arr[1].title}  img={arr[1].image} tags={arr[1].tags} description={arr[1].description} likes={arr[1].likes} comments={arr[1].comments} published={arr[1].published} />
        }
        {<Card title={arr[2].title}  img={arr[2].image} tags={arr[2].tags} description={arr[2].description} likes={arr[2].likes} comments={arr[2].comments} published={arr[2].published} />
         }
      </div>
  );

}


export default App;
