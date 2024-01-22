import { Session } from '@supabase/supabase-js'
import React from 'react'
import CreateBlogForm from './CreateBlogForm'

const CreateBlogComponent = ({session}: {session?: Pick<Session, "user">}) => {
  return (
    <div>
        <CreateBlogForm session={session} />
    </div>
  )
}

export default CreateBlogComponent