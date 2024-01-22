import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { toast } from 'sonner';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mayrqylr");

  {state.succeeded && toast("Message sent, we will respond to you shortly!")}
    {state.errors && toast(`Message not sent, Plsss try again! + "\n" ${state.errors}`)}
  
  return (
      <form onSubmit={handleSubmit} className=' flex flex-col gap-2 p-4'>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" name='name' placeholder="name" className="col-span-3" />
            <ValidationError 
            prefix="Name" 
            field="name"
            errors={state.errors}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="number" className="text-right">
              Phone Number
            </Label>
            <Input id="number" name='number' placeholder="your phone number" className="col-span-3" />
            <ValidationError 
            prefix="Phone Number" 
            field="number"
            errors={state.errors}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input id="email" name='email' placeholder="your email" className="col-span-3" />
            <ValidationError 
            prefix="Email" 
            field="text"
            errors={state.errors}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="text" className="text-right">
              Message
            </Label>
            <Textarea id="message"  name='message' placeholder="message" className="col-span-3 h-9" />
            <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
            />
          </div>
        </div>
    <Button variant="secondary" type="submit" disabled={state.submitting} className=''>
      {state.submitting ? "Submitting" : "Submit"}
    </Button>
    </form>
  );
}