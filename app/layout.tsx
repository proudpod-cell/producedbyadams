import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Adam Spiegelman — Executive Producer & Showrunner',
  description: 'Executive Producer and Showrunner specializing in talent-driven television, digital video, and podcasts.',
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
