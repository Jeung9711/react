import { useState } from "react";

// Parent의 state가 바뀌면서 Child 새로고침
const Child = (props) => {
  console.log(`🔁 Child 렌더링 ${props.value}`);
  return <h2>Child</h2>;
};

function Parent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>카운트: {count}</p>
      <button onClick={() => setCount(count + 1)}>카운트 증가</button>
      <Child value="변하지 않는 props" />
    </div>
  );
}

export default Parent;
