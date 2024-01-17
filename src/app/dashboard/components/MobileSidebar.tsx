"use client"

import React from 'react'
import { ArrowRight, Menu } from 'lucide-react'
import { Button, Button as ShadButton } from '@/components/ui/button'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from '@/components/ui/sheet'
import { side_bar_links } from '@/lib/utility'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import Image from 'next/image'
import { ModeToggle } from '@/components/ModeToggle'
import { Avatar } from '@nextui-org/avatar'
import { User } from '../../../../supabase/user'

const MobileSidebar = ({profile}: {profile: User}) => {
    const path = usePathname()


  return (
    <Sheet>
      <SheetTrigger asChild>
        <ShadButton variant={'ghost'} className='flex items-center gap-2 md:hidden dark:text-slate-900'><Menu size={40} /></ShadButton>
      </SheetTrigger>
      <SheetContent className='md:hidden min-h-screen overflow-auto mt-0 pt-0 bg-slate-200 dark:bg-slate-900' side={'left'}>
        <SheetHeader className='flex flex-col flex-1 items-start pt-0 mt-3 '>
          <SheetTitle>
          <Link href={'/'} className={'md:hidden'}>
            <Image src={'/images/logot2.png'} width={150} height={150} alt="logo" />
          </Link>
          </SheetTitle>
        </SheetHeader>
        <div className='flex flex-col gap-6 overflow-auto custom-scrollbar mt-5'>
          {side_bar_links.map(link => (
            <SheetClose key={link.tooltip} asChild>
                <Link key={link.tooltip} href={link.href} className={cn("flex items-center hover:bg-gray-500 hover:text-gray-50 transition-all gap-2 p-2 rounded-md")}>
                    {link.icon}
                    <span>{link.tooltip}</span>
                </Link>
            </SheetClose>
          ))}
        </div>
        
        <div className='flex mt-4 gap-3 flex-col'>
        <ModeToggle />
        <Link href={'/dashboard/profile'} className=' md:block'>
          <Avatar src={profile?.image_url || ""} name={profile?.username || ""} color='primary' />
        </Link>
        <form action={'/auth/signout'} method='post' className=' md:block'>
          <Button className={'items-center flex  gap-2'} variant={'outline'} size={'sm'} type='submit'>
            <span>Sign Out</span>
            <ArrowRight size={15} className='text-rose-500'/>
          </Button>
        </form>

        {/** ======= Mobile ====== */}
        {/* <MobileActions profile={profile?.data as User} /> */}
       </div>
      </SheetContent>
      </Sheet>
  )
}

export default MobileSidebar