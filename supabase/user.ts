import { getUserSession } from "./session"
import { supabaseClient, supabaseUrl } from "."
import { Database } from "../types/supabase"

export type UserList = Database['public']['Tables']['users']['Row'][]
export type User = Database['public']['Tables']['users']['Row']


export async function getUser() {
    const {data: session} = await supabaseClient.auth.getSession()
    if (!session.session) return null

    const {data, error} = await supabaseClient.auth.getUser()

    if (error)
    throw new Error(error.message)

    return data?.user
}

export const getProfile = async() => {
    const session = await getUserSession()

    try {

        const { data, error, status } = await supabaseClient
            .from('users')
            .select('*')
            .eq('id', session?.user.id ||'')
            .single()
    
        if (error && status !== 406) {
            throw error
        }
    
        return { data, error }
        } catch (error) {
        }
}


export const updateProfile =async ({ userId, avatar, ...rest}: { userId: string, avatar?: File[] | string}) => {

    try {
        // @ts-ignore
        const hasImagePath = avatar?.startsWith?.(supabaseUrl)
        // @ts-ignore
        const imageName = `${Math.random()}-${avatar[0]?.name}`.replaceAll('/', '')
        const imagePath = hasImagePath ? avatar : `${supabaseUrl}/storage/v1/object/public/avatars/${imageName}`
      
    
        const { error, data } = await supabaseClient.from('users').upsert({
            id: userId,
            updated_at: new Date().toISOString(),
            onboarded: true,
            image_url: imagePath as string,
            ...rest,
        })
    
        if (error) throw error
    
        const { error: storageError } = await supabaseClient
        .storage
        .from('avatars')
        // @ts-ignore
        .upload(imageName, avatar[0] as File)
      
        if (storageError) {
          await supabaseClient
          .from('avatars')
          .delete()
          // @ts-ignore
          .eq('id', data?.id)
          throw storageError
        }
        } catch (error) {
        throw error
        } 
    
}