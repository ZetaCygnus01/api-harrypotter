import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const { data, error } = await supabase.auth.signUp({
    email: formData.email,
    password: formData.password,
    options: {
      data: {
        name: formData.name,
      },
    },
  });

  if (error) {
    setMessage(`❌ Error: ${error.message}`);
  } else {
    setMessage('✅ Registro exitoso. Revisa tu correo para confirmar tu cuenta.');
    setFormData({ name: '', email: '', password: '' });
  }
};

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white p-4">
      <h1 className="text-3xl font-bold mb-6 text-yellow-200">🧙 Registrarse</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-[#2a2a2a] p-6 rounded-xl shadow-lg w-full max-w-md space-y-4"
      >
        <div>
          <label className="block mb-1">Nombre completo</label>
          <input
            type="text"
            name="name"
            className="w-full p-2 rounded bg-[#3a3a3a] border border-gray-600 text-white"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
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
          Registrarse
        </button>
        {message && <p className="text-sm mt-2 text-center">{message}</p>}
        <p className="text-sm text-gray-400 text-center mt-2">
          ¿Ya tienes cuenta?{' '}
          <Link to="/login" className="text-yellow-300 hover:underline">Inicia sesión</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;

