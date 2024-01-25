import React from 'react'
import { Blog } from '../../../supabase/blogs'
import { Card, CardBody, CardHeader } from '@nextui-org/card'
import { AspectRatio } from '../ui/aspect-ratio'
import Image from 'next/image'
import Link from 'next/link'
import Markdown from 'react-markdown'

function BlogItem({blog}: {blog: Blog}) {
  return (
    <Card className='bg-gradient hover:opacity-60 h-[400px] hover:animate-in cursor-pointer from-green-950 to-zinc-800' key={blog?.id} 
    >
        <CardHeader className='flex items-center justify-between'>
            <AspectRatio ratio={16/9} className='bg-muted'>
            <Image
                src={blog.image_url as string}
                alt={blog.title as string}
                fill
                className="rounded-md object-cover"
            />
            </AspectRatio>
        </CardHeader>
        <CardBody className='px-4' as={Link}
        href={`/blogs/${blog.id}`}>
            <h2 className='text-primary py-2 font-semibold'>
                {blog.title}
            </h2>
            <div className='py-2 text-muted-foreground'>
                <Markdown>
                    {blog.content?.slice(0, 80) + "..."}
                </Markdown>
            </div>
        </CardBody>
    </Card>
  )
}

export default BlogItem