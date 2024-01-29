import React from 'react'
import { Button, Button as ShadButton } from '@/components/ui/button'

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Menu } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'


const navigation = [
    // { title: "Home", sectionId: "#intro" },
    // { title: "About", sectionId: "#about" },
    // { title: "Services", sectionId: "#services" },
    // { title: "Products", sectionId: "#products" },
    // { title: "Blog", sectionId: "#blog" },
    { title: "Admin", sectionId: "/dashboard" },
    // { title: "Sign-up", sectionId: "/sign-up" },
]
  

function HomeMobileMenu() {
  return (
    <Sheet>
     <SheetTrigger asChild>
        <ShadButton variant={'ghost'} className='flex items-center gap-2 md:hidden dark:text-slate-900'><Menu size={40} /></ShadButton>
      </SheetTrigger>
      <SheetContent side={'left'}>
        <SheetHeader>
        <Link href={'/'} className={'inline-block'}>
        <Image src={'/images/logot2.png'} width={150} height={150} quality={100} alt="logo" />
        </Link>
        </SheetHeader>
       <div className=' mt-5 flex flex-col gap-5 text-slate-800'>
       {navigation.map((item) => (
        <Button asChild key={item.sectionId} variant="default" className=' dark:bg-yellow-500 bg-slate-100 text-slate-900 dark:hover:bg-slate-200 hover:bg-slate-100' >
          <Link 
          href={item.sectionId} 
          key={item.sectionId}
          className=' cursor-pointer hover:text-yellow-800 hover:translate-y-1 hover:py-1 hover:transition-all mr-5'>{item.title}
          </Link>
        </Button>
        ))}
       </div>
    </SheetContent>
    </Sheet>

  )
}

export default HomeMobileMenu