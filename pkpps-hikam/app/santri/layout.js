import Sidebar from '../../components/Sidebar'
import Navbar from '../../components/Navbar'

export const metadata = { title: 'Santri - PKPPS Hikam' }

export default function SantriLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Navbar />
        <main className="p-6 bg-slate-50 min-h-screen">{children}</main>
      </div>
    </div>
  )
}
