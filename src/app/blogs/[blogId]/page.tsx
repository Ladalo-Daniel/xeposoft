import MaxWrapper from '@/components/MaxWrapper'
import TopNavBar from '@/components/TopNavBar'
import Image from 'next/image'
import React from 'react'
import { getBlogById } from '../../../../supabase/blogs'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import BlogDetailComponent from './BlogDetailComponent'


// import type { Metadata, ResolvingMetadata } from 'next'
type Props = {
  params: { blogId: string }
  // searchParams: { [key: string]: string | string[] | undefined }
}
 
// export async function generateMetadata(
//   { params, searchParams }: Props,
//   parent: ResolvingMetadata
// ): Promise<Metadata> {
//   const blogId = params.blogId
 
//   const { data: blog } = await getBlogById(blogId)
 
//   const previousImages = (await parent).openGraph?.images || []
 
//   return {
//     title: blog.title,
//     openGraph: {
//       images: [blog.image_url!, ...previousImages],
//     },
//   }
// }

const BlogDetailsPage = async ({ params }: Props) => {

  const {blogId} = params
  const blog = await getBlogById(blogId)

  return (
    <section>
      <TopNavBar />
      <MaxWrapper>
      <h2 className='font-semibold text-3xl py-3'>{blog?.data?.title}</h2>
            <AspectRatio ratio={5 / 2} className='object-cover'>
                <Image src={blog?.data?.image_url!} fill alt={blog?.data?.title!} className='object-cover rounded-md' />
            </AspectRatio>
            <BlogDetailComponent blog={blog?.data} />
      </MaxWrapper>
    </section>
  )
}

export default BlogDetailsPage