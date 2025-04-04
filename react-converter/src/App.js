import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

const MinutesToHours = () => {
  const [value,setValue] = useState(0);
  const [flip,setFlip] = useState(false);
  
  return (
    <div>
      <h3>Minutes To Hours</h3>
      <div>
        {/* 보통 이럴경우 분, 시로 컴포넌트 분리 */}
        <label htmlFor="minutes">Minutes</label>
        <input type="number" id="minutes" placeholder="Minutes"
          disabled={flip} value={flip? value: value*60}
          onChange={(e) => {
            const inputValue = e.target.value;
            setValue(inputValue);
          }}/>
      </div>
      <div>
        <label htmlFor="hours">Hours</label>
        <input type="number" id="hours" placeholder="Hours"          
          disabled={!flip} value={!flip? value/60 : value}
          onchange={(e) => {
            const inputValue = e.target.value;
            setValue(inputValue);
          }}/>
      </div>
      <button onClick={() => {
        setValue(0);
      }}>Reset</button>
      <button onClick={() => {
        setFlip(!flip);
      }}>Flip</button>
    </div>
  )
};

function App() {
  return (
    <div className="App">
      <MinutesToHours />
    </div>
  );
}

export default App;
