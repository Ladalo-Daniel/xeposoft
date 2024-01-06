"use client"

import Image from 'next/image'
import { useEffect, useState } from 'react'

const data = [
  {
    id: 1,
    image: "/images/sup.png"
  },
  {
    id: 2,
    image: "/images/slide2.png"
  },
  {
    id: 3,
    image: "/images/naija.png"
  },
]

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(()=> {
    const interval = setInterval(() => {
     setCurrentSlide(prev => prev === data.length - 1 ? 0 : prev + 1)
    }, 9000)

    return () => clearInterval(interval);
  }, [])

  return (
    <>
        <Image src={data[currentSlide].image} alt='slider' height={1000} width={1000} quality={100} className="w-full md:h-[400px] h-[250px] mx-auto sm:w-10/12  lg:w-full rounded-sm" />
    </>
  )
}
