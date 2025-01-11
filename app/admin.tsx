import React, { useState } from 'react';

const AdminPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle authentication logic here
    console.log('Logging in with:', { email, password });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <h1 className="text-white text-3xl mb-4">Admin Login</h1>
      <form onSubmit={handleLogin} className="bg-gray-800 p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-300 mb-2" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 text-white"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 mb-2" htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 text-white"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminPage;