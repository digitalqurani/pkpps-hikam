import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-2xl bg-white p-8 rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-4">PKPPS Hikam - Public Landing</h1>
        <p className="mb-4">Selamat datang di demo portal PKPPS Hikam. Silakan login untuk melihat dashboard sesuai peran.</p>
        <div className="space-x-3">
          <Link href="/login" className="px-4 py-2 bg-blue-600 text-white rounded">Login</Link>
          <Link href="/admin" className="px-4 py-2 bg-slate-200 rounded">Admin Area (protected)</Link>
        </div>
      </div>
    </main>
  )
}
