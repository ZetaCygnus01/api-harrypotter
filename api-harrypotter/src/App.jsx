import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Characters from "./pages/Characters";
import Houses from "./pages/Houses";
import Movies from "./pages/Movies";
import Books from "./pages/Books";
import Favorites from "./pages/Favorites";
import Info from "./pages/Info";
import TabNavigation from "./components/TabNavigation";
import GuessCharacter from './pages/GuessCharacter';
import GuessCharacterPage from './pages/GuessCharacterPage';

function App() {
  return (
    <Router basename="/api-harrypotter">
      <div className="pb-16"> {/* esto es un espacio vacio */}
        <Routes>
          <Route path="/" element={<Characters />} />
          <Route path="/houses" element={<Houses />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/books" element={<Books />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/info" element={<Info />} />
          <Route path="/guess-character" element={<GuessCharacterPage />} />
        </Routes>
      </div>
      <TabNavigation />
    </Router>
  );
}

export default App;