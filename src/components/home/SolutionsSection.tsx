import { Card } from '@nextui-org/card'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SlideUp from '../Animation'

function SolutionsSection() {
    const solutions = [
        {
            avatar: "/images/naija.png",
            name: "Naijaschools",
            title: "naijaschools",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry's standard dummy",
        },
        {
            avatar: "/images/slide2.png",
            name: "Lawgram",
            title: "lawgram",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry's standard dummy",
        },
        {
            avatar: "/images/naija.png",
            name: "Ecomerce",
            title: "ecomerce",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry's standard dummy",
        },
        {
            avatar: "/images/slide2.png",
            name: "Weytindeysup",
            title: "wetindeysup",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry's standard dummy",
        },
    ]
  return (
    <section id='products' className="py-14">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <div className="max-w-xl">
                <h3 className="text-2xl hover:underline py-2 transition-all text-primary text-yellow-700">
                    Our Products/Solutions
                </h3>
                <p className="dark:text-slate-100 text-slate-800 mt-3">
                Offering The Latest Software And IT Services Tailored To Meet Our Clients Needs
                </p>
            </div>
            <div className="mt-7">
              <ul className="grid gap-8 lg:grid-cols-2">
                 {
                    solutions.map((item, idx) => (
                    <SlideUp key={idx}>
                     <Card key={idx} className="gap-8 sm:flex p-4 dark:bg-background ring-1 ring-slate-300 dark:ring-slate-600 hover:dark:ring-slate-800 hover:ring-slate-400">
                        <div className="w-full">
                            <Image
                                src={item.avatar}
                                height={1000}
                                width={1000}
                                quality={100}
                                className="w-full h-full object-cover object-center shadow-md rounded-xl"
                                alt=""
                                />
                        </div>
                        <div className="mt-4 sm:mt-0">
                            <h4 className="text-lg text-slate-700 dark:text-slate-100 font-semibold">{item.name}</h4>
                            <Link href="#" className="text-indigo-500">Visit the site @{item.title}</Link>
                            <p className="text-slate-600 dark:text-slate-100 mt-2">{item.desc}</p>
                        </div>
                     </Card>
                    </SlideUp>
                  ))
                 }
              </ul>
            </div>
          </div>
        </section>
  )
}

export default SolutionsSection