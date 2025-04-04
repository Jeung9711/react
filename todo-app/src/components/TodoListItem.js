import { MdCheckBoxOutlineBlank, MdRemoveCircleOutline, MdCheckBox } from 'react-icons/md';
import styles from './TodoListItem.module.css';
import React from 'react';

const TodoListItem = (props) => {
  console.log('TodoListItem 생성');
  
  const { id, text, checked } = props.todo;
  return (
    <div className={styles.TodoListItem}>

      <div className={checked ? `${styles.checkbox} ${styles.checked}` : styles.checkbox}
           onClick={() => props.onToggle(id)}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />
      }
        <div className={styles.text}>{text}</div>
      </div>

      <div className={styles.remove} onClick={() => {
        props.onRemove(id);
      }}>
        <MdRemoveCircleOutline></MdRemoveCircleOutline>
      </div>
    </div>
  );
};

// 위의 함수에 하는 것보다 이 방법을 권장
export default React.memo(TodoListItem);