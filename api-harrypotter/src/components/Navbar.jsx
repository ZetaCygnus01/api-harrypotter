import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-[#1e1e1e] text-yellow-200 shadow-md py-4 px-6 flex justify-between items-center fixed top-0 left-0 right-0 z-50">
      <h1 className="text-2xl font-bold tracking-widest">
        🪄 Harry Potter App
      </h1>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Inicio</Link>
        <Link to="/login" className="hover:underline">Login</Link>
        <Link to="/register" className="hover:underline">Registro</Link>
        <Link to="/cuenta" className="text-white hover:text-yellow-400">Cuenta</Link>
      </div>
    </nav>
  );
};

export default Navbar;
