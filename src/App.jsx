import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ChaptersList from './components/ChaptersList';
import Reader from './components/Reader';

function App() {
  return (
<>
    <BrowserRouter>
    <Link to="/">
     <h1>
       CHAPTERS
     </h1>
    </Link>
      <Routes>
        <Route path="/" element={<ChaptersList />} />
        <Route path="/read/:id" element={<Reader />} />
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
