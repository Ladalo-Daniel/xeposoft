import { Card, CardBody, CardHeader,  } from '@nextui-org/card'
import { BookCheckIcon, HelpingHand, LucideSparkles, SettingsIcon } from 'lucide-react'
import React from 'react'


const services = [
    {
        name: "Web Development",
        description: "Web development service is the core of our business. We provide various website design to suite our client's needs.",
        Icon: BookCheckIcon
    },
    {   
        name: "Website Design",
        description: "Our quiz attempts come with the ability to study follow-up guides for difficult or tricky questions.",
        Icon: HelpingHand
    },
    {   
        name: "Mobile App Development",
        description: "We did not forget one of the most trending innovation of the century - generative AI. Enjoy it's features while you study @naijaschools.",
        Icon: LucideSparkles
    },
    {   
        name: "Custom software solutions",
        description: "We understand that simplicity is intuitiveness, hence an enhanced user experience. Our engineers took their time to bring up the ultimate User Interface and experience for you",
        Icon: SettingsIcon
    },
]

const FeaturesSection = () => {
  return (
    <section id='services' className='flex flex-col gap-4 p-4 py-16'>
        <p className={"text-primary hover:underline py-2 transition-all hidden"}>#features</p>
        <h2 className="text-2xl hover:underline py-2 transition-all text-primary text-yellow-700">Our services</h2>
        <div className='flex flex-wrap gap-4'>
        {
            services?.map(feature => (
                <Card className='bg-gradient w-68 min-h-50 max-w-[500px] hover:opacity-60 hover:animate-in cursor-pointer max-sm:w-full p-4 from-green-950 to-zinc-800 dark:ring-1 dark:ring-slate-700' key={feature?.name}>
                    <CardHeader className='flex items-center justify-between'>
                        <h2 className='text-yellow-600 py-2'>
                            {feature.name}
                        </h2>
                        <p className='text-white mr-2 p-2 bg-yellow-700 rounded-full'>
                            <feature.Icon size={24} className='text-white text-5xl' />
                        </p>
                    </CardHeader>
                    <CardBody>
                        <p className='py-2'>
                            {feature.description}
                        </p>
                    </CardBody>
                </Card>
            ))
        }
        </div>
    </section>
  )
}

export default FeaturesSection