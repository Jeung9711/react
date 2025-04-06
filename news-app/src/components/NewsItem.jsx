import styles from './NewsItem.module.css';

const NewsItem = ({ key, articles}) => {
  return (
    <div className={styles.block}>
      <div className={styles.thumbnail}>
        <a href={articles.url} target="_blank">
          <img src={articles.urlToImage}
               alt="thumbnail" />
        </a>
      </div>
      <div className={styles.contents}>
        <h2>
          <a href={articles.url} target="_blank">{articles.title}</a>
        </h2>
        <p>{articles.content}</p>
      </div>
    </div>
  );
};

export default NewsItem;
