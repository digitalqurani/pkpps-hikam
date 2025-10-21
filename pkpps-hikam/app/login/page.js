'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../components/AuthContext';

export default function LoginPage() {
  const { setUser } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('ADMIN');
  const router = useRouter();

  // Dummy login: any credentials accepted; role chosen from dropdown.
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({
      name: email || 'User Demo',
      email,
      role
    });
    router.push(role === 'ADMIN' ? '/admin' : role === 'GURU' ? '/guru' : role === 'SANTRI' ? '/santri' : '/');
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Login (Dummy)</h2>
        <label className="block mb-2 text-sm">Email</label>
        <input className="w-full p-2 border rounded mb-3" value={email} onChange={e=>setEmail(e.target.value)} placeholder="email@contoh.id" />
        <label className="block mb-2 text-sm">Password</label>
        <input type="password" className="w-full p-2 border rounded mb-3" value={password} onChange={e=>setPassword(e.target.value)} placeholder="password" />
        <label className="block mb-2 text-sm">Role</label>
        <select className="w-full p-2 border rounded mb-4" value={role} onChange={e=>setRole(e.target.value)}>
          <option value="ADMIN">Admin</option>
          <option value="GURU">Guru</option>
          <option value="SANTRI">Santri</option>
          <option value="PUBLIK">Publik</option>
        </select>
        <button className="w-full bg-blue-600 text-white py-2 rounded">Login (Dummy)</button>
      </form>
    </div>
  )
}
