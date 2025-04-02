import { useState } from 'react';
import styles from './App.module.css';
// function Nav({list})로 변수설정하면 밑에서는 list만 사용하면 됨
// props -> props.list.map
function Nav(props) {
    // State 사용법
    const [list, setList] = useState(props.list);

    // 수정 입력창 제어를 위한 state 값
    const [show, setShow] = useState(false);
    // 수정 요소의 번호 제어
    const [index, setIndex] = useState(-1);
    // 수정 요소의 내용 제어
    const [content, setContent] = useState('');

    // 추가에 대한 state
    const [add,setAdd] = useState(false);
    let nextId = -1;
    return (
        <nav>
            <button onClick={() => {
                // const data = Math.random();
                // list.push(data);
                // const list2 = [...list]; // 리스트를 담아 새로운 리스트 반환
                // setList(list2);
                nextId = list.reduce((max,item) => Math.max(max, item.id),0) +1;
                setAdd(!add);
            }}>추가 버튼</button>
            { add == true?
                <div>
                    <input value={content} onChange={(e) => {
                       setContent(e.target.value);
                    }}></input>
                    <button onClick={() => {
                        const newItem = content;
                        const list2 = [...list,newItem];
                        
                        setList(list2);
                        setAdd(!add);
                        setContent('');
                    }}>완료</button>
                </div>
                :null
            }

            <ul>
                {
                    list.map((v, i) => {
                        return (
                            <li key={i}>
                                <a href="3.html">{v}</a>
                                <button onClick={() => {
                                    console.log(i);
                                    // slice 시작 인덱스, 끝 인덱스 필요
                                    // splice 시작 인덱스에 몇개 지울지 필요
                                    list.splice(i,1);
                                    const list2 =[...list];
                                    setList(list2);
                                }}>삭제</button>
                                <button onClick={() => {
                                    setShow(!show);
                                    setIndex(i);
                                    setContent(list[i]);
                                }}>수정</button>
                            </li>
                        );
                    })
                }
            </ul>
            
            {/* 수정 버튼 만들기 */}
            {
                // true면 보이고 아니면 안보임
                show == true ? 
                <div>
                    <input value={content} onChange={(e) => {
                        // 입력한 글자 저장
                        setContent(e.target.value);
                    }}></input> 
                    <button onClick={() => {
                        list[index] = content;
                        const list2 = [...list];
                        setList(list2);
                        setShow(!show);
                        setContent('');
                    }}>완료</button>
                </div>
                : null
            }
        </nav>
    );
}

export default Nav;