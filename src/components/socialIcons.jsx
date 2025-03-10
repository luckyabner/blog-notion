import { SOCIALS } from '@/config'
import { Rss } from 'lucide-react'
import { Github } from 'lucide-react'
import { Mail } from 'lucide-react'
import { Twitter } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function SocialIcons() {
    const getIcon = (iconName) => {
        const icons = {
            Github: Github,
            Mail: Mail,
            Rss: Rss,
            Twitter: Twitter,
        }
        const Icon = icons[iconName]
        return Icon ? (
            <Icon className="size-6 transition-transform duration-200 group-hover:rotate-12" />
        ) : null
    }
    return (
        <nav aria-label="社交媒体链接" className="flex gap-3">
            {SOCIALS.map((social) => (
                <Link
                    href={social.href}
                    target="_blank"
                    aria-label={`访问${social.name}账户`}
                    title={social.linkTitle}
                    key={social.name}
                    className="group inline-flex items-center gap-2 hover:text-sky-700"
                >
                    {getIcon(social.name)}
                </Link>
            ))}
        </nav>
    )
}
