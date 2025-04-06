import { BrowserRouter, Routes, Route} from 'react-router-dom';
import NewsPage from './components/NewsPage';
import NavLink from './components/NavLink';
import { useCallback, useState } from 'react';

function App() {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback((category)=> setCategory(category),[]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<NavLink category={category} onSelect={onSelect}></NavLink>} />
        <Route path="*" element={<NewsPage category={category}></NewsPage>} />
      </Routes>
    </BrowserRouter>);
}

export default App;
