import styles from './NewsItem.module.css';

const NewsItem = () => {
  return (
    <div className={styles.block}>
      <div className={styles.thumbnail}>
        <a href='' target="_blank">
          <img src='https://via.placeholder.com/160' 
               alt="thumbnail" />
        </a>
      </div>
      <div className={styles.contents}>
        <h2>
          <a href='' target="_blank">제목</a>
        </h2>
        <p>내용</p>
      </div>
    </div>
  );
};

export default NewsItem;
