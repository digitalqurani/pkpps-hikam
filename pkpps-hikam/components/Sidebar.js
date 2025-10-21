'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from './AuthContext';
import { Home, Users, BookOpen, FileText, Settings, Menu } from 'lucide-react';
import { useState } from 'react';

const menus = {
  ADMIN: [
    { name: 'Dashboard', path: '/admin', icon: <Home size={16}/> },
    { name: 'Guru', path: '/admin/guru', icon: <Users size={16}/> },
    { name: 'Santri', path: '/admin/santri', icon: <Users size={16}/> },
    { name: 'Aset', path: '/admin/aset', icon: <FileText size={16}/> },
    { name: 'Pengaturan', path: '/admin/pengaturan', icon: <Settings size={16}/> },
  ],
  GURU: [
    { name: 'Dashboard', path: '/guru', icon: <Home size={16}/> },
    { name: 'Nilai', path: '/guru/nilai', icon: <FileText size={16}/> },
  ],
  SANTRI: [
    { name: 'Dashboard', path: '/santri', icon: <Home size={16}/> },
    { name: 'Tugas', path: '/santri/tugas', icon: <BookOpen size={16}/> },
  ],
  PUBLIK: [
    { name: 'Beranda', path: '/', icon: <Home size={16}/> }
  ]
}

export default function Sidebar() {
  const pathname = usePathname();
  const { user } = useAuth();
  const [open, setOpen] = useState(true);
  const role = user?.role || 'PUBLIK';
  const links = menus[role] || menus.PUBLIK;

  return (
    <aside className={`bg-white border-r fixed left-0 top-0 h-screen transition-all ${open ? 'w-64' : 'w-20'}`}>
      <div className="flex items-center justify-between p-4 border-b">
        <div className="font-bold text-lg">{open ? 'PKPPS Hikam' : 'PH'}</div>
        <button onClick={()=>setOpen(!open)} className="p-1"><Menu size={18} /></button>
      </div>
      <nav className="p-3">
        {links.map((it)=>(
          <Link key={it.path} href={it.path} className={`flex items-center gap-3 p-2 rounded mb-1 ${pathname === it.path ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}>
            <span>{it.icon}</span>
            {open && <span>{it.name}</span>}
          </Link>
        ))}
      </nav>
      <div className="absolute bottom-0 left-0 right-0 p-3 border-t">
        <div className="text-sm">{user ? user.name + ' • ' + user.role : 'Tamu'}</div>
      </div>
    </aside>
  )
}
