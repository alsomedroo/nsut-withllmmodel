"use client"
import React, { useState } from 'react';
import { Mail, Lock, User, ArrowRight, UserPlus } from 'lucide-react';

function AuthForm() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    if (!username || !password || (isSignUp && !name)) {
      setError('All fields are required.');
      setLoading(false);
      return;
    }

    const url = isSignUp ? 'http://localhost:5000/api/signup' : 'http://localhost:5000/api/signin';
    const payload = { username, password, ...(isSignUp && { name }) };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Something went wrong');
      console.log('Success:', data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 flex justify-center items-center -z-10">
        <div className="w-[600px] h-[600px] bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-pink-600/30 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      {/* Auth Card */}
      <div className="relative w-full max-w-sm bg-gray-800/80 backdrop-blur-xl rounded-xl shadow-lg p-6 space-y-6 text-white transition-all">
        <div className="text-center">
          <h1 className="text-2xl font-semibold">{isSignUp ? 'Create Account' : 'Welcome Back'}</h1>
          <p className="text-gray-400 text-sm">{isSignUp ? 'Sign up to get started' : 'Sign in to continue'}</p>
        </div>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          {isSignUp && (
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-gray-700/50 text-white pl-10 pr-3 py-3 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}

          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-gray-700/50 text-white pl-10 pr-3 py-3 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-gray-700/50 text-white pl-10 pr-3 py-3 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 transform hover:scale-105 transition-all shadow-md"
            disabled={loading}
          >
            {loading ? 'Processing...' : <><span>{isSignUp ? 'Sign Up' : 'Sign In'}</span><ArrowRight size={18} /></>}
          </button>
        </form>

        <button
          onClick={() => setIsSignUp(!isSignUp)}
          className="text-gray-400 hover:text-white flex items-center justify-center gap-2 mx-auto text-sm transition-all"
        >
          {isSignUp ? 'Already have an account?' : 'Need an account?'}
          <UserPlus size={18} />
        </button>
      </div>
    </div>
  );
}

export default AuthForm;
