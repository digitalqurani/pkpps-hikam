'use client';
import { useAuth } from './AuthContext';
import { User } from 'lucide-react';

export default function Navbar({ title }) {
  const { user } = useAuth();
  return (
    <header className="bg-white shadow px-6 py-3 flex items-center justify-between">
      <h2 className="text-lg font-semibold">{title || 'PKPPS Hikam'}</h2>
      <div className="flex items-center gap-3">
        <User size={18} />
        <div className="text-sm">{user ? user.name : 'Tamu'}</div>
      </div>
    </header>
  )
}
