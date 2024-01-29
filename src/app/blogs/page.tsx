import MaxWrapper from '@/components/MaxWrapper'
import TopNavBar from '@/components/TopNavBar'
import React from 'react'
import AllBlogsSection from './AllBlogsComponent'
import { getBlogs } from '../../../supabase/blogs'

async function AllBlogPage() {
  const articles = await getBlogs()

  
  return (
    <main> 
        <TopNavBar />
        <MaxWrapper>
            <AllBlogsSection articles={articles?.data} />
        </MaxWrapper>
    </main>
  )
}

export default AllBlogPage