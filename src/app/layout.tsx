'use client'

// import './globals.css'
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import AppHeader from '@/components/app.header'

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Next.js 13 cơ bản',
//   description: 'Generated by create next app',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Next.js 13 cơ bản</title>
        <meta name='description' content='Description' />
      </head>
      <body className={inter.className}>
        <AppHeader />
        <Container>
          {children}
          <div className='bg-body-tertiary'>Huhuhi</div>
        </Container>
      </body>
    </html>
  )
}
