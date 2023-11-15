import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ThemeRegistry from '@/theme/ThemeRegistry'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ship Up ',
  description: 'quick & reliable warehousing and logistics solution.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeRegistry options={{ key: 'mui' }}>
        {children}
      </ThemeRegistry>
      </body>
    </html>
  )
}
