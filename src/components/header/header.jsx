'use client'

import React from 'react'
import Link from 'next/link'
import MobileMenu from './mobileMenu'
import { Home, Layers, Code, User } from 'lucide-react'

export default function Header() {

  const links = [
    { name: '首页', href: '/', iconName: 'home' },
    { name: '分类', href: '/category', iconName: 'layers' },
    { name: '项目', href: '/project', iconName: 'code' },
    { name: '关于', href: '/about', iconName: 'user' }
  ]

  const getIcon = (iconName) => {
    const icons = {
      home: Home,
      layers: Layers,
      code: Code,
      user: User
    }
    const Icon = icons[iconName]
    return Icon ? <Icon className="w-4 h-4" /> : null
  }

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
          >
            <span className="text-2xl">Abner</span>
          </Link>

          {/* 桌面端导航 */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all"
                >
                  {getIcon(link.iconName)}
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <MobileMenu links={links} />
        </nav>
      </div>
    </header>
  )
}