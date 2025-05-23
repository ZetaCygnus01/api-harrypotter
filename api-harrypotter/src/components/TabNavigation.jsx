import { NavLink } from "react-router-dom";
import { FaHatWizard, FaFilm, FaStar, FaInfoCircle } from "react-icons/fa";
import { GiHouse, GiSpellBook } from "react-icons/gi";

const TabNavigation = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-purple-900 text-white flex justify-around items-center h-16 shadow-lg z-50">
      <NavLink to="/" className="flex flex-col items-center">
        <FaHatWizard className="text-xl" />
        <span className="text-sm">Personajes</span>
      </NavLink>
      <NavLink to="/houses" className="flex flex-col items-center">
        <GiHouse className="text-xl" />
        <span className="text-sm">Casas</span>
      </NavLink>
      <NavLink
        to="/movies"
        title="Películas"
        className={({ isActive }) => `flex flex-col items-center ${isActive ? 'text-yellow-400' : 'text-white'}`}
      >
        <FaFilm className="text-xl" />
        <span className="text-sm">Películas</span>
      </NavLink>
      <NavLink to="/books" className="flex flex-col items-center">
        <GiSpellBook className="text-xl" />
        <span className="text-sm">Libros</span>
      </NavLink>
      <NavLink to="/favorites" className="flex flex-col items-center">
        <FaStar className="text-xl" />
        <span className="text-sm">Favoritos</span>
      </NavLink>
      <NavLink to="/info" className="flex flex-col items-center">
        <FaInfoCircle className="text-xl" />
        <span className="text-sm">Info</span>
      </NavLink>
      <NavLink
        to="/adivina"
        className={({ isActive }) => `flex flex-col items-center ${isActive ? 'text-yellow-400' : 'text-white'}`}
        >
        <FaHatWizard className="text-xl" />
        <span className="text-sm">Adivina el Personaje</span>
      </NavLink>
    </div>
  );
};

export default TabNavigation;
