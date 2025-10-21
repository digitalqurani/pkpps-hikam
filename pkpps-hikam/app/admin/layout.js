import AdminSidebar from '../../components/Sidebar'
import AdminNavbar from '../../components/Navbar'

export const metadata = { title: 'Admin - PKPPS Hikam' }

export default function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <div className="flex-1 ml-64">
        <AdminNavbar />
        <main className="p-6 bg-slate-50 min-h-screen">{children}</main>
      </div>
    </div>
  )
}
