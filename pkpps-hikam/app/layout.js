import './globals.css'
import { AuthProvider } from '../components/AuthContext'
import ClientProviders from '../components/ClientProviders'

export const metadata = {
  title: 'PKPPS Hikam',
  description: 'Dashboard PKPPS Hikam - demo'
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <AuthProvider>
          <ClientProviders>
            {children}
          </ClientProviders>
        </AuthProvider>
      </body>
    </html>
  )
}
