import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

const Cuenta = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const session = supabase.auth.getSession().then(({ data }) => {
      if (data.session) {
        setUser(data.session.user);
      } else {
        navigate('/login'); // Redirige si no hay sesión
      }
    });
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white p-4">
      <h1 className="text-3xl font-bold mb-6 text-yellow-200">👤 Mi cuenta</h1>
      {user ? (
        <div className="bg-[#2a2a2a] p-6 rounded-xl shadow-lg w-full max-w-md text-center">
          <p className="mb-4">📧 <strong>{user.email}</strong></p>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white font-bold"
          >
            Cerrar sesión
          </button>
        </div>
      ) : (
        <p>Cargando datos de usuario...</p>
      )}
    </div>
  );
};

export default Cuenta;
