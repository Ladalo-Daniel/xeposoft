import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MobileSidebar from './MobileSidebar'
import { ModeToggle } from '@/components/ModeToggle'
import { Avatar } from '@nextui-org/avatar'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { User, getProfile } from '../../../../supabase/user'




const TopNavbar = async () => {
  const profile = await getProfile()

  return (
    <nav className='bg-white dark:bg-slate-300 backdrop-blur-md bg-transparent px-2 flex md:px-10 items-center justify-between bg-gradient-to-tr fixed top-0 w-full z-10 h-16 border-b border-r-gray-600'
    >
      <Link href={'/'} className={'md:block '}>
        <Image src={'/images/logot2.png'} width={150} height={150} alt="logo" />
      </Link>

      <MobileSidebar profile={profile?.data as User}/>

      
      <div className='md:flex items-center gap-3 hidden'>
        <Link href={'/dashboard/profile'} className='hidden md:block'>
          <Avatar src={profile?.data?.image_url || ""} name={profile?.data?.username || ""} color='primary' />
        </Link>
        <h1 className=' text-slate-800'>Hello, Welcome {profile?.data?.first_name} {profile?.data?.last_name}</h1>
        <ModeToggle />
        <form action={'/auth/signout'} method='post' className='hidden md:block'>
          <Button className={'items-center flex  gap-2'} variant={'outline'} size={'sm'} type='submit'>
            <span>Sign Out</span>
            <ArrowRight size={15} className='text-rose-500'/>
          </Button>
        </form>

        {/** ======= Mobile ====== */}
        {/* <MobileActions profile={profile?.data as User} /> */}
      </div>

    </nav>
  )
}

export default TopNavbar