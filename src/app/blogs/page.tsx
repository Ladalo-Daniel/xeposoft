import MaxWrapper from '@/components/MaxWrapper'
import TopNavBar from '@/components/TopNavBar'
import React from 'react'
import AllBlogsSection from './AllBlogsComponent'

async function AllBlogPage() {
  
  return (
    <main> 
        <TopNavBar />
        <MaxWrapper>
            <AllBlogsSection />
        </MaxWrapper>
    </main>
  )
}

export default AllBlogPage