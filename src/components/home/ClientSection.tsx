import Image from 'next/image'
import React from 'react'
import { Card } from '../ui/card'

function ClientSection() {
    const logos = [
        {   id: 1,
            image: "/images/logot2.png",
            name: "Naijaschools",
        },
        {   id: 2,
            image: "/images/logot2.png",
            name: "Naijaschools",
        },
        {   id: 3,
            image: "/images/logot2.png",
            name: "Naijaschools",
        },
     ]
  return (
    <div className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8 text-yellow-700">
                <h1 className=' text-yellow-700 text-3xl font-semibold sm:text-4xl text-center'>Our Clients/Partners</h1>
                <h3 className="font-semibold text-sm  text-center mt-4 text-slate-700 dark:text-slate-100">
                    TRUSTED BY BUSINESSES FROM AROUND THE WORLD
                </h3>
                <div className="mt-6">
                    <ul className="flex gap-x-10 gap-y-6 flex-wrap items-center justify-center md:gap-x-16">
                        {/* LOGO  */}
                      {logos.map((logo, id) => (
                        <Card key={logo.id} className=' p-2'>
                            <Image src={logo.image} height={200} width={200} alt='clients logo' />
                        </Card>
                      )) }
                    </ul>
                </div>
            </div>
        </div>
  )
}

export default ClientSection