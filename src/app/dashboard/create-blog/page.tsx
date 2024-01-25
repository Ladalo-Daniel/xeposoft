import MaxWrapper from "@/components/MaxWrapper"
import CreateBlogComponent from "./CreateBlogComponent"
import { getUserSession } from "../../../../supabase/session"

export default async function CreateBlogPage() {
  const session = await getUserSession()
  return (
    <MaxWrapper className="bg-slate-100 text-slate-800 mt-[3rem]  md:mt-[1rem] flex-1">
      <h1 className=" text-yellow-600 font-semibold text-3xl m-3">Create Blog</h1>
      <section>
        <CreateBlogComponent session={session!} />
      </section>
    </MaxWrapper>
  )
}
