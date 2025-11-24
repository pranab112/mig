import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/ui/navbar'
import { Footer } from '@/components/ui/footer'
import { OrganizationSchema, ServiceSchema } from '@/components/structured-data'
import { generateMetadata } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = generateMetadata({
  title: 'MindIsGear - Turn your mind into gear',
  description: 'We transform your ideas into working systems — AI automation, data scraping, and intelligent tools for growing businesses.',
  tags: ['automation', 'AI', 'data scraping', 'workflow automation', 'business tools', 'n8n', 'make', 'zapier'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <OrganizationSchema />
        <ServiceSchema />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}