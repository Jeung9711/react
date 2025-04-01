import { useState } from 'react';
import styles from './App.module.css';
// function Nav({list})로 변수설정하면 밑에서는 list만 사용하면 됨
// props -> props.list.map
function Nav({list}) {
    // State 사용법
    const [count, setCount] = useState(0);
    let count2 = 0;

    return (
        <nav>
            <button onClick={() => {
                count2++;
                setCount(count+1)
                console.log(count);
            }}>증가 {count} {count2}</button>
            <ul>
                {
                    list.map((v,i) => {
                        return (
                            <li key={i}><a href="3.html">{v}</a></li>
                        );
                    })
                }
                <li><a href="3.html"></a></li>
            </ul>
        </nav>
    );
}

export default Nav;