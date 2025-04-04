import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NewsPage from './components/NewsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NewsPage></NewsPage>} />
      </Routes>
    </BrowserRouter>);
}

export default App;
