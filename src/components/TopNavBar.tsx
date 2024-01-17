import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { ModeToggle } from './ModeToggle'

function TopNavBar() {
  const navigation = [
    { title: "Home", sectionId: "#intro" },
    { title: "About", sectionId: "#about" },
    { title: "Services", sectionId: "#services" },
    { title: "Products", sectionId: "#products" },
    { title: "Blog", sectionId: "#blog" },
]
  return (
    <nav className=' bg-white dark:bg-slate-300 h-[60px] md:px-20 px-4 flex justify-between items-center sticky top-0 border-b-1 border-slate-800 z-50'>
       <Link href={'/'} className={'inline-block'}>
        <Image src={'/images/logot2.png'} width={150} height={150} quality={100} alt="logo" />
      </Link>
      <div className=' hidden  md:block items-center text-slate-800'>
       {navigation.map((item) => (
        <Button asChild key={item.sectionId} variant="default" className=' dark:bg-transparent bg-slate-50 text-slate-900 dark:hover:bg-slate-200 hover:bg-slate-100' >
          <Link href={item.sectionId} key={item.sectionId} className=' cursor-pointer hover:text-yellow-800 hover:translate-y-1 hover:py-1 hover:transition-all mr-5'>{item.title}
          </Link>
        </Button>
       ))}
      </div>
      <div className=' flex items-center text-slate-800 flex-row gap-2'>
        <ModeToggle />
        <Button variant="secondary">Contact us</Button>
      </div>
    </nav>
  )
}

export default TopNavBar