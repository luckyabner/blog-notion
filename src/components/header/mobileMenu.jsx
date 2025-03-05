'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function MobileMenu({ links }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="md:hidden">
      {/* 移动端菜单按钮 */}
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
  )
}