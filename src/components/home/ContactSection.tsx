import React from 'react'
import ContactForm from '../shared/ContactForm'
import { Card } from '../ui/card'
import Image from 'next/image'
import SlideUp from '../Animation'

const images = "/images/contact.jpg"

function ContactSection() {
  return (
    <section>
        <h1 className="text-yellow-700 text-center text-3xl font-semibold sm:text-4xl">Contact us, Let hear from you</h1>
        <div className=' flex md:flex-row flex-col gap-5 mt-9'>
        <div className=' flex-1'>
          <SlideUp>
          <Image height={1000} width={1000} alt='contact' src={images} className=' md:h-[400px]  rounded-md' />
          </SlideUp>
        </div>
        <SlideUp>
          <Card className=' flex-1 h-[400px] dark:ring-1 dark:ring-slate-600'>
              <ContactForm />
          </Card>
        </SlideUp>
        </div>
    </section>
  )
}

export default ContactSection