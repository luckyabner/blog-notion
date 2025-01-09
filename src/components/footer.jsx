'use client'

import { Mail, Github, Rss, Heart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/cdt3211',
      iconName: 'github'
    },
    {
      name: 'Email',
      href: 'mailto:tiankong089@gmail.com',
      iconName: 'mail'
    },
    {
      name: 'RSS',
      href: '/rss',
      iconName: 'rss'
    }
  ]

  const getIcon = (iconName) => {
    const icons = {
      github: Github,
      mail: Mail,
      rss: Rss
    }
    const Icon = icons[iconName]
    return Icon ? <Icon className="w-5 h-5" /> : null
  }

  return (
    <footer className="bg-gradient-to-b from-white to-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <Link 
            href="https://github.com/cdt3211" 
            target='blank'
            className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
          >
            Abner
          </Link>

          {/* 社交媒体链接 */}
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all"
                aria-label={link.name}
              >
                {getIcon(link.iconName)}
              </Link>
            ))}
          </div>

          {/* 版权信息 */}
          <div className="flex items-center gap-1 text-gray-500 text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 inline" />
            <span>by Abner 2024</span>
          </div>
        </div>
      </div>
    </footer>
  )
}