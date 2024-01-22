import React from 'react'
import ContactForm from '../shared/ContactForm'
import { Card } from '../ui/card'

function ContactSection() {
  return (
    <section>
        <h1>Contact us, Let hear from you</h1>
        <div></div>
        <Card>
            <ContactForm />
        </Card>
    </section>
  )
}

export default ContactSection