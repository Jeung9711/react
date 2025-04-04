import { MdAdd } from 'react-icons/md';
import styles from './TodoInsert.module.css';
import React, { useCallback, useState } from 'react';

const TodoInsert = ({onInsert}) => {
  console.log('TodoInsert 생성');
  
  const [value, setValue] = useState('');
  
  const onChange = (e) => {
    setValue(e.target.value);
  };
  
  return (
    <form className={styles.TodoInsert} onSubmit={(e) => {
      e.preventDefault();
      onInsert(value);
    }}>
      <input className={styles.input}
        placeholder="할 일을 입력하세요" 
        onChange={onChange} value={value} />

      <button type="submit" className={styles.button}>
        <MdAdd />
      </button>
    </form>
  );
};

// react.memo 적용해도 log 창에 출력
export default React.memo(TodoInsert);