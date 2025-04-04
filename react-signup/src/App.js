import { useState } from 'react';
import './App.css';
import Formgroup from './Formgroup';

const App = () => {
  // 각 자식요소의 변수를 받아오기 위해 상태변수 설정
  // 각 값을 한번에 저장하도록 객체 상태변수로 설정
  const [formData, setFormData] = useState({
    id:'',
    password:'',
    email:'',
    phone:'',
    address:''
  });
  //  객체를 JSON 문자로 변환
  // JSON.stringify(formData);

  const sendData = () => {
    alert(`
        Id : ${formData.id}
        Password : ${formData.password}
        Email : ${formData.email}
        Phone : ${formData.phone}
        Address : ${formData.address}
      `);
  }
  
  return (
    <div className="container">
      <Formgroup formData={formData} setFormData={setFormData}></Formgroup>
      <button type='submit'onClick={sendData}> 제출 </button>
    </div>
  );
};

export default App;
