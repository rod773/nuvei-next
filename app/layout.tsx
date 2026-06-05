import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nuvei - Best Infrastructure',
  description: 'Based on the industry\'s best infrastructure',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
