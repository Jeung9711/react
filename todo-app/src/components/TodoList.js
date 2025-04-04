import TodoListItem from './TodoListItem';
import styles from './TodoList.module.css';
import React from 'react';

const TodoList = ({todos, onRemove, onToggle}) => {
  console.log('TodoList 생성');
  
  return (
    <div className={styles.TodoList}>
      {
        todos.map(
          todo => 
            <TodoListItem todo={todo} key={todo.id} 
                          onRemove={onRemove}
                          onToggle={onToggle} />
        )
      }
    </div>
  );
};
export default TodoList;