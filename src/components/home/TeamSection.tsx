import { Twitter } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Card } from '../ui/card'

function TeamSection() {
    const team = [
        {
            avatar: "/images/lad5.jpeg",
            name: "Ladalo Daniel",
            title: "Software Engineer",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
            linkedin: "javascript:void(0)",
            twitter: "javascript:void(0)",
        },
        {
            avatar: "/images/lad5.jpeg",
            name: "Bala Mathias",
            title: "Software engineer",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
            linkedin: "javascript:void(0)",
            twitter: "javascript:void(0)",
        },
        {
            avatar: "/images/lad5.jpeg",
            name: "Nehemiah Justice",
            title: "Full stack engineer",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
            linkedin: "javascript:void(0)",
            twitter: "javascript:void(0)",
        },
    ]

  return (
         <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 text-center md:px-8">
                <div className="max-w-xl mx-auto">
                    <h3 className="text-yellow-700 text-3xl font-semibold sm:text-4xl">
                        Meet our team
                    </h3>
                    <p className="text-slate-700 dark:text-slate-100 mt-3">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry&apos;s standard dummy.
                    </p>
                </div>
                <div className="mt-12">
                 <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                  {
                    team.map((item, idx) => (
                    <Card key={idx} className=' p-4'>
                        <div className="w-24 h-24 mx-auto">
                            <Image
                                src={item.avatar}
                                height={100}
                                width={100}
                                className="w-full h-full rounded-full object-cover"
                                alt="team images"
                            />
                        </div>
                        <div className="mt-2">
                            <h4 className="text-slate-700 dark:text-slate-100 font-semibold sm:text-lg">{item.name}</h4>
                            <p className="text-yellow-700">{item.title}</p>
                            <p className="text-slate-700 dark:text-slate-100 mt-2">{item.desc}</p>
                            <Link href="#" className="mt-4 flex justify-center gap-4 text-slate-100">
                                <span className='bg-blue-500 rounded-full  p-2 cursor-pointer hover:bg-blue-600'><Twitter /></span>
                            </Link>
                        </div>
                    </Card>
                    ))
                  }
                 </ul>
                </div>
            </div>
          </section>
  )
}

export default TeamSection