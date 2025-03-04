'use client'

import React from 'react'
import Link from 'next/link'
import MobileMenu from './mobileMenu'

export default function Header() {

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
        <nav className="flex items-center justify-between h-28">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center font-bold"
          >
            <span className="text-3xl">Abner</span>
          </Link>

          {/* 桌面端导航 */}
          <nav aria-label="主导航">
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
          </nav>

          <MobileMenu links={links} />
        </nav>
      </div>
    </header>
  )
}