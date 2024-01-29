import React from 'react'
import { getProfile } from '../../../supabase/user'
import { Metadata } from 'next'
import MaxWrapper from '@/components/MaxWrapper'
import { DoughnutChart } from './admin/charts/Doughnut'
import LineChart from './admin/charts/LineChart'
import { getBlogs } from '../../../supabase/blogs'

export const metadata: Metadata = {
    title: "Dashboard",
    description: "Dashboard | Welcome"
  }

export default async function Dashboard() {
    const profile = await getProfile()
    const blogs = await getBlogs()

  return (
    <MaxWrapper className="bg-slate-100 text-slate-800  mt-[4rem] max-w-5xl flex-1">
         <h2 className="text-2xl pt-4 pb-2">Dashboard</h2>
        <section className='flex gap-6 flex-col lg:flex-row items-start'>
          <DoughnutChart 
            labels={['Blogs', 'Blogs', 'Blogs']} 
            data={[blogs?.data?.length ?? 0, blogs?.data?.length ?? 0, blogs?.data?.length ?? 0]}
          />
          <LineChart
            labels={['Blogs', 'Blogs', 'Blogs', 'Blogs']} 
            data={[blogs?.data?.length ?? 0, blogs?.data?.length ?? 0, blogs?.data?.length ?? 0, blogs?.data?.length ?? 0]} 
          />
        </section>

         {/* <div className="md:py-5 py-2 flex flex-col gap-3 md:px-8 max-sm:w-full px-3">
            <div className='flex flex-col gap-3'> Dashboard</div>
            <div className='flex flex-col gap-3'> Dashboard</div>
            <div className='flex flex-col gap-3'> Dashboard</div>
            <div className='flex flex-col gap-3'> Dashboard</div>
            <div className='flex flex-col gap-3'> Dashboard</div>
            <div className='flex flex-col gap-3'> Dashboard</div>
        </div> */}
    </MaxWrapper>
  )
}
