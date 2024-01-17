import AccountForm from '../account-form'
import { getUserSession } from '../../../../supabase/session'
import { getProfile } from '../../../../supabase/user'
import MaxWrapper from '@/components/MaxWrapper'
import { Card } from '@/components/ui/card'

export default async function Account() {
  const session = await getUserSession()
  const profile = await getProfile()

  return <MaxWrapper noOverflow className='flex flex-col gap-3 max-w-5xl'> 
          <Card className='max-w-[600px] mx-auto p-9'>

            <div className='space-y-5 mb-4 mt-2'>
              <h2 className="text-3xl font-medium text-primary">Complete your profile so we can serve you better.</h2>
            </div>
            <AccountForm session={session} profile={profile?.data as any}/>
            </Card>
         </MaxWrapper>
}