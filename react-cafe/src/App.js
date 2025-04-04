import logo from './logo.svg';
import './App.css';
import CafeSelector from './CafeSelector';
import Menu from './Menu';
import SimilarMenu from './SimilarMenu';
import { useState } from 'react';


function App() {
  // 카페 선택 상태변수
  const [selectCafe, setSelectCafe] = useState('랜덤');
  return (
    <div className="App">
      <h1>☕🧃카페 신메뉴 알리미☕</h1>
      <CafeSelector selectCafe={selectCafe} setSelectCafe={setSelectCafe}></CafeSelector>
      <Menu cafe={selectCafe}></Menu>
      <SimilarMenu></SimilarMenu>
    </div>
  );
}

export default App;
