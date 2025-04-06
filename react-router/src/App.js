import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Link, Route, Routes, useLocation, useParams} from 'react-router-dom';

function Component1() {
  return <div>
    1번 화면</div>
}
function Component2() {
  return <div>
    2번 화면</div>
}
function Component3() {
  return <div>
    3번 화면</div>
}

function ComponentN() {
  const { num } = useParams();
  return <div>(1~3제외) {num}번 화면</div>
}

function ComponentAZ() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('id');
  const name = searchParams.get('name');
  return <div>ID : {id} NAME : {name} </div>
}

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <h1>React Router DOM</h1> 
          <Link to='/1'>1번으로 이동</Link> /&nbsp;
          <Link to='/2'>2번으로 이동</Link> /&nbsp;
          <Link to='/3'>3번으로 이동</Link>

          <Routes>
            <Route path='/com/az' element={<ComponentAZ />}></Route>
            <Route path="/1" element={<Component1 /> }></Route>
            <Route path="/2" element={<Component2 /> }></Route>
            <Route path="/3" element={<Component3 /> }></Route>
            <Route path="/:num" element={<ComponentN /> }></Route>
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
