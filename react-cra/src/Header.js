import { useEffect, useMemo, useState } from 'react';

function Header(props) {
  console.log('header');
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);
  // const [content, setContent] = useContent('');
  useEffect(() => {
    console.log('처음에만 실행');
    return () => {
      console.log('Header 소멸');
    };
  }, []);

  useEffect(() => {
    console.log('count가 바뀌면 실행');
  }, [count]);

  function click(e) {
    alert(e.target.innerText);
  }

  const factorial = (n) => {
    if(n == 0) {
    return 0;
    } else if(n == 1) {
    return 1;
    } else {
    return factorial(n - 1) * n
    }
    }
    // const memo = useMemo(() => {
    // console.log("factorial 연산");
    // let result = factorial(count);
    // return result;
    // }, [count]);

    const no_memo = useMemo(() => {
      console.log("factorial 연산");
      let result = factorial(5);
      return result;
      }, [count]);

  return (
    <header>
      {/* props.desc 클릭시 옆에 숫자가 증가 */}
      <div>
        <h1 onClick={click}>{props.title}{no_memo}</h1>
        <p onClick={() => {
          setCount(count+1);
        }}> {props.desc} {count}</p>
      </div>
      {/* <button onClick={() => {
        setShow(!show);
      }}>추가</button>

      {show == true ? 
        <div>
          <input value={content}>
          </input>
          <button >완료</button>
        </div> 
        :null} */}
    </header>
  );
}

export default Header;