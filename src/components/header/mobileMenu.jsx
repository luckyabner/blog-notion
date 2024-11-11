'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function MobileMenu({ links }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      {/* 移动端菜单按钮 */}
      <button
        className="md:hidden p-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>

      {/* 移动端导航菜单 */}
      {isMenuOpen && (
        <div className="md:hidden py-4 absolute top-16 left-0 right-0 bg-white border-b">
          <ul className="flex flex-col gap-4 container mx-auto px-4">
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
      )}
    </>
  )
}