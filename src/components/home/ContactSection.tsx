import React from 'react'
import ContactForm from '../shared/ContactForm'
import { Card } from '../ui/card'
import Image from 'next/image'

const images = "/images/contact.jpg"

function ContactSection() {
  return (
    <section>
        <h1 className=' text-3xl text-yellow-700 font-semibold'>Contact us, Let hear from you</h1>
        <div className=' flex md:flex-row flex-col gap-5 mt-9'>
        <div className=' flex-1'>
          <Image height={1000} width={1000} alt='contact' src={images} className=' h-[400px]  rounded-md' />
        </div>
        <Card className=' flex-1 h-[400px] dark:ring-1'>
            <ContactForm />
        </Card>

        </div>
    </section>
  )
}

export default ContactSection