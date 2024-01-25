"use client"
import React from 'react'
// import { Button } from '../ui/button'
import Slider from '../Slider'
import ButtonGroup from '../homebutton'
import SlideUp from '../Animation'

export default function IntroSection() {

  return(
    <section className="mt-16 mx-auto max-w-screen-xl pb-12 px-4 items-center lg:flex md:px-8">
        <div className="space-y-4 flex-1 sm:text-center lg:text-left">
          <SlideUp>
            <h1 className="dark:text-white text-slate-800 font-bold text-4xl xl:text-5xl">
            Make your Business 
                    <span className="text-yellow-700"> the best it can be</span>
            </h1>
          </SlideUp>
          <SlideUp>
            <p className="dark:text-gray-300 text-slate-900 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
            <strong className=' text-yellow-600'>Welcome to Xeposoft</strong>, we are a software development company that helps you build and develops web and mobile based software applications.
            </p>
          </SlideUp>
          <SlideUp>
            <p className="dark:text-gray-300 text-slate-900 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
            We are trusted by businesses, in that we&apos;ve helped businesses to scale with our software solutions tailored to the business needs.
            </p>
          </SlideUp>
          <SlideUp>
            <div className="pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
                <ButtonGroup />
             </div>
          </SlideUp>
        </div>
        <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3">
          <SlideUp>
           <Slider />
          </SlideUp>
        </div>
        <div className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg" style={{ background: "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)" }}></div>
    </section>
  )
}
