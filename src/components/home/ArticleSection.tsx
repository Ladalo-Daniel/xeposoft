import { Card } from '@nextui-org/card'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function ArticleSection() {
    const articles = [
        {
            avatar: "/images/web1.jpeg",
            name: "Tech Life in the Blue",
            title: "tech",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry's standard dummy",
        },
        {
            avatar: "/images/web2.jpeg",
            name: "Web Development Foundamentals",
            title: "web",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry's standard dummy",
        },
        {
            avatar: "/images/web1.jpeg",
            name: "Why Mobile App?",
            title: "app",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry's standard dummy",
        },
        // {
        //     avatar: "/images/web2.jpeg",
        //     name: "The Generative AI Features",
        //     title: "tech",
        //     desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry's standard dummy",
        // },
    ]
  return (
    <section id='products' className="py-14">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <div className="max-w-xl">
                <h3 className="text-2xl hover:underline py-2 transition-all text-primary text-yellow-700">
                    Our Articles
                </h3>
            </div>
            <div className="mt-7">
              <ul className="grid gap-8 lg:grid-cols-3">
                 {
                    articles.map((item, idx) => (
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
                            <Link href="#" className="text-lg text-slate-700 dark:text-slate-100 font-semibold">{item.name}</Link>
                            <p className="text-indigo-500">{item.title}</p>
                            <p className="text-slate-600 dark:text-slate-100 mt-2">{item.desc}</p>
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

export default ArticleSection