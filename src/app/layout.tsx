import Header from '@/components/Header'
import './globals.css'
import 'remixicon/fonts/remixicon.css'
import Footer from '@/components/Footer'
export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <Header/>
    {children}
      <Footer/>
      </body>
    </html>
  )
}
