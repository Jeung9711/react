import logo from './logo.svg';
import './App.css';
import styles from './App.module.css';
import Header from './Header';
import Nav from './Nav';
import { useState } from 'react';

// 이때 첫글자는 반드시 대문자
// 이게 react의 component 생성

//

// 하위 컴포넌트
// function Avatar(props) {
//   return(
//     <img className="avatar"
//         src={props.author.avatarUrl}
//         alt={props.author.name}
//     />
//   );
// }
// 상위 컴포넌트
// function Comment(props) {
//   return (
//     // class가 예약어로 사용되어 className을 사용
//     <div className="comment">
//       <div className="user-info">
//         <Avatar author={
//         {
//           'avatarUrl' : 'http://ggoreb.com/images/img_avatar1.png',
//           'name' : 'B'
//         } }></Avatar>
//         <div className="user-info-name">
//           {props.author.name}
//         </div>
//       </div>
//       {/* inline 방식으로 css 적용 */}
//       <div className="comment-text" style={
//         // 객체 형태로 들어가야 하므로 중괄호 필요
//         {"font-size": "2rem",
//           "background-color":"yellow"
//         }
//       }>
//         {props.text}
//       </div>
//
//       {/* module 방식으로 css 적용 */}
//       {/* <div className="comment-date date"> */}
//       <div className={styles.date}>
//         {/* 검사 시 react가 해시값을 붙여줌, 다른 클래스와 차이를 주기 위해 */}
//         {(props.date)}
//       </div>
//     </div>
//   )
// }

function App() {
  // const list = ['HTML', 'CSS', 'JavaScript'];
  const [list, setList] = useState(['HTML','CSS','JavaScript']);
  const [hide, setHide] = useState(false);

  return (
    <div className="App">
      {/* 0402 버튼을 누를때마다 랜덤한 값 리스트에 추가 */}
      <button onClick={() => {
        setHide(!hide);
      }}>숨기기</button>
      {hide?
        null
       :<Header title='Web' desc='World Wide Web!!'></Header>
        }


      <Nav list={list}></Nav>

      {/* / author에 객체를 전달하기 위해 {{}} 형태로 전달 */}
      {/* <Comment author={
        {
          'avatarUrl' : 'http://ggoreb.com/images/img_avatar1.png',
          'name' : 'B'
        } }
        text='점심은 맛있게 드셨나요?' date='2025-04-01'>
        </Comment> */}
    </div>
  );
}

export default App;
