import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Characters from "./pages/Characters";
import Houses from "./pages/Houses";
import Movies from "./pages/Movies";
import Books from "./pages/Books";
import Favorites from "./pages/Favorites";
import Info from "./pages/Info";
import TabNavigation from "./components/TabNavigation";
import Navbar from './components/Navbar'
import GuessCharacter from './pages/GuessCharacter';
import GuessCharacterPage from './pages/GuessCharacterPage';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cuenta from './pages/Cuenta';

function App() {
  return (
    <Router basename="/api-harrypotter">
      <div className="pt-16 pb-16 min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Characters />} />
          <Route path="/houses" element={<Houses />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/books" element={<Books />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/info" element={<Info />} />
          <Route path="/adivina" element={<GuessCharacterPage />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/cuenta" element={<Cuenta />} />
        </Routes>
      </div>
      <TabNavigation />
    </Router>
  );
}

export default App;