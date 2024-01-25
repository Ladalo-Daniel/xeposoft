import React from 'react'
import { Blog } from '../../../../supabase/blogs'
import { TimerIcon } from 'lucide-react'
import { getProfile, getProfileById } from '../../../../supabase/user'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import BlogMarkdown from '@/components/shared/BlogMarkdown'
import { shortMultiFormatDateString } from '@/lib/utils'

const BlogDetailComponent = async ({ blog }: { blog: Blog }) => {
  const author = await getProfileById(blog?.author!)
  return (
    <div className='flex flex-col gap-3'>
    <div className="flex flex-col gap-2">
        <p className="flex items-center gap-2 py-2">
            <TimerIcon size={15} className='' /> {blog.munites_read} mins read.
        </p>
        <p className="flex items-center gap-2 py-2 font-semibold text-yellow-600">
           By {author?.data?.first_name} {author?.data?.last_name}
        </p>
    </div>
    <Separator />
    <div className="p-2 flex gap-1">
       {
        blog?.tags?.split(',').map(tag => (
            <Link key={tag} href={`/blogs/tags?tag=${tag}`} className={buttonVariants({
                variant: "link",
                className: "hover:no-underline hover:bg-primary transition-all hover:bg-yellow-600 hover:text-gray-50"
            })}>
                {tag}
            </Link>
        ))
       }
    </div>
    <Separator />
    <div className='read-only'>
        <BlogMarkdown content={blog?.content!} />
    </div>
    <div className="p-2">
        Last updated <b>{shortMultiFormatDateString(blog.updated_at!)}</b> ago.
    </div>
</div>
  )
}

export default BlogDetailComponent