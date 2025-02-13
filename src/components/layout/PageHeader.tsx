'use client'

import React from 'react'
import { cn } from '@/utils'
import { usePathname } from 'next/navigation'
import SearchBar from '@/components/layout/SearchBar'
import HeaderNotification from '@/components/layout/HeaderNotification'

const PageHeader: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname()
  const isGroupPage = pathname.startsWith('/groups/')

  return (
    <header
      className={cn('flex items-center justify-between py-8', {
        'max-w-full ml-52': isGroupPage,
        'max-w-7xl mx-auto': !isGroupPage
      })}
    >
      <SearchBar />
      <HeaderNotification />
      {isGroupPage && children}
    </header>
  )
}

export default PageHeader
