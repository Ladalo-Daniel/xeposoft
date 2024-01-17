import React from 'react'
import { getProfile } from '../../../supabase/user'
import { Metadata } from 'next'
import MaxWrapper from '@/components/MaxWrapper'

export const metadata: Metadata = {
    title: "Dashboard",
    description: "Dashboard | Welcome"
  }

export default async function Dashboard() {
    const profile = await getProfile()

  return (
    <MaxWrapper className="bg-slate-100 text-slate-800  mt-[4rem] max-w-5xl flex-1">
         <div className="md:py-5 py-2 flex flex-col gap-3 md:px-8 max-sm:w-full px-3">
            <div className='flex flex-col gap-3'> Dashboard</div>
            <div className='flex flex-col gap-3'> Dashboard</div>
            <div className='flex flex-col gap-3'> Dashboard</div>
            <div className='flex flex-col gap-3'> Dashboard</div>
            <div className='flex flex-col gap-3'> Dashboard</div>
            <div className='flex flex-col gap-3'> Dashboard</div>
        </div>
    </MaxWrapper>
  )
}
