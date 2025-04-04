import { useCallback, useMemo, useRef, useState } from 'react';
import './App.css';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

function App() {
  console.log('App 생성');

  const create = useMemo(() => {
    const list = [];
    for(let i = 1; i <= 5000; i++) {
      list.push({id: i, text: `리액트 ${i}`, checked: i % 4 ? false : true})
    }
    console.log('리스트 생성');
    return list;
  }, []);
  const [todos, setTodos] = useState(create);

  const nextId = useRef(todos.length + 1);

  // 이 값이 항상 새로운 참조값을 넘겨줌 -> useCallback 사용
  const onInsert = useCallback((text) => {
    const todo = {id: nextId.current, text: text, checked: false};
    setTodos( todos => [...todos, todo] );
    nextId.current++;
  },[]);

  const onRemove = useCallback((id) => {
    setTodos(todos => todos.filter((todo) => todo.id !== id));
  },[]);

  const onToggle = useCallback((id) => {
    setTodos(todos => 
      todos.map((todo) => 
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  },[]);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} 
                onToggle={onToggle} />
    </TodoTemplate>
    
  );
}
export default App;