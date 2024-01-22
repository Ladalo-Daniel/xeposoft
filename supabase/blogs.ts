import { supabaseClient, supabaseUrl } from ".";
import { Database } from "../types/supabase";

 export type BlogList = Database["public"]["Tables"]["blogs"]["Row"][]
 export type Blog = Database["public"]["Tables"]["blogs"]["Row"]


export async function getBlogs() {
   try{

       const {data, error, count} = await supabaseClient.from("blogs").select("*")
    //    .order("updated_at", {
    //        ascending: false
    //     })
    //     .order("created_at", {
    //         ascending: false
    //     })
        
        if(error) throw error
        
        return {data, error, count}

    } catch(error: any){
        throw new Error(error)
    }
    
}

export async function getBlogsByTag(tag: string) {
   try{
       const {data, error, count} = await supabaseClient.from("blogs").select("*")
       .order("updated_at", {
           ascending : false
        })
        .order("created_at", {
            ascending : false
        })
        .filter("tags", "like", tag)
        
        if(error) throw error
        
        return {data, error, count}

    } catch(error: any){
        throw new Error(error)
    }
}


export async function getBlogsByQuery(column: "author" | "id" | "tags" | "title" , row: string, range?: number) {
    const {data, error, count} = await supabaseClient.from("blogs").select("*")
     .eq(column, row)

     if(error) throw error

     return { data, count, error}
    
}


export async function getRecentBlogs(range = 4 ) {
    const {data, error, count} = await supabaseClient.from("blogs").select("*")
     .order("created_at", {
        ascending : false
     })
     .range(0, range)
     .order("updated_at", {
        ascending: false
     })

     if(error) throw error

     return{ data, error, count}

    
}


export async function getBlogById(id: string) {
    const {data, error} = await supabaseClient.from("blogs").select("*")
      .eq("id", id)
      .single()

      if(error) throw error

      return { data }
}


export async function createUpdateBlog({blogId, image, ...rest}: {blogId?: string, image?: File[] | string}) {
    try{
        //@ts-ignore
        const hasImagePath = image?.startsWith?.(supabaseUrl)
        // @ts-ignore
        const imageName = `${Math.random()}-${image[0]?.name}`?.replaceAll('/', '')

        const imagePath = hasImagePath ? image : `${supabaseUrl}/storage/v1/object/public/blogs/${imageName}`

        const {data, error} = await supabaseClient.from("blogs").upsert({
            id: blogId!,
            updated_at: new Date().toISOString(),
            image_url: imagePath as string,
            ...rest
        })

        if(error) throw error

        const {error: storageError} = await supabaseClient
        .storage
        .from("blogs")
        //@ts-ignore
        .upload(imageName, image[0] as File[])

        if(storageError){
            await supabaseClient
            .from("blogs")
            .delete()
            //@ts-ignore
            .eq("id", data?.id)
            throw storageError
        }

    }catch(error){
        throw error
    }
}


export async function deleteBlog(id: string) {
    const {error} = await supabaseClient.from("blogs")
      .delete()
      .eq("id", id)

      if(error) throw error
}