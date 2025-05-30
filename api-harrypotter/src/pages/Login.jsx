// src/pages/Login.jsx
import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    });

    if (error) {
      setMessage(`❌ Error: ${error.message}`);
    } else {
      setMessage('');
      navigate('/'); // redirige al inicio
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white p-4">
      <h1 className="text-3xl font-bold mb-6 text-yellow-200">🧙 Iniciar sesión</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-[#2a2a2a] p-6 rounded-xl shadow-lg w-full max-w-md space-y-4"
      >
        <div>
          <label className="block mb-1">Correo electrónico</label>
          <input
            type="email"
            name="email"
            className="w-full p-2 rounded bg-[#3a3a3a] border border-gray-600 text-white"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block mb-1">Contraseña</label>
          <input
            type="password"
            name="password"
            className="w-full p-2 rounded bg-[#3a3a3a] border border-gray-600 text-white"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#4b2e83] hover:bg-[#6a409a] p-2 rounded text-white font-bold"
        >
          Iniciar sesión
        </button>
        {message && <p className="mt-2 text-center text-red-400">{message}</p>}
        <p className="text-sm text-gray-400 text-center mt-2">
          ¿No tienes cuenta?{' '}
          <Link to="/register" className="text-yellow-300 hover:underline">
            Regístrate
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;

