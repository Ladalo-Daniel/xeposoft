'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Session } from '@supabase/auth-helpers-nextjs'

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"

import { Input } from "@/components/ui/input"
import { userFormSchema } from "@/lib/validators/user"
import { User } from "../../../supabase/user"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useUpdateProfile } from "@/lib/react-query"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import FileUploader from "@/components/shared/FileUploader"


export default function AccountForm({ session, profile}: {
    session: Session | null,
    profile: User
}) {

   const user = session?.user
   const {mutateAsync: updateProfile, isPending: isUpdating} = useUpdateProfile()
   const router = useRouter()

    
    const form = useForm<z.infer<typeof userFormSchema>>({
        resolver: zodResolver(userFormSchema),
        defaultValues: {
          username: profile?.username || "",
          dob: profile?.dob || "",
          bio: profile?.bio || "",
          first_name: profile?.first_name || "",
          last_name: profile?.last_name || "",
          email: user?.email,
          avatar: profile?.image_url || "",
        },
      })

      async function onSubmit(values: z.infer<typeof userFormSchema>) {
        updateProfile({...values, userId: user?.id || "", avatar: values.avatar, onboarded: true}, {
          onSuccess: () => {
             router.push("/dashboard")
          },
          onSettled: () => {
            form.reset()
          }
        })
        // console.log(values)
      }
      isUpdating ? toast.loading("Updating profile...") : null
    
      form.watch()
    

  return(
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
    <FormField
        control={form.control}
        name="avatar"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="shad-form_label">Add Photos</FormLabel>
            <FormControl>
              <FileUploader fieldChange={field?.onChange} isProfile mediaUrl={profile?.image_url as string} />
            </FormControl>
            <FormMessage className="shad-form_message" />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="username"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Username</FormLabel>
            <FormControl>
              <Input placeholder="Username here..." {...field} />
            </FormControl>
            <FormDescription>
              This is your public display name.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="first_name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Firstname</FormLabel>
            <FormControl>
              <Input placeholder="Firstname here..." {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="last_name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Lastname</FormLabel>
            <FormControl>
              <Input placeholder="Lastname here..." {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input placeholder="youemail@example.com" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bio</FormLabel>
              <FormControl>
                <Textarea placeholder="bio" className="resize-y min-h-unit-5" {...field} />
              </FormControl>
              <FormDescription>
                Tell us more about yourself.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      <Button type="submit">Submit</Button>
    </form>
  </Form>
    )
}