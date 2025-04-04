import { useParams } from 'react-router';
import NewsList from './NewsList';

const NewsPage = () => {
  console.log(useParams());
  const param = useParams();
  const path = param['*'] || 'all';
  console.log(path);
  return (
    <>
      <NewsList />
    </>
  );
};

export default NewsPage;
