import React from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

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

          {/* 移动端菜单按钮 */}
          {/* <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button> */}
        </nav>

        {/* 移动端导航菜单 */}
        {/* {isMenuOpen && (
          <div className="md:hidden py-4">
            <ul className="flex flex-col gap-4">
              {links.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="block text-gray-600 hover:text-gray-900 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )} */}
      </div>
    </header>
  )
}