"use client"

import React from 'react'
import { User } from '../../../../supabase/user'
import Image from 'next/image'
import Link from 'next/link'
import { side_bar_links } from '@/lib/utility'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

function LeftSidebar({ profile }: { profile?: User }) {
  const path = usePathname()

  const isRootRouteActive = path.startsWith('/dashboard');

  return (
    <nav className='leftsidebar dark:bg-secondary shadow-sm z-20 min-h-screen bg-slate-200 border border-r-gray-100 dark:border-r-gray-800 relative'
    >
     <div className="fixed h-full overflow-auto dark:bg-secondary bg-slate-200 flex flex-col gap-4 min-h-screen left-0 min-w-[200px]">
     <Link href={'/'} className={'mt-3'}>
        <Image src={'/images/logot2.png'} width={150} height={150} alt="logo" />
     </Link> 
      <div className='flex flex-col gap-6 overflow-auto custom-scrollbar w-full p-2'>
          {side_bar_links.map(link => (
            <Link key={link.tooltip} href={link.href} className={cn("flex items-center hover:bg-gray-500 hover:text-gray-50 transition-all gap-2 p-2 rounded-md")}>
              {link.icon}
              <span>{link.tooltip}</span>
          </Link>
          ))}
        </div>
     </div>
    </nav>
  )
}

export default LeftSidebar