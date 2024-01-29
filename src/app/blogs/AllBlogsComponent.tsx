import { Card } from '@nextui-org/card'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BlogList, getBlogs } from '../../../supabase/blogs'
import { AspectRatio } from '@/components/ui/aspect-ratio'

const AllBlogsSection = async ({articles}:{articles: BlogList}) => {
    // const articles = await getBlogs()
    
  return (
    <section id='products' className="py-14">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <div className="max-w-xl">
                <h3 className="text-2xl hover:underline py-2 transition-all text-primary text-yellow-700">
                    All Blogs
                </h3>
            </div>
            <div className="mt-7">
              <ul className="grid gap-8 lg:grid-cols-3">
                 {
                    articles?.map((item, idx) => (
                     <Card key={idx} className="gap-8 h-[400px] sm:flex p-4 dark:bg-background ring-1 ring-slate-300 dark:ring-slate-600 hover:dark:ring-slate-800 hover:ring-slate-400">
                        <AspectRatio ratio={16/9} className="">
                            <Image
                                src={item?.image_url as string}
                                fill
                                quality={100}
                                className=" object-cover shadow-md rounded-xl"
                                alt=""
                            />
                        </AspectRatio>
                        <div className="mt-4 sm:mt-0">
                            <Link href={`/blogs/${item.id}`} className="text-lg text-slate-700 dark:text-slate-100 font-semibold">{item?.title}</Link>
                            <p className="text-indigo-500">{item?.tags}</p>
                            <p className="text-slate-600 dark:text-slate-100 mt-2">{item?.content?.slice(0, 80) + " " + "Read more..."}</p>
                        </div>
                     </Card>
                  ))
                 }
              </ul>
            </div>
          </div>
        </section>
  )
}

export default AllBlogsSection