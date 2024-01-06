import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'

function MaxWrapper({ children, className, noOverflow, ...style }: { children: ReactNode, className?: String, noOverflow?: Boolean, style?: any}) 
{
  return (
    <div 
     className={
       cn('md:py-16 p-6 max-w-6xl px-4 min-h-screen h-full mx-auto', 
       className, 
      {
        "common-container": !noOverflow,
      }
     )}
     { ...style}
    >
      {children}
    </div>
  )
}

export default MaxWrapper