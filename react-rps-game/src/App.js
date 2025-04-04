import './App.css';
import styles from './App.module.css';
import {useState} from 'react';

function Title() {
  return (
    <div className='title'>
      <h1>가위 바위 보 게임</h1>
    </div>
  );
}
function Scissors(props) {
  return (
    <div className={styles.control}
    onClick={()=> {
      props.send('0');
    }}>
      <img src='http://ggoreb.com/images/react/scissors.png' />
    </div>
  );
}
function Rock(props) {
  return (
    <div className={styles.control}
    onClick={()=> {
      props.send('1');
    }}>
      <img src='http://ggoreb.com/images/react/rock.png' />
    </div>
  );
}
function Paper(props) {
  return (
    <div className={styles.control}
    onClick={()=> {
      props.send('2');
    }}>
      <img src='http://ggoreb.com/images/react/paper.png' />
    </div>
  );
}

function Result(props) {
  return (
    <div className='result'>
      <h1>Com:{props.result.com}</h1>
      <h1>Player:{props.result.player}</h1>
      <h1>{props.result.result}</h1>
    </div>
  );
}

function App() {
  const [result, setResult] = useState({});
  const send = (what) => {
    // alert(what);
    // com 가위바위보
    const com = parseInt(Math.random()*3);

    if( (what +1) % 3 == com) {
      setResult({
        com:com,
        player:what,
        result:"Com 승리😁"
      })
    } else if(what == com){
      setResult({
        com:com,
        player:what,
        result:"비겼음😏"
      })
    } else {
      setResult({
        com:com,
        player:what,
        result:"Player 승리😎"
      })
    }
  }

  return (
    <div className="App">
      <Title />
      <Scissors send={send}/>
      <Rock send={send}/>
      <Paper send={send}/>
      <Result result={result}/>
    </div>
  );
}

export default App;
