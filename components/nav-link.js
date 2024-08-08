'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function NavLink({href, children}) {
    const path = usePathname()
  return (
    <li>
      <Link className={path.startsWith(href) ? 'active' : undefined} href={href}>{children}</Link>
    </li>
  )
}
