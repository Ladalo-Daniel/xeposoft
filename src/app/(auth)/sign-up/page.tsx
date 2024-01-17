import React from 'react'
import AuthForm from '../auth-form'
import { Card } from '@/components/ui/card'

export default function Home() {
  return (
    <section className="w-full h-full min-h-screen">
      <div className="flex mx-auto justify-center items-center min-h-screen w-full p-4 backdrop:fill-transparent backdrop-filter bg-black opacity-90 transition-all hover:from-black hover:to-slate-500 hover:animate-pulse-plus"
      >
        <Card className="p-8 flex flex-col gap-6 w-[90vw] h-[400px] md:w-[400px]">
          <h1 className="text-2xl tracking-tight font-semibold text-primary">Welcome to Xeposoft</h1>
          <p className="text-muted-foreground font-inherit tracking-tight text-lg">
            Let Log you in to continue
          </p>
          <div className="col-6 auth-widget">
            <AuthForm />
          </div>
         </Card>
         </div>
    </section>
  )
}
