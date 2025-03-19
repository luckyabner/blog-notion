"use client";

import React from "react";
import Link from "next/link";
import { useState } from "react";
import { X } from "lucide-react";
import { Menu } from "lucide-react";
import ToolsBar from "../ToolsBar";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { name: "Posts", href: "/posts", iconName: "home" },
    { name: "Categories", href: "/category", iconName: "layers" },
    { name: "Friends", href: "/friends", iconName: "users" },
    { name: "About", href: "/about", iconName: "user" },
  ];

  return (
    <header className="container mx-auto mb-6 w-full border-b border-border px-4">
      <nav className="relative flex h-28 items-center">
        {/* Logo */}
        <Link href="/" className="z-50 mr-auto font-bold">
          <span className="text-3xl">Abner</span>
        </Link>

        {/* 桌面端导航 */}
        <ul className="hidden items-center md:flex">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="hover:text-hover flex items-center gap-1.5 px-3 py-2 text-lg font-medium"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <ToolsBar />
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
        className={`w-full overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          isMenuOpen
            ? "max-h-96 border-t border-border py-4 opacity-100"
            : "max-h-0 py-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="block font-bold"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <ToolsBar />
        </ul>
      </div>
    </header>
  );
}
