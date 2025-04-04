import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';

const Clock = () => {
  // react 권장 사항 useRef 사용
  const clock = useRef();
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);

  // 렌더링 끝난 후 useEffect 사용
  useEffect(() => {
    getClock();
    setInterval(getClock, 1000);
  }, []);

  function getClock() {
    const date = new Date();
    // 출력할 타겟이 return 값에 있어 존재하지 않음, 이를 해결하기 위해 useRef 사용
    // useRef 사용시 상항 값에 current가 있어야 함
    
    // const hours = String(date.getHours()).padStart(2, "0");
    // const minutes = String(date.getMinutes()).padStart(2, "0");
    //clock.current.innerText = `${hours}:${minutes}`;

    // 위의 세 코드 대신 동작
    setHour(String(date.getHours()).padStart(2, "0"));
    setMinute(String(date.getMinutes()).padStart(2, "0"));
  }

  return (
    <h2 id="clock" ref={clock}>{hour}:{minute}</h2>
  );
};
const Location = (props) => {
  return (
    <h2 id="location">
      {props.area} / {props.lat} / {props.lng} </h2>
  );
};
const Weather = () => {
  // getData를 한번만 실행하기 위해 useEffect 사용
  useEffect(() => {
    getData();
  }, [])

  // https://api.openweathermap.org/data/2.5/weather?lat=34.8805498289299&lon=128.620766897026&units=metric&appid=6edee3c2aa182bc44d18ccb204c98a31
  const getData = async () => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=35.1176&lon=129.0451&units=metric&appid=6edee3c2aa182bc44d18ccb204c98a31'
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);

    const lat = data.coord.lat;
    const lon = data.coord.lon;
    const name = data.name;
    document.querySelector('#location').innerHTML = `${name} / ${lat} / ${lon}`;

    const icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    const temp = data.main.temp;
    const speed = data.wind.speed;
    const main = data.weather[0].main;

    // state에 담지 않으면 수정 시 수정사항 출력되지 않음
    document.querySelector('#weather > span:nth-child(1)').innerHTML = `${main}`;
    document.querySelector('#weather > span:nth-child(2)').innerHTML = `<img src='${icon}'>`;
    document.querySelector('#weather > span:nth-child(3)').innerHTML = `${temp.toFixed(1)}℃`;
    document.querySelector('#weather > span:nth-child(4)').innerHTML = `${speed}m/s`;

  }
  return (
    <div id="weather">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Clock />
      <Location area="Busan" lat={35.1176} lng={129.0451}></Location>
      <Weather></Weather>
    </div>
  );
}

export default App;
