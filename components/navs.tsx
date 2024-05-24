'use client'

import Link from 'next/link'
import { ModeToggle } from './mode-toggle'
import headerNavLinks from '@/data/headerNavLinks'

const Navs = () => {
  return (
    <nav className="nav-header-rhs breadcrumbs">
      {headerNavLinks.map((nav) => {
        return (
          <Link className="breadcrumb button capitalize" key={nav.title} href={nav.href}>
            {nav.title}
          </Link>
        )
      })}
      <ModeToggle />
    </nav>
  )
}

export default Navs
