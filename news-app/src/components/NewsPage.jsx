import { useParams } from 'react-router';
import NewsList from './NewsList';
import { useEffect, useState } from 'react';
import NavLink from './NavLink';

const NewsPage = (category) => {
  const [articles, setArticles] = useState([]);
  console.log(useParams());
  const param = useParams();
  const path = param['*'] || 'all';
  console.log(path);

  useEffect(()=>{
    async function get() {
      const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=72c6ef6dd4a34b4ca8f814c962046ccc';
      const res = await fetch(url);
      const data = await res.json();
      setArticles(data.articles);
    }

    get();
  },[]);
  return (
    <>
      <NavLink categories={category}/>
      <NewsList articles={articles}/>
    </>
  );
};

export default NewsPage;
