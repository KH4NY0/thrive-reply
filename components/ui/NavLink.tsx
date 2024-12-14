'use client'

import React, { useState, useRef, useEffect } from 'react'

interface NavLinkProps {
    href: string
    className?: string
    children: React.ReactNode
}

export const NavLink: React.FC<NavLinkProps> = ({ href, className, children }) => {
    const [hoverPosition, setHoverPosition] = useState({ x: 0, width: 0 })
    const linkRef = useRef<HTMLAnchorElement>(null)

    const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (linkRef.current) {
            const linkRect = linkRef.current.getBoundingClientRect()
            const x = e.clientX - linkRect.left
            setHoverPosition({ x, width: linkRect.width })
        }
    }

    const handleMouseLeave = () => {
        setHoverPosition({ x: 0, width: 0 })
    }

    return (
        <a
            href={href}
            className={`relative inline-block ${className}`}
            ref={linkRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <span className="relative z-10">{children}</span>
            <span
                className="absolute bottom-0 left-0 h-0.5 bg-purple-500 transition-all duration-300 ease-out"
                style={{
                    width: `${(hoverPosition.x / hoverPosition.width) * 100}%`,
                    opacity: hoverPosition.width ? 1 : 0,
                }}
            />
        </a>
    )
}

