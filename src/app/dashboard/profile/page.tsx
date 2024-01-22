import MaxWrapper from "@/components/MaxWrapper"
import { getProfile } from "../../../../supabase/user"

async function Profile() {
  const profile = await getProfile()
  
  return (
    <MaxWrapper className=" bg-white flex-1 text-slate-900">Profile: {profile?.data?.first_name}</MaxWrapper>
  )
}

export default Profile