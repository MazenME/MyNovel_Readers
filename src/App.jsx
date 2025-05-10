import ChaptersList from "./components/ChaptersList.jsx";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer.jsx";
import Reader from "./components/Reader.jsx";
import About from "./components/About.jsx"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ChaptersList />} />
        <Route path="/read/:id" element={<Reader />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
