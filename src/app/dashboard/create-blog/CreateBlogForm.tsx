"use client"

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import { Session } from '@supabase/supabase-js'
import React from 'react'
import { Blog } from '../../../../supabase/blogs'
import PostFileUploader from "@/components/shared/PostFileUploader"
import { Button } from "@nextui-org/button"
import { useCreateUpdateBlog } from "@/lib/react-query"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { BlogSchema } from "@/lib/validators/blogs"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"

const CreateBlogForm = ({session, blog}: {blog?:Blog ,session?: Pick<Session, "user">}) => {

    const {mutate:createUpdateBlog, isPending} = useCreateUpdateBlog()
    const router = useRouter()

    const form = useForm<z.infer<typeof BlogSchema>>({
        resolver:zodResolver(BlogSchema),
        defaultValues: {
            author:session?.user?.id!,
            content: blog?.content ? blog?.content : "",
            title: blog?.title ? blog?.title : "",
            tags: blog?.tags ? blog.tags : "",
            munites_read: blog?.munites_read ? blog.munites_read : "",
            image: blog?.image_url ? blog.image_url : "", 
        }
    })

    function onSubmit(values: z.infer<typeof BlogSchema>){
        console.log(values)
        try{
            createUpdateBlog({...values, image: values.image || [], blogId: blog?.id!},
                {
                    onSuccess: () => {
                        form.reset()
                        toast.success("Success!")
                        return blog?.id ? router.push('/blogs/' + blog?.id) : router.push('/blogs')
                    }
                })
        } catch(error){
            console.error("Error submitting article:", error);
        }
    }

  return (
    <div className="">
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Add article image</FormLabel>
                    <FormControl>
                        <PostFileUploader fieldChange={field?.onChange} mediaUrl={blog?.image_url as string} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Article Title</FormLabel>
                    <FormControl>
                        <Input placeholder="Title..." {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Content</FormLabel>
                    <FormControl>
                        <Textarea placeholder="content..." className="min-h-[250px]" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="munites_read"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Minutes read</FormLabel>
                    <FormControl>
                        <Input placeholder="Minutes read..." {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="tags"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Tags</FormLabel>
                    <FormControl>
                        <Input placeholder="Tags separated by commas..." {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <Button variant="flat" color="primary" type="submit" isLoading={isPending}>Submit</Button>
            </form>
        </Form>
    </div>
  )
}

export default CreateBlogForm