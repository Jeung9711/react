import NewsItem from './NewsItem';
import styles from './NewsList.module.css';

const NewsList = () => {
  return (
    <div className={styles.block}>
      <NewsItem />
      <NewsItem />
    </div>
  );
};

export default NewsList;
