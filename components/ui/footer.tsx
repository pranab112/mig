import Link from 'next/link'
import Image from 'next/image'
import { footerNavigation } from '@/data/navigation'
import { Mail, Twitter, Github, Linkedin, Phone } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-slate-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            {/* Logo and tagline */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-12 h-12 bg-white rounded-lg p-1">
                <Image
                  src="/images/mig-logo-icon.svg"
                  alt="MindIsGear Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div>
                <Image
                  src="/images/mig-logo-text.svg"
                  alt="MindIsGear"
                  width={100}
                  height={32}
                  className="object-contain brightness-0 invert"
                />
                <div className="text-xs text-slate-400 font-medium">INNOVATIVE SOLUTIONS</div>
              </div>
            </Link>
            <p className="text-sm leading-6 text-slate-300">
              Turn your mind into gear. We transform ideas into working systems — from brainwave to bot.
            </p>
            <div className="flex space-x-6">
              <a href="mailto:mindisgear@gmail.com" className="text-slate-400 hover:text-slate-300">
                <span className="sr-only">Email</span>
                <Mail className="h-6 w-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-slate-300">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-slate-300">
                <span className="sr-only">GitHub</span>
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-slate-300">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Navigation</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.main.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-slate-300 hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Products</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.products.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-slate-300 hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Contact</h3>
                <div className="mt-6 space-y-4">
                  <div className="text-sm text-slate-300">
                    <p className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      <a href="mailto:mindisgear@gmail.com" className="hover:text-white transition-colors">
                        mindisgear@gmail.com
                      </a>
                    </p>
                  </div>
                  <div className="text-sm text-slate-300">
                    <p className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      <a href="tel:+9779847876077" className="hover:text-white transition-colors">
                        +977 9847876077
                      </a>
                    </p>
                  </div>
                  <div className="text-sm text-slate-300">
                    <p>Quick chat: Send us a voice note or loom</p>
                  </div>
                </div>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Learn</h3>
                <div className="mt-6 space-y-4">
                  <Link
                    href="/academy"
                    className="block text-sm leading-6 text-slate-300 hover:text-white transition-colors"
                  >
                    Academy
                  </Link>
                  <Link
                    href="/blog"
                    className="block text-sm leading-6 text-slate-300 hover:text-white transition-colors"
                  >
                    Blog
                  </Link>
                  <Link
                    href="/resources"
                    className="block text-sm leading-6 text-slate-300 hover:text-white transition-colors"
                  >
                    Resources
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-slate-700 pt-8 sm:mt-20 lg:mt-24">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex space-x-6 md:order-2">
              {footerNavigation.legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm leading-6 text-slate-400 hover:text-slate-300 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <p className="mt-8 text-xs leading-5 text-slate-400 md:order-1 md:mt-0">
              &copy; 2024 MindIsGear. All rights reserved. Built with Next.js and Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}