import React from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import MobileMenu from './mobileMenu'

export default function Header() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false)

  const links = [
    { name: '首页', href: '/' },
    { name: '分类', href: '/category' },
    { name: '关于', href: '/about' }
  ]

  return (
    <header className="border-b bg-white">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold">Abner</span>
          </Link>

          {/* 桌面端导航 */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
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