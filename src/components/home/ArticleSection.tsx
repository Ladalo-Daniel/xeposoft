
'use client'

import * as React from "react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useGetRecentBlogs } from "@/lib/react-query"
import { Card, CardHeader } from "@nextui-org/card"
import { MoveRight } from "lucide-react"
import { Button } from "@nextui-org/button"
import Link from "next/link"
import BlogItem from "../shared/BlogItem"

export default function BlogSection() {
  const { data: blogs, isPending } = useGetRecentBlogs(4)

    return (
      <Carousel id="blog" className="max-sm:max-w-sm max-md:max-w-md py-14">
        <h1 className=' text-yellow-700 text-3xl font-semibold sm:text-4xl text-center py-9'>Our Blog</h1>
        <CarouselContent className="-ml-1">
          {blogs?.data.map(blog => (
            <CarouselItem key={blog.id} className="pl-1 md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <BlogItem blog={blog} />
              </div>
            </CarouselItem>
          ))}
          <CarouselItem key={'s-mor'} className="pl-1 md:basis-1/2 lg:basis-1/3">
              <div className="p-1 my-auto">
              <Card className='bg-gradient hover:opacity-60 hover:animate-in cursor-pointer shadow-none rounded-none from-green-950 to-zinc-800 justify-center flex items-center'
                >
                    <CardHeader className='flex items-center justify-between' as={Link} href={'/blogs'}>
                      <Button variant="solid" className="flex gap-1 bg-yellow-600 text-white" color="success">
                        See more <MoveRight  size={18}/>
                      </Button>
                    </CardHeader>
                </Card>
              </div>
            </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    ) 
  }

  


