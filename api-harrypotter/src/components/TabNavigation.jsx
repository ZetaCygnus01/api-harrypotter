import { NavLink } from "react-router-dom";
import { FaHatWizard, FaBook, FaHome, FaFilm, FaStar, FaInfo } from "react-icons/fa";

const tabs = [
    { path: '/', icon: <FaHatWizard/>, label: 'Personajes'},
    { path: '/houses', icon: <FaHome/>, label: 'Casas'},
    { path: '/movies', icon: <FaFilm/>, label: 'Peliculas'},
    { path: '/books', icon: <FaBook/>, label: 'Libros'},
    { path: '/favorites', icon: <FaStar/>, label: 'Favoritos'},
    { path: '/info', icon: <FaInfo/>, label: 'Info'},
];

const TabNabigation = () => {
    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-purple-900 text-white flex justify-around py-3 shadow-md z-50">
          {tabs.map(tab => (
            <NavLink
              key={tab.path}
              to={tab.path}
              className={({ isActive }) =>
                `flex flex-col items-center text-sm ${isActive ? 'text-yellow-300' : 'text-white'}`
              }
            >
              {tab.icon}
              <span>{tab.label}</span>
            </NavLink>
          ))}
        </nav>
      );
    };

export default TabNabigation;