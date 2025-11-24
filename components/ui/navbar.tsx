'use client'

import { useState } from 'react'
import Link from 'next/link'
import { navigation } from '@/data/navigation'
import { Menu, X, ChevronDown, Sparkles } from 'lucide-react'
import { clsx } from 'clsx'

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  return (
    <header className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 backdrop-blur-lg shadow-xl sticky top-0 z-50 border-b border-slate-700/50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg transform transition-transform group-hover:scale-110">
                  <span className="text-white font-bold text-2xl">M</span>
                </div>
              </div>
              <div className="hidden sm:block">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">MindIsGear</span>
                <div className="text-xs text-slate-400 font-medium tracking-wider">INNOVATIVE SOLUTIONS</div>
              </div>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="ml-10 hidden space-x-1 lg:flex">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.children ? (
                  <div
                    className="group"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      className="flex items-center px-4 py-2 text-sm font-medium text-slate-200 hover:text-white rounded-lg hover:bg-white/10 transition-all duration-200"
                      onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                    </button>

                    {activeDropdown === item.name && (
                      <div className="absolute left-0 mt-2 w-64 origin-top-left rounded-xl bg-slate-800/95 backdrop-blur-xl shadow-2xl ring-1 ring-white/10 z-50 animate-in fade-in slide-in-from-top-2">
                        <div className="py-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="block px-4 py-3 mx-2 rounded-lg text-sm text-slate-200 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 hover:text-white transition-all duration-200"
                              onClick={() => setActiveDropdown(null)}
                            >
                              <div className="font-medium">{child.name}</div>
                              <div className="text-xs text-slate-400 mt-1">{child.description}</div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="px-4 py-2 text-sm font-medium text-slate-200 hover:text-white rounded-lg hover:bg-white/10 transition-all duration-200"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="ml-10 hidden lg:block">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg hover:shadow-purple-500/25 hover:scale-105 transform transition-all duration-200"
            >
              <Sparkles className="mr-2 h-4 w-4" />
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-200 hover:text-white hover:bg-white/10 transition-colors"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50 bg-slate-900/95 backdrop-blur-xl px-4 py-6 sm:px-6">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center space-x-3" onClick={() => setMobileMenuOpen(false)}>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl blur-lg opacity-75"></div>
                  <div className="relative flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg">
                    <span className="text-white font-bold text-2xl">M</span>
                  </div>
                </div>
                <div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">MindIsGear</span>
                  <div className="text-xs text-slate-400 font-medium tracking-wider">INNOVATIVE SOLUTIONS</div>
                </div>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-lg p-2.5 text-slate-200 hover:text-white hover:bg-white/10 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-slate-700/50">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      {item.children ? (
                        <div>
                          <div className="font-medium text-slate-200 py-2">{item.name}</div>
                          <div className="ml-4 space-y-2">
                            {item.children.map((child) => (
                              <Link
                                key={child.name}
                                href={child.href}
                                className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-slate-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-200"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {child.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-slate-200 hover:text-white hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-200"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    href="/contact"
                    className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-purple-500/25 hover:scale-105 transform transition-all duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Sparkles className="mr-2 h-4 w-4" />
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}