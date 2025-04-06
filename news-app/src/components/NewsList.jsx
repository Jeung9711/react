import NewsItem from './NewsItem';
import styles from './NewsList.module.css';

const NewsList = ({articles}) => {
  return (
    <div className={styles.block}>
      { articles.map((articles)=>{
        return (
        <NewsItem key={articles.id+articles.publishedAt} articles={articles}/>
        // {<NewsItem />}
        )
      })};
    </div>
  );
};

export default NewsList;
