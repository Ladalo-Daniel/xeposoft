import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { getProfile, updateProfile } from "../../../supabase/user";
import { QUERY_KEYS } from "./utils";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { createUpdateBlog, getBlogsByQuery, getRecentBlogs } from "../../../supabase/blogs";
import { string } from "zod";


const queryClient = new QueryClient()

export const useGetProfile = () => {
    return useQuery({
        queryFn: getProfile,
        queryKey: [QUERY_KEYS.get_user_profile],
    })
}

export const useUpdateProfile = () => {
    const router = useRouter()
    return useMutation({
        mutationFn: ({userId, onboarded, avatar, ...rest}: { userId: string, onboarded: boolean, avatar?: File[] }) => updateProfile({userId, avatar, ...rest}),
        mutationKey: [QUERY_KEYS.update_user_profile],
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: [QUERY_KEYS.get_user_profile]
            })
            toast.success("Your profile was updated successfully.")
            router.refresh()
        },
        onError: ({message}) => {
            console.log(message)
            if (message === 'duplicate key value violates unique constraint "unique_username"') {
                toast.error("Eyyah, this username already exists. Why don't you try another one?")
                return
            }
            toast.error("Sorry, an error occured while we were trying to update your profile... but hang on, let us give it another shot. " + message)
            return
        }
    })
}



export const useCreateUpdateBlog = () => {
    const router = useRouter()

    return useMutation({
        mutationFn: ({blogId, image, ...rest}: {blogId: string, image?: File[]}) => createUpdateBlog({blogId, image, ...rest}),
        mutationKey: [QUERY_KEYS.create_update_blog_data],
        onSuccess: ()=> {
            queryClient.invalidateQueries({
                queryKey: [QUERY_KEYS.create_update_blog_data],
            })
            router.refresh();
        },
        onError: (error) => {
            toast.error(error.message)
        }
    })
}



export const useGetBlogsByQuery = ({column, row, range}: {column: "author" | "id" | "tags" | "title", row: string, range?:number}) => {
    return useQuery({
        queryKey: [QUERY_KEYS.get_blogs],
        queryFn: () => getBlogsByQuery(column, row, range),
        enabled:true
    })
}

export const useGetRecentBlogs = (range:number) => {
    return useQuery({
        queryKey:[QUERY_KEYS.get_blogs, range],
        queryFn: () => getRecentBlogs(range),
        enabled: true
    })
}

