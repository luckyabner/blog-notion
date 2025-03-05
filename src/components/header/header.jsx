'use client'

import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { X } from 'lucide-react'
import { Menu } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const links = [
    { name: 'Posts', href: '/posts', iconName: 'home' },
    { name: 'Categories', href: '/category', iconName: 'layers' },
    // { name: '项目', href: '/project', iconName: 'code' },
    // { name: 'threads', href: '/movies', iconName: 'fan' },
    { name: 'Friends', href: '/friends', iconName: 'users' },
    { name: 'About', href: '/about', iconName: 'user' }
  ]

  return (
    <header className="w-full mx-auto border-b border-gray-200 mb-6">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-28 relative">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center font-bold z-50"
          >
            <span className="text-3xl">Abner</span>
          </Link>

          {/* 桌面端导航 */}
          <ul className="hidden md:flex items-center">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="flex items-center gap-1.5 px-3 py-2  hover:text-sky-700 font-medium text-lg"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* 移动端菜单按钮 */}
          <div className="md:hidden">
            <button
              className="p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </nav>
        {/* 移动端导航菜单 - 作为文档流的一部分，不使用绝对定位 */}
        <div
          className={`w-full overflow-hidden transition-all duration-300 ease-in-out md:hidden ${isMenuOpen ? 'max-h-96 opacity-100 py-4 border-t border-gray-100' : 'max-h-0 opacity-0 py-0'
            }`}
        >
          <ul className="flex flex-col items-center gap-6">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="block text-gray-900 font-bold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}