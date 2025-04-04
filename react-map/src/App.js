import './App.css';
import { useEffect, useRef } from 'react';

const { kakao } = window;
// 컨테이너에서 사용하기 위해 공용 공간에 선언
let ref = null;

const MapContainer = () => {
  ref = useRef();
  useEffect(() => {
    const container = document.getElementById('myMap');
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3
    };
    const map = new kakao.maps.Map(container, options);
    // ref를 이용해 map 저장
    ref.current = map;

    async function getData() {
      const url = 'http://ggoreb.pythonanywhere.com/location/data/?count=50';
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);

      // 받아온 data에서 data 키를 이용해 각 객체 저장
      const list = data.data;
      list.map((v)=>{
        const lat = v.latitude;
        const lng = v.longitude;
        // marker 표시하기
        var markerPosition = new kakao.maps.LatLng(lat, lng);
        var marker = new kakao.maps.Marker({
          position: markerPosition
        });
        marker.setMap(ref.current);
      })
    }
    
    getData();

  }, []);

  return (
    <div id='myMap' style={{
      width: '500px',
      height: '500px'
    }}></div>
  );
}

function App() {
  return (
    <>
      <h1>Kakao Map</h1>
      <MapContainer />
      <button onClick={() => {
        var moveLatLon = new kakao.maps.LatLng(33.452613, 126.570888);
        // ref를 이용해 지도 출력
        ref.current.setCenter(moveLatLon);
      }}>이동</button>
    </>
  );
}

export default App;
