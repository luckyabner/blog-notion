import React from 'react'
import SocialIcons from './socialIcons'

export default function Footer() {


  return (
    <footer className="w-full h-20 border-t border-gray-200">
      <div className="container mx-auto px-4 h-full flex justify-between items-center">
        <small className="text-gray-600" role="contentinfo">Copyright © 2025</small>
        <nav aria-label="社交媒体链接">
          <SocialIcons />
        </nav>
      </div>
    </footer>
  )
}