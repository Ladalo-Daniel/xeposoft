import { Card } from '@nextui-org/card'
import Image from 'next/image'
import React from 'react'

function TestimonialSection() {

    const testimonials = [
        {
            avatar: "/images/naija.png",
            name: "Martin escobar",
            title: "Founder of meta",
            quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et est hendrerit, porta nunc vitae."
        },
        {
            avatar: "/images/naija.png",
            name: "Angela stian",
            title: "Product designer",
            quote: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
        },
        {
            avatar: "/images/naija.png",
            name: "Karim ahmed",
            title: "DevOp engineer",
            quote: "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain."
        },
        {
            avatar: "/images/naija.png",
            name: "Karim ahmed",
            title: "DevOp engineer",
            quote: "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain."
        },
        // {
        //     avatar: "/images/naija.png",
        //     name: "Karim ahmed",
        //     title: "DevOp engineer",
        //     quote: "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain."
        // },
        // {
        //     avatar: "/images/naija.png",
        //     name: "Karim ahmed",
        //     title: "DevOp engineer",
        //     quote: "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain."
        // },
    ]

  return (
     <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-xl sm:text-center md:mx-auto">
                    <h3 className="text-yellow-700 text-3xl font-semibold sm:text-4xl">
                        See what others saying about us
                    </h3>
                    <p className="mt-3 text-slate-700 dark:text-slate-100">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et est hendrerit, porta nunc vitae, gravida justo. Nunc fermentum magna lorem, euismod volutpat arcu volutpat et.
                    </p>
                </div>
                <div className="mt-12">
                  <ul className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
                  {
                    testimonials.map((item, idx) => (
                        <Card key={idx} className='bg-gradient w-68 min-h-50 max-w-[500px] hover:opacity-60 hover:animate-in cursor-pointer max-sm:w-full p-4 from-green-950 to-zinc-800 dark:ring-1 dark:ring-slate-700'>
                            <figure>
                                <div className="flex items-center gap-x-4">
                                    <Image src={item.avatar} height={100} width={100} alt='testimonial-images' className="w-16 h-16 rounded-full" />
                                    <div>
                                        <span className="block text-yellow-800 font-semibold">{item.name}</span>
                                        <span className="block text-yellow-600 text-sm mt-0.5">{item.title}</span>
                                    </div>
                                </div>
                                <blockquote>
                                    <p className="mt-6 text-slate-700 dark:text-slate-200">
                                        {item.quote}
                                    </p>
                                </blockquote>
                            </figure>
                        </Card>
                        ))
                    }
                  </ul>
                </div>
            </div>
        </section>
  )
}

export default TestimonialSection