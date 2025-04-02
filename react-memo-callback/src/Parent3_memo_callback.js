import React, { useCallback, useEffect, useState } from "react";

// Parent의 state가 바뀌면서 Child 새로고침되어야 하지만
// React.memo와 useCallback 사용으로 새로고침되지 않음
const Child = React.memo((props) => {
  console.log(`🔁 Child 렌더링 ${props.value}`);

  useEffect(() => {
    console.log('handleClick 새로 생성');
  }, [props.handleClick]);
  
  return (
    <div>
      <h2>Child</h2>
      <button onClick={props.handleClick}>자식 버튼</button>
    </div>
  );
});

function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => console.log('자식 버튼 클릭'), []);

  return (
    <div>
      <p>카운트: {count}</p>
      <button onClick={() => setCount(count + 1)}>카운트 증가</button>
      <Child value="변하지 않는 props" handleClick={handleClick}/>
    </div>
  );
}

export default Parent;
